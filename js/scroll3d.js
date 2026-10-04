(() => {
  const script = document.currentScript;
  if (!script || !document.body) return;

  const autoSelector = script.dataset.auto;
  if (autoSelector) {
    document.querySelectorAll(autoSelector).forEach(element => {
      if (element.classList.contains("brand-logo")) return;
      if (!element.hasAttribute("data-scroll3d")) {
        element.setAttribute("data-scroll3d", "tilt");
      }
    });
  }

  const targets = new Set(document.querySelectorAll("[data-scroll3d]"));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let frame = 0;
  let visibleTargets = new Set();
  let baseHue = 210;
  let baseSaturation = 84;
  let baseLightness = 64;

  const backgroundDisabled = script.dataset.bg === "off";
  if (!backgroundDisabled) {
    const background = document.createElement("div");
    background.className = "bg3d";
    background.setAttribute("aria-hidden", "true");
    background.innerHTML = `
      <div class="bg3d-floor"></div>
      <div class="bg3d-cubes">
        ${[
          ["12%", "18%", "72px", "36px", "0.45"],
          ["30%", "57%", "48px", "24px", "-0.32"],
          ["54%", "24%", "92px", "46px", "0.24"],
          ["72%", "62%", "58px", "29px", "-0.5"],
          ["88%", "34%", "76px", "38px", "0.38"],
          ["43%", "82%", "42px", "21px", "-0.22"]
        ].map(([x, y, size, halfSize, speed]) => `
          <div class="bg3d-cube" style="--x:${x};--y:${y};--s:${size};--half:${halfSize};--k:${speed}">
            <div class="bg3d-face bg3d-front"></div>
            <div class="bg3d-face bg3d-back"></div>
            <div class="bg3d-face bg3d-right"></div>
            <div class="bg3d-face bg3d-left"></div>
            <div class="bg3d-face bg3d-top"></div>
            <div class="bg3d-face bg3d-bottom"></div>
          </div>
        `).join("")}
      </div>
      <div class="bg3d-glow bg3d-glow-one"></div>
      <div class="bg3d-glow bg3d-glow-two"></div>`;
    document.body.insertBefore(background, document.body.firstChild);
    document.body.classList.add("bg3d-enabled");
  }

  const primaryButton = document.querySelector(".btn-primary");
  const getAccentColor = () => {
    const buttonBackground = primaryButton
      ? getComputedStyle(primaryButton).backgroundImage
      : "";
    const colorMatch = buttonBackground.match(
      /rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/
    );

    if (colorMatch) {
      const [red, green, blue] = colorMatch.slice(1).map(Number);
      const maximum = Math.max(red, green, blue) / 255;
      const minimum = Math.min(red, green, blue) / 255;
      const delta = maximum - minimum;
      let hue = 0;

      if (delta) {
        if (maximum === red / 255) {
          hue = ((green / 255 - blue / 255) / delta) % 6;
        } else if (maximum === green / 255) {
          hue = (blue / 255 - red / 255) / delta + 2;
        } else {
          hue = (red / 255 - green / 255) / delta + 4;
        }
        hue *= 60;
      }

      const lightness = (maximum + minimum) / 2;
      const saturation = delta
        ? delta / (1 - Math.abs(2 * lightness - 1))
        : 0;
      baseHue = (hue + 360) % 360;
      baseSaturation = saturation * 100;
      baseLightness = lightness * 100;
      return;
    }

    const primary = getComputedStyle(document.documentElement)
      .getPropertyValue("--primary").trim();
    const rootColor = primary.match(
      /^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i
    );
    if (rootColor) {
      const [red, green, blue] = rootColor.slice(1).map(value => parseInt(value, 16));
      const maximum = Math.max(red, green, blue) / 255;
      const minimum = Math.min(red, green, blue) / 255;
      const delta = maximum - minimum;
      let hue = 0;
      if (delta) {
        if (maximum === red / 255) hue = ((green / 255 - blue / 255) / delta) % 6;
        else if (maximum === green / 255) hue = (blue / 255 - red / 255) / delta + 2;
        else hue = (red / 255 - green / 255) / delta + 4;
        hue *= 60;
      }
      const lightness = (maximum + minimum) / 2;
      const saturation = delta
        ? delta / (1 - Math.abs(2 * lightness - 1))
        : 0;
      baseHue = (hue + 360) % 360;
      baseSaturation = saturation * 100;
      baseLightness = lightness * 100;
    }
  };

  const updateAccent = scrollY => {
    if (backgroundDisabled) return;
    const hue = (baseHue + Math.sin(scrollY / 620) * 18 + 360) % 360;
    const lightTheme = document.documentElement.dataset.theme === "light";
    const alpha = lightTheme ? 0.09 : 0.16;
    document.documentElement.style.setProperty(
      "--bg3d-line",
      `hsla(${hue.toFixed(1)}, ${baseSaturation.toFixed(1)}%, ${baseLightness.toFixed(1)}%, ${alpha})`
    );
    document.documentElement.style.setProperty(
      "--bg3d-glow",
      `hsla(${hue.toFixed(1)}, ${baseSaturation.toFixed(1)}%, ${baseLightness.toFixed(1)}%, ${lightTheme ? 0.09 : 0.16})`
    );
  };
  getAccentColor();

  const clearTransform = element => {
    element.style.transform = "none";
    element.style.opacity = "1";
  };

  const updateTarget = element => {
    if (reducedMotion.matches) {
      clearTransform(element);
      return;
    }

    const rect = element.getBoundingClientRect();
    const denominator = window.innerHeight / 2 + rect.height / 2;
    if (!denominator) return;

    const position = Math.max(
      -1,
      Math.min(1, (rect.top + rect.height / 2 - window.innerHeight / 2) / denominator)
    );
    const distance = Math.abs(position);
    const mode = element.dataset.scroll3d || "tilt";

    if (mode === "rotate") {
      element.style.transform =
        `perspective(1100px) rotateY(${position * 28}deg) scale(${1 - distance * 0.06})`;
      element.style.opacity = "1";
    } else if (mode === "zoom") {
      element.style.transform =
        `perspective(1100px) translateZ(${-distance * 180}px) scale(${1 - distance * 0.05})`;
      element.style.opacity = String(1 - distance * 0.45);
    } else {
      element.style.transform =
        `perspective(1100px) rotateX(${position * 16}deg) translateZ(${-distance * 60}px)`;
      element.style.opacity = "1";
    }
  };

  const render = () => {
    frame = 0;
    const scrollY = window.scrollY;
    if (!backgroundDisabled && !reducedMotion.matches) {
      document.documentElement.style.setProperty("--sy", String(scrollY));
      updateAccent(scrollY);
    }
    visibleTargets.forEach(updateTarget);
  };

  const scheduleRender = () => {
    if (frame || reducedMotion.matches) return;
    frame = window.requestAnimationFrame(render);
  };

  const observer = "IntersectionObserver" in window
    ? new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            visibleTargets.add(entry.target);
            scheduleRender();
          } else {
            visibleTargets.delete(entry.target);
            clearTransform(entry.target);
          }
        });
      }, { rootMargin: "20% 0px 20% 0px" })
    : null;

  targets.forEach(element => {
    if (observer) observer.observe(element);
    else visibleTargets.add(element);
  });

  const resetForReducedMotion = () => {
    if (frame) window.cancelAnimationFrame(frame);
    frame = 0;
    if (reducedMotion.matches) {
      targets.forEach(clearTransform);
      document.documentElement.style.setProperty("--sy", "0");
    } else {
      scheduleRender();
    }
  };

  reducedMotion.addEventListener("change", resetForReducedMotion);
  window.addEventListener("scroll", scheduleRender, { passive: true });
  window.addEventListener("resize", scheduleRender, { passive: true });

  if (reducedMotion.matches) resetForReducedMotion();
  else scheduleRender();

  if (!backgroundDisabled) {
    const themeObserver = new MutationObserver(() => {
      getAccentColor();
      updateAccent(window.scrollY);
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"]
    });
  }
})();
