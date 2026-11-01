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

  const updateButton = button => {
    const isDark = document.documentElement.dataset.theme === "dark";
    button.setAttribute("aria-pressed", String(isDark));
    button.dataset.state = isDark ? "dark" : "light";
  };

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-theme-toggle]").forEach(button => {
      updateButton(button);

      button.addEventListener("click", () => {
        const nextTheme =
          document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = nextTheme;
        updateButton(button);

        document.dispatchEvent(
          new CustomEvent("themechange", { detail: { theme: nextTheme } })
        );

        try {
          localStorage.setItem(storageKey, nextTheme);
        } catch (error) {
          console.warn("Unable to save the selected color theme.", error);
        }
      });
    });
  });
})();
