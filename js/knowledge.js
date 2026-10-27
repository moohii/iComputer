/**
 * Knowledge Base Controller - iComputer Urban Tech DZ
 * Handles live search, category filtering, link sharing, and interactive stats.
 */

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("knowledgeSearch");
  const clearBtn = document.getElementById("knowledgeSearchClear");
  const filterPills = document.querySelectorAll(".filter-pill");
  const articles = document.querySelectorAll(".knowledge-article-item");
  const emptyState = document.getElementById("knowledgeEmptyState");
  const resetSearchBtn = document.getElementById("resetSearchBtn");
  const countAll = document.getElementById("countAll");
  const toast = document.getElementById("knowledgeToast");

  let currentCategory = "all";
  let searchQuery = "";

  // Update total count
  if (countAll) {
    countAll.textContent = articles.length;
  }

  // Update counts for each category
  filterPills.forEach(pill => {
    const filter = pill.dataset.filter;
    if (filter && filter !== "all") {
      const countEl = pill.querySelector(".filter-count");
      if (countEl) {
        const matches = document.querySelectorAll(`.knowledge-article-item[data-category="${filter}"]`);
        countEl.textContent = matches.length;
      }
    }
  });

  // Filter & Search Logic
  function applyFilters() {
    let visibleCount = 0;
    const query = searchQuery.trim().toLowerCase();

    articles.forEach(article => {
      const category = article.dataset.category || "";
      const matchesCategory = (currentCategory === "all" || category === currentCategory);

      let matchesSearch = true;
      if (query.length > 0) {
        const textContent = (article.dataset.keywords || "" + " " + article.innerText).toLowerCase();
        matchesSearch = textContent.includes(query);
      }

      if (matchesCategory && matchesSearch) {
        article.style.display = "";
        visibleCount++;
      } else {
        article.style.display = "none";
      }
    });

    if (emptyState) {
      emptyState.classList.toggle("is-visible", visibleCount === 0);
    }

    if (clearBtn) {
      clearBtn.style.display = query.length > 0 ? "block" : "none";
    }
  }

  // Search input events
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      applyFilters();
    });

    // Support keyboard shortcut: '/' to focus search
    window.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== searchInput && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      }
    });
  }

  // Clear button
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        searchQuery = "";
        searchInput.focus();
        applyFilters();
      }
    });
  }

  // Reset button in empty state
  if (resetSearchBtn) {
    resetSearchBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        searchQuery = "";
      }
      currentCategory = "all";
      filterPills.forEach(p => p.classList.toggle("active", p.dataset.filter === "all"));
      applyFilters();
    });
  }

  // Category filter pills click
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentCategory = pill.dataset.filter || "all";
      applyFilters();
    });
  });

  // Share / Copy Link buttons
  function showToast(message) {
    if (!toast) return;
    toast.querySelector(".toast-message").textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }

  document.querySelectorAll("[data-copy-link]").forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-copy-link");
      const url = new URL(window.location.href);
      url.hash = targetId;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url.toString()).then(() => {
          showToast("تم نسخ رابط المقال إلى الحافظة بنجاح!");
        }).catch(() => {
          fallbackCopyText(url.toString());
        });
      } else {
        fallbackCopyText(url.toString());
      }
    });
  });

  function fallbackCopyText(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand("copy");
      showToast("تم نسخ رابط المقال بنجاح!");
    } catch (err) {
      showToast("تعذر نسخ الرابط تلقائياً.");
    }
    document.body.removeChild(textarea);
  }

  // Highlight card if accessed with anchor hash
  if (window.location.hash) {
    const targetCard = document.querySelector(window.location.hash);
    if (targetCard) {
      setTimeout(() => {
        targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
        targetCard.style.outline = "2px solid var(--primary)";
        setTimeout(() => {
          targetCard.style.transition = "outline 1s ease";
          targetCard.style.outline = "none";
        }, 2000);
      }, 350);
    }
  }
});
