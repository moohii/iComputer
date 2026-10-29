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
    "wa.message": "مرحبًا iComputer، أرغب في الاستفسار عن دعم تقني لمكتبي في الجزائر العاصمة.",
    "hero.chip": "دعم تقني للأفراد والمكاتب في الجزائر العاصمة",
    "hero.title1": "دعم تقني موثوق",
    "hero.title2": "للأفراد والمكاتب والمؤسسات الصغيرة",
    "hero.sub": "نساعد الأفراد والمكاتب في الجزائر العاصمة في مشكلات الكمبيوتر والبرامج، تثبيت Windows، وإعداد الشبكات والطابعات.",
    "hero.cta1": "اطلب الدعم عبر WhatsApp",
    "hero.cta2": "استكشف الخدمات",
    "hero.badge1.title": "بدون مسؤول IT متفرغ",
    "hero.badge1.desc": "حلول عملية للمكاتب",
    "hero.badge2.title": "تواصل عبر WhatsApp",
    "hero.badge2.desc": "استجابة سريعة ومباشرة",
    "hero.imageLabel": "دعم تقني للأفراد والمكاتب",
    "hero.imageTitle": "مساعدة تقنية واضحة وعملية",
    "hero.imageText": "إعداد الكمبيوتر وWindows، ربط الطابعات، وضبط الشبكات حسب الحاجة.",
    "home.services.title": "خدماتنا التقنية للمكاتب والطلبة",
    "home.services.description": "دعم تقني للمكاتب والأفراد، مع تنسيق مستندات الطلبة حسب تعليمات مؤسساتهم.",
    "studentService.title": "تنسيق مذكرات وتقارير الطلبة",
    "studentService.description": "تنسيق مستندات Word للمذكرات وتقارير التربص ومشاريع نهاية التكوين، مع فهرس وترقيم وتصدير PDF حسب تعليمات المؤسسة.",
    "studentService.action": "اقرأ المزيد ←",
    "studentService.imageAlt": "طالب يكتب مذكرات دراسية",
    "footer.rights": "جميع الحقوق محفوظة"
  },
  fr: {
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.solutions": "Solutions Bureaux",
    "nav.sectors": "Secteurs",
    "nav.about": "À propos",
    "nav.knowledge": "Connaissances",
    "nav.booking": "Demander un service",
    "nav.whatsapp": "WhatsApp",
    "wa.message": "Bonjour iComputer, je souhaite me renseigner sur le support informatique pour mon bureau à Alger.",
    "hero.chip": "Assistance informatique pour particuliers et bureaux à Alger",
    "hero.title1": "Support informatique fiable",
    "hero.title2": "pour particuliers et petites entreprises",
    "hero.sub": "Aide informatique à Alger pour les logiciels, Windows, le Wi-Fi et les imprimantes, pour les particuliers et les bureaux.",
    "hero.cta1": "Demander du support sur WhatsApp",
    "hero.cta2": "Découvrir les services",
    "hero.badge1.title": "Sans technicien dédié",
    "hero.badge1.desc": "Solutions pratiques et flexibles",
    "hero.badge2.title": "Contact sur WhatsApp",
    "hero.badge2.desc": "Réponse rapide et directe",
    "hero.imageLabel": "Assistance informatique pour tous",
    "hero.imageTitle": "Une aide technique pratique",
    "hero.imageText": "Configuration de Windows, des imprimantes et des réseaux selon le besoin.",
    "home.services.title": "Services informatiques pour les bureaux et les étudiants",
    "home.services.description": "Assistance pour les bureaux et les particuliers, avec mise en page de documents étudiants selon les consignes de leur établissement.",
    "studentService.title": "Mise en page de mémoires et rapports étudiants",
    "studentService.description": "Mise en forme Word de mémoires, rapports de stage et projets de formation, selon les consignes de l'établissement.",
    "studentService.action": "En savoir plus",
    "studentService.imageAlt": "Étudiant prenant des notes pour un mémoire",
    "footer.rights": "Tous droits réservés"
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
    "wa.message": "Hello iComputer, I would like to inquire about IT support for my office in Algiers.",
    "hero.chip": "Computer support for individuals and offices in Algiers",
    "hero.title1": "Reliable Tech Support",
    "hero.title2": "for Individuals & Small Businesses",
    "hero.sub": "Computer and software help in Algiers, including Windows setup, Wi-Fi, and printer configuration.",
    "hero.cta1": "Request Support on WhatsApp",
    "hero.cta2": "Explore Services",
    "hero.badge1.title": "No Full-time IT Needed",
    "hero.badge1.desc": "Practical and cost-effective",
    "hero.badge2.title": "Direct on WhatsApp",
    "hero.badge2.desc": "Fast and responsive",
    "hero.imageLabel": "Computer support for all",
    "hero.imageTitle": "Practical technical help",
    "hero.imageText": "Windows, printer, and network setup according to your needs.",
    "home.services.title": "Tech services for offices and students",
    "home.services.description": "Support for offices and individuals, plus student document formatting based on institution requirements.",
    "studentService.title": "Thesis and student report formatting",
    "studentService.description": "Word formatting for theses, internship reports and training projects, following your institution's requirements.",
    "studentService.action": "Read more",
    "studentService.imageAlt": "Student taking notes for a thesis",
    "footer.rights": "All rights reserved"
  }
};

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;
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
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  const message = encodeURIComponent(dict["wa.message"] || "مرحبًا iComputer");
  document.querySelectorAll("a[data-whatsapp-link]").forEach(link => {
    link.href = `https://wa.me/rai.med.elamine?text=${message}`;
  });
  try { localStorage.setItem("lang", lang); } catch(e) {}
}

document.addEventListener("DOMContentLoaded", () => {
  // Year update
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Language init
  let savedLang = "ar";
  try { savedLang = localStorage.getItem("lang") || "ar"; } catch(e) {}
  setLanguage(savedLang);

  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  // Mobile menu toggle
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  if (menuBtn && navLinks) {
    const setMenuOpen = (open) => {
      navLinks.classList.toggle("open", open);
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.setAttribute("aria-label", open ? "إغلاق القائمة" : "فتح القائمة");
    };

    menuBtn.addEventListener("click", () => {
      setMenuOpen(!navLinks.classList.contains("open"));
    });
    navLinks.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => setMenuOpen(false))
    );
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && navLinks.classList.contains("open")) {
        setMenuOpen(false);
        menuBtn.focus();
      }
    });
  }

  // Smooth pointer backdrop drift
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    let backdropFrame = 0;
    let pointerX = 0;
    let pointerY = 0;

    window.addEventListener("pointermove", event => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (backdropFrame) return;

      backdropFrame = window.requestAnimationFrame(() => {
        const offsetX = (pointerX / window.innerWidth - 0.5) * 20;
        const offsetY = (pointerY / window.innerHeight - 0.5) * 16;
        document.documentElement.style.setProperty("--backdrop-x", `${offsetX.toFixed(1)}px`);
        document.documentElement.style.setProperty("--backdrop-y", `${offsetY.toFixed(1)}px`);
        backdropFrame = 0;
      });
    }, { passive: true });

    const resetBackdrop = () => {
      if (backdropFrame) window.cancelAnimationFrame(backdropFrame);
      backdropFrame = 0;
      document.documentElement.style.setProperty("--backdrop-x", "0px");
      document.documentElement.style.setProperty("--backdrop-y", "0px");
    };

    window.addEventListener("blur", resetBackdrop);
    window.addEventListener("pointerout", event => {
      if (!event.relatedTarget) resetBackdrop();
    });
  }

  // Scroll reveal
  const revealItems = document.querySelectorAll(
    ".card, .stat, .faq-list details, .sector-card, .problem-card, .timeline-step, .why-card, .service-card-box"
  );

  if (reduceMotion) {
    revealItems.forEach(el => el.classList.add("is-visible"));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    revealItems.forEach(el => {
      el.classList.add("scroll-reveal");
      io.observe(el);
    });
  }

  // Subtle 3D tilt
  const tiltItems = document.querySelectorAll(
    ".card, .sector-card, .problem-card, .timeline-step, .why-card, .hero-image-card"
  );

  tiltItems.forEach(el => {
    el.classList.add("tilt-card");
    if (reduceMotion) return;

    const resetTilt = () => {
      el.style.setProperty("--tilt-x", "0deg");
      el.style.setProperty("--tilt-y", "0deg");
      el.classList.remove("is-tilting");
    };

    const setTilt = event => {
      const bounds = el.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;

      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;

      el.style.setProperty("--tilt-x", `${((0.5 - y) * 6).toFixed(2)}deg`);
      el.style.setProperty("--tilt-y", `${((x - 0.5) * 6).toFixed(2)}deg`);
      el.classList.add("is-tilting");
    };

    el.addEventListener("pointermove", event => {
      if (event.pointerType === "mouse" || event.pointerType === "pen") {
        setTilt(event);
      }
    });
    el.addEventListener("pointerdown", event => {
      if (event.pointerType === "touch") setTilt(event);
    });
    el.addEventListener("pointerup", resetTilt);
    el.addEventListener("pointercancel", resetTilt);
    el.addEventListener("pointerleave", resetTilt);
  });
});
