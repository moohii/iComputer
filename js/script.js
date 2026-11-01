/* ==========================================================================
   iComputer Urban Tech DZ — Site behaviour
   Language switch, icon system, navigation, theme labels, reveal.
   ========================================================================== */

/* --------------------------------------------------------------------------
   Icon sprite
   -------------------------------------------------------------------------- */

const ICON_SYMBOLS = {
  "i-arrow-right": '<path d="M5 12h14M13 6l6 6-6 6"/>',
  "i-arrow-up-right": '<path d="M7 17 17 7M8 7h9v9"/>',
  "i-check": '<path d="M20 6 9 17l-5-5"/>',
  "i-monitor":
    '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
  "i-wrench":
    '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  "i-windows":
    '<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/>',
  "i-network":
    '<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M12 7.5v4M10.5 11.5 6.5 16.8M13.5 11.5l4 5.3"/>',
  "i-printer":
    '<path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="7" rx="1"/>',
  "i-laptop":
    '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/>',
  "i-shield":
    '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  "i-graduation":
    '<path d="m22 10-10-5L2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>',
  "i-chart":
    '<path d="M3 3v18h18"/><path d="M7 15v3M12 9v9M17 12v6"/>',
  "i-scale":
    '<path d="M12 3v18M5 7h14M7 7l-3 6h6L7 7ZM17 7l-3 6h6l-3-6Z"/><path d="M8 21h8"/>',
  "i-file-text":
    '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/>',
  "i-ruler":
    '<path d="m3 17 14-14 4 4L7 21l-4-4Z"/><path d="M7 13l2 2M10 10l2 2M13 7l2 2"/>',
  "i-building":
    '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
  "i-briefcase":
    '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  "i-folder":
    '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
  "i-link":
    '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  "i-clock":
    '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  "i-wifi":
    '<path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/>',
  "i-map-pin":
    '<path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/>',
  "i-calendar":
    '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  "i-zap": '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/>',
  "i-sun":
    '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/>',
  "i-moon": '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/>',
  "i-menu": '<path d="M4 7h16M4 12h16M4 17h16"/>',
  "i-close": '<path d="M18 6 6 18M6 6l12 12"/>',
  "i-database":
    '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  "i-lock":
    '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  "i-message":
    '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.9-.9L3 21l1.9-4.6A8.4 8.4 0 1 1 21 11.5Z"/>',
  "i-whatsapp":
    '<path fill="currentColor" stroke="none" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.05-.52-.1-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.69.62.72.23 1.36.2 1.88.12.57-.09 1.76-.72 2-1.42.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.89-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.88 9.89m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L0 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.9 0-3.17-1.24-6.16-3.49-8.4"/>',
  "i-facebook":
    '<path fill="currentColor" stroke="none" d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12"/>',
  "i-instagram":
    '<rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1"/>',
  "i-tiktok":
    '<path fill="currentColor" stroke="none" d="M16.5 3c.3 2.3 1.6 4.1 3.9 4.4v3c-1.5 0-2.9-.5-3.9-1.3v6.2c0 3.2-2.4 5.7-5.6 5.7S5.3 18.5 5.3 15.3c0-3 2.3-5.4 5.3-5.5v3.1c-1.3.1-2.3 1.1-2.3 2.4 0 1.3 1 2.4 2.4 2.4s2.4-1.1 2.4-2.4V3h3.4Z"/>'
};

const EMOJI_ICONS = {
  "💬": "i-whatsapp",
  "💼": "i-briefcase",
  "🖥": "i-monitor",
  "💻": "i-laptop",
  "🌐": "i-network",
  "🖨": "i-printer",
  "⚡": "i-zap",
  "🛡": "i-shield",
  "🔒": "i-lock",
  "🎓": "i-graduation",
  "📊": "i-chart",
  "⚖": "i-scale",
  "📜": "i-file-text",
  "📐": "i-ruler",
  "🏢": "i-building",
  "📁": "i-folder",
  "🔗": "i-link",
  "⏳": "i-clock",
  "⌛": "i-clock",
  "📶": "i-wifi",
  "📍": "i-map-pin",
  "📅": "i-calendar",
  "🗄": "i-database",
  "📘": "i-facebook",
  "📷": "i-instagram",
  "🎵": "i-tiktok",
  "☼": "i-sun",
  "☾": "i-moon",
  "☰": "i-menu",
  "✓": "i-check",
  "✔": "i-check"
};

const ICON_TARGETS = [
  ".card-icon",
  ".sector-icon",
  ".pillar-icon",
  ".problem-icon",
  ".why-check",
  ".badge-icon",
  ".btn-icon",
  ".nav-wa-btn span:first-child",
  ".floating-whatsapp span",
  ".footer-social-link",
  ".timeline-num:not(:empty)",
  ".about-experience-badge .exp-num",
  ".contact-info li > span:first-child"
];

function iconMarkup(name, extraClass = "") {
  return `<svg class="icon icon--brandless ${extraClass}" aria-hidden="true" focusable="false"><use href="#${name}"></use></svg>`;
}

function injectIconSprite() {
  if (document.getElementById("ic-icon-sprite")) return;
  const sprite = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  sprite.id = "ic-icon-sprite";
  sprite.setAttribute("aria-hidden", "true");
  sprite.setAttribute("focusable", "false");
  sprite.style.cssText = "position:absolute;width:0;height:0;overflow:hidden";
  sprite.innerHTML =
    "<defs>" +
    Object.entries(ICON_SYMBOLS)
      .map(([id, path]) => `<symbol id="${id}" viewBox="0 0 24 24">${path}</symbol>`)
      .join("") +
    "</defs>";
  document.body.insertBefore(sprite, document.body.firstChild);
}

function replaceEmojiIcons(root = document) {
  root.querySelectorAll(ICON_TARGETS.join(",")).forEach(el => {
    if (el.querySelector("svg")) return;
    const text = (el.textContent || "").replace(/\uFE0F/g, "").trim();
    if (!text || text.length > 2) return;
    const iconName = EMOJI_ICONS[text];
    if (!iconName) return;
    el.innerHTML = `<svg class="icon" aria-hidden="true" focusable="false"><use href="#${iconName}"></use></svg>`;
  });
}

/* --------------------------------------------------------------------------
   Translations
   -------------------------------------------------------------------------- */

const translations = {
  ar: {
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.solutions": "حلول المكاتب",
    "nav.sectors": "القطاعات",
    "nav.about": "من نحن",
    "nav.knowledge": "المعرفة",
    "nav.booking": "طلب خدمة",
    "nav.whatsapp": "واتساب",
    "nav.menuOpen": "فتح القائمة",
    "nav.menuClose": "إغلاق القائمة",
    "theme.toLight": "التبديل إلى الوضع الفاتح",
    "theme.toDark": "التبديل إلى الوضع الداكن",
    "wa.message":
      "مرحبًا iComputer، أرغب في الاستفسار عن دعم تقني لمكتبي في الجزائر العاصمة.",

    "hero.eyebrow": "الجزائر العاصمة · دعم تقني للمكاتب والأفراد",
    "hero.title1": "دعم تقني لمكتبك",
    "hero.title2": "بلا توقف.",
    "hero.sub":
      "صيانة الحواسيب، تثبيت Windows، الشبكات والطابعات، والنسخ الاحتياطي — بزيارة ميدانية أو عن بُعد، في الجزائر العاصمة.",
    "hero.cta1": "اطلب دعماً عبر WhatsApp",
    "hero.cta2": "استعرض الخدمات",
    "hero.meta1": "بدون عقد إلزامي",
    "hero.meta2": "ميداني أو عن بُعد",
    "hero.meta3": "تنسيق مباشر عبر WhatsApp",
    "hero.frame.status": "حسب التوفر",
    "hero.overlay.title": "مكتبك جاهز للعمل",
    "hero.overlay.text": "تشخيص، إصلاح، وضبط للأجهزة والشبكات والطابعات.",
    "hero.chip1": "Windows",
    "hero.chip2": "الشبكة",
    "hero.chip3": "الطابعات",
    "hero.chip4": "النسخ الاحتياطي",
    "hero.dash.title": "حالة مكتبك",
    "hero.dash.sub": "فحص سريع · الجزائر العاصمة",
    "hero.dash.online": "متصل",
    "hero.dash.row1": "أجهزة المكتب",
    "hero.dash.row2": "الشبكة",
    "hero.dash.row3": "النسخ الاحتياطي",
    "hero.dash.ok": "سليم",
    "hero.dash.ticket": "تم حل مشكلة الطابعة",
    "hero.dash.ticketmeta": "آخر تدخل · 18 دقيقة",

    "trust.1": "مكاتب ومؤسسات صغيرة",
    "trust.2": "حلول عملية بدون تعقيد",
    "trust.3": "بدون التزامات طويلة",
    "trust.4": "الجزائر العاصمة · حسب التوفر",

    "home.services.eyebrow": "الخدمات",
    "home.services.title": "كل ما يحتاجه مكتبك، في مكان واحد",
    "home.services.description":
      "سبع خدمات أساسية تغطي الأجهزة، الأنظمة، الشبكات، الطابعات والبيانات — بلا وسطاء.",
    "home.services.all": "كل الخدمات",
    "svc.details": "التفاصيل",
    "svc.support.title": "دعم المكاتب والمؤسسات",
    "svc.support.desc": "متابعة تقنية لأجهزة المكتب، البرامج، والبريد والطابعات عند الحاجة.",
    "svc.maintenance.title": "صيانة وإصلاح الحواسيب",
    "svc.maintenance.desc": "تشخيص الأعطال، تنظيف النظام، تسريع الأداء واستبدال الأجزاء التالفة.",
    "svc.windows.title": "Windows وتثبيت البرامج",
    "svc.windows.desc": "تثبيت نظيف، تعريفات أصلية، تحديثات، ومعالجة أخطاء النظام.",
    "svc.network.title": "الشبكة وWi-Fi",
    "svc.network.desc": "ضبط الراوتر، مشاركة الملفات، وربط أجهزة المكتب بشبكة مستقرة.",
    "svc.printer.title": "الطابعات والماسحات",
    "svc.printer.desc": "تثبيت التعريفات، المشاركة عبر الشبكة، وحل مشاكل طابور الطباعة.",
    "svc.setup.title": "تجهيز حاسوب جديد",
    "svc.setup.desc": "جهاز جاهز للعمل من أول يوم: نظام، برامج، طابعة وإعدادات.",
    "svc.backup.title": "النسخ الاحتياطي والملفات",
    "svc.backup.desc": "تنظيم مجلدات العمل وخطة نسخ دورية تحمي بيانات المكتب.",

    "services.hero.chip": "خدمات B2B متكاملة",
    "services.hero.title": "خدمات الكمبيوتر والحلول الرقمية في الجزائر العاصمة",
    "services.hero.text":
      "دعم عملي للكمبيوتر والشبكات والطابعات، إلى جانب مواقع وحلول رقمية تُحدد وفق احتياج المشروع.",
    "services.grid.title": "حلول شاملة لأجهزة وشبكات المكتب",
    "services.grid.text": "اختر الخدمة للاطلاع على التفاصيل الكاملة وطريقة العمل.",
    "services.support.desc":
      "دعم شامل ومستمر يغطي مشاكل Windows، البرامج، الطابعات، والشبكات عند حدوث أي طارئ.",
    "services.maintenance.title": "صيانة أجهزة الشركات",
    "services.maintenance.desc":
      "فحص الأقراص، تنظيف النظام، تسريع الأداء، معالجة أخطاء Windows وتثبيت التعريفات الرسمية.",
    "services.network.title": "إعداد شبكة المكتب",
    "services.network.desc":
      "ضبط الراوتر، ربط الحواسيب، مشاركة الطابعة والمجلدات المشتركة، وتنظيم Wi-Fi بدون تقطيع.",
    "services.printer.title": "إعداد وربط الطابعات",
    "services.printer.desc":
      "تثبيت التعريفات، ربط USB وWi-Fi وشبكة، مشاركة الطابعة بين الموظفين، وحل مشاكل الطباعة العالقة.",
    "services.setup.title": "تجهيز حاسوب جديد",
    "services.setup.desc":
      "حاسوب جاهز للعمل من أول دقيقة: Windows نظيف، تعريفات أصلية، برامج مكتبية، وإعدادات الطابعة.",
    "services.backup.title": "تنظيم الملفات والنسخ الاحتياطي",
    "services.backup.desc":
      "ترتيب مجلدات العملاء، خطة نسخ احتياطي دورية محلياً وخارجياً لحماية بيانات المكتب من الضياع.",

    "studentService.title": "تنسيق مذكرات وتقارير الطلبة",
    "studentService.description":
      "تنسيق مستندات Word للمذكرات وتقارير التربص ومشاريع نهاية التكوين، مع فهرس وترقيم وتصدير PDF حسب تعليمات المؤسسة.",
    "studentService.action": "اقرأ المزيد",
    "studentService.imageAlt": "طالب يكتب مذكرات دراسية",
    "student.eyebrow": "خدمة إضافية",
    "student.b1": "فهرس آلي",
    "student.b2": "ترقيم وهوامش",
    "student.b3": "تصدير PDF",
    "student.note": "حسب تعليمات المؤسسة، ودون كتابة المحتوى الأكاديمي.",
    "student.cta": "خدمات الطلبة",

    "b2b.eyebrow": "حلول B2B",
    "b2b.title": "مكتب صغير، دون قسم تقني؟",
    "b2b.text":
      "نتولى الجانب التقني اليومي لمكتبك حتى يتفرغ فريقك للعمل. تدخل سريع، شرح واضح، وحلول تناسب حجم النشاط.",
    "b2b.point1": "تشخيص شامل لأجهزة وشبكة المكتب",
    "b2b.point2": "خطة صيانة ونسخ احتياطي حسب الحاجة",
    "b2b.point3": "دعم مباشر عبر WhatsApp وتنسيق مواعيد مرن",
    "b2b.cta": "تحدث عن احتياج مكتبك",
    "b2b.note": "بدون التزام بعقد سنوي — الخدمة تُحدد بعد المعاينة.",
    "b2b.item1": "مكاتب المحاسبة",
    "b2b.item1d": "أجهزة، طابعات فواتير، ونسخ احتياطي موسمي",
    "b2b.item2": "مكاتب المحاماة",
    "b2b.item2d": "طباعة سريعة، شبكة تبادل المذكرات، وحفظ آمن",
    "b2b.item3": "الموثقون",
    "b2b.item3d": "معايرة طابعات العقود وحماية أرشيف الوثائق",
    "b2b.item4": "مكاتب الدراسات",
    "b2b.item4d": "أداء الحواسيب الهندسية وطابعات المخططات",

    "sectors.eyebrow": "القطاعات",
    "sectors.title": "حلول مبنية على طريقة عمل مكتبك",
    "sectors.description":
      "لكل نشاط طريقته في حفظ الوثائق والطباعة. نتعامل مع الأجهزة بما يخدم سير العمل اليومي.",
    "sector.accounting.title": "مكاتب المحاسبة",
    "sector.accounting.text": "أجهزة، طابعات فواتير، ونسخ احتياطي لملفات الزبائن والتصريحات.",
    "sector.law.title": "مكاتب المحاماة",
    "sector.law.text": "طباعة سريعة، ماسح ضوئي، وشبكة لتبادل المذكرات بين المكتب والكاتب.",
    "sector.notary.title": "الموثقون",
    "sector.notary.text": "معايرة طابعات العقود، أرشفة آمنة، وحماية الأجهزة من الوسائط الخارجية.",
    "sector.design.title": "مكاتب الدراسات",
    "sector.design.text": "أداء للحواسيب الهندسية، طابعات A3، ومشاركة سريعة للمخططات.",
    "sector.agency.title": "الوكالات والشركات",
    "sector.agency.text": "شبكة موحدة، مجلدات مشتركة، ودعم مباشر عند توقف العمل.",
    "sector.freelance.title": "المكاتب الحرة",
    "sector.freelance.text": "بيئة عمل مستقرة، برامج أساسية، ونسخ احتياطي تلقائي للوثائق.",
    "sector.link": "التفاصيل",

    "problems.eyebrow": "تشخيص سريع",
    "problems.title": "مشكلة تقنية تعطّل عملك؟",
    "problems.description": "اختر العرض الأقرب لحالتك، وانتقل إلى الحل المناسب.",
    "prob.slow.title": "الكمبيوتر بطيء",
    "prob.slow.desc": "إقلاع طويل، تجمد عند فتح الملفات، أو أداء غير مستقر.",
    "prob.slow.link": "الحل: تشخيص وتحسين الأداء",
    "prob.printer.title": "الطابعة لا تعمل",
    "prob.printer.desc": "رسائل خطأ، طابور عالق، أو الجهاز لا يظهر على الشبكة.",
    "prob.printer.link": "الحل: إعداد وإصلاح الطابعة",
    "prob.network.title": "الأجهزة لا تتصل ببعضها",
    "prob.network.desc": "الإنترنت يعمل لكن الملفات والطابعة المشتركة غير متاحة.",
    "prob.network.link": "الحل: فحص الشبكة والمشاركة",
    "prob.new.title": "حاسوب جديد بدون إعداد",
    "prob.new.desc": "تحتاج Windows، تعريفات، برامج مكتبية وطابعة جاهزة.",
    "prob.new.link": "الحل: تجهيز كامل للعمل",
    "prob.files.title": "ملفات المكتب غير منظمة",
    "prob.files.desc": "وثائق متفرقة وخوف من فقدان معاملات الزبائن.",
    "prob.files.link": "الحل: تنظيم ونسخ احتياطي",
    "prob.office.title": "لا يوجد متابع تقني",
    "prob.office.desc": "عدة أجهزة ومشاكل متكررة دون شخص مسؤول.",
    "prob.office.link": "الحل: دعم مكتبي منتظم",

    "process.eyebrow": "طريقة العمل",
    "process.title": "من الرسالة إلى جهاز يعمل",
    "process.description": "أربع خطوات واضحة، بدون مصطلحات أو إجراءات معقدة.",
    "process.1.title": "التواصل",
    "process.1.text": "واتساب أو طلب خدمة، مع وصف مختصر للمشكلة.",
    "process.2.title": "التشخيص",
    "process.2.text": "معاينة الحالة وتحديد السبب والتكلفة قبل التنفيذ.",
    "process.3.title": "التنفيذ",
    "process.3.text": "إصلاح، إعداد أو تركيب، مع اختبار كل خطوة.",
    "process.4.title": "التسليم",
    "process.4.text": "شرح ما تم، وتوصيات بسيطة للوقاية والمتابعة.",

    "why.eyebrow": "لماذا iComputer",
    "why.title": "تقني واحد يفهم مكتبك",
    "why.description": "لا وكالة كبيرة ولا دعم آلي. تواصل مباشر مع من ينفذ العمل.",
    "why.1.title": "خبرة عملية",
    "why.1.text": "عمل ميداني مع مكاتب المحاسبة والمحاماة والتوثيق.",
    "why.2.title": "حلول بلا مبالغة",
    "why.2.text": "نقترح ما تحتاجه فعلاً، دون برامج أو تكاليف زائدة.",
    "why.3.title": "شرح واضح",
    "why.3.text": "تفهم المشكلة والحل بلغة بسيطة، قبل وبعد التدخل.",
    "why.4.title": "مرونة في التوقيت",
    "why.4.text": "تنسيق المواعيد حسب طبيعة عمل المكتب واستعجاله.",

    "about.eyebrow": "من نحن",
    "about.title": "خبرة تقنية محلية، بمعايير مهنية",
    "about.p1":
      "محمد الأمين — تقني سامي في الإعلام الآلي. أساعد المكاتب والمؤسسات الصغيرة في الجزائر العاصمة على تشغيل أجهزتها وشبكاتها بثبات.",
    "about.p2":
      "iComputer Urban Tech DZ هو شريك تقني مرن: تدخل عند الحاجة، شرح واضح، ومتابعة دون تكلفة مسؤول IT بدوام كامل.",
    "about.point1": "تشخيص وإصلاح أجهزة وشبكات",
    "about.point2": "إعداد أنظمة وبرامج عمل",
    "about.point3": "حماية البيانات والنسخ الاحتياطي",
    "about.cta1": "تواصل عبر WhatsApp",
    "about.cta2": "طلب خدمة",
    "about.badge.title": "تقني سامي إعلام آلي",
    "about.badge.text": "دعم مكاتب · الجزائر العاصمة",

    "faq.eyebrow": "الأسئلة الشائعة",
    "faq.title": "أسئلة قبل طلب الخدمة",
    "faq.description": "إجابات مباشرة حول نطاق الخدمة وطريقة العمل.",
    "faq.q1": "هل تخدمون المكاتب والشركات الصغيرة؟",
    "faq.a1":
      "نعم، هذا هو مجالنا الأساسي: مكاتب المحاسبة، المحاماة، التوثيق، الدراسات، والوكالات الصغيرة التي لا تملك مسؤول IT متفرغ.",
    "faq.q2": "هل يمكن إعداد شبكة داخل المكتب؟",
    "faq.a2":
      "نعم. نضبط الراوتر، نربط الأجهزة سلكياً أو عبر Wi-Fi، ونفعّل مشاركة المجلدات والطابعات مع صلاحيات مناسبة.",
    "faq.q3": "هل تقدمون دعماً عن بُعد؟",
    "faq.a3":
      "بعض المشاكل البرمجية يمكن حلها عن بُعد بعد موافقتك. أما الأعطال المادية أو إعداد الشبكة فيحتاجان غالباً إلى زيارة.",
    "faq.q4": "هل يمكن تجهيز حاسوب جديد؟",
    "faq.a4":
      "نعم: تثبيت Windows نظيف، التعريفات الأصلية، التحديثات، البرامج المكتبية الأساسية، وإعداد الطابعة والبريد.",
    "faq.q5": "هل تساعدون في النسخ الاحتياطي؟",
    "faq.a5":
      "نعم، ننظم مجلدات العمل ونضع خطة نسخ دورية محلية وخارجية تقلل خطر فقدان ملفات الزبائن.",
    "faq.q6": "ما نطاق الخدمة؟",
    "faq.a6":
      "نطاق العمل الأساسي هو الجزائر العاصمة. تُحدد إمكانية الخدمة حسب المنطقة والتوفر قبل تثبيت الموعد.",

    "contact.eyebrow": "التواصل",
    "contact.title": "تحدث معنا عن مشكلة مكتبك",
    "contact.desc":
      "أرسل وصفاً قصيراً أو صورة لرسالة الخطأ عبر WhatsApp. سنوضح الخطوة التالية قبل أي التزام.",
    "contact.whatsapp.title": "WhatsApp",
    "contact.whatsapp.text": "أسرع طريقة لإرسال صورة أو وصف المشكلة",
    "contact.request.title": "طلب خدمة",
    "contact.request.text": "نموذج منظم لتفاصيل المكتب والجهاز",
    "contact.area.title": "نطاق الخدمة",
    "contact.area.text": "الجزائر العاصمة — حسب المنطقة والتوفر",
    "contact.hours.title": "أوقات التنسيق",
    "contact.hours.text": "السبت–الخميس · 9:00–18:00",
    "contact.aside.title": "جاهز لمراجعة وضع مكتبك؟",
    "contact.aside.text":
      "أرسل تفاصيل الأجهزة أو الشبكة، وسنقترح خطوات عملية واضحة.",
    "contact.aside.cta": "اطلب دعماً عبر WhatsApp",
    "contact.aside.secondary": "أو أرسل طلب خدمة",
    "contact.note": "لا نطلب أي معلومات حساسة قبل الاتفاق على الخدمة.",

    "footer.bio":
      "دعم تقني للمكاتب والمؤسسات الصغيرة في الجزائر العاصمة: أجهزة، شبكات، طابعات، نسخ احتياطي وتنسيق مستندات.",
    "footer.services": "الخدمات",
    "footer.sectors": "القطاعات",
    "footer.quick": "روابط سريعة",
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.location": "الجزائر العاصمة"
  },

  fr: {
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.solutions": "Solutions bureaux",
    "nav.sectors": "Secteurs",
    "nav.about": "À propos",
    "nav.knowledge": "Connaissances",
    "nav.booking": "Demander un service",
    "nav.whatsapp": "WhatsApp",
    "nav.menuOpen": "Ouvrir le menu",
    "nav.menuClose": "Fermer le menu",
    "theme.toLight": "Passer au thème clair",
    "theme.toDark": "Passer au thème sombre",
    "wa.message":
      "Bonjour iComputer, je souhaite me renseigner sur le support informatique pour mon bureau à Alger.",

    "hero.eyebrow": "Alger · Support informatique pour bureaux et particuliers",
    "hero.title1": "Le support informatique",
    "hero.title2": "de votre bureau, sans interruption.",
    "hero.sub":
      "Maintenance, installation de Windows, réseaux, imprimantes et sauvegardes — sur place ou à distance, à Alger.",
    "hero.cta1": "Demander du support sur WhatsApp",
    "hero.cta2": "Voir les services",
    "hero.meta1": "Sans contrat obligatoire",
    "hero.meta2": "Sur place ou à distance",
    "hero.meta3": "Coordination directe sur WhatsApp",
    "hero.frame.status": "Selon disponibilité",
    "hero.overlay.title": "Votre bureau, prêt à travailler",
    "hero.overlay.text": "Diagnostic, réparation et configuration des postes, réseaux et imprimantes.",
    "hero.chip1": "Windows",
    "hero.chip2": "Réseau",
    "hero.chip3": "Imprimantes",
    "hero.chip4": "Sauvegardes",
    "hero.dash.title": "État du bureau",
    "hero.dash.sub": "Diagnostic rapide · Alger",
    "hero.dash.online": "En ligne",
    "hero.dash.row1": "Postes de travail",
    "hero.dash.row2": "Réseau",
    "hero.dash.row3": "Sauvegarde",
    "hero.dash.ok": "OK",
    "hero.dash.ticket": "File d'impression résolue",
    "hero.dash.ticketmeta": "Dernière intervention · 18 min",

    "trust.1": "Bureaux et petites structures",
    "trust.2": "Des solutions concrètes, sans complexité",
    "trust.3": "Sans engagement de longue durée",
    "trust.4": "Alger · selon disponibilité",

    "home.services.eyebrow": "Services",
    "home.services.title": "Tout ce dont votre bureau a besoin, au même endroit",
    "home.services.description":
      "Sept services essentiels pour les postes, systèmes, réseaux, imprimantes et données — sans intermédiaire.",
    "home.services.all": "Tous les services",
    "svc.details": "Détails",
    "svc.support.title": "Support bureaux et structures",
    "svc.support.desc": "Suivi technique des postes, logiciels, e-mails et imprimantes selon le besoin.",
    "svc.maintenance.title": "Maintenance et réparation",
    "svc.maintenance.desc": "Diagnostic des pannes, nettoyage système, optimisation et remplacement de pièces.",
    "svc.windows.title": "Windows et installation de logiciels",
    "svc.windows.desc": "Installation propre, pilotes d'origine, mises à jour et correction des erreurs.",
    "svc.network.title": "Réseau et Wi-Fi",
    "svc.network.desc": "Configuration du routeur, partage de fichiers et connexion stable des postes.",
    "svc.printer.title": "Imprimantes et scanners",
    "svc.printer.desc": "Pilotes, partage réseau et résolution des files d'impression bloquées.",
    "svc.setup.title": "Préparation d'un nouvel ordinateur",
    "svc.setup.desc": "Une machine prête dès le premier jour : système, logiciels, imprimante et réglages.",
    "svc.backup.title": "Sauvegarde et fichiers",
    "svc.backup.desc": "Organisation des dossiers et plan de sauvegarde régulier pour protéger les données.",

    "services.hero.chip": "Services B2B complets",
    "services.hero.title": "Services informatiques et solutions numériques à Alger",
    "services.hero.text":
      "Support pratique pour ordinateurs, réseaux et imprimantes, ainsi que des sites et solutions numériques définis selon le projet.",
    "services.grid.title": "Des solutions complètes pour les appareils et le réseau du bureau",
    "services.grid.text": "Choisissez un service pour consulter les détails et la méthode de travail.",
    "services.support.desc":
      "Support complet et continu : Windows, logiciels, imprimantes et réseau en cas d'urgence.",
    "services.maintenance.title": "Maintenance des appareils professionnels",
    "services.maintenance.desc":
      "Contrôle des disques, nettoyage du système, optimisation, correction des erreurs Windows et installation des pilotes officiels.",
    "services.network.title": "Mise en place du réseau du bureau",
    "services.network.desc":
      "Configuration du routeur, connexion des ordinateurs, partage de l'imprimante et des dossiers, Wi-Fi stable.",
    "services.printer.title": "Installation et connexion des imprimantes",
    "services.printer.desc":
      "Installation des pilotes, connexion USB, Wi-Fi et réseau, partage entre employés et résolution des files d'impression bloquées.",
    "services.setup.title": "Préparation d'un nouvel ordinateur",
    "services.setup.desc":
      "Une machine prête dès la première minute : Windows propre, pilotes officiels, logiciels bureautiques et imprimante configurée.",
    "services.backup.title": "Organisation des fichiers et sauvegarde",
    "services.backup.desc":
      "Classement des dossiers clients et plan de sauvegarde régulier, local et externe, pour protéger les données du bureau.",

    "studentService.title": "Mise en page de mémoires et rapports étudiants",
    "studentService.description":
      "Mise en forme Word de mémoires, rapports de stage et projets de fin de formation, avec sommaire automatique, pagination et export PDF selon les consignes de l'établissement.",
    "studentService.action": "En savoir plus",
    "studentService.imageAlt": "Étudiant prenant des notes pour un mémoire",
    "student.eyebrow": "Service complémentaire",
    "student.b1": "Sommaire automatique",
    "student.b2": "Pagination et marges",
    "student.b3": "Export PDF",
    "student.note": "Selon les consignes de l'établissement, sans rédaction du contenu académique.",
    "student.cta": "Services étudiants",

    "b2b.eyebrow": "Solutions B2B",
    "b2b.title": "Un petit bureau, sans service informatique ?",
    "b2b.text":
      "Nous prenons en charge le quotidien technique de votre bureau pour libérer votre équipe. Intervention rapide, explications claires et solutions adaptées à votre taille.",
    "b2b.point1": "Diagnostic complet des postes et du réseau",
    "b2b.point2": "Plan de maintenance et de sauvegarde selon le besoin",
    "b2b.point3": "Support direct sur WhatsApp et horaires flexibles",
    "b2b.cta": "Parler de votre besoin",
    "b2b.note": "Sans contrat annuel obligatoire — la mission est définie après diagnostic.",
    "b2b.item1": "Cabinets comptables",
    "b2b.item1d": "Postes, imprimantes de factures et sauvegardes saisonnières",
    "b2b.item2": "Cabinets d'avocats",
    "b2b.item2d": "Impression rapide, réseau de dossiers et archivage sûr",
    "b2b.item3": "Notaires",
    "b2b.item3d": "Réglage des imprimantes d'actes et protection des archives",
    "b2b.item4": "Bureaux d'études",
    "b2b.item4d": "Performance des postes CAO et impression de plans",

    "sectors.eyebrow": "Secteurs",
    "sectors.title": "Des solutions pensées pour votre façon de travailler",
    "sectors.description":
      "Chaque activité a ses documents et ses habitudes d'impression. Nous adaptons la technique au travail quotidien.",
    "sector.accounting.title": "Cabinets comptables",
    "sector.accounting.text": "Postes, imprimantes de factures et sauvegarde des dossiers clients et déclarations.",
    "sector.law.title": "Cabinets d'avocats",
    "sector.law.text": "Impression rapide, scanner et réseau pour échanger les conclusions.",
    "sector.notary.title": "Notaires",
    "sector.notary.text": "Imprimantes d'actes, archivage sûr et protection contre les supports externes.",
    "sector.design.title": "Bureaux d'études",
    "sector.design.text": "Performance CAO, imprimantes A3 et partage rapide des plans.",
    "sector.agency.title": "Agences et entreprises",
    "sector.agency.text": "Réseau unifié, dossiers partagés et support direct en cas d'arrêt.",
    "sector.freelance.title": "Bureaux indépendants",
    "sector.freelance.text": "Environnement stable, logiciels essentiels et sauvegarde automatique.",
    "sector.link": "Détails",

    "problems.eyebrow": "Diagnostic rapide",
    "problems.title": "Un problème technique bloque votre travail ?",
    "problems.description": "Choisissez la situation la plus proche et accédez à la solution.",
    "prob.slow.title": "L'ordinateur est lent",
    "prob.slow.desc": "Démarrage long, blocages à l'ouverture des fichiers ou performances instables.",
    "prob.slow.link": "Solution : diagnostic et optimisation",
    "prob.printer.title": "L'imprimante ne fonctionne pas",
    "prob.printer.desc": "Messages d'erreur, file bloquée ou appareil absent du réseau.",
    "prob.printer.link": "Solution : configuration et réparation",
    "prob.network.title": "Les postes ne communiquent pas",
    "prob.network.desc": "Internet fonctionne mais les fichiers et l'imprimante partagés sont inaccessibles.",
    "prob.network.link": "Solution : vérification du réseau",
    "prob.new.title": "Nouvel ordinateur non configuré",
    "prob.new.desc": "Windows, pilotes, logiciels bureautiques et imprimante à préparer.",
    "prob.new.link": "Solution : préparation complète",
    "prob.files.title": "Dossiers du bureau en désordre",
    "prob.files.desc": "Documents dispersés et risque de perdre des dossiers clients.",
    "prob.files.link": "Solution : organisation et sauvegarde",
    "prob.office.title": "Aucun référent technique",
    "prob.office.desc": "Plusieurs postes et des pannes répétées sans responsable.",
    "prob.office.link": "Solution : support bureau régulier",

    "process.eyebrow": "Méthode",
    "process.title": "Du message à un poste qui fonctionne",
    "process.description": "Quatre étapes claires, sans jargon ni procédure compliquée.",
    "process.1.title": "Contact",
    "process.1.text": "WhatsApp ou demande de service, avec une description courte du problème.",
    "process.2.title": "Diagnostic",
    "process.2.text": "Examen de la situation, cause et coût avant intervention.",
    "process.3.title": "Intervention",
    "process.3.text": "Réparation, configuration ou installation, avec test de chaque étape.",
    "process.4.title": "Livraison",
    "process.4.text": "Explication du travail effectué et conseils simples de prévention.",

    "why.eyebrow": "Pourquoi iComputer",
    "why.title": "Un seul technicien qui comprend votre bureau",
    "why.description": "Pas de grande agence ni de support automatisé. Un contact direct avec la personne qui intervient.",
    "why.1.title": "Expérience de terrain",
    "why.1.text": "Travail avec des cabinets comptables, d'avocats et de notaires.",
    "why.2.title": "Des solutions sans excès",
    "why.2.text": "Nous proposons ce qui est réellement utile, sans logiciels ni coûts superflus.",
    "why.3.title": "Des explications claires",
    "why.3.text": "Vous comprenez le problème et la solution, avant et après l'intervention.",
    "why.4.title": "Des horaires flexibles",
    "why.4.text": "Les rendez-vous s'adaptent au rythme et à l'urgence du bureau.",

    "about.eyebrow": "À propos",
    "about.title": "Une expertise locale, des standards professionnels",
    "about.p1":
      "Mohamed El Amine — technicien supérieur en informatique. J'aide les bureaux et petites structures d'Alger à faire fonctionner leurs postes et réseaux de façon stable.",
    "about.p2":
      "iComputer Urban Tech DZ est un partenaire technique flexible : intervention quand il faut, explications claires et suivi sans le coût d'un informaticien à plein temps.",
    "about.point1": "Diagnostic et réparation postes et réseaux",
    "about.point2": "Installation de systèmes et logiciels de travail",
    "about.point3": "Protection des données et sauvegardes",
    "about.cta1": "Contacter sur WhatsApp",
    "about.cta2": "Demander un service",
    "about.badge.title": "Technicien supérieur en informatique",
    "about.badge.text": "Support bureaux · Alger",

    "faq.eyebrow": "Questions fréquentes",
    "faq.title": "Questions avant de demander un service",
    "faq.description": "Des réponses directes sur le périmètre et la méthode de travail.",
    "faq.q1": "Servez-vous les bureaux et petites entreprises ?",
    "faq.a1":
      "Oui, c'est notre cœur de métier : cabinets comptables, avocats, notaires, bureaux d'études et petites agences sans informaticien dédié.",
    "faq.q2": "Pouvez-vous installer un réseau dans le bureau ?",
    "faq.a2":
      "Oui. Nous configurons le routeur, connectons les postes en filaire ou Wi-Fi et activons le partage des dossiers et imprimantes avec les bonnes permissions.",
    "faq.q3": "Proposez-vous du support à distance ?",
    "faq.a3":
      "Certains problèmes logiciels peuvent être résolus à distance avec votre accord. Les pannes matérielles ou la configuration réseau nécessitent souvent une visite.",
    "faq.q4": "Pouvez-vous préparer un nouvel ordinateur ?",
    "faq.a4":
      "Oui : Windows propre, pilotes d'origine, mises à jour, logiciels bureautiques essentiels, imprimante et e-mail.",
    "faq.q5": "Aidez-vous pour les sauvegardes ?",
    "faq.a5":
      "Oui, nous organisons les dossiers et mettons en place une sauvegarde régulière locale et externe pour réduire le risque de perte.",
    "faq.q6": "Quelle est la zone d'intervention ?",
    "faq.a6":
      "Alger est notre zone principale. La faisabilité dépend du quartier et des disponibilités, confirmées avant le rendez-vous.",

    "contact.eyebrow": "Contact",
    "contact.title": "Parlez-nous du problème de votre bureau",
    "contact.desc":
      "Envoyez une courte description ou une photo du message d'erreur sur WhatsApp. Nous clarifions la prochaine étape avant tout engagement.",
    "contact.whatsapp.title": "WhatsApp",
    "contact.whatsapp.text": "Le plus rapide pour envoyer une photo ou décrire le problème",
    "contact.request.title": "Demande de service",
    "contact.request.text": "Un formulaire structuré pour le bureau et le poste concerné",
    "contact.area.title": "Zone d'intervention",
    "contact.area.text": "Alger — selon le quartier et la disponibilité",
    "contact.hours.title": "Horaires de coordination",
    "contact.hours.text": "Samedi–jeudi · 9h00–18h00",
    "contact.aside.title": "Prêt à faire le point sur votre bureau ?",
    "contact.aside.text":
      "Envoyez les détails des postes ou du réseau, nous proposerons des étapes concrètes.",
    "contact.aside.cta": "Demander du support sur WhatsApp",
    "contact.aside.secondary": "Ou envoyer une demande",
    "contact.note": "Aucune information sensible n'est demandée avant accord sur la mission.",

    "footer.bio":
      "Support informatique pour bureaux et petites structures à Alger : postes, réseaux, imprimantes, sauvegardes et mise en page de documents.",
    "footer.services": "Services",
    "footer.sectors": "Secteurs",
    "footer.quick": "Liens rapides",
    "footer.rights": "Tous droits réservés",
    "footer.location": "Alger"
  },

  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.solutions": "Office Solutions",
    "nav.sectors": "Sectors",
    "nav.about": "About",
    "nav.knowledge": "Knowledge",
    "nav.booking": "Request Service",
    "nav.whatsapp": "WhatsApp",
    "nav.menuOpen": "Open menu",
    "nav.menuClose": "Close menu",
    "theme.toLight": "Switch to light theme",
    "theme.toDark": "Switch to dark theme",
    "wa.message":
      "Hello iComputer, I would like to inquire about IT support for my office in Algiers.",

    "hero.eyebrow": "Algiers · IT support for offices and individuals",
    "hero.title1": "IT support for your office",
    "hero.title2": "that never stops.",
    "hero.sub":
      "Computer repair, Windows setup, networks, printers and backups — on-site or remote, across Algiers.",
    "hero.cta1": "Request support on WhatsApp",
    "hero.cta2": "Explore services",
    "hero.meta1": "No mandatory contract",
    "hero.meta2": "On-site or remote",
    "hero.meta3": "Direct coordination on WhatsApp",
    "hero.frame.status": "Available",
    "hero.overlay.title": "Your office, ready to work",
    "hero.overlay.text": "Diagnose, repair and configure computers, networks and printers.",
    "hero.chip1": "Windows",
    "hero.chip2": "Network",
    "hero.chip3": "Printers",
    "hero.chip4": "Backups",
    "hero.dash.title": "Office status",
    "hero.dash.sub": "Quick check · Algiers",
    "hero.dash.online": "Online",
    "hero.dash.row1": "Workstations",
    "hero.dash.row2": "Network",
    "hero.dash.row3": "Backup",
    "hero.dash.ok": "Healthy",
    "hero.dash.ticket": "Printer queue cleared",
    "hero.dash.ticketmeta": "Last fix · 18 min",

    "trust.1": "Offices and small teams",
    "trust.2": "Practical solutions, no complexity",
    "trust.3": "No long-term commitment",
    "trust.4": "Algiers · subject to availability",

    "home.services.eyebrow": "Services",
    "home.services.title": "Everything your office needs, in one place",
    "home.services.description":
      "Seven core services covering computers, systems, networks, printers and data — with no middleman.",
    "home.services.all": "All services",
    "svc.details": "Details",
    "svc.support.title": "Office and business support",
    "svc.support.desc": "Ongoing help with office computers, software, email and printers when needed.",
    "svc.maintenance.title": "Computer repair and maintenance",
    "svc.maintenance.desc": "Fault diagnosis, system cleanup, performance tuning and part replacement.",
    "svc.windows.title": "Windows and software setup",
    "svc.windows.desc": "Clean installs, original drivers, updates and system error fixes.",
    "svc.network.title": "Network and Wi-Fi",
    "svc.network.desc": "Router setup, file sharing and a stable connection for every office computer.",
    "svc.printer.title": "Printers and scanners",
    "svc.printer.desc": "Driver installation, network sharing and stuck print queue fixes.",
    "svc.setup.title": "New computer setup",
    "svc.setup.desc": "A machine ready on day one: system, software, printer and settings.",
    "svc.backup.title": "Backup and file management",
    "svc.backup.desc": "Structured work folders and a regular backup plan to protect office data.",

    "services.hero.chip": "Complete B2B services",
    "services.hero.title": "Computer services and digital solutions in Algiers",
    "services.hero.text":
      "Practical support for computers, networks and printers, plus websites and digital solutions scoped to each project.",
    "services.grid.title": "Complete solutions for office devices and networks",
    "services.grid.text": "Choose a service to see the full details and how the work is handled.",
    "services.support.desc":
      "Ongoing support covering Windows, software, printers and networks whenever something goes wrong.",
    "services.maintenance.title": "Business computer maintenance",
    "services.maintenance.desc":
      "Disk checks, system cleanup, performance tuning, Windows error fixes and official driver installation.",
    "services.network.title": "Office network setup",
    "services.network.desc":
      "Router configuration, computer connections, shared printers and folders, and stable Wi-Fi.",
    "services.printer.title": "Printer setup and sharing",
    "services.printer.desc":
      "Driver installation, USB, Wi-Fi and network connection, sharing between staff, and clearing stuck print queues.",
    "services.setup.title": "New computer setup",
    "services.setup.desc":
      "A machine ready from minute one: clean Windows, official drivers, office software and printer settings.",
    "services.backup.title": "File organisation and backup",
    "services.backup.desc":
      "Structured client folders and a regular local and external backup plan to protect office data.",

    "studentService.title": "Thesis and student report formatting",
    "studentService.description":
      "Word formatting for theses, internship reports and final projects, with automatic contents, pagination and PDF export according to your institution's requirements.",
    "studentService.action": "Read more",
    "studentService.imageAlt": "Student taking notes for a thesis",
    "student.eyebrow": "Additional service",
    "student.b1": "Automatic contents",
    "student.b2": "Pagination and margins",
    "student.b3": "PDF export",
    "student.note": "Following your institution's rules, without writing the academic content.",
    "student.cta": "Student services",

    "b2b.eyebrow": "B2B solutions",
    "b2b.title": "A small office with no IT department?",
    "b2b.text":
      "We take care of your office's day-to-day technology so your team can focus on work. Fast response, clear explanations and solutions sized to your business.",
    "b2b.point1": "Full check of office computers and network",
    "b2b.point2": "Maintenance and backup plan as needed",
    "b2b.point3": "Direct WhatsApp support and flexible scheduling",
    "b2b.cta": "Discuss your office needs",
    "b2b.note": "No mandatory annual contract — scope is confirmed after a review.",
    "b2b.item1": "Accounting firms",
    "b2b.item1d": "Computers, invoice printers and seasonal backups",
    "b2b.item2": "Law offices",
    "b2b.item2d": "Fast printing, document network and safe archiving",
    "b2b.item3": "Notaries",
    "b2b.item3d": "Contract printer calibration and archive protection",
    "b2b.item4": "Design studios",
    "b2b.item4d": "CAD workstation performance and plotter printing",

    "sectors.eyebrow": "Sectors",
    "sectors.title": "Solutions built around how your office works",
    "sectors.description":
      "Every business has its own documents and printing habits. We fit the technology to the daily workflow.",
    "sector.accounting.title": "Accounting firms",
    "sector.accounting.text": "Computers, invoice printers and backups for client files and tax returns.",
    "sector.law.title": "Law offices",
    "sector.law.text": "Fast printing, scanning and a network for sharing briefs with the clerk.",
    "sector.notary.title": "Notaries",
    "sector.notary.text": "Contract printer calibration, safe archiving and protection from external media.",
    "sector.design.title": "Design studios",
    "sector.design.text": "CAD performance, A3 printers and fast drawing sharing.",
    "sector.agency.title": "Agencies and companies",
    "sector.agency.text": "One network, shared folders and direct support when work stops.",
    "sector.freelance.title": "Independent offices",
    "sector.freelance.text": "A stable workspace, essential software and automatic document backups.",
    "sector.link": "Details",

    "problems.eyebrow": "Quick diagnosis",
    "problems.title": "Is a technical problem stopping your work?",
    "problems.description": "Pick the closest situation and go straight to the right solution.",
    "prob.slow.title": "The computer is slow",
    "prob.slow.desc": "Long startup, freezing when opening files, or unstable performance.",
    "prob.slow.link": "Fix: diagnose and tune performance",
    "prob.printer.title": "The printer is not working",
    "prob.printer.desc": "Error messages, a stuck queue, or the device missing from the network.",
    "prob.printer.link": "Fix: printer setup and repair",
    "prob.network.title": "Computers cannot reach each other",
    "prob.network.desc": "Internet works, but shared files and the network printer are unavailable.",
    "prob.network.link": "Fix: network and sharing check",
    "prob.new.title": "A new computer with no setup",
    "prob.new.desc": "Windows, drivers, office software and the printer still need configuring.",
    "prob.new.link": "Fix: complete work-ready setup",
    "prob.files.title": "Office files are disorganised",
    "prob.files.desc": "Documents scattered across machines and a risk of losing client files.",
    "prob.files.link": "Fix: organisation and backup",
    "prob.office.title": "No one looks after IT",
    "prob.office.desc": "Several computers and repeated issues with no responsible person.",
    "prob.office.link": "Fix: regular office support",

    "process.eyebrow": "How we work",
    "process.title": "From message to a working computer",
    "process.description": "Four clear steps, with no jargon or complicated process.",
    "process.1.title": "Contact",
    "process.1.text": "WhatsApp or a service request with a short description of the problem.",
    "process.2.title": "Diagnosis",
    "process.2.text": "Review the situation, identify the cause and confirm the cost before work.",
    "process.3.title": "Work",
    "process.3.text": "Repair, configure or install, testing each step as we go.",
    "process.4.title": "Handover",
    "process.4.text": "Explain what was done and give simple prevention and follow-up advice.",

    "why.eyebrow": "Why iComputer",
    "why.title": "One technician who understands your office",
    "why.description": "No big agency or automated support. Direct contact with the person doing the work.",
    "why.1.title": "Hands-on experience",
    "why.1.text": "Field work with accounting, law and notary offices.",
    "why.2.title": "No unnecessary solutions",
    "why.2.text": "We recommend what you actually need, without extra software or cost.",
    "why.3.title": "Clear explanations",
    "why.3.text": "Understand the problem and the fix in plain language, before and after.",
    "why.4.title": "Flexible timing",
    "why.4.text": "Appointments adapt to your office rhythm and urgency.",

    "about.eyebrow": "About",
    "about.title": "Local technical experience, professional standards",
    "about.p1":
      "Mohamed El Amine — senior IT technician. I help offices and small businesses in Algiers keep their computers and networks running reliably.",
    "about.p2":
      "iComputer Urban Tech DZ is a flexible technical partner: support when needed, clear explanations and follow-up without the cost of a full-time IT employee.",
    "about.point1": "Computer and network diagnosis and repair",
    "about.point2": "Operating system and work software setup",
    "about.point3": "Data protection and backups",
    "about.cta1": "Contact on WhatsApp",
    "about.cta2": "Request service",
    "about.badge.title": "Senior IT technician",
    "about.badge.text": "Office support · Algiers",

    "faq.eyebrow": "Frequently asked",
    "faq.title": "Questions before requesting service",
    "faq.description": "Direct answers about the scope and how we work.",
    "faq.q1": "Do you support offices and small companies?",
    "faq.a1":
      "Yes, that is our core focus: accounting firms, law offices, notaries, design studios and small agencies without a dedicated IT person.",
    "faq.q2": "Can you set up a network inside the office?",
    "faq.a2":
      "Yes. We configure the router, connect computers by cable or Wi-Fi, and enable folder and printer sharing with appropriate permissions.",
    "faq.q3": "Do you offer remote support?",
    "faq.a3":
      "Some software issues can be fixed remotely with your consent. Hardware faults or network setup usually need an on-site visit.",
    "faq.q4": "Can you prepare a new computer?",
    "faq.a4":
      "Yes: clean Windows, original drivers, updates, essential office software, printer and email setup.",
    "faq.q5": "Do you help with backups?",
    "faq.a5":
      "Yes, we organise work folders and set up a regular local and external backup plan to reduce the risk of losing client files.",
    "faq.q6": "What is the service area?",
    "faq.a6":
      "Algiers is our main area. Availability depends on the neighbourhood and is confirmed before booking.",

    "contact.eyebrow": "Contact",
    "contact.title": "Tell us about your office problem",
    "contact.desc":
      "Send a short description or a photo of the error on WhatsApp. We will clarify the next step before any commitment.",
    "contact.whatsapp.title": "WhatsApp",
    "contact.whatsapp.text": "The fastest way to send a photo or describe the issue",
    "contact.request.title": "Service request",
    "contact.request.text": "A structured form for the office and affected computer",
    "contact.area.title": "Service area",
    "contact.area.text": "Algiers — depending on area and availability",
    "contact.hours.title": "Coordination hours",
    "contact.hours.text": "Saturday–Thursday · 9:00–18:00",
    "contact.aside.title": "Ready to review your office setup?",
    "contact.aside.text":
      "Send the computer or network details, and we will suggest clear practical steps.",
    "contact.aside.cta": "Request support on WhatsApp",
    "contact.aside.secondary": "Or send a service request",
    "contact.note": "No sensitive information is requested before the service is agreed.",

    "footer.bio":
      "IT support for offices and small businesses in Algiers: computers, networks, printers, backups and document formatting.",
    "footer.services": "Services",
    "footer.sectors": "Sectors",
    "footer.quick": "Quick links",
    "footer.rights": "All rights reserved",
    "footer.location": "Algiers"
  }
};

/* --------------------------------------------------------------------------
   Language
   -------------------------------------------------------------------------- */

let currentLang = "ar";

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key]) el.alt = dict[key];
  });

  document.querySelectorAll(".lang-switch button").forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
    btn.setAttribute("lang", btn.dataset.lang);
  });

  const message = encodeURIComponent(dict["wa.message"] || "مرحبًا iComputer");
  document.querySelectorAll("a[data-whatsapp-link]").forEach(link => {
    link.href = `https://wa.me/rai.med.elamine?text=${message}`;
  });

  updateMenuLabels();
  updateThemeLabels();

  try {
    localStorage.setItem("lang", lang);
  } catch (error) {
    /* Storage can be unavailable in private mode. */
  }
}

/* --------------------------------------------------------------------------
   Navigation
   -------------------------------------------------------------------------- */

function setMenuOpen(open) {
  const navLinks = document.getElementById("navLinks");
  const menuBtn = document.getElementById("menuBtn");
  if (!navLinks || !menuBtn) return;
  navLinks.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("nav-open", open);
  updateMenuLabels();
}

function updateMenuLabels() {
  const menuBtn = document.getElementById("menuBtn");
  if (!menuBtn) return;
  const dict = translations[currentLang] || translations.ar;
  const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-label", isOpen ? dict["nav.menuClose"] : dict["nav.menuOpen"]);
}

function updateThemeLabels() {
  const button = document.querySelector("[data-theme-toggle]");
  if (!button) return;
  const dict = translations[currentLang] || translations.ar;
  const isDark = document.documentElement.dataset.theme === "dark";
  const label = isDark ? dict["theme.toLight"] : dict["theme.toDark"];
  button.setAttribute("aria-label", label);
  button.title = label;
}

function initNavigation() {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  if (!menuBtn || !navLinks) return;

  setMenuOpen(false);

  menuBtn.addEventListener("click", () => {
    const willOpen = menuBtn.getAttribute("aria-expanded") !== "true";
    setMenuOpen(willOpen);
    if (willOpen) {
      const firstLink = navLinks.querySelector("a");
      if (firstLink && window.matchMedia("(max-width: 1024px)").matches) {
        window.setTimeout(() => firstLink.focus(), 60);
      }
    }
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("click", event => {
    if (!navLinks.classList.contains("open")) return;
    if (event.target.closest(".navbar")) return;
    setMenuOpen(false);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && navLinks.classList.contains("open")) {
      setMenuOpen(false);
      menuBtn.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024 && navLinks.classList.contains("open")) {
      setMenuOpen(false);
    }
  });
}

function markActiveNavigation() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  let found = false;

  document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href") || "";
    if (href.includes("#")) {
      link.classList.remove("is-active");
      link.removeAttribute("aria-current");
      return;
    }

    const target = href.split("?")[0].split("/").pop();
    if (!target) return;

    const isActive = target === path;
    if (isActive) {
      found = true;
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("is-active");
      link.removeAttribute("aria-current");
    }
  });

  if (!found && (path === "index.html" || path === "")) {
    const homeLink =
      document.querySelector('.nav-links a[data-nav="home"]') ||
      document.querySelector(".nav-links a");
    if (homeLink) {
      homeLink.classList.add("is-active");
      homeLink.setAttribute("aria-current", "page");
    }
  }
}

/* --------------------------------------------------------------------------
   Reveal
   -------------------------------------------------------------------------- */

function initReveal() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = document.querySelectorAll(
    ".service-tile, .sector-card, .problem-card, .timeline-step, .why-card, .student-feature, .b2b-stack__item, .about-media, .faq-list details"
  );

  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el, index) => {
    el.classList.add("scroll-reveal");
    el.style.transitionDelay = `${Math.min(index % 4, 3) * 55}ms`;
    observer.observe(el);
  });
}

/* --------------------------------------------------------------------------
   Boot
   -------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  injectIconSprite();
  replaceEmojiIcons();

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  let savedLang = "ar";
  try {
    savedLang = localStorage.getItem("lang") || "ar";
  } catch (error) {
    savedLang = "ar";
  }
  setLanguage(translations[savedLang] ? savedLang : "ar");

  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  initNavigation();
  markActiveNavigation();
  initReveal();

  document.addEventListener("themechange", updateThemeLabels);
  updateThemeLabels();

  // Internal pages built later in the session still get icons.
  const observer = new MutationObserver(() => replaceEmojiIcons());
  observer.observe(document.body, { childList: true, subtree: true });
});
