import { buildCoverDocx } from "./docx-export.js";

(() => {
  const copy = {
    ar: {
      pageTitle: "منشئ غلاف المذكرات والتربصات",
      pageDescription: "أدخل بيانات مؤسستك ودراستك لإنشاء غلاف أكاديمي وطباعته أو تنزيله بصيغتي PDF وDOCX.",
      backHome: "العودة إلى الرئيسية",
      interfaceLanguage: "لغة الواجهة",
      formTitle: "بيانات الغلاف",
      privacyNote: "تظل البيانات والصور في متصفحك ولا يتم رفعها إلى الموقع.",
      coverLanguageLabel: "لغة الغلاف",
      institution: "المؤسسة",
      university: "الجامعة",
      faculty: "الكلية أو المعهد",
      department: "القسم",
      program: "التخصص أو التكوين",
      institutionLogo: "شعار المؤسسة (اختياري)",
      logoHelp: "اختر صورة PNG أو JPEG، بحد أقصى 2 ميغابايت.",
      logoTooLarge: "حجم الصورة يتجاوز 2 ميغابايت.",
      logoInvalid: "اختر صورة بصيغة PNG أو JPEG.",
      documentType: "نوع العمل",
      thesis: "مذكرة تخرج",
      internship: "تقرير تربص",
      projectTitle: "عنوان المذكرة أو التقرير",
      studentName: "إعداد الطالب",
      supervisorName: "إشراف الأستاذ",
      academicYear: "السنة الجامعية",
      city: "المدينة",
      institutionPlaceholder: "اسم المؤسسة",
      universityPlaceholder: "اسم الجامعة",
      facultyPlaceholder: "الكلية أو المعهد",
      departmentPlaceholder: "القسم",
      programPlaceholder: "التخصص أو التكوين (اختياري)",
      projectTitlePlaceholder: "عنوان العمل",
      studentPlaceholder: "اسم الطالب",
      supervisorPlaceholder: "اسم الأستاذ المشرف",
      academicYearPlaceholder: "مثال: 2025-2026",
      cityPlaceholder: "المدينة",
      printButton: "طباعة أو حفظ بصيغة PDF",
      printHelp: "في نافذة الطباعة، اختر «حفظ بتنسيق PDF» لتنزيل الملف.",
      docxButton: "تنزيل بصيغة DOCX",
      docxHelp: "ينشئ ملف Word بالتفاصيل الحالية، ويمكنك تعديله بعد التنزيل.",
      docxError: "تعذر إنشاء ملف DOCX. تحقق من الشعار وحاول مرة أخرى.",
      previewTitle: "معاينة الغلاف",
      previewHint: "تتحدث المعاينة عند تعديل البيانات.",
      previewLabel: "معاينة الغلاف",
      country: "الجمهورية الجزائرية الديمقراطية الشعبية",
      preparedBy: "إعداد الطالب",
      supervisedBy: "إشراف الأستاذ",
      emptyInstitution: "اسم المؤسسة",
      emptyUniversity: "اسم الجامعة",
      emptyFaculty: "الكلية أو المعهد",
      emptyDepartment: "القسم",
      emptyProgram: "",
      emptyProjectTitle: "عنوان المذكرة أو التقرير",
      emptyStudentName: "اسم الطالب",
      emptySupervisorName: "اسم الأستاذ المشرف",
      emptyAcademicYear: "السنة الجامعية",
      emptyCity: "المدينة"
    },
    fr: {
      pageTitle: "Générateur de page de garde",
      pageDescription: "Créez une page de garde académique, à imprimer ou à télécharger aux formats PDF et DOCX.",
      backHome: "Retour à l'accueil",
      interfaceLanguage: "Langue de l'interface",
      formTitle: "Informations de la page",
      privacyNote: "Vos données et vos images restent dans votre navigateur.",
      coverLanguageLabel: "Langue de la page",
      institution: "Établissement",
      university: "Université",
      faculty: "Faculté ou institut",
      department: "Département",
      program: "Spécialité ou formation",
      institutionLogo: "Logo de l'établissement (facultatif)",
      logoHelp: "Choisissez une image PNG ou JPEG de 2 Mo maximum.",
      logoTooLarge: "L'image dépasse la limite de 2 Mo.",
      logoInvalid: "Choisissez une image au format PNG ou JPEG.",
      documentType: "Type de travail",
      thesis: "Mémoire de fin d'études",
      internship: "Rapport de stage",
      projectTitle: "Titre du mémoire ou du rapport",
      studentName: "Préparé par",
      supervisorName: "Encadré par",
      academicYear: "Année universitaire",
      city: "Ville",
      institutionPlaceholder: "Nom de l'établissement",
      universityPlaceholder: "Nom de l'université",
      facultyPlaceholder: "Faculté ou institut",
      departmentPlaceholder: "Département",
      programPlaceholder: "Spécialité ou formation (facultatif)",
      projectTitlePlaceholder: "Titre du travail",
      studentPlaceholder: "Nom de l'étudiant",
      supervisorPlaceholder: "Nom de l'encadrant",
      academicYearPlaceholder: "Exemple : 2025-2026",
      cityPlaceholder: "Ville",
      printButton: "Imprimer ou enregistrer en PDF",
      printHelp: "Dans la fenêtre d'impression, choisissez « Enregistrer au format PDF ».",
      docxButton: "Télécharger au format DOCX",
      docxHelp: "Crée un document Word avec les informations saisies, modifiable après le téléchargement.",
      docxError: "Impossible de créer le fichier DOCX. Vérifiez le logo et réessayez.",
      previewTitle: "Aperçu de la page",
      previewHint: "L'aperçu se met à jour pendant la saisie.",
      previewLabel: "Aperçu de la page de garde",
      country: "République algérienne démocratique et populaire",
      preparedBy: "Préparé par",
      supervisedBy: "Encadré par",
      emptyInstitution: "Nom de l'établissement",
      emptyUniversity: "Nom de l'université",
      emptyFaculty: "Faculté ou institut",
      emptyDepartment: "Département",
      emptyProgram: "",
      emptyProjectTitle: "Titre du mémoire ou du rapport",
      emptyStudentName: "Nom de l'étudiant",
      emptySupervisorName: "Nom de l'encadrant",
      emptyAcademicYear: "Année universitaire",
      emptyCity: "Ville"
    },
    en: {
      pageTitle: "Thesis and internship cover generator",
      pageDescription: "Create an academic cover page to print or download in PDF and editable DOCX formats.",
      backHome: "Back to home",
      interfaceLanguage: "Interface language",
      formTitle: "Cover details",
      privacyNote: "Your details and images stay in this browser and are not uploaded.",
      coverLanguageLabel: "Cover language",
      institution: "Institution",
      university: "University",
      faculty: "Faculty or institute",
      department: "Department",
      program: "Program or field",
      institutionLogo: "Institution logo (optional)",
      logoHelp: "Choose a PNG or JPEG image up to 2 MB.",
      logoTooLarge: "The image exceeds the 2 MB limit.",
      logoInvalid: "Choose a PNG or JPEG image.",
      documentType: "Work type",
      thesis: "Graduation thesis",
      internship: "Internship report",
      projectTitle: "Thesis or report title",
      studentName: "Prepared by",
      supervisorName: "Supervised by",
      academicYear: "Academic year",
      city: "City",
      institutionPlaceholder: "Institution name",
      universityPlaceholder: "University name",
      facultyPlaceholder: "Faculty or institute",
      departmentPlaceholder: "Department",
      programPlaceholder: "Program or field (optional)",
      projectTitlePlaceholder: "Work title",
      studentPlaceholder: "Student name",
      supervisorPlaceholder: "Supervisor name",
      academicYearPlaceholder: "Example: 2025-2026",
      cityPlaceholder: "City",
      printButton: "Print or save as PDF",
      printHelp: "In the print dialog, choose “Save as PDF” to download the file.",
      docxButton: "Download as DOCX",
      docxHelp: "Creates an editable Word document with the details you entered.",
      docxError: "The DOCX file could not be created. Check the logo and try again.",
      previewTitle: "Cover preview",
      previewHint: "The preview updates as you enter details.",
      previewLabel: "Cover page preview",
      country: "People's Democratic Republic of Algeria",
      preparedBy: "Prepared by",
      supervisedBy: "Supervised by",
      emptyInstitution: "Institution name",
      emptyUniversity: "University name",
      emptyFaculty: "Faculty or institute",
      emptyDepartment: "Department",
      emptyProgram: "",
      emptyProjectTitle: "Thesis or report title",
      emptyStudentName: "Student name",
      emptySupervisorName: "Supervisor name",
      emptyAcademicYear: "Academic year",
      emptyCity: "City"
    }
  };

  const form = document.getElementById("cover-form");
  const preview = document.getElementById("cover-preview");
  const coverLanguage = document.getElementById("cover-language");
  const documentType = document.getElementById("document-type");
  const logoInput = document.getElementById("institution-logo");
  const logoPreview = document.querySelector('[data-preview="institutionLogo"]');
  const logoError = document.getElementById("logo-error");
  const downloadDocxButton = document.getElementById("download-docx");
  const docxError = document.getElementById("docx-error");
  const languageButtons = document.querySelectorAll("[data-cover-language]");
  if (!form || !preview || !coverLanguage || !documentType || !logoInput || !logoPreview || !logoError ||
    !downloadDocxButton || !docxError) return;

  const fields = {
    institution: document.getElementById("institution"),
    university: document.getElementById("university"),
    faculty: document.getElementById("faculty"),
    department: document.getElementById("department"),
    program: document.getElementById("program"),
    projectTitle: document.getElementById("project-title"),
    studentName: document.getElementById("student-name"),
    supervisorName: document.getElementById("supervisor-name"),
    academicYear: document.getElementById("academic-year"),
    city: document.getElementById("city")
  };
  let logoObjectUrl = "";
  let logoErrorKey = "";
  let docxErrorKey = false;

  const translate = (language) => {
    const messages = copy[language] || copy.ar;
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-copy]").forEach(element => {
      const key = element.dataset.copy;
      if (messages[key] !== undefined) element.textContent = messages[key];
    });

    document.querySelectorAll("[data-placeholder]").forEach(element => {
      const key = element.dataset.placeholder;
      if (messages[key] !== undefined) element.placeholder = messages[key];
    });

    document.querySelector("[data-cover-language-label]").setAttribute(
      "aria-label",
      messages.interfaceLanguage
    );
    logoError.textContent = logoErrorKey ? messages[logoErrorKey] : "";
    logoError.hidden = !logoErrorKey;
    docxError.textContent = docxErrorKey ? messages.docxError : "";
    docxError.hidden = !docxErrorKey;

    languageButtons.forEach(button => {
      const active = button.dataset.coverLanguage === language;
      button.setAttribute("aria-pressed", String(active));
    });

    preview.setAttribute("aria-label", messages.previewLabel);
    document.title = `${messages.pageTitle} | iComputer Urban Tech DZ`;
    updatePreview();
  };

  function updatePreview() {
    const language = coverLanguage.value;
    const messages = copy[language] || copy.ar;
    preview.lang = language;
    preview.dir = language === "ar" ? "rtl" : "ltr";

    preview.querySelector('[data-preview="country"]').textContent = messages.country;
    logoPreview.alt = fields.university.value.trim() || fields.institution.value.trim() || messages.university;
    logoPreview.hidden = !logoObjectUrl;
    preview.querySelectorAll("[data-cover-copy]").forEach(element => {
      element.textContent = messages[element.dataset.coverCopy];
    });
    Object.entries(fields).forEach(([name, field]) => {
      const output = preview.querySelector(`[data-preview="${name}"]`);
      if (!output) return;
      const value = field.value.trim();
      output.textContent = value || messages[`empty${name[0].toUpperCase()}${name.slice(1)}`] || "";
      output.classList.toggle("is-placeholder", !value);
      if (name === "program") output.hidden = !value;
    });

    const typeLabel = documentType.value === "internship" ? "internship" : "thesis";
    preview.querySelector('[data-preview="documentType"]').textContent = messages[typeLabel];
  }

  languageButtons.forEach(button => {
    button.addEventListener("click", () => translate(button.dataset.coverLanguage));
  });

  form.addEventListener("input", updatePreview);
  form.addEventListener("change", updatePreview);
  logoInput.addEventListener("change", () => {
    const file = logoInput.files && logoInput.files[0];
    logoErrorKey = "";

    if (!file) {
      if (logoObjectUrl) URL.revokeObjectURL(logoObjectUrl);
      logoObjectUrl = "";
      logoPreview.removeAttribute("src");
      updatePreview();
      translate(document.documentElement.lang);
      return;
    }

    if (file.size > 2 * 1024 * 1024 || !["image/png", "image/jpeg"].includes(file.type)) {
      logoErrorKey = file.size > 2 * 1024 * 1024 ? "logoTooLarge" : "logoInvalid";
      logoInput.value = "";
      if (logoObjectUrl) URL.revokeObjectURL(logoObjectUrl);
      logoObjectUrl = "";
      logoPreview.removeAttribute("src");
      updatePreview();
      translate(document.documentElement.lang);
      return;
    }

    if (logoObjectUrl) URL.revokeObjectURL(logoObjectUrl);
    logoObjectUrl = URL.createObjectURL(file);
    logoPreview.src = logoObjectUrl;
    logoError.hidden = true;
    updatePreview();
  });

  window.addEventListener("beforeunload", () => {
    if (logoObjectUrl) URL.revokeObjectURL(logoObjectUrl);
  });
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    window.print();
  });

  downloadDocxButton.addEventListener("click", async () => {
    docxErrorKey = false;
    docxError.hidden = true;
    if (!form.reportValidity()) return;

    try {
      const language = coverLanguage.value;
      const messages = copy[language] || copy.ar;
      const parts = [
        { text: messages.country, size: 22, bold: true, after: 120 },
        { text: fields.institution.value.trim(), size: 28, bold: true, after: 100 },
        { text: fields.university.value.trim(), size: 26, after: 80 },
        { text: fields.faculty.value.trim(), size: 24, after: 80 },
        { text: fields.department.value.trim(), size: 24 }
      ];

      if (fields.program.value.trim()) {
        parts.push({ text: fields.program.value.trim(), size: 22 });
      }

      const logoAfter = parts.length;
      parts.push(
        { text: messages[documentType.value === "internship" ? "internship" : "thesis"], size: 28, bold: true, before: 1500, after: 160 },
        { text: fields.projectTitle.value.trim(), size: 40, bold: true, after: 1400 },
        { text: messages.preparedBy, size: 22, after: 80 },
        { text: fields.studentName.value.trim(), size: 26, bold: true, after: 550 },
        { text: messages.supervisedBy, size: 22, after: 80 },
        { text: fields.supervisorName.value.trim(), size: 26, bold: true, after: 1700 },
        { text: `${fields.city.value.trim()}  |  ${fields.academicYear.value.trim()}`, size: 22, bold: true }
      );

      const blob = await buildCoverDocx({
        parts,
        language,
        logoFile: logoInput.files && logoInput.files[0],
        logoAfter
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "icomputer-cover-page.docx";
      document.body.append(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (error) {
      console.error("Unable to create the DOCX cover.", error);
      docxErrorKey = true;
      const messages = copy[document.documentElement.lang] || copy.ar;
      docxError.textContent = messages.docxError;
      docxError.hidden = false;
    }
  });

  let initialLanguage = "ar";
  try {
    const savedLanguage = localStorage.getItem("lang");
    if (copy[savedLanguage]) initialLanguage = savedLanguage;
  } catch (error) {
    console.warn("Unable to read the saved interface language.", error);
  }

  translate(initialLanguage);
})();
