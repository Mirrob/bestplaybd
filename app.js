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

function promoCardHTML(promo, signupLink) {
  const lang = currentLang();
  const tag = promo[`tag_${lang}`];
  const title = promo[`title_${lang}`];
  const summary = promo[`summary_${lang}`];
  const detailsText = lang === "bn" ? "বিস্তারিত দেখুন" : "Open Details";
  const signupText = promo[`cta_${lang}`] || (lang === "bn" ? "এখন সাইন আপ" : "Sign Up Now");
  return `
    <article class="card dynamic-promo-card">
      <img class="promo-banner" src="${promo.banner}" alt="${title}">
      <div class="promo-body">
        <div class="promo-meta">
          <span class="promo-tag">${tag}</span>
          <span class="promo-updated">${promo.updated}</span>
        </div>
        <h3>${title}</h3>
        <p class="promo-summary">${summary}</p>
        <div class="promo-card-actions">
          <a class="btn btn-secondary" href="${promoDetailHref(promo.id)}">${detailsText}</a>
          <a class="btn btn-primary" href="${signupLink}" target="_blank" rel="noopener noreferrer">${signupText}</a>
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
    grid.innerHTML = data.promos.map((promo) => promoCardHTML(promo, data.signup_link)).join("");
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
              <a class="btn btn-primary" href="${data.signup_link}" target="_blank" rel="noopener noreferrer">${promo[`cta_${lang}`] || (lang === "bn" ? "এখন সাইন আপ" : "Sign Up Now")}</a>
              <a class="btn btn-secondary" href="${data.telegram_link}" target="_blank" rel="noopener noreferrer">${lang === "bn" ? "টেলিগ্রাম আপডেট" : "Telegram Updates"}</a>
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
              <img src="${promo.banner}" alt="${promo[`title_${lang}`]}">
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
                <a class="btn btn-primary" href="${data.signup_link}" target="_blank" rel="noopener noreferrer">${promo[`cta_${lang}`] || (lang === "bn" ? "এখন সাইন আপ" : "Sign Up Now")}</a>
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

async function hydrateTelegramLinks() {
  const items = document.querySelectorAll("[data-telegram-link='true']");
  if (!items.length) return;
  try {
    const data = await loadPromoData();
    items.forEach((item) => {
      item.href = data.telegram_link;
      item.target = "_blank";
      item.rel = "noopener noreferrer";
    });
  } catch (error) {
    // noop
  }
}

async function renderDynamicContent() {
  await Promise.all([
    renderPromosPage(),
    renderPromoDetailPage(),
    hydrateTelegramLinks()
  ]);
}

renderDynamicContent();
