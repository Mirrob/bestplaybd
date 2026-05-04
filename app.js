
const COMMON_TRANSLATIONS = [
  ["Quick links:", "দ্রুত লিংক:"], ["Top Brands", "টপ ব্র্যান্ড"], ["Compare", "তুলনা"], ["Payments", "পেমেন্ট"], ["Promos", "প্রোমো"],
  ["Join Telegram", "টেলিগ্রাম জয়েন করুন"], ["View top brands", "টপ ব্র্যান্ড দেখুন"], ["Quick Shortlist", "দ্রুত চেকলিস্ট"],
  ["Minimum deposit", "মিনিমাম ডিপোজিট"], ["Payment support", "পেমেন্ট সাপোর্ট"], ["Withdrawal availability", "উইথড্র সুবিধা"], ["Bonus clarity", "বোনাস নিয়ম পরিষ্কার"],
  ["Top 5 Comparison Table", "টপ ৫ তুলনা টেবিল"], ["Brand", "ব্র্যান্ড"], ["Min Deposit", "মিন ডিপোজিট"], ["Withdraw", "উইথড্র"], ["Payment", "পেমেন্ট"], ["Rating", "রেটিং"], ["Action", "অ্যাকশন"], ["Promo", "প্রোমো"],
  ["Payment Method Guide", "পেমেন্ট মেথড গাইড"], ["Ranking Method", "র‍্যাঙ্কিং পদ্ধতি"], ["Quick Navigation", "দ্রুত নেভিগেশন"], ["Home", "হোম"], ["All Promos", "সব প্রোমো"], ["Deposit Guide", "ডিপোজিট গাইড"],
  ["Brand-by-brand Explanation", "প্রতিটি ব্র্যান্ডের ব্যাখ্যা"], ["FAQ", "সাধারণ প্রশ্ন"], ["Which is best?", "কোনটি সেরা?"], ["Minimum deposit?", "মিনিমাম ডিপোজিট কত?"], ["Payment methods?", "পেমেন্ট মেথড কী?"],
  ["Official Promo Page", "অফিশিয়াল প্রোমো পেজ"], ["Compare All Brands", "সব ব্র্যান্ড তুলনা করুন"], ["Pros and Cons", "ভালো দিক ও সীমাবদ্ধতা"], ["Pros", "ভালো দিক"], ["Cons", "সীমাবদ্ধতা"],
  ["Overall", "সামগ্রিক"], ["Best For", "যাদের জন্য ভালো"], ["Mobile-friendly flow", "মোবাইলে ব্যবহার সহজ"], ["BD payment methods", "বাংলাদেশি পেমেন্ট মেথড"], ["24/7 withdrawal support", "২৪/৭ উইথড্র সাপোর্ট"],
  ["Final terms must be checked on official page", "চূড়ান্ত নিয়ম অফিশিয়াল পেজে দেখে নিন"], ["Promo availability can change", "প্রোমো সময় অনুযায়ী বদলাতে পারে"],
  ["MCW is strong for Sports + Casino. BanglaWin is strong for slots and higher promos.", "Sports + Casino এর জন্য MCW ভালো। Slots ও বেশি প্রোমোর জন্য BanglaWin ভালো।"],
  ["MCW ৳200. BanglaWin, Khelaghor, Deshislots and Banglabet ৳100.", "MCW মিনিমাম ৳২০০। BanglaWin, Khelaghor, Deshislots ও Banglabet মিনিমাম ৳১০০।"],
  ["Use the comparison table.", "তুলনা টেবিল দেখে ব্র্যান্ড বেছে নিন।"], ["Check turnover and expiry.", "টার্নওভার ও মেয়াদ আগে চেক করুন।"], ["Check cashier methods.", "ক্যাশিয়ার পেজে পেমেন্ট মেথড দেখুন।"], ["Get fast updates.", "দ্রুত আপডেট পান।"]
];

function translateCommonText(lang) {
  const map = new Map();
  COMMON_TRANSLATIONS.forEach(([en, bn]) => map.set(lang === "bn" ? en : bn, lang === "bn" ? bn : en));
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.parentElement || ["SCRIPT", "STYLE"].includes(node.parentElement.tagName)) return NodeFilter.FILTER_REJECT;
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    const raw = node.nodeValue;
    const trimmed = raw.trim();
    if (map.has(trimmed)) node.nodeValue = raw.replace(trimmed, map.get(trimmed));
  });
}

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const langButtons = document.querySelectorAll(".lang-btn");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("show");
  });
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-bn][data-en]").forEach((el) => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  translateCommonText(lang);

  localStorage.setItem("bestplaybd_lang", lang);
}

const savedLang = localStorage.getItem("bestplaybd_lang") || "bn";
applyLanguage(savedLang);

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLanguage(btn.dataset.lang);
    renderDynamicContent();
  });
});

let promoDataCache = null;

async function loadPromoData() {
  if (promoDataCache) return promoDataCache;
  const isPages = window.location.pathname.includes("/pages/");
  const basePath = isPages ? "../data/promos.json" : "data/promos.json";
  const response = await fetch(basePath, { cache: "no-store" });
  if (!response.ok) throw new Error("Unable to load promo data");
  promoDataCache = await response.json();
  return promoDataCache;
}

function currentLang() {
  return localStorage.getItem("bestplaybd_lang") || "bn";
}

function promoDetailHref(id) {
  return `${id}.html`;
}

function promoLink(promo, data) {
  return promo.link || (data.brand_links && data.brand_links[promo.brand]) || data.signup_link || "#";
}

function brandLink(brand, data) {
  return brand.link || (data.brand_links && data.brand_links[brand.brand]) || data.signup_link || "#";
}

function assetPath(src) {
  if (!src || /^(https?:)?\/\//.test(src) || src.startsWith("data:")) return src;
  return window.location.pathname.includes("/pages/") ? `../${src}` : src;
}

function walletLogosHTML() {
  const wallets = [
    { cls: "wallet-bank", mark: "BANK", label: "Deposit", bn: "ব্যাংক" },
    { cls: "wallet-bkash", mark: "bKash", label: "bKash", bn: "বিকাশ" },
    { cls: "wallet-nagad", mark: "Nagad", label: "Nagad", bn: "নগদ" },
    { cls: "wallet-rocket", mark: "Rocket", label: "Rocket", bn: "রকেট" },
    { cls: "wallet-upay", mark: "upay", label: "Upay", bn: "উপায়" },
    { cls: "wallet-crypto", mark: "USDT", label: "Crypto", bn: "ক্রিপ্টো" },
    { cls: "wallet-ok", mark: "ok", label: "OK Wallet", bn: "ওকে ওয়ালেট" },
    { cls: "wallet-sure", mark: "Sure", label: "SureCash", bn: "শিওরক্যাশ" },
    { cls: "wallet-mcash", mark: "mCash", label: "mCash", bn: "এমক্যাশ" }
  ];
  return wallets.map((wallet) => {
    const name = currentLang() === "bn" ? wallet.bn : wallet.label;
    return "<span class=\"wallet-logo " + wallet.cls + "\" title=\"" + wallet.label + "\"><span class=\"wallet-mark\">" + wallet.mark + "</span><span class=\"wallet-name\" data-bn=\"" + wallet.bn + "\" data-en=\"" + wallet.label + "\">" + name + "</span></span>";
  }).join("");
}

function enhanceWalletLogos() {
  document.querySelectorAll(".payment-grid").forEach((grid) => {
    grid.classList.add("logo-strip");
    grid.innerHTML = walletLogosHTML();
  });
}

function promoCardHTML(promo, data) {
  const lang = currentLang();
  const tag = promo[`tag_${lang}`];
  const title = promo[`title_${lang}`];
  const summary = promo[`summary_${lang}`];
  const detailsText = lang === "bn" ? "বিস্তারিত দেখুন" : "Open Details";
  const signupText = promo[`cta_${lang}`] || (lang === "bn" ? "এখন সাইন আপ" : "Sign Up Now");
  const targetLink = promoLink(promo, data);
  const brand = promo.brand ? `<span class="promo-brand">${promo.brand}</span>` : "";
  const detailsHref = window.location.pathname.includes("/pages/") ? "promos.html" : "pages/promos.html";
  return `
    <article class="card dynamic-promo-card">
      <img class="promo-banner" src="${assetPath(promo.banner)}" alt="${title}">
      <div class="promo-body">
        <div class="promo-meta">
          ${brand}
          <span class="promo-tag">${tag}</span>
          <span class="promo-updated">${promo.updated}</span>
        </div>
        <h3>${title}</h3>
        <p class="promo-summary">${summary}</p>
        <div class="promo-card-actions">
          <a class="btn btn-secondary" href="${detailsHref}">${detailsText}</a>
          <a class="btn btn-primary" href="${targetLink}" target="_blank" rel="noopener noreferrer">${signupText}</a>
        </div>
      </div>
    </article>
  `;
}

async function renderPromosPage() {
  const grid = document.getElementById("promoSyncGrid");
  if (!grid) return;
  try {
    const data = await loadPromoData();
    grid.innerHTML = data.promos.map((promo) => promoCardHTML(promo, data)).join("");
  } catch (error) {
    grid.innerHTML = `<div class="card empty-state"><h3>Unable to load promos</h3><p>Please try again later.</p></div>`;
  }
}

async function renderPromoDetailPage() {
  const holder = document.getElementById("promoDetailMount");
  if (!holder) return;
  const pageId = holder.dataset.promoId;
  try {
    const data = await loadPromoData();
    const promo = data.promos.find((item) => item.id === pageId);
    if (!promo) {
      holder.innerHTML = `<div class="card empty-state"><h2>Promo not found</h2></div>`;
      return;
    }
    const lang = currentLang();
    holder.innerHTML = `
      <section class="page-hero">
        <div class="container page-grid">
          <div>
            <span class="page-badge">${promo[`tag_${lang}`]}</span>
            <h1>${promo[`title_${lang}`]}</h1>
            <p>${promo[`summary_${lang}`]}</p>
            <div class="detail-actions">
              <a class="btn btn-primary" href="${promoLink(promo, data)}" target="_blank" rel="noopener noreferrer">${promo[`cta_${lang}`] || (lang === "bn" ? "এখন সাইন আপ" : "Sign Up Now")}</a>
              <a class="btn btn-secondary" href="https://t.me/bestplaybd_win_big" target="_blank" rel="noopener noreferrer">${lang === "bn" ? "টেলিগ্রাম আপডেট" : "Telegram Updates"}</a>
            </div>
          </div>
          <div class="page-side-card feature-panel">
            <h3>${lang === "bn" ? "দ্রুত হাইলাইট" : "Quick Highlights"}</h3>
            <ul>
              <li>${lang === "bn" ? "আপডেটেড প্রমো ভিজিবিলিটি" : "Updated promo visibility"}</li>
              <li>${lang === "bn" ? "এক ক্লিকে সাইন আপ" : "One-click signup CTA"}</li>
              <li>${lang === "bn" ? "টেলিগ্রাম ফলো-আপ" : "Telegram follow-up"}</li>
            </ul>
          </div>
        </div>
      </section>

      <main class="section">
        <div class="container detail-layout">
          <div class="detail-stack">
            <div class="page-banner-shell">
              <img src="${assetPath(promo.banner)}" alt="${promo[`title_${lang}`]}">
            </div>

            <div class="content-shell">
              <h2>${lang === "bn" ? "অফার সম্পর্কে" : "About This Offer"}</h2>
              <p>${promo[`details_${lang}`]}</p>
              <div class="info-list">
                <div class="link-pill"><strong>${lang === "bn" ? "স্ট্যাটাস" : "Status"}</strong><span>${promo.updated}</span></div>
                <div class="link-pill"><strong>${lang === "bn" ? "টাইপ" : "Type"}</strong><span>${promo[`tag_${lang}`]}</span></div>
                <div class="link-pill"><strong>${lang === "bn" ? "কল টু অ্যাকশন" : "Call to Action"}</strong><span>${promo[`cta_${lang}`] || (lang === "bn" ? "এখন সাইন আপ" : "Sign Up Now")}</span></div>
              </div>
            </div>
          </div>

          <div class="detail-stack">
            <div class="content-shell">
              <h2>${lang === "bn" ? "কীভাবে ব্যবহার করবেন" : "How to Use This Page"}</h2>
              <ol>
                <li>${lang === "bn" ? "অফারের সারাংশ আগে দেখুন" : "Read the promo summary first"}</li>
                <li>${lang === "bn" ? "ব্যানার ও ব্যাখ্যা মিলিয়ে বুঝুন" : "Match the banner with the short explanation"}</li>
                <li>${lang === "bn" ? "সাইন আপ বাটন ব্যবহার করুন" : "Use the signup button to continue"}</li>
                <li>${lang === "bn" ? "পরের আপডেটের জন্য টেলিগ্রাম ফলো করুন" : "Follow Telegram for the next update"}</li>
              </ol>
            </div>

            <div class="content-shell">
              <h2>${lang === "bn" ? "দ্রুত একশন" : "Quick Action"}</h2>
              <div class="detail-actions">
                <a class="btn btn-primary" href="${promoLink(promo, data)}" target="_blank" rel="noopener noreferrer">${promo[`cta_${lang}`] || (lang === "bn" ? "এখন সাইন আপ" : "Sign Up Now")}</a>
                <a class="btn btn-secondary" href="promos.html">${lang === "bn" ? "সব প্রমো দেখুন" : "See All Promos"}</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    `;
  } catch (error) {
    holder.innerHTML = `<div class="card empty-state"><h2>Unable to load promo detail</h2></div>`;
  }
}


async function renderHomeBrandSections() {
  const brandGrid = document.getElementById("topBrandsGrid");
  const tableBody = document.getElementById("brandCompareBody");
  const featuredGrid = document.getElementById("featuredPromoGrid");
  const allPromoGrid = document.getElementById("homePromoGrid");
  if (!brandGrid && !tableBody && !featuredGrid && !allPromoGrid) return;
  try {
    const data = await loadPromoData();
    const lang = currentLang();
    const brands = (data.brands || []).sort((a,b)=>(a.rank||99)-(b.rank||99));
    if (!brands.length) return;
    if (brandGrid) {
      brandGrid.innerHTML = brands.map((brand) => {
        const reviewPath = window.location.pathname.includes("/pages/") ? (brand.brand === "MCW" ? "mcw-review.html" : brand.brand === "BanglaWin" ? "banglawin-review.html" : "best-betting-site-bd.html") : (brand.brand === "MCW" ? "pages/mcw-review.html" : brand.brand === "BanglaWin" ? "pages/banglawin-review.html" : "pages/best-betting-site-bd.html");
        return "<article class=\"brand-card\">" +
          "<div class=\"brand-card-top\"><span class=\"rank-badge\">#" + (brand.rank || "") + "</span><span class=\"rating-line\">★ " + (brand.rating || "4.5/5") + "</span></div>" +
          "<h3>" + brand.brand + "</h3>" +
          "<p>" + (brand[`best_for_${lang}`] || brand.best_for_en || "Recommended") + "</p>" +
          "<div class=\"brand-facts\"><span>" + (brand.min_deposit || "৳100") + "</span><span>" + (brand[`withdraw_${lang}`] || brand.withdraw_en || "24/7") + "</span><span class=\"brand-payment-pill\">bKash · Nagad · Rocket · Upay · Bank · USDT</span></div>" +
          "<div class=\"card-actions\"><a class=\"btn btn-primary\" href=\"" + brandLink(brand, data) + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + (lang === "bn" ? "প্রোমো দেখুন" : "View Bonus") + "</a><a class=\"btn btn-secondary\" href=\"" + reviewPath + "\">" + (lang === "bn" ? "রিভিউ" : "Review") + "</a></div>" +
        "</article>";
      }).join("");
    }
    if (tableBody) {
      tableBody.innerHTML = brands.map((brand) =>
        "<tr>" +
          "<td data-label=\"Brand\"><strong>" + brand.brand + "</strong><span>" + (brand[`best_for_${lang}`] || brand.best_for_en || "Recommended") + "</span></td>" +
          "<td data-label=\"Min Deposit\">" + (brand.min_deposit || "৳100") + "</td>" +
          "<td data-label=\"Withdraw\">" + (brand[`withdraw_${lang}`] || brand.withdraw_en || "24/7") + "</td>" +
          "<td data-label=\"Payment\"><span class=\"payment-inline\">bKash · Nagad · Rocket · Upay · Bank · USDT</span></td>" +
          "<td data-label=\"Rating\">★ " + (brand.rating || "4.5/5") + "</td>" +
          "<td data-label=\"Action\"><a class=\"mini-cta\" href=\"" + brandLink(brand, data) + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + (lang === "bn" ? "প্রোমো" : "Promo") + "</a></td>" +
        "</tr>"
      ).join("");
    }
    if (featuredGrid) featuredGrid.innerHTML = data.promos.filter(p => p.featured).slice(0,5).map((promo) => promoCardHTML(promo, data)).join("");
    if (allPromoGrid) allPromoGrid.innerHTML = data.promos.map((promo) => promoCardHTML(promo, data)).join("");
  } catch (error) {
    [brandGrid, featuredGrid, allPromoGrid].filter(Boolean).forEach(el => { el.innerHTML = `<div class="card empty-state"><h3>Unable to load data</h3></div>`; });
  }
}
async function hydrateTelegramLinks() {
  const items = document.querySelectorAll("[data-telegram-link='true']");
  if (!items.length) return;
  try {
    const data = await loadPromoData();
    items.forEach((item) => {
      item.href = "https://t.me/bestplaybd_win_big";
      item.target = "_blank";
      item.rel = "noopener noreferrer";
    });
  } catch (error) {
    // noop
  }
}

async function renderDynamicContent() {
  enhanceWalletLogos();
  await Promise.all([
    renderPromosPage(),
    renderPromoDetailPage(),
    hydrateTelegramLinks(),
    renderHomeBrandSections()
  ]);
}

renderDynamicContent();
