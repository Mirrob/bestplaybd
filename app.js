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
  });
});
