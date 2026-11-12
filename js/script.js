/* ==========================================================================
   YAHYA DRAPERY — script.js
   ==========================================================================
   ✎ OWNER EDIT GUIDE — this file is the one place to update your shop info.
   1) Edit the CONFIG object below (phone, WhatsApp, address, hours, email).
   2) Edit / add fabrics in the FABRICS list (they appear on the site
      automatically). Photos can replace the CSS swatch art later.
   ========================================================================== */

const CONFIG = {
  phoneDisplay: "+1 (555) 123-4567",          // shown on the site
  phoneDial: "+15551234567",                  // used for tel: links
  whatsappNumber: "15551234567",              // digits only, incl. country code — no +, spaces or dashes
  email: "hello@yahyadrapery.com",
  address: "Shop 14, Textile Market, Main Bazaar Road",
  hours: "Sat–Thu · 9:00 – 20:00<br>Fri · closed",
};

/* ---------- Fabric catalogue (swatch = CSS art class from styles.css) ---------- */
const FABRICS = [
  {
    id: "royal-silk", name: "Royal Blue Silk", category: "silk", swatch: "sw-silk-royal", bolts: true,
    desc: "A liquid-soft mulberry silk with a deep cobalt sheen. Slides through the fingers like water.",
    meta: "Mulberry silk · 114 cm wide · dry clean",
  },
  {
    id: "champagne-silk", name: "Champagne Silk", category: "silk", swatch: "sw-silk-champagne", bolts: true,
    desc: "Warm gold-toned silk with a gentle lustre — the classic choice for hotel-style drapes.",
    meta: "Silk touch satin · 140 cm wide · dry clean",
  },
  {
    id: "emerald-velvet", name: "Emerald Velvet", category: "velvet", swatch: "sw-velvet-emerald", bolts: true,
    desc: "Deep pile velvet in bottle green. Heavy, warm and dramatic in low light.",
    meta: "Cotton-back velvet · 150 cm wide · dry clean",
  },
  {
    id: "midnight-plum", name: "Midnight Plum Velvet", category: "velvet", swatch: "sw-velvet-plum", bolts: false,
    desc: "Almost-black plum with a wine-coloured glow where the light catches the pile.",
    meta: "Crush-resistant velvet · 145 cm wide · dry clean",
  },
  {
    id: "natural-linen", name: "Natural Linen", category: "linen", swatch: "sw-linen-natural", bolts: true,
    desc: "Unbleached European flax with an honest slub. Softens beautifully with every wash.",
    meta: "100% flax linen · 190 cm wide · machine wash cool",
  },
  {
    id: "slate-linen", name: "Slate Linen", category: "linen", swatch: "sw-linen-slate", bolts: false,
    desc: "Cool grey linen for calm, contemporary rooms. Pairs with brass and pale timber.",
    meta: "Linen-cotton blend · 220 cm wide · machine wash cool",
  },
  {
    id: "ivory-cotton", name: "Ivory Cotton", category: "cotton", swatch: "sw-cotton-ivory", bolts: true,
    desc: "Crisp long-staple cotton in soft ivory. The quiet workhorse of the shel— and of every tailor's bench.",
    meta: "100% cotton poplin · 150 cm wide · machine wash warm",
  },
  {
    id: "terracotta-cotton", name: "Terracotta Cotton", category: "cotton", swatch: "sw-cotton-terracotta", bolts: true,
    desc: "Sun-baked clay tones in a brushed cotton. Warms up a north-facing window instantly.",
    meta: "Brushed cotton twill · 148 cm wide · machine wash warm",
  },
  {
    id: "damask-brocade", name: "Damask Brocade", category: "drapery", swatch: "sw-brocade-gold", bolts: true,
    desc: "Woven gold damask on oxblood ground — the bolt everyone stops to touch.",
    meta: "Jacquard brocade · 135 cm wide · dry clean",
  },
  {
    id: "theatre-folds", name: "Theatre Drapery", category: "drapery", swatch: "sw-drapery-folds", bolts: true,
    desc: "Heavy pleated drapery cloth that falls in deep, sculpted folds. Stage-grade weight.",
    meta: "Trevira drapery · 300 cm wide · dry clean",
  },
  {
    id: "blackout-charcoal", name: "Charcoal Blackout", category: "drapery", swatch: "sw-blackout-charcoal", bolts: true,
    desc: "Triple-weave blackout cloth in soft charcoal. Sleeps like a cave, looks like linen.",
    meta: "Blackout weave · 280 cm wide · machine wash cool",
  },
  {
    id: "heritage-tweed", name: "Heritage Tweed", category: "upholstery", swatch: "sw-tweed-heritage", bolts: false,
    desc: "Wool-blend upholstery tweed with a subtle herringbone. Built for armchairs that outlive us.",
    meta: "Wool blend · 140 cm wide · 40,000 rub count",
  },
];

/* ========================================================================== */

/* ---------- Fill shop info into every [data-info] slot ---------- */
function fillShopInfo() {
  const set = (key, value) => {
    document.querySelectorAll(`[data-info="${key}"]`).forEach((el) => (el.textContent = value));
  };
  const setHref = (key, value) => {
    document.querySelectorAll(`[data-info="${key}"]`).forEach((el) => (el.setAttribute("href", value)));
  };
  set("phone", CONFIG.phoneDisplay);
  set("email", CONFIG.email);
  set("address", CONFIG.address);
  set("hours", CONFIG.hours);
  setHref("phone-link", `tel:${CONFIG.phoneDial}`);
  setHref("email-link", `mailto:${CONFIG.email}`);
  const waBase = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Hello Yahya Drapery! I have a question about your fabrics."
  )}`;
  document.querySelectorAll('[data-info="whatsapp-link"]').forEach((el) => el.setAttribute("href", waBase));
  document.getElementById("year").textContent = new Date().getFullYear();
}

/* ---------- Render the collection grid ---------- */
function renderFabrics() {
  const grid = document.getElementById("fabric-grid");
  grid.innerHTML = FABRICS.map(
    (f) => `
    <button class="fabric-card" data-category="${f.category}" data-id="${f.id}" aria-label="View ${f.name}">
      <div class="card-swatch swatch ${f.swatch}"></div>
      <div class="card-body">
        <div class="card-top-row">
          <span class="card-cat">${f.category}</span>
          ${f.bolts ? '<span class="bolt-badge">Full bolts</span>' : ""}
        </div>
        <h3 class="card-name">${f.name}</h3>
        <p class="card-desc">${f.desc}</p>
        <span class="card-cta">View &amp; ask</span>
      </div>
    </button>`
  ).join("");
}

/* ---------- Filtering ---------- */
function initFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = () => document.querySelectorAll(".fabric-card");

  buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;

      cards().forEach((card) => {
        const match = filter === "all" || card.dataset.category === filter;
        card.classList.add("filtering");
        setTimeout(() => {
          card.classList.toggle("hide", !match);
          requestAnimationFrame(() => card.classList.remove("filtering"));
        }, 180);
      });
    })
  );
}

/* ---------- Lightbox ---------- */
function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  const swatch = document.getElementById("lb-swatch");
  const name = document.getElementById("lb-name");
  const category = document.getElementById("lb-category");
  const desc = document.getElementById("lb-desc");
  const meta = document.getElementById("lb-meta");
  const waLink = document.getElementById("lb-whatsapp");
  let lastFocus = null;

  function open(fabric) {
    lastFocus = document.activeElement;
    swatch.className = `lightbox-swatch swatch ${fabric.swatch}`;
    name.textContent = fabric.name;
    category.textContent = fabric.category;
    desc.textContent = fabric.desc;
    meta.textContent = fabric.meta + (fabric.bolts ? " · full bolts available" : "");
    waLink.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(
      `Hello Yahya Drapery! I'm interested in the ${fabric.name}. Is it in stock?`
    )}`;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    lightbox.querySelector(".lightbox-close").focus();
  }

  function close() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  document.getElementById("fabric-grid").addEventListener("click", (e) => {
    const card = e.target.closest(".fabric-card");
    if (!card) return;
    const fabric = FABRICS.find((f) => f.id === card.dataset.id);
    if (fabric) open(fabric);
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) close();
  });
}

/* ---------- Nav ---------- */
function initNav() {
  const nav = document.querySelector(".site-nav");
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");

  window.addEventListener(
    "scroll",
    () => nav.classList.toggle("scrolled", window.scrollY > 24),
    { passive: true }
  );

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      }),
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

/* ---------- Stat count-up ---------- */
function initCounters() {
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  const animate = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(ease(p) * target).toLocaleString();
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          io.unobserve(entry.target);
        }
      }),
    { threshold: 0.6 }
  );
  document.querySelectorAll(".stat-num").forEach((el) => io.observe(el));
}

/* ---------- Toast ---------- */
let toastTimer;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3600);
}

/* ---------- Notify form (client-side only for now) ---------- */
function initNotifyForm() {
  const form = document.getElementById("notify-form");
  const input = document.getElementById("notify-email");
  const btn = document.getElementById("notify-btn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = input.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      input.classList.add("invalid");
      input.focus();
      showToast("Please enter a valid email address.");
      return;
    }
    input.classList.remove("invalid");

    // Phase 1: stored in this browser only — a real mailing list comes with the web server.
    try {
      const list = JSON.parse(localStorage.getItem("yd_notify_list") || "[]");
      if (!list.includes(email)) list.push(email);
      localStorage.setItem("yd_notify_list", JSON.stringify(list));
    } catch (_) { /* private browsing — the toast still shows */ }

    input.value = "";
    const original = btn.textContent;
    btn.textContent = "You're on the list ✓";
    setTimeout(() => (btn.textContent = original), 2600);
    showToast("Thank you — you'll be first through the door.");
  });

  input.addEventListener("input", () => input.classList.remove("invalid"));
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  fillShopInfo();
  renderFabrics();
  initFilters();
  initLightbox();
  initNav();
  initReveal();
  initCounters();
  initNotifyForm();
});
