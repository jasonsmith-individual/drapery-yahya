/* ==========================================================================
   YAHYA DRAPERY — script.js
   ==========================================================================
   ✎ OWNER EDIT GUIDE — this file is the one place to update your shop info.
   1) Edit the CONFIG object below (phone, WhatsApp, address, hours — in both
      English and Farsi).
   2) Edit / add fabrics in the FABRICS list (each has English fields and a
      `fa:` block with the Farsi name/description). They appear on the site
      automatically. Photos can replace the CSS swatch art later.
   3) All other site text lives in js/i18n.js.
   ========================================================================== */

const CONFIG = {
  phoneDisplay: "+98123989227",               // shown on the site
  phoneDial: "+98123989227",                  // used for tel: links
  whatsappNumber: "98123989227",              // digits only, incl. country code — no +, spaces or dashes
  email: "hello@yahyadrapery.com",
  en: {
    address: "Shop 14, Textile Market, Main Bazaar Road",
    hours: "Sat–Thu · 9:00 – 20:00<br>Fri · closed",
  },
  fa: {
    address: "فروشگاه ۱۴، بازار پارچه، خیابان اصلی بازار",
    hours: "شنبه تا پنجشنبه · ۹:۰۰ – ۲۰:۰۰<br>جمعه · تعطیل",
  },
};

/* ---------- Fabric catalogue (swatch = CSS art class from styles.css) ---------- */
const FABRICS = [
  {
    id: "royal-silk", category: "silk", swatch: "sw-silk-royal", bolts: true,
    name: "Royal Blue Silk",
    desc: "A liquid-soft mulberry silk with a deep cobalt sheen. Slides through the fingers like water.",
    meta: "Mulberry silk · 114 cm wide · dry clean",
    fa: { name: "ابریشم آبی سلطنتی", desc: "ابریشم مالبریِ نرم و لغزنده با درخشش لاجوردیِ عمیق. مثل آب از میان انگشتان می‌گذرد.", meta: "ابریشم مالبری · عرض ۱۱۴ سانتی‌متر · خشک‌شویی" },
  },
  {
    id: "champagne-silk", category: "silk", swatch: "sw-silk-champagne", bolts: true,
    name: "Champagne Silk",
    desc: "Warm gold-toned silk with a gentle lustre — the classic choice for hotel-style drapes.",
    meta: "Silk touch satin · 140 cm wide · dry clean",
    fa: { name: "ابریشم شامپاینی", desc: "ابریشم طلایی‌فام با برقی آرام — انتخاب همیشگی پرده‌های هتلی.", meta: "ساتان ابریشم‌لمس · عرض ۱۴۰ سانتی‌متر · خشک‌شویی" },
  },
  {
    id: "emerald-velvet", category: "velvet", swatch: "sw-velvet-emerald", bolts: true,
    name: "Emerald Velvet",
    desc: "Deep pile velvet in bottle green. Heavy, warm and dramatic in low light.",
    meta: "Cotton-back velvet · 150 cm wide · dry clean",
    fa: { name: "مخمل زمردی", desc: "مخمل پرزدار در سبز بطری. سنگین، گرم و درخشان در نور کم.", meta: "مخمل با پشت پنبه‌ای · عرض ۱۵۰ سانتی‌متر · خشک‌شویی" },
  },
  {
    id: "midnight-plum", category: "velvet", swatch: "sw-velvet-plum", bolts: false,
    name: "Midnight Plum Velvet",
    desc: "Almost-black plum with a wine-coloured glow where the light catches the pile.",
    meta: "Crush-resistant velvet · 145 cm wide · dry clean",
    fa: { name: "مخمل آلویی نیمه‌شب", desc: "آلوییِ نزدیک به سیاه که آنجا که نور روی پرز می‌افتد ارغوانی می‌درخشد.", meta: "مخمل ضد چروک · عرض ۱۴۵ سانتی‌متر · خشک‌شویی" },
  },
  {
    id: "natural-linen", category: "linen", swatch: "sw-linen-natural", bolts: true,
    name: "Natural Linen",
    desc: "Unbleached European flax with an honest slub. Softens beautifully with every wash.",
    meta: "100% flax linen · 190 cm wide · machine wash cool",
    fa: { name: "کتان طبیعی", desc: "کتان اروپاییِ رنگ‌نشده با گره‌های صادقانه. با هر شست‌وشو نرم‌تر و نرم‌تر می‌شود.", meta: "کتان خالص · عرض ۱۹۰ سانتی‌متر · شست‌وشو با آب سرد" },
  },
  {
    id: "slate-linen", category: "linen", swatch: "sw-linen-slate", bolts: false,
    name: "Slate Linen",
    desc: "Cool grey linen for calm, contemporary rooms. Pairs with brass and pale timber.",
    meta: "Linen-cotton blend · 220 cm wide · machine wash cool",
    fa: { name: "کتان خاکستری", desc: "کتان خاکستریِ خنک برای اتاق‌های مدرن و آرام. با برنج و چوب روشن خوب می‌نشیند.", meta: "مخلوط کتان و پنبه · عرض ۲۲۰ سانتی‌متر · شست‌وشو با آب سرد" },
  },
  {
    id: "ivory-cotton", category: "cotton", swatch: "sw-cotton-ivory", bolts: true,
    name: "Ivory Cotton",
    desc: "Crisp long-staple cotton in soft ivory. The quiet workhorse of the shelves — and of every tailor's bench.",
    meta: "100% cotton poplin · 150 cm wide · machine wash warm",
    fa: { name: "پنبه عاجی", desc: "پنبه‌ی الیاف‌بلندِ خالص در سفیدِ عاجی. کارگر بی‌ادعای قفسه‌ها و میز خیاط‌ها.", meta: "پوپلین پنبه‌ای · عرض ۱۵۰ سانتی‌متر · شست‌وشو با آب گرم" },
  },
  {
    id: "terracotta-cotton", category: "cotton", swatch: "sw-cotton-terracotta", bolts: true,
    name: "Terracotta Cotton",
    desc: "Sun-baked clay tones in a brushed cotton. Warms up a north-facing window instantly.",
    meta: "Brushed cotton twill · 148 cm wide · machine wash warm",
    fa: { name: "پنبه تراکوتا", desc: "رنگ گل‌اندودِ آفتاب‌خورده در پنبه‌ی مودار. پنجره‌ی شمالی را همان لحظه گرم می‌کند.", meta: "توییل پنبه‌ای مودار · عرض ۱۴۸ سانتی‌متر · شست‌وشو با آب گرم" },
  },
  {
    id: "damask-brocade", category: "drapery", swatch: "sw-brocade-gold", bolts: true,
    name: "Damask Brocade",
    desc: "Woven gold damask on oxblood ground — the bolt everyone stops to touch.",
    meta: "Jacquard brocade · 135 cm wide · dry clean",
    fa: { name: "زربفت داماسک", desc: "دماسک طلابی بر زمینه‌ی اخرایی — تکه‌ای که هر رهگذری می‌ایستد لمسش کند.", meta: "ژاکارد زربفت · عرض ۱۳۵ سانتی‌متر · خشک‌شویی" },
  },
  {
    id: "theatre-folds", category: "drapery", swatch: "sw-drapery-folds", bolts: true,
    name: "Theatre Drapery",
    desc: "Heavy pleated drapery cloth that falls in deep, sculpted folds. Stage-grade weight.",
    meta: "Trevira drapery · 300 cm wide · dry clean",
    fa: { name: "پرده‌ی تئاتری", desc: "پارچه‌ی سنگین پرده که با چین‌های عمیق و مجسم می‌افتد. وزن درجه‌یک صحنه.", meta: "پرده‌ی ترِویرا · عرض ۳۰۰ سانتی‌متر · خشک‌شویی" },
  },
  {
    id: "blackout-charcoal", category: "drapery", swatch: "sw-blackout-charcoal", bolts: true,
    name: "Charcoal Blackout",
    desc: "Triple-weave blackout cloth in soft charcoal. Sleeps like a cave, looks like linen.",
    meta: "Blackout weave · 280 cm wide · machine wash cool",
    fa: { name: "بلک‌اوت ذغالی", desc: "بافت سه‌لایه‌ی بلک‌اوت در خاکستری ملایم. تاریکیِ غار با ظاهرِ کتان.", meta: "بافت بلک‌اوت · عرض ۲۸۰ سانتی‌متر · شست‌وشو با آب سرد" },
  },
  {
    id: "heritage-tweed", category: "upholstery", swatch: "sw-tweed-heritage", bolts: false,
    name: "Heritage Tweed",
    desc: "Wool-blend upholstery tweed with a subtle herringbone. Built for armchairs that outlive us.",
    meta: "Wool blend · 140 cm wide · 40,000 rub count",
    fa: { name: "توئید اصیل", desc: "توئید پشمی با بافت هرینگ‌بونِ ظریف. برای مبل‌هایی که از همه‌مان بیشتر عمر می‌کنند.", meta: "مخلوط پشم · عرض ۱۴۰ سانتی‌متر · مقاومت ۴۰٬۰۰۰ سایش" },
  },
];

/* ========================================================================== */

/* ---------- Language state & helpers ---------- */
let LANG = "en";
let activeFilter = "all";

const t = (key) => I18N[LANG][key] ?? I18N.en[key] ?? key;
const faDigits = (s) => String(s).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
const fmtNum = (n) => n.toLocaleString(LANG === "fa" ? "fa-IR" : "en-US");
const localized = (fabric) => ({
  ...fabric,
  name: LANG === "fa" && fabric.fa ? fabric.fa.name : fabric.name,
  desc: LANG === "fa" && fabric.fa ? fabric.fa.desc : fabric.desc,
  meta: LANG === "fa" && fabric.fa ? fabric.fa.meta : fabric.meta,
});
const catLabel = (cat) => CATEGORIES[cat][LANG] ?? CATEGORIES[cat].en;
const waLink = (message) =>
  `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

/* ---------- Apply a language to the whole page ---------- */
function applyLanguage(lang) {
  LANG = lang;
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "fa" ? "rtl" : "ltr";
  document.title = t("meta.title");
  document.querySelector('meta[name="description"]')?.setAttribute("content", t("meta.desc"));

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = I18N[lang][el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      const value = I18N[lang][key];
      if (attr && value !== undefined) el.setAttribute(attr, value);
    });
  });
  document.querySelectorAll("[data-lang-opt]").forEach((opt) =>
    opt.classList.toggle("active", opt.dataset.langOpt === lang)
  );

  try { localStorage.setItem("yd_lang", lang); } catch (_) {}

  fillShopInfo();
  renderFabrics();

  // Re-format already-counted stats in the new locale's digits
  document.querySelectorAll(".stat-num").forEach((el) => {
    if (el.dataset.counted) el.textContent = fmtNum(parseInt(el.dataset.count, 10));
  });
}

/* ---------- Fill shop info into every [data-info] slot ---------- */
function fillShopInfo() {
  const c = CONFIG[LANG] ?? CONFIG.en;
  const set = (key, value) =>
    document.querySelectorAll(`[data-info="${key}"]`).forEach((el) => (el.innerHTML = value));
  const setHref = (key, value) =>
    document.querySelectorAll(`[data-info="${key}"]`).forEach((el) => el.setAttribute("href", value));

  set("phone", CONFIG.phoneDisplay);
  set("email", CONFIG.email);
  set("address", c.address);
  set("hours", c.hours);
  setHref("phone-link", `tel:${CONFIG.phoneDial}`);
  setHref("email-link", `mailto:${CONFIG.email}`);
  setHref("whatsapp-link", waLink(t("ui.wa.prefill")));

  const year = new Date().getFullYear();
  document.getElementById("year").textContent = LANG === "fa" ? faDigits(year) : year;
}

/* ---------- Render the collection grid ---------- */
function renderFabrics() {
  const grid = document.getElementById("fabric-grid");
  grid.innerHTML = FABRICS.map((raw) => {
    const f = localized(raw);
    return `
    <button class="fabric-card${activeFilter !== "all" && f.category !== activeFilter ? " hide" : ""}" data-category="${f.category}" data-id="${f.id}" aria-label="${t("ui.aria.card").replace("{name}", f.name)}">
      <div class="card-swatch swatch ${f.swatch}"></div>
      <div class="card-body">
        <div class="card-top-row">
          <span class="card-cat">${catLabel(f.category)}</span>
          ${f.bolts ? `<span class="bolt-badge">${t("ui.badge")}</span>` : ""}
        </div>
        <h3 class="card-name">${f.name}</h3>
        <p class="card-desc">${f.desc}</p>
        <span class="card-cta">${t("ui.cardcta")}</span>
      </div>
    </button>`;
  }).join("");
}

/* ---------- Filtering ---------- */
function initFilters() {
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;

      document.querySelectorAll(".fabric-card").forEach((card) => {
        const match = activeFilter === "all" || card.dataset.category === activeFilter;
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
  const waLinkEl = document.getElementById("lb-whatsapp");
  let lastFocus = null;

  function open(raw) {
    const f = localized(raw);
    lastFocus = document.activeElement;
    swatch.className = `lightbox-swatch swatch ${f.swatch}`;
    name.textContent = f.name;
    category.textContent = catLabel(f.category);
    desc.textContent = f.desc;
    meta.textContent = f.meta + (f.bolts ? ` ${t("ui.lbbolts")}` : "");
    waLinkEl.href = waLink(t("ui.wa.fabric").replace("{name}", f.name));
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
    toggle.setAttribute("aria-label", open ? (LANG === "fa" ? "بستن منو" : "Close menu") : t("nav.menu"));
  });

  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

/* ---------- Language toggle ---------- */
function initLangToggle() {
  document.getElementById("lang-toggle").addEventListener("click", () => {
    applyLanguage(LANG === "fa" ? "en" : "fa");
  });
}

/* ---------- Founder photo carousel (auto-swipe every 10 s) ---------- */
function initCarousel() {
  const carousel = document.getElementById("yahya-carousel");
  const imgs = carousel.querySelectorAll(".carousel-frame img");
  const dots = carousel.querySelectorAll(".carousel-dot");
  let index = 0;
  let timer = null;

  const show = (n) => {
    index = (n + imgs.length) % imgs.length;
    imgs.forEach((img, k) => img.classList.toggle("active", k === index));
    dots.forEach((dot, k) => dot.classList.toggle("active", k === index));
  };
  const play = () => { timer = setInterval(() => show(index + 1), 10000); };
  const restart = () => { clearInterval(timer); play(); };

  dots.forEach((dot, k) => dot.addEventListener("click", () => { show(k); restart(); }));
  carousel.addEventListener("mouseenter", () => clearInterval(timer));
  carousel.addEventListener("mouseleave", play);
  play();
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
  const ease = (x) => 1 - Math.pow(1 - x, 3);
  const animate = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = fmtNum(Math.round(ease(p) * target));
      if (p < 1) {
        requestAnimationFrame(step);
      } else {
        el.dataset.counted = "1";
      }
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
function showToast(messageKey) {
  const toast = document.getElementById("toast");
  toast.textContent = t(messageKey);
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
      showToast("ui.toast.invalid");
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
    btn.textContent = t("ui.btn.done");
    setTimeout(() => (btn.textContent = t("notify.btn")), 2600);
    showToast("ui.toast.thanks");
  });

  input.addEventListener("input", () => input.classList.remove("invalid"));
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  let initial = "en";
  try {
    initial = localStorage.getItem("yd_lang")
      ?? ((navigator.language || "").toLowerCase().startsWith("fa") ? "fa" : "en");
  } catch (_) {}
  applyLanguage(initial);

  initFilters();
  initLightbox();
  initNav();
  initLangToggle();
  initCarousel();
  initReveal();
  initCounters();
  initNotifyForm();
});
