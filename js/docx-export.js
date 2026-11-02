const encoder = new TextEncoder();
const crcTable = new Uint32Array(256);

for (let index = 0; index < crcTable.length; index += 1) {
  let value = index;
  for (let bit = 0; bit < 8; bit += 1) {
    value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
  }
  crcTable[index] = value >>> 0;
}

function crc32(bytes) {
  let value = 0xffffffff;
  for (const byte of bytes) value = crcTable[(value ^ byte) & 0xff] ^ (value >>> 8);
  return (value ^ 0xffffffff) >>> 0;
}

function concatBytes(chunks) {
  const result = new Uint8Array(chunks.reduce((size, chunk) => size + chunk.length, 0));
  let offset = 0;
  for (const chunk of chunks) {
    result.set(chunk, offset);
    offset += chunk.length;
  }
  return result;
}

function createZip(entries) {
  const localChunks = [];
  const centralChunks = [];
  let localOffset = 0;
  let centralSize = 0;

  entries.forEach(({ name, content }) => {
    const nameBytes = encoder.encode(name);
    const data = typeof content === "string" ? encoder.encode(content) : content;
    const checksum = crc32(data);
    const localHeader = new Uint8Array(30 + nameBytes.length);
    const localView = new DataView(localHeader.buffer);
    localView.setUint32(0, 0x04034b50, true);
    localView.setUint16(4, 20, true);
    localView.setUint16(6, 0x0800, true);
    localView.setUint16(8, 0, true);
    localView.setUint16(10, 0, true);
    localView.setUint16(12, 0x0021, true);
    localView.setUint32(14, checksum, true);
    localView.setUint32(18, data.length, true);
    localView.setUint32(22, data.length, true);
    localView.setUint16(26, nameBytes.length, true);
    localHeader.set(nameBytes, 30);
    localChunks.push(localHeader, data);

    const centralHeader = new Uint8Array(46 + nameBytes.length);
    const centralView = new DataView(centralHeader.buffer);
    centralView.setUint32(0, 0x02014b50, true);
    centralView.setUint16(4, 20, true);
    centralView.setUint16(6, 20, true);
    centralView.setUint16(8, 0x0800, true);
    centralView.setUint16(10, 0, true);
    centralView.setUint16(12, 0, true);
    centralView.setUint16(14, 0x0021, true);
    centralView.setUint32(16, checksum, true);
    centralView.setUint32(20, data.length, true);
    centralView.setUint32(24, data.length, true);
    centralView.setUint16(28, nameBytes.length, true);
    centralView.setUint32(42, localOffset, true);
    centralHeader.set(nameBytes, 46);
    centralChunks.push(centralHeader);

    localOffset += localHeader.length + data.length;
    centralSize += centralHeader.length;
  });

  const endRecord = new Uint8Array(22);
  const endView = new DataView(endRecord.buffer);
  endView.setUint32(0, 0x06054b50, true);
  endView.setUint16(8, entries.length, true);
  endView.setUint16(10, entries.length, true);
  endView.setUint32(12, centralSize, true);
  endView.setUint32(16, localOffset, true);

  return concatBytes([...localChunks, ...centralChunks, endRecord]);
}

function escapeXml(value) {
  return String(value)
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function paragraphXml(part, rtl, language) {
  const paragraphProperties = [
    '<w:jc w:val="center"/>',
    rtl ? "<w:bidi/>" : "",
    `<w:spacing${part.before ? ` w:before="${part.before}"` : ""}${part.after ? ` w:after="${part.after}"` : ""}/>`
  ].filter(Boolean).join("");
  const runProperties = [
    '<w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:eastAsia="Arial" w:cs="Arial"/>',
    part.bold ? "<w:b/><w:bCs/>" : "",
    `<w:sz w:val="${part.size || 24}"/><w:szCs w:val="${part.size || 24}"/>`,
    `<w:lang w:val="${language === "ar" ? "ar-DZ" : "fr-FR"}"/>`,
    rtl ? "<w:rtl/>" : ""
  ].filter(Boolean).join("");
  const runs = String(part.text).split("\n").map((line, index) =>
    `${index ? "<w:br/>" : ""}<w:t xml:space="preserve">${escapeXml(line)}</w:t>`
  ).join("");

  return `<w:p><w:pPr>${paragraphProperties}</w:pPr><w:r><w:rPr>${runProperties}</w:rPr>${runs}</w:r></w:p>`;
}

function imageDimensions(bytes, mimeType) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let dimensions = null;
  if (mimeType === "image/png" && bytes.length >= 24) {
    dimensions = { width: view.getUint32(16), height: view.getUint32(20) };
  }

  if (!dimensions && mimeType === "image/jpeg") {
    let offset = 2;
    while (offset + 9 < bytes.length) {
      if (bytes[offset] !== 0xff) break;
      const marker = bytes[offset + 1];
      const length = view.getUint16(offset + 2);
      if ([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf].includes(marker)) {
        dimensions = {
          height: view.getUint16(offset + 5),
          width: view.getUint16(offset + 7)
        };
        break;
      }
      if (length < 2) break;
      offset += length + 2;
    }
  }

  if (!dimensions || !dimensions.width || !dimensions.height) {
    throw new Error("The selected logo could not be decoded.");
  }
  return dimensions;
}

function imageParagraphXml(image, rtl) {
  const extent = 548640;
  const scale = Math.min(extent / image.width, extent / image.height);
  const width = Math.round(image.width * scale);
  const height = Math.round(image.height * scale);

  return `<w:p><w:pPr><w:jc w:val="center"/>${rtl ? "<w:bidi/>" : ""}<w:spacing w:after="240"/></w:pPr><w:r><w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="${width}" cy="${height}"/><wp:docPr id="1" name="Institution logo"/><a:graphic><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic><pic:nvPicPr><pic:cNvPr id="0" name="Institution logo"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip r:embed="rIdImage"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${width}" cy="${height}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r></w:p>`;
}

export async function buildCoverDocx({ parts, language, logoFile, logoAfter }) {
  const rtl = language === "ar";
  const entries = [
    {
      name: "[Content_Types].xml",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>${logoFile ? `<Default Extension="${logoFile.type === "image/png" ? "png" : "jpg"}" ContentType="${logoFile.type}"/>` : ""}<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/></Types>`
    },
    {
      name: "_rels/.rels",
      content: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/></Relationships>'
    },
    {
      name: "word/_rels/document.xml.rels",
      content: `<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>${logoFile ? `<Relationship Id="rIdImage" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/institution-logo.${logoFile.type === "image/png" ? "png" : "jpg"}"/>` : ""}</Relationships>`
    },
    {
      name: "word/styles.xml",
      content: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:eastAsia="Arial" w:cs="Arial"/></w:rPr></w:rPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style></w:styles>'
    },
    {
      name: "docProps/core.xml",
      content: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:title>iComputer academic cover page</dc:title><dc:creator>iComputer Urban Tech DZ</dc:creator></cp:coreProperties>'
    }
  ];

  const image = logoFile ? new Uint8Array(await logoFile.arrayBuffer()) : null;
  const imageMarkup = image ? imageParagraphXml({
    ...imageDimensions(image, logoFile.type),
    bytes: image
  }, rtl) : "";
  const paragraphMarkup = parts.map(part => paragraphXml(part, rtl, language));
  const insertAt = Number.isInteger(logoAfter)
    ? Math.max(0, Math.min(logoAfter, paragraphMarkup.length))
    : paragraphMarkup.length;
  const contentMarkup = logoFile
    ? `${paragraphMarkup.slice(0, insertAt).join("")}${imageMarkup}${paragraphMarkup.slice(insertAt).join("")}`
    : paragraphMarkup.join("");
  entries.push({
    name: "word/document.xml",
    content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><w:body>${contentMarkup}<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="850" w:right="850" w:bottom="850" w:left="850" w:header="0" w:footer="0" w:gutter="0"/></w:sectPr></w:body></w:document>`
  });
  if (image) entries.push({
    name: `word/media/institution-logo.${logoFile.type === "image/png" ? "png" : "jpg"}`,
    content: image
  });

  const zip = createZip(entries);
  return new Blob([zip], {
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  });
}
