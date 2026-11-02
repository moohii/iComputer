import { convertDzdAmount } from "./dzd-to-words.js";

const translations = {
  ar: {
    pageTitle: "تحويل المبالغ بالدينار الجزائري إلى كلمات",
    pageDescription: "اكتب المبلغ بالدينار الجزائري لعرضه بالكلمات بالعربية والفرنسية، مع السنتيمات.",
    backHome: "العودة إلى الرئيسية",
    languageLabel: "لغة الواجهة",
    amountLabel: "المبلغ بالدينار الجزائري",
    amountHelp: "استخدم الأرقام العادية أو العربية. اكتب حتى منزلتين عشريتين للسنتيمات.",
    amountPlaceholder: "مثال: 1250,50",
    convertButton: "تحويل المبلغ",
    clearButton: "مسح",
    resetButton: "إعادة ضبط الأداة",
    resultHeading: "المبلغ كتابةً",
    arabicLabel: "العربية",
    frenchLabel: "Français",
    copyButton: "نسخ النتيجة",
    copied: "تم نسخ النتيجة.",
    copyError: "تعذر نسخ النتيجة. تحقق من صلاحية الحافظة في المتصفح.",
    errors: {
      required: "أدخل مبلغًا للتحويل.",
      negative: "لا تقبل الأداة المبالغ السالبة.",
      precision: "اكتب منزلتين عشريتين كحد أقصى. لم يتم تقريب المبلغ.",
      range: "المبلغ أكبر من الحد المدعوم (999,999,999,999.99 دج).",
      invalid: "أدخل رقمًا صالحًا، دون فواصل للآلاف أو رموز إضافية."
    }
  },
  fr: {
    pageTitle: "Convertir un montant en dinars algériens en lettres",
    pageDescription: "Saisissez un montant en DZD pour afficher son écriture en arabe et en français, centimes compris.",
    backHome: "Retour à l’accueil",
    languageLabel: "Langue de l’interface",
    amountLabel: "Montant en dinars algériens",
    amountHelp: "Utilisez les chiffres occidentaux ou arabes. Deux décimales au maximum pour les centimes.",
    amountPlaceholder: "Exemple : 1250,50",
    convertButton: "Convertir",
    clearButton: "Effacer",
    resetButton: "Réinitialiser l’outil",
    resultHeading: "Montant en toutes lettres",
    arabicLabel: "العربية",
    frenchLabel: "Français",
    copyButton: "Copier le résultat",
    copied: "Résultat copié.",
    copyError: "Impossible de copier le résultat. Vérifiez l’autorisation du presse-papiers.",
    errors: {
      required: "Saisissez un montant à convertir.",
      negative: "Les montants négatifs ne sont pas acceptés.",
      precision: "Deux décimales au maximum. Le montant n’a pas été arrondi.",
      range: "Le montant dépasse la limite prise en charge (999 999 999 999,99 DZD).",
      invalid: "Saisissez un nombre valide, sans séparateur de milliers ni symbole."
    }
  },
  en: {
    pageTitle: "Convert Algerian dinar amounts to words",
    pageDescription: "Enter an amount in DZD to see it written in Arabic and French, including centimes.",
    backHome: "Back to home",
    languageLabel: "Interface language",
    amountLabel: "Amount in Algerian dinars",
    amountHelp: "Use Western or Arabic digits. Enter up to two decimal places for centimes.",
    amountPlaceholder: "Example: 1250.50",
    convertButton: "Convert amount",
    clearButton: "Clear",
    resetButton: "Reset tool",
    resultHeading: "Amount in words",
    arabicLabel: "العربية",
    frenchLabel: "Français",
    copyButton: "Copy result",
    copied: "Result copied.",
    copyError: "Could not copy the result. Check clipboard permission in your browser.",
    errors: {
      required: "Enter an amount to convert.",
      negative: "Negative amounts are not supported.",
      precision: "Use no more than two decimal places. The amount was not rounded.",
      range: "The amount exceeds the supported limit (999,999,999,999.99 DZD).",
      invalid: "Enter a valid number without thousands separators or extra symbols."
    }
  }
};

const form = document.querySelector("#dzd-form");
const input = document.querySelector("#amount-input");
const error = document.querySelector("#amount-error");
const results = document.querySelector("#dzd-results");
const copyError = document.querySelector("#copy-error");
const copyStatus = document.querySelector("#copy-status");
const languageButtons = [...document.querySelectorAll("[data-language]")];
let currentLanguage = "ar";
let latestResult = null;
input.setAttribute("aria-invalid", "false");

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.title = `${translations[language].pageTitle} | iComputer`;
  document.querySelector("[data-language-label]").setAttribute(
    "aria-label",
    translations[language].languageLabel
  );
  document.querySelectorAll("[data-copy]").forEach(element => {
    const key = element.dataset.copy;
    element.textContent = translations[language][key];
  });
  input.placeholder = translations[language].amountPlaceholder;
  languageButtons.forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });
  if (error.dataset.error) {
    error.textContent = translations[language].errors[error.dataset.error];
  }
  copyStatus.textContent = "";
  copyError.hidden = true;
}

function showError(message) {
  error.textContent = message;
  error.hidden = false;
  input.setAttribute("aria-invalid", "true");
}

function clearError() {
  error.textContent = "";
  error.hidden = true;
  delete error.dataset.error;
  input.setAttribute("aria-invalid", "false");
}

function renderAmount() {
  copyError.hidden = true;
  copyStatus.textContent = "";
  if (!input.value.trim()) {
    clearError();
    results.hidden = true;
    latestResult = null;
    return;
  }

  const result = convertDzdAmount(input.value);
  if (!result.valid) {
    error.dataset.error = result.error;
    showError(translations[currentLanguage].errors[result.error]);
    results.hidden = true;
    latestResult = null;
    return;
  }

  clearError();
  latestResult = result;
  document.querySelector("#arabic-amount").textContent = result.displayArabic;
  document.querySelector("#arabic-words").textContent = result.arabic;
  document.querySelector("#french-amount").textContent = result.displayFrench;
  document.querySelector("#french-words").textContent = result.french;
  results.hidden = false;
}

form.addEventListener("submit", event => {
  event.preventDefault();
  if (!input.value.trim()) {
    error.dataset.error = "required";
    showError(translations[currentLanguage].errors.required);
    results.hidden = true;
    latestResult = null;
    input.focus();
    return;
  }
  renderAmount();
});

input.addEventListener("input", renderAmount);
languageButtons.forEach(button => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language);
    renderAmount();
  });
});

document.querySelector("#clear-amount").addEventListener("click", () => {
  input.value = "";
  renderAmount();
  input.focus();
});

document.querySelector("#reset-tool").addEventListener("click", () => {
  input.value = "";
  setLanguage("ar");
  renderAmount();
  input.focus();
});

document.querySelector("#copy-result").addEventListener("click", async () => {
  if (!latestResult) return;
  const copiedText = [
    `${latestResult.displayArabic}: ${latestResult.arabic}`,
    `${latestResult.displayFrench}: ${latestResult.french}`
  ].join("\n");
  copyError.hidden = true;
  copyStatus.textContent = "";
  try {
    await navigator.clipboard.writeText(copiedText);
    copyStatus.textContent = translations[currentLanguage].copied;
  } catch {
    copyError.textContent = translations[currentLanguage].copyError;
    copyError.hidden = false;
  }
});

setLanguage(currentLanguage);
