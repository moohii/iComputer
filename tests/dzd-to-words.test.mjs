import assert from "node:assert/strict";
import test from "node:test";
import {
  convertDzdAmount,
  numberToArabicWords,
  numberToFrenchWords,
  parseDzdAmount
} from "../js/dzd-to-words.js";

test("parses valid whole and decimal amounts without floating-point conversion", () => {
  const validCases = [
    ["0", 0n, 0n],
    ["1", 1n, 0n],
    ["1.5", 1n, 50n],
    ["1,05", 1n, 5n],
    [".5", 0n, 50n],
    [",05", 0n, 5n],
    ["999999999999.99", 999999999999n, 99n],
    ["٩٩٫٩٩", 99n, 99n],
    ["۱۲۳٫۴۵", 123n, 45n],
    [" 0012,30 ", 12n, 30n]
  ];

  for (const [input, dinars, centimes] of validCases) {
    const result = parseDzdAmount(input);
    assert.equal(result.valid, true, input);
    assert.equal(result.dinars, dinars, input);
    assert.equal(result.centimes, centimes, input);
  }
});

test("rejects empty, negative, malformed, grouped, exponent, and over-precise values", () => {
  const invalidCases = [
    ["", "required"],
    ["   ", "required"],
    ["-1", "negative"],
    ["−1", "negative"],
    ["－1", "negative"],
    ["+1", "invalid"],
    ["1.", "invalid"],
    ["1,234", "precision"],
    ["1.2345", "precision"],
    ["1,2,3", "invalid"],
    ["1 000", "invalid"],
    ["1,000.00", "invalid"],
    ["1e3", "invalid"],
    ["NaN", "invalid"],
    ["1 دج", "invalid"]
  ];

  for (const [input, expectedError] of invalidCases) {
    assert.deepEqual(parseDzdAmount(input), { valid: false, error: expectedError }, input);
  }
});

test("enforces the supported range without truncating or rounding", () => {
  assert.equal(parseDzdAmount("999999999999.99").valid, true);
  assert.deepEqual(parseDzdAmount("1000000000000"), { valid: false, error: "range" });
  assert.deepEqual(parseDzdAmount("999999999999.999"), { valid: false, error: "precision" });
  assert.deepEqual(parseDzdAmount("0.001"), { valid: false, error: "precision" });
});

test("formats Arabic integer number names through billions", () => {
  const cases = [
    [0, "صفر"],
    [1, "واحد"],
    [2, "اثنان"],
    [10, "عشرة"],
    [11, "أحد عشر"],
    [12, "اثنا عشر"],
    [20, "عشرون"],
    [21, "واحد وعشرون"],
    [99, "تسعة وتسعون"],
    [100, "مائة"],
    [200, "مائتان"],
    [101, "مائة وواحد"],
    [999, "تسعمائة وتسعة وتسعون"],
    [1000, "ألف"],
    [11000, "أحد عشر ألفًا"],
    [1000000, "مليون"],
    [1000000000, "مليار"]
  ];

  for (const [value, expected] of cases) {
    assert.equal(numberToArabicWords(BigInt(value)), expected, String(value));
  }
});

test("formats French integer number names, including irregular tens and scales", () => {
  const cases = [
    [0, "zéro"],
    [1, "un"],
    [16, "seize"],
    [17, "dix-sept"],
    [21, "vingt et un"],
    [31, "trente et un"],
    [70, "soixante-dix"],
    [71, "soixante et onze"],
    [79, "soixante-dix-neuf"],
    [80, "quatre-vingts"],
    [81, "quatre-vingt-un"],
    [91, "quatre-vingt-onze"],
    [99, "quatre-vingt-dix-neuf"],
    [100, "cent"],
    [200, "deux cents"],
    [201, "deux cent un"],
    [999, "neuf cent quatre-vingt-dix-neuf"],
    [1000, "mille"],
    [200000, "deux cent mille"],
    [80000, "quatre-vingt mille"],
    [1000000, "un million"],
    [2000000, "deux millions"],
    [1000000000, "un milliard"]
  ];

  for (const [value, expected] of cases) {
    assert.equal(numberToFrenchWords(BigInt(value)), expected, String(value));
  }
});

test("covers every amount from zero through 999 with nonempty Arabic and French output", () => {
  for (let amount = 0; amount <= 999; amount += 1) {
    const result = convertDzdAmount(String(amount));
    assert.equal(result.valid, true, String(amount));
    assert.ok(result.arabic.length > 0, `Arabic output missing for ${amount}`);
    assert.ok(result.french.length > 0, `French output missing for ${amount}`);
  }
});

test("uses appropriate Arabic dinar forms and scale agreement", () => {
  const cases = [
    ["0", "صفر دينار جزائري"],
    ["1", "دينار جزائري واحد"],
    ["2", "ديناران جزائريان"],
    ["3", "ثلاثة دنانير جزائرية"],
    ["10", "عشرة دنانير جزائرية"],
    ["11", "أحد عشر دينارًا جزائريًا"],
    ["21", "واحد وعشرون دينارًا جزائريًا"],
    ["100", "مائة دينار جزائري"],
    ["1000", "ألف دينار جزائري"],
    ["2000", "ألفا دينار جزائري"],
    ["11000", "أحد عشر ألف دينار جزائري"],
    ["200000", "مائتا ألف دينار جزائري"],
    ["1000000", "مليون دينار جزائري"],
    ["1000000000", "مليار دينار جزائري"]
  ];

  for (const [input, expectedArabic] of cases) {
    assert.equal(convertDzdAmount(input).arabic, expectedArabic, input);
  }
});

test("uses singular and plural French currency forms and scale constructions", () => {
  const cases = [
    ["0", "zéro dinar algérien"],
    ["1", "un dinar algérien"],
    ["2", "deux dinars algériens"],
    ["1000", "mille dinars algériens"],
    ["1000000", "un million de dinars algériens"],
    ["2000000", "deux millions de dinars algériens"]
  ];

  for (const [input, expectedFrench] of cases) {
    assert.equal(convertDzdAmount(input).french, expectedFrench, input);
  }
});

test("converts centimes in both languages and keeps the entered precision", () => {
  const cases = [
    ["0.01", "سنتيم واحد", "un centime", "٠٫٠١ دج", "0,01 DZD"],
    ["0.02", "سنتيمان", "deux centimes", "٠٫٠٢ دج", "0,02 DZD"],
    ["0.03", "ثلاثة سنتيمات", "trois centimes", "٠٫٠٣ دج", "0,03 DZD"],
    ["0.11", "أحد عشر سنتيمًا", "onze centimes", "٠٫١١ دج", "0,11 DZD"],
    ["1.5", "دينار جزائري واحد وخمسون سنتيمًا", "un dinar algérien et cinquante centimes", "١٫٥ دج", "1,5 DZD"],
    ["12,30", "اثنا عشر دينارًا جزائريًا وثلاثون سنتيمًا", "douze dinars algériens et trente centimes", "١٢٫٣٠ دج", "12,30 DZD"]
  ];

  for (const [input, arabic, french, displayArabic, displayFrench] of cases) {
    const result = convertDzdAmount(input);
    assert.equal(result.valid, true, input);
    assert.equal(result.arabic, arabic, input);
    assert.equal(result.french, french, input);
    assert.equal(result.displayArabic, displayArabic, input);
    assert.equal(result.displayFrench, displayFrench, input);
  }
});

test("omits zero dinars or centimes only when their words are not needed", () => {
  assert.equal(convertDzdAmount("0.25").arabic, "خمسة وعشرون سنتيمًا");
  assert.equal(convertDzdAmount("1.00").arabic, "دينار جزائري واحد");
  assert.equal(convertDzdAmount("1.00").french, "un dinar algérien");
  assert.equal(convertDzdAmount("0").french, "zéro dinar algérien");
});

test("converts the maximum supported amount without precision loss", () => {
  const result = convertDzdAmount("999999999999.99");
  assert.equal(result.valid, true);
  assert.equal(result.displayArabic, "٩٩٩٬٩٩٩٬٩٩٩٬٩٩٩٫٩٩ دج");
  assert.equal(result.displayFrench, "999 999 999 999,99 DZD");
  assert.ok(result.arabic.endsWith("تسعة وتسعون سنتيمًا"));
  assert.ok(result.french.endsWith("quatre-vingt-dix-neuf centimes"));
});
