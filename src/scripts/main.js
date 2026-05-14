const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

const menuToggle = qs("[data-menu-toggle]");
const mobileNav = qs("[data-mobile-nav]");

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
}

const megaToggle = qs("[data-mega-toggle]");
const megaPanel = qs("[data-mega-panel]");

if (megaToggle && megaPanel) {
  megaToggle.addEventListener("click", () => {
    const open = megaPanel.classList.toggle("is-open");
    megaToggle.setAttribute("aria-expanded", String(open));
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-services")) {
      megaPanel.classList.remove("is-open");
      megaToggle.setAttribute("aria-expanded", "false");
    }
  });
}

function openDialog(dialog) {
  if (!dialog) return;
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
  document.body.classList.add("modal-open");
}

function closeDialog(dialog) {
  if (!dialog) return;
  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
  document.body.classList.remove("modal-open");
}

const quoteDialog = qs("[data-quote-dialog]");
const showreelDialog = qs("[data-showreel-dialog]");

qsa("[data-open-quote]").forEach((button) => {
  button.addEventListener("click", () => openDialog(quoteDialog));
});

qsa("[data-open-showreel]").forEach((button) => {
  button.addEventListener("click", () => openDialog(showreelDialog));
});

qsa("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", () => closeDialog(button.closest("dialog")));
});

qsa("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog(dialog);
  });
  dialog.addEventListener("close", () => document.body.classList.remove("modal-open"));
});

qsa("[data-contact-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = qs(".form-status", form);
    const data = Object.fromEntries(new FormData(form).entries());
    const missing = ["name", "email", "company", "message"].filter((key) => !String(data[key] || "").trim());

    if (missing.length) {
      if (status) status.textContent = "Please complete the required fields.";
      return;
    }

    if (status) {
      status.textContent = "Thanks. Your enquiry has been captured locally for this demo.";
    }
    form.reset();
  });
});

qsa("[data-filter-button]").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.dataset.filterButton;
    qsa("[data-filter-button]").forEach((item) => item.classList.toggle("is-active", item === button));
    qsa("[data-filter-card]").forEach((card) => {
      const visible = group === "all" || card.dataset.filterCard === group;
      card.classList.toggle("is-hidden", !visible);
    });
  });
});

const blogSearch = qs("[data-blog-search]");
let activeBlogCategory = "all";

function updateBlogs() {
  const search = String(blogSearch?.value || "").trim().toLowerCase();
  qsa("[data-blog-card]").forEach((card) => {
    const matchesCategory = activeBlogCategory === "all" || card.dataset.category === activeBlogCategory;
    const matchesSearch = !search || String(card.dataset.title || "").includes(search);
    card.classList.toggle("is-hidden", !(matchesCategory && matchesSearch));
  });
}

if (blogSearch) {
  blogSearch.addEventListener("input", updateBlogs);
}

qsa("[data-blog-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    activeBlogCategory = button.dataset.blogFilter || "all";
    qsa("[data-blog-filter]").forEach((item) => item.classList.toggle("is-active", item === button));
    updateBlogs();
  });
});

qsa("[data-carousel]").forEach((carousel) => {
  const slides = qsa("[data-carousel-slide]", carousel);
  const prev = qs("[data-carousel-prev]", carousel);
  const next = qs("[data-carousel-next]", carousel);
  let current = 0;

  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === current);
    });
  };

  prev?.addEventListener("click", () => show(current - 1));
  next?.addEventListener("click", () => show(current + 1));

  window.setInterval(() => {
    if (!document.hidden && slides.length > 1) show(current + 1);
  }, 7000);
});

const revealTargets = qsa(
  ".section, .service-panel, .feature-card, .work-card, .blog-card, .specialty-card, .architecture-card, .timeline article, .tech-grid span"
);

revealTargets.forEach((target) => target.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

qsa("[data-depth-scene]").forEach((scene) => {
  const layers = qsa("[data-depth]", scene);

  scene.addEventListener("pointermove", (event) => {
    const rect = scene.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    layers.forEach((layer) => {
      const depth = Number(layer.dataset.depth || 8);
      layer.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0) rotateX(${y * -6}deg) rotateY(${x * 8}deg)`;
    });
  });

  scene.addEventListener("pointerleave", () => {
    layers.forEach((layer) => {
      layer.style.transform = "";
    });
  });
});

qsa("[data-tilt]").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--tilt-x", `${y * -4}deg`);
    card.style.setProperty("--tilt-y", `${x * 5}deg`);
  });

  card.addEventListener("pointerleave", () => {
    card.style.removeProperty("--tilt-x");
    card.style.removeProperty("--tilt-y");
  });
});
