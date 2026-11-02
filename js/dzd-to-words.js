const MAX_DINARS = 999_999_999_999n;

const arabicUnits = [
  "صفر", "واحد", "اثنان", "ثلاثة", "أربعة", "خمسة", "ستة", "سبعة", "ثمانية", "تسعة",
  "عشرة", "أحد عشر", "اثنا عشر", "ثلاثة عشر", "أربعة عشر", "خمسة عشر", "ستة عشر",
  "سبعة عشر", "ثمانية عشر", "تسعة عشر"
];
const arabicTens = [
  "", "", "عشرون", "ثلاثون", "أربعون", "خمسون", "ستون", "سبعون", "ثمانون", "تسعون"
];
const arabicHundreds = [
  "", "مائة", "مائتان", "ثلاثمائة", "أربعمائة", "خمسمائة",
  "ستمائة", "سبعمائة", "ثمانمائة", "تسعمائة"
];
const frenchUnits = [
  "zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf",
  "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize"
];
const frenchTens = [
  "", "", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante",
  "quatre-vingt", "quatre-vingt"
];
const scales = [
  { ar: ["", "", ""], fr: "" },
  { ar: ["ألف", "ألفان", "آلاف", "ألفًا"], fr: "mille" },
  { ar: ["مليون", "مليونان", "ملايين", "مليونًا"], fr: "million" },
  { ar: ["مليار", "ملياران", "مليارات", "مليارًا"], fr: "milliard" }
];

const arabicDigitMap = new Map([
  ...Array.from("٠١٢٣٤٥٦٧٨٩", (digit, index) => [digit, String(index)]),
  ...Array.from("۰۱۲۳۴۵۶۷۸۹", (digit, index) => [digit, String(index)])
]);

function normalizeDigits(value) {
  return Array.from(value, character => arabicDigitMap.get(character) || character).join("");
}

export function parseDzdAmount(input) {
  const raw = normalizeDigits(String(input)).trim();
  if (!raw) return { valid: false, error: "required" };
  if (/^[-−﹣－]/u.test(raw)) return { valid: false, error: "negative" };

  const normalized = raw.replace("٫", ".");
  if (!/^(?:\d+(?:[.,]\d{1,2})?|[.,]\d{1,2})$/u.test(normalized)) {
    return {
      valid: false,
      error: /[.,]\d{3,}$/u.test(normalized) ? "precision" : "invalid"
    };
  }

  const [wholeTextRaw, fractionText = ""] = normalized.replace(",", ".").split(".");
  const wholeText = wholeTextRaw || "0";
  const dinars = BigInt(wholeText);
  if (dinars > MAX_DINARS) return { valid: false, error: "range" };

  const centimes = BigInt((fractionText + "00").slice(0, 2));
  return {
    valid: true,
    dinars,
    centimes,
    fractionDigits: fractionText.length,
    normalizedInteger: dinars.toString(),
    normalizedFraction: fractionText
  };
}

function arabicUnderThousand(value) {
  const parts = [];
  const hundreds = Math.floor(value / 100);
  const remainder = value % 100;
  if (hundreds) parts.push(arabicHundreds[hundreds]);
  if (remainder >= 1 && remainder <= 19) {
    parts.push(arabicUnits[remainder]);
  } else if (remainder >= 20) {
    const units = remainder % 10;
    parts.push(units ? `${arabicUnits[units]} و${arabicTens[Math.floor(remainder / 10)]}` : arabicTens[remainder / 10]);
  }
  return parts.join(" و");
}

function arabicScaleWords(value, scaleIndex) {
  const [singular, dual, plural, accusative] = scales[scaleIndex].ar;
  if (value === 1) return singular;
  if (value === 2) return dual;
  const words = arabicUnderThousand(value);
  if (value <= 10) return `${words} ${plural}`;
  if (value < 100) return `${words} ${accusative}`;
  return `${words} ${singular}`;
}

export function numberToArabicWords(value) {
  let remainder = BigInt(value);
  if (remainder === 0n) return arabicUnits[0];

  const groups = [];
  for (let scaleIndex = scales.length - 1; scaleIndex >= 0; scaleIndex -= 1) {
    const group = Number(remainder / (1000n ** BigInt(scaleIndex)) % 1000n);
    if (!group) continue;
    groups.push(scaleIndex === 0 ? arabicUnderThousand(group) : arabicScaleWords(group, scaleIndex));
  }
  return groups.join(" و");
}

function frenchUnderHundred(value) {
  if (value <= 16) return frenchUnits[value];
  if (value < 20) return `dix-${frenchUnits[value - 10]}`;
  if (value < 70) {
    const tens = Math.floor(value / 10);
    const units = value % 10;
    if (units === 1) return `${frenchTens[tens]} et un`;
    return units ? `${frenchTens[tens]}-${frenchUnits[units]}` : frenchTens[tens];
  }
  if (value < 80) {
    const remainder = value - 60;
    return remainder === 11
      ? "soixante et onze"
      : `soixante-${remainder === 10 ? "dix" : frenchUnderHundred(remainder)}`;
  }

  const remainder = value - 80;
  if (remainder === 0) return "quatre-vingts";
  return `quatre-vingt-${frenchUnderHundred(remainder)}`;
}

function frenchUnderThousand(value) {
  const hundreds = Math.floor(value / 100);
  const remainder = value % 100;
  let prefix = "";
  if (hundreds === 1) prefix = "cent";
  else if (hundreds > 1) prefix = `${frenchUnits[hundreds]} cent${remainder === 0 ? "s" : ""}`;
  if (!remainder) return prefix;
  return prefix ? `${prefix} ${frenchUnderHundred(remainder)}` : frenchUnderHundred(remainder);
}

function getGroups(value) {
  let remainder = BigInt(value);
  const groups = [];
  for (let scaleIndex = scales.length - 1; scaleIndex >= 0; scaleIndex -= 1) {
    groups[scaleIndex] = Number(remainder / (1000n ** BigInt(scaleIndex)) % 1000n);
  }
  return groups;
}

export function numberToFrenchWords(value) {
  const groups = getGroups(value);
  if (groups.every(group => group === 0)) return frenchUnits[0];

  const words = [];
  for (let scaleIndex = groups.length - 1; scaleIndex >= 0; scaleIndex -= 1) {
    const group = groups[scaleIndex];
    if (!group) continue;
    if (scaleIndex === 1) {
      const thousands = frenchUnderThousand(group)
        .replace(/ cents$/u, " cent")
        .replace(/quatre-vingts$/u, "quatre-vingt");
      words.push(group === 1 ? "mille" : `${thousands} mille`);
    } else if (scaleIndex === 0) {
      words.push(frenchUnderThousand(group));
    } else {
      words.push(`${frenchUnderThousand(group)} ${scales[scaleIndex].fr}${group > 1 ? "s" : ""}`);
    }
  }
  return words.join(" ");
}

function arabicDinarUnitPhrase(dinars) {
  if (dinars === 1n) return "دينار جزائري واحد";
  if (dinars === 2n) return "ديناران جزائريان";
  if (dinars >= 3n && dinars <= 10n) return `${numberToArabicWords(dinars)} دنانير جزائرية`;
  if (dinars === 0n) return "صفر دينار جزائري";
  if (dinars < 100n) return `${numberToArabicWords(dinars)} دينارًا جزائريًا`;
  return `${numberToArabicWords(dinars)} دينار جزائري`;
}

function arabicScaleCurrencyWords(value, scaleIndex) {
  const [singular, dual, plural, accusative] = scales[scaleIndex].ar;
  if (value === 1) return singular;
  if (value === 2) return dual.replace(/ان$/u, "ا");
  if (value <= 10) return `${numberToArabicWords(BigInt(value))} ${plural}`;
  if (value < 100) {
    return `${numberToArabicWords(BigInt(value))} ${accusative.replace(/ًا$/u, "")}`;
  }
  return `${numberToArabicWords(BigInt(value)).replace("مائتان", "مائتا")} ${singular}`;
}

function arabicDinarPhrase(dinars) {
  if (dinars < 1000n) return arabicDinarUnitPhrase(dinars);
  const groups = getGroups(dinars);
  const parts = [];
  for (let scaleIndex = groups.length - 1; scaleIndex >= 0; scaleIndex -= 1) {
    const group = groups[scaleIndex];
    if (!group) continue;
    if (scaleIndex === 0) {
      parts.push(arabicDinarUnitPhrase(BigInt(group)));
      continue;
    }

    const hasSmallerGroup = groups.slice(0, scaleIndex).some(smallerGroup => smallerGroup > 0);
    if (hasSmallerGroup) {
      parts.push(arabicScaleWords(group, scaleIndex));
    } else {
      parts.push(`${arabicScaleCurrencyWords(group, scaleIndex)} دينار جزائري`);
      return parts.join(" و");
    }
  }

  const lastPart = parts.pop();
  return parts.length ? `${parts.join(" و")} و${lastPart}` : lastPart;
}

function arabicCentimePhrase(centimes) {
  if (centimes === 1n) return "سنتيم واحد";
  if (centimes === 2n) return "سنتيمان";
  if (centimes <= 10n) return `${numberToArabicWords(centimes)} سنتيمات`;
  return centimes < 100n
    ? `${numberToArabicWords(centimes)} سنتيمًا`
    : `${numberToArabicWords(centimes)} سنتيم`;
}

function frenchDinarPhrase(dinars) {
  const unit = dinars <= 1n ? "dinar algérien" : "dinars algériens";
  const currencyPrefix = dinars >= 1_000_000n && dinars % 1_000_000n === 0n ? " de" : "";
  return `${numberToFrenchWords(dinars)}${currencyPrefix} ${unit}`;
}

function frenchCentimePhrase(centimes) {
  return `${numberToFrenchWords(centimes)} ${centimes === 1n ? "centime" : "centimes"}`;
}

function formatAmount(amount, language) {
  const grouped = amount.normalizedInteger.replace(/\B(?=(\d{3})+(?!\d))/gu, language === "ar" ? "٬" : "\u202f");
  const digits = language === "ar"
    ? grouped.replace(/\d/gu, digit => "٠١٢٣٤٥٦٧٨٩"[Number(digit)])
    : grouped;
  const fraction = amount.normalizedFraction
    ? `${language === "ar" ? "٫" : ","}${language === "ar"
      ? amount.normalizedFraction.replace(/\d/gu, digit => "٠١٢٣٤٥٦٧٨٩"[Number(digit)])
      : amount.normalizedFraction}`
    : "";
  return `${digits}${fraction} ${language === "ar" ? "دج" : "DZD"}`;
}

export function convertDzdAmount(input) {
  const amount = parseDzdAmount(input);
  if (!amount.valid) return amount;

  const arParts = [];
  const frParts = [];
  if (amount.dinars > 0n || amount.centimes === 0n) {
    arParts.push(arabicDinarPhrase(amount.dinars));
    frParts.push(frenchDinarPhrase(amount.dinars));
  }
  if (amount.centimes > 0n) {
    arParts.push(arabicCentimePhrase(amount.centimes));
    frParts.push(frenchCentimePhrase(amount.centimes));
  }

  return {
    ...amount,
    arabic: arParts.join(" و"),
    french: frParts.join(" et "),
    displayArabic: formatAmount(amount, "ar"),
    displayFrench: formatAmount(amount, "fr")
  };
}
