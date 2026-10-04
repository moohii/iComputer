(() => {
  const storageKey = "theme";
  const validThemes = ["dark", "light"];
  let theme = "dark";

  try {
    const storedTheme = localStorage.getItem(storageKey);
    if (validThemes.includes(storedTheme)) theme = storedTheme;
  } catch (error) {
    console.warn("Unable to read the saved color theme.", error);
  }

  document.documentElement.dataset.theme = theme;

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-theme-toggle]").forEach(button => {
      const updateButton = () => {
        const isDark = document.documentElement.dataset.theme === "dark";
        button.textContent = isDark ? "☼" : "☾";
        button.setAttribute("aria-pressed", String(isDark));
        button.title = isDark ? "التبديل إلى الوضع الفاتح" : "التبديل إلى الوضع الداكن";
      };

      updateButton();
      button.addEventListener("click", () => {
        const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = nextTheme;
        updateButton();

        try {
          localStorage.setItem(storageKey, nextTheme);
        } catch (error) {
          console.warn("Unable to save the selected color theme.", error);
        }
      });
    });
  });
})();
