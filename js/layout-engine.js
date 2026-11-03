/**
 * iComputer Urban Tech DZ — Dynamic Homepage Design Engine
 * Manages 12 distinct homepage design variations:
 * 1. split-hero
 * 2. minimal-centered
 * 3. bento-grid
 * 4. editorial-layout
 * 5. asymmetric-layout
 * 6. full-width-sections
 * 7. sidebar-layout
 * 8. layered-cards
 * 9. typography-first
 * 10. horizontal-flow
 * 11. modular-layout
 * 12. premium-immersive
 */

(() => {
  const STORAGE_KEY = "icomputer_layout_v1";
  const PREVIOUS_KEY = "icomputer_layout_prev_v1";

  const LAYOUTS = [
    { id: "split-hero", name: "Split Hero", desc: "Classic high-tech split view hero with tools launcher" },
    { id: "minimal-centered", name: "Minimal Centered", desc: "Symmetrical museum-grade focus and central hierarchy" },
    { id: "bento-grid", name: "Bento Grid", desc: "Multi-span modular cards with structured proportions" },
    { id: "editorial-layout", name: "Editorial Layout", desc: "Refined publication typography with streamlined cards" },
    { id: "asymmetric-layout", name: "Asymmetric Layout", desc: "Dynamic staggered offsets and deliberate tension" },
    { id: "full-width-sections", name: "Full Width Sections", desc: "Edge-to-edge content bands with alternating depths" },
    { id: "sidebar-layout", name: "Sidebar Layout", desc: "Persistent sticky summary side-by-side with feed" },
    { id: "layered-cards", name: "Layered Cards", desc: "Tactile elevated sheets with deep ambient shadows" },
    { id: "typography-first", name: "Typography First", desc: "High-contrast massive headlines with clean textual cues" },
    { id: "horizontal-flow", name: "Horizontal Flow", desc: "Smooth horizontal snap carousel for service discoverability" },
    { id: "modular-layout", name: "Modular Layout", desc: "Immediate direct access to contact and core workflows" },
    { id: "premium-immersive", name: "Premium Immersive", desc: "Obsidian glass canvas with radiant sapphire glow" }
  ];

  function getStoredLayout() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && LAYOUTS.some(l => l.id === stored)) {
        return stored;
      }
    } catch (e) {
      console.warn("Storage access restricted:", e);
    }
    return null;
  }

  function pickRandomLayout() {
    let prev = null;
    try {
      prev = localStorage.getItem(PREVIOUS_KEY);
    } catch (e) {}

    const eligible = prev ? LAYOUTS.filter(l => l.id !== prev) : LAYOUTS;
    const picked = eligible[Math.floor(Math.random() * eligible.length)] || LAYOUTS[0];
    return picked.id;
  }

  function applyLayout(layoutId, persist = true) {
    const layout = LAYOUTS.find(l => l.id === layoutId) || LAYOUTS[0];
    document.documentElement.dataset.layout = layout.id;

    if (persist) {
      try {
        const current = localStorage.getItem(STORAGE_KEY);
        if (current && current !== layout.id) {
          localStorage.setItem(PREVIOUS_KEY, current);
        }
        localStorage.setItem(STORAGE_KEY, layout.id);
      } catch (e) {
        console.warn("Could not save layout choice:", e);
      }
    }

    updatePill(layout);
    updateModalActiveState(layout.id);
  }

  // URL query override (e.g. ?layout=bento-grid)
  let activeLayout = null;
  try {
    const params = new URLSearchParams(window.location.search);
    const urlLayout = params.get("layout");
    if (urlLayout && LAYOUTS.some(l => l.id === urlLayout)) {
      activeLayout = urlLayout;
    }
  } catch (e) {}

  if (!activeLayout) {
    activeLayout = getStoredLayout();
  }

  if (!activeLayout) {
    activeLayout = pickRandomLayout();
  }

  // Apply immediately before DOM render
  applyLayout(activeLayout, true);

  // Switcher UI
  function updatePill(layout) {
    const badge = document.querySelector("[data-layout-current-name]");
    if (badge) {
      badge.textContent = layout.name;
    }
  }

  function updateModalActiveState(layoutId) {
    document.querySelectorAll(".layout-option-btn").forEach(btn => {
      const isCurrent = btn.dataset.layoutTarget === layoutId;
      btn.classList.toggle("is-active", isCurrent);
      btn.setAttribute("aria-pressed", isCurrent ? "true" : "false");
    });
  }

  function createUI() {
    if (document.querySelector(".layout-switcher-pill")) return;

    // Pill
    const pill = document.createElement("aside");
    pill.className = "layout-switcher-pill";
    pill.setAttribute("aria-label", "Homepage Design Engine");
    pill.innerHTML = `
      <button type="button" data-layout-open-modal aria-haspopup="dialog" aria-expanded="false">
        <svg class="icon" aria-hidden="true" style="width:16px;height:16px;"><use href="#i-wrench"></use></svg>
        <span>Design:</span>
        <span class="layout-badge" data-layout-current-name>${LAYOUTS.find(l => l.id === activeLayout)?.name || "Split Hero"}</span>
      </button>
    `;
    document.body.appendChild(pill);

    // Modal
    const backdrop = document.createElement("div");
    backdrop.className = "layout-modal-backdrop";
    backdrop.setAttribute("role", "dialog");
    backdrop.setAttribute("aria-modal", "true");
    backdrop.setAttribute("aria-label", "Select Homepage Design Variation");
    backdrop.innerHTML = `
      <div class="layout-modal">
        <div class="layout-modal-head">
          <h3>
            <svg class="icon" style="width:20px;height:20px;color:var(--accent);"><use href="#i-monitor"></use></svg>
            <span>Homepage Design Engine (12 Variations)</span>
          </h3>
          <button type="button" class="layout-modal-close" aria-label="Close" data-layout-close-modal>&times;</button>
        </div>
        <div class="layout-modal-grid">
          ${LAYOUTS.map(l => `
            <button type="button" class="layout-option-btn ${l.id === activeLayout ? "is-active" : ""}" data-layout-target="${l.id}">
              <span class="layout-option-name">${l.name}</span>
              <span class="layout-option-desc">${l.desc}</span>
            </button>
          `).join("")}
        </div>
      </div>
    `;
    document.body.appendChild(backdrop);

    // Event listeners
    const openBtn = pill.querySelector("[data-layout-open-modal]");
    const closeBtn = backdrop.querySelector("[data-layout-close-modal]");

    const openModal = () => {
      backdrop.classList.add("is-open");
      openBtn.setAttribute("aria-expanded", "true");
    };

    const closeModal = () => {
      backdrop.classList.remove("is-open");
      openBtn.setAttribute("aria-expanded", "false");
    };

    openBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);

    backdrop.addEventListener("click", e => {
      if (e.target === backdrop) closeModal();
    });

    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && backdrop.classList.contains("is-open")) {
        closeModal();
      }
    });

    backdrop.querySelectorAll(".layout-option-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetLayout = btn.dataset.layoutTarget;
        applyLayout(targetLayout, true);
        closeModal();
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createUI);
  } else {
    createUI();
  }
})();

