(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  const storageKey = "icomputerIntroSeen";

  try {
    if (sessionStorage.getItem(storageKey) === "true") {
      return;
    }
  } catch (error) {
    return;
  }

  const LANG_TEXT = {
    ar: {
      skip: "تخطّي",
      nav: ["الرئيسية", "الخدمات", "الأسعار", "تواصل"],
      brand: "iComputer Urban Tech DZ",
      slogan: "دعم تقني وبرمجي للأفراد والشركات"
    },
    fr: {
      skip: "Passer",
      nav: ["Accueil", "Services", "Tarifs", "Contact"],
      brand: "iComputer Urban Tech DZ",
      slogan: "Support technique et logiciel pour particuliers et entreprises"
    },
    en: {
      skip: "Skip",
      nav: ["Home", "Services", "Pricing", "Contact"],
      brand: "iComputer Urban Tech DZ",
      slogan: "Technical and software support for individuals and businesses"
    }
  };

  const lang = (document.documentElement.lang || "ar").toLowerCase();
  const text = LANG_TEXT[lang] || LANG_TEXT.ar;

  const overlay = document.createElement("div");
  overlay.className = "intro-overlay";
  overlay.setAttribute("aria-live", "polite");
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-label", text.brand);

  overlay.innerHTML = `
    <div class="intro-room" aria-hidden="true">
      <div class="intro-lamp"></div>
      <div class="intro-couch"></div>
      <div class="intro-floor"></div>
    </div>

    <div class="intro-panel">
      <div class="intro-content">
        <div class="intro-brand" aria-label="iComputer Urban Tech DZ">
          <span class="intro-brand-mark" aria-hidden="true">iC</span>
          <div class="intro-brand-name">
            iComputer
            <small>Urban Tech DZ</small>
          </div>
        </div>

        <p class="intro-tagline">${text.slogan}</p>

        <div class="intro-progress" aria-hidden="true">
          <div class="intro-progress-bar"></div>
        </div>

        <div class="intro-actions">
          <button class="intro-skip" type="button" data-intro-skip>${text.skip}</button>
        </div>
      </div>
    </div>

    <nav class="intro-nav" aria-label="Main navigation">
      ${text.nav.map(item => `<a href="#" aria-label="${item}">${item}</a>`).join("")}
    </nav>
  `;

  document.body.appendChild(overlay);
  document.body.classList.add("intro-active");

  const finishIntro = function () {
    overlay.classList.add("is-hiding");
    document.body.classList.remove("intro-active");

    try {
      sessionStorage.setItem(storageKey, "true");
    } catch (error) {
      // Ignore sessionStorage restrictions.
    }

    window.setTimeout(function () {
      overlay.remove();
    }, 900);
  };

  window.setTimeout(function () {
    overlay.classList.add("is-expanded");
  }, 180);

  let finishTimer = window.setTimeout(finishIntro, 4500);

  const skipIntro = function () {
    window.clearTimeout(finishTimer);
    finishIntro();
  };

  const skipButton = overlay.querySelector("[data-intro-skip]");
  if (skipButton) {
    skipButton.addEventListener("click", skipIntro);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      skipIntro();
    }
  }, { once: true });

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      skipIntro();
    }
  });
})();
