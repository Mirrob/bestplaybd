const SIGNUP_URL = "https://mcwpromo.com/";
function getSignupLink(brand) { return SIGNUP_URL; }
function applySignupLinks() {
  document.querySelectorAll('[data-signup-brand]').forEach((link) => {
    link.href = getSignupLink(link.dataset.signupBrand || 'MCW');
    link.target = '_blank';
    link.rel = 'nofollow noopener';
  });
}

const COMMON_TRANSLATIONS = [
  ["Quick links:", "দ্রুত লিংক:"], ["Top Brands", "টপ ব্র্যান্ড"], ["Compare", "তুলনা"], ["Payments", "পেমেন্ট"], ["Promos", "প্রমোশন"],
  ["Join Telegram", "Telegram-এ যোগ দিন"], ["View top brands", "টপ ব্র্যান্ড দেখুন"], ["Quick Shortlist", "দ্রুত তালিকা"],
  ["Minimum deposit", "ন্যূনতম ডিপোজিট"], ["Payment support", "পেমেন্ট সুবিধা"], ["Withdrawal availability", "উত্তোলন সুবিধা"], ["Bonus clarity", "বোনাসের নিয়ম পরিষ্কার"], ["Withdrawal", "উত্তোলন"], ["Reviewed Brands", "রিভিউ করা ব্র্যান্ড"], ["BD Payments", "বাংলাদেশি পেমেন্ট"],
  ["Top 5 Comparison Table", "টপ ৫ তুলনা টেবিল"], ["Brand", "ব্র্যান্ড"], ["Min Deposit", "ন্যূনতম ডিপোজিট"], ["Withdraw", "উত্তোলন"], ["Payment", "পেমেন্ট"], ["Rating", "রেটিং"], ["Action", "অ্যাকশন"],
  ["Payment Method Guide", "পেমেন্ট মেথড গাইড"], ["Ranking Method", "র‍্যাঙ্কিং পদ্ধতি"], ["Quick Navigation", "দ্রুত নেভিগেশন"], ["Home", "হোম"], ["All Promos", "সব প্রমোশন"], ["Deposit Guide", "ডিপোজিট গাইড"],
  ["Brand-by-brand Explanation", "প্রতিটি ব্র্যান্ডের বিস্তারিত"], ["FAQ", "সাধারণ প্রশ্ন"], ["Which is best?", "কোনটি সেরা?"], ["Minimum deposit?", "ন্যূনতম ডিপোজিট কত?"], ["Payment methods?", "পেমেন্ট মেথড কী?"],
  ["Claim Bonus", "বোনাস ক্লেইম করুন"], ["Play Now", "এখনই খেলুন"], ["Sign Up", "সাইন আপ করুন"], ["Read Review", "রিভিউ পড়ুন"], ["Read review", "রিভিউ পড়ুন"], ["View details", "বিস্তারিত দেখুন"], ["Review", "রিভিউ"], ["Compare All Brands", "সব ব্র্যান্ড তুলনা করুন"],
  ["Pros and Cons", "ভালো দিক ও আগে দেখার বিষয়"], ["Pros", "ভালো দিক"], ["Cons", "সীমাবদ্ধতা"], ["Check First", "আগে দেখুন"], ["Check", "আগে দেখুন"],
  ["Overall", "সামগ্রিক"], ["Best For", "যাদের জন্য ভালো"], ["Mobile-friendly flow", "মোবাইলে ব্যবহার সহজ"], ["BD payment methods", "বাংলাদেশি পেমেন্ট মেথড"], ["24/7 withdrawal support", "২৪/৭ উত্তোলন সাপোর্ট"],
  ["Final terms must be checked on signup page", "চূড়ান্ত নিয়ম সাইন আপ পেজে দেখে নিন"], ["Promo availability can change", "প্রমোশন সময় অনুযায়ী বদলাতে পারে"],
  ["MCW is strong for Sports + Casino. BanglaWin is strong for slots and higher promos.", "স্পোর্টস ও ক্যাসিনোর জন্য MCW শক্তিশালী। স্লট ক্যাসিনো ও বেশি প্রমোশনের জন্য BanglaWin ভালো।"],
  ["MCW ৳200. BanglaWin, Khelaghor, Deshislots and Banglabet ৳100.", "MCW ন্যূনতম ৳২০০। BanglaWin, Khelaghor, Deshislots ও Banglabet ন্যূনতম ৳১০০।"],
  ["Use the comparison table.", "তুলনা টেবিল দেখে ব্র্যান্ড বেছে নিন।"], ["Check turnover and expiry.", "টার্নওভার ও মেয়াদ আগে দেখে নিন।"], ["Check cashier methods.", "ক্যাশিয়ার পেজে পেমেন্ট সুবিধা দেখে নিন।"], ["Get fast updates.", "দ্রুত আপডেট পান।"],
  ["MCW — Sports + Casino", "MCW — স্পোর্টস + ক্যাসিনো"], ["BanglaWin — Slots + Higher Promos", "BanglaWin — স্লট + বেশি প্রমোশন"], ["Khelaghor — Sports focused", "Khelaghor — স্পোর্টস-কেন্দ্রিক"],
  ["Sports + Casino", "স্পোর্টস + ক্যাসিনো"], ["Slots Casino + Higher Promos", "স্লট ক্যাসিনো + বেশি প্রমোশন"], ["Slots + Casino + Deshi vibes", "স্লট + ক্যাসিনো + দেশি অভিজ্ঞতা"], ["Slots + Casino + Beginner friendly", "স্লট + ক্যাসিনো + নতুনদের জন্য সহজ"], ["Beginner Friendly", "নতুনদের জন্য সহজ"],
  ["Strong sports + casino", "স্পোর্টস ও ক্যাসিনোতে শক্তিশালী"], ["Wide BD payments", "বাংলাদেশি পেমেন্ট সুবিধা বিস্তৃত"], ["Minimum deposit ৳200", "ন্যূনতম ডিপোজিট ৳২০০"], ["Promo terms can change", "প্রমোশনের নিয়ম বদলাতে পারে"],
  ["Slots casino focus", "স্লট ক্যাসিনোতে বেশি ফোকাস"], ["Beginner-friendly ৳100 start", "৳১০০ থেকে নতুনদের জন্য সহজ শুরু"], ["Higher promo positioning", "বেশি প্রমোশনের জন্য ভালো"], ["Eligible games", "যোগ্য গেম দেখে নিন"], ["Turnover rules", "টার্নওভারের নিয়ম"],
  ["Sports focused", "স্পোর্টস-কেন্দ্রিক"], ["Cricket/football friendly", "ক্রিকেট/ফুটবল ব্যবহারকারীদের জন্য ভালো"], ["Simple payment flow", "সহজ পেমেন্ট প্রক্রিয়া"], ["Odds rules", "অডসের নিয়ম"], ["Promo expiry", "প্রমোশনের মেয়াদ"],
  ["Deshi vibe", "দেশি অভিজ্ঞতা"], ["Cashback-style promo fit", "ক্যাশব্যাক ধরনের প্রমোশনের জন্য ভালো"], ["Valid games", "যে গেমে প্রমোশন প্রযোজ্য"], ["Campaign availability", "ক্যাম্পেইন চালু আছে কি না দেখুন"],
  ["Quick Scores", "দ্রুত স্কোর"], ["Quick Score", "দ্রুত স্কোর"], ["What to Check in a Review", "রিভিউ পড়ার সময় কী দেখবেন"], ["Quick Action", "দ্রুত এগিয়ে যান"], ["Call to Action", "পরবর্তী ধাপ"]
];

COMMON_TRANSLATIONS.push(
  ["Today’s Focus", "আজকের ফোকাস"],
  ["Sports focused", "স্পোর্টস-কেন্দ্রিক"],
  ["Slots + Higher Promos", "স্লট + বেশি প্রমোশন"],
  ["Payment support", "পেমেন্ট সুবিধা"],
  ["Bonus clarity", "বোনাসের নিয়ম পরিষ্কার"],
  ["Mobile usability", "মোবাইলে ব্যবহার সহজ"],
  ["Use the comparison table.", "তুলনা টেবিল দেখে ব্র্যান্ড বেছে নিন।"],
  ["Check turnover and expiry.", "টার্নওভার ও মেয়াদ আগে দেখে নিন।"],
  ["Check cashier methods.", "ক্যাশিয়ার পেজে পেমেন্ট সুবিধা দেখে নিন।"],
  ["Get fast updates.", "দ্রুত আপডেট পান।"],
  ["Final method", "চূড়ান্ত পেমেন্ট মেথড"],
  ["official cashier page", "অফিশিয়াল ক্যাশিয়ার পেজ"],
  ["minimum deposit", "ন্যূনতম ডিপোজিট"],
  ["turnover", "টার্নওভার"],
  ["expiry", "মেয়াদ"],
  ["withdrawal note", "উত্তোলন নোট"],
  ["promo", "প্রমোশন"],
  ["campaign change", "ক্যাম্পেইন পরিবর্তন"],
  ["payment notice", "পেমেন্ট নোটিস"],
  ["Telegram Bonus Updates", "Telegram বোনাস আপডেট"]
);


COMMON_TRANSLATIONS.push(
  ["SEO GUIDE", "এসইও গাইড"],
  ["SEO Guide", "এসইও গাইড"],
  ["STEPS", "ধাপ"],
  ["Steps", "ধাপ"],
  ["LIVE PROMOS", "লাইভ প্রমোশন"],
  ["Live Promos", "লাইভ প্রমোশন"],
  ["Promos loading", "প্রমোশন লোড হচ্ছে"],
  ["Top 5 Compare", "টপ ৫ তুলনা"],
  ["Best Sites BD", "সেরা সাইট BD"],
  ["MCW Review", "MCW রিভিউ"],
  ["BanglaWin Review", "BanglaWin রিভিউ"],
  ["Reviews", "রিভিউ"],
  ["Games", "গেমস"],
  ["Ranking", "র‍্যাঙ্কিং"],
  ["Navigate", "নেভিগেশন"],
  ["Methods", "পদ্ধতি"],
  ["Checklist", "চেকলিস্ট"],
  ["Brand Limits", "ব্র্যান্ড লিমিট"],
  ["Sports / Exchange", "স্পোর্টস / এক্সচেঞ্জ"],
  ["Live Casino / Slots", "লাইভ ক্যাসিনো / স্লট"],
  ["Crash / Table / Fishing", "ক্র্যাশ / টেবিল / ফিশিং"],
  ["Arcade / Lottery", "আর্কেড / লটারি"],
  ["Sports", "স্পোর্টস"],
  ["Casino", "ক্যাসিনো"],
  ["Slots", "স্লট"],
  ["Crash", "ক্র্যাশ"],
  ["Table", "টেবিল"],
  ["Fishing", "ফিশিং"],
  ["Arcade", "আর্কেড"],
  ["Lottery", "লটারি"],
  ["Withdrawal access", "উত্তোলন সুবিধা"],
  ["24/7 withdrawal", "২৪/৭ উত্তোলন"],
  ["24/7 withdrawal support and clear account rules.", "২৪/৭ উত্তোলন সুবিধা ও পরিষ্কার অ্যাকাউন্ট নিয়ম।"],
  ["bKash, Nagad, Rocket, Upay, Bank and USDT visibility.", "bKash, Nagad, Rocket, Upay, Bank এবং USDT সুবিধা দেখা যায়।"],
  ["Turnover, eligible games and expiry are easy to check.", "টার্নওভার, যোগ্য গেম ও মেয়াদ সহজে দেখা যায়।"],
  ["Minimum deposit", "ন্যূনতম ডিপোজিট"],
  ["Turnover / wagering", "টার্নওভার / ওয়েজারিং"],
  ["Eligible games", "যোগ্য গেম"],
  ["Expiry date", "মেয়াদ শেষের তারিখ"],
  ["Payment method", "পেমেন্ট পদ্ধতি"],
  ["Payment support", "পেমেন্ট সুবিধা"],
  ["Bonus clarity", "বোনাসের নিয়ম পরিষ্কার"],
  ["Mobile usability", "মোবাইলে ব্যবহার সহজ"],
  ["Use the comparison table.", "তুলনা টেবিল দেখে ব্র্যান্ড বেছে নিন।"],
  ["Check turnover and expiry.", "টার্নওভার ও মেয়াদ আগে দেখে নিন।"],
  ["Check cashier methods.", "ক্যাশিয়ার পেজে পেমেন্ট সুবিধা দেখে নিন।"],
  ["Get fast updates.", "দ্রুত আপডেট পান।"],
  ["Telegram Updates", "Telegram আপডেট"],
  ["Join Telegram", "Telegram এ যোগ দিন"],
  ["Claim Bonus", "বোনাস ক্লেইম করুন"],
  ["Promo Details", "প্রমোর বিস্তারিত"],
  ["See All Promos", "সব প্রমোশন দেখুন"],
  ["Quick Highlights", "দ্রুত হাইলাইট"],
  ["Updated promo visibility", "আপডেটেড প্রমোশন দেখা যায়"],
  ["One-click signup CTA", "এক ক্লিকে সাইন আপ"],
  ["Telegram follow-up", "Telegram ফলো-আপ"],
  ["About This Offer", "এই অফার সম্পর্কে"],
  ["Status", "স্ট্যাটাস"],
  ["Type", "ধরন"],
  ["Call to Action", "পরবর্তী ধাপ"],
  ["How to Use This Page", "এই পেজ কীভাবে ব্যবহার করবেন"],
  ["Read the promo summary first", "প্রমোশনের সারাংশ আগে পড়ুন"],
  ["Match the banner with the short explanation", "ব্যানার ও ছোট ব্যাখ্যা মিলিয়ে বুঝুন"],
  ["Use the signup button to continue", "এগিয়ে যেতে সাইন আপ বাটন ব্যবহার করুন"],
  ["Follow Telegram for the next update", "পরের আপডেটের জন্য Telegram ফলো করুন"],
  ["Quick Action", "দ্রুত এগিয়ে যান"],
  ["Promo not found", "প্রমোশন পাওয়া যায়নি"],
  ["Unable to load promo detail", "প্রমোশনের বিস্তারিত লোড করা যায়নি"],
  ["Unable to load data", "ডেটা লোড করা যায়নি"]
);


COMMON_TRANSLATIONS.push(
  ["Best Sites BD 2026", "সেরা সাইট BD ২০২৬"],
  ["Brand guide", "ব্র্যান্ড গাইড"],
  ["Which brand is best overall?", "সামগ্রিকভাবে কোন ব্র্যান্ড ভালো?"],
  ["Quick scores", "দ্রুত স্কোর"],
  ["Slots + Promos", "স্লট + প্রমোশন"],
  ["Slots + Deshi", "স্লট + দেশি অভিজ্ঞতা"],
  ["Slots + casino focus", "স্লট ও ক্যাসিনোতে ফোকাস"],
  ["Easy start", "সহজে শুরু করা যায়"],
  ["Slots + casino", "স্লট + ক্যাসিনো"],
  ["Good for new users", "নতুন ব্যবহারকারীদের জন্য ভালো"],
  ["Bonus rules", "বোনাসের নিয়ম"],
  ["Withdrawal notes", "উত্তোলন নোট"],
  ["BanglaWin Bangladesh Review", "BanglaWin বাংলাদেশ রিভিউ"],
  ["BestPlayBD score", "BestPlayBD স্কোর"],
  ["BestPlayBD Score", "BestPlayBD স্কোর"],
  ["BanglaWin quick score", "BanglaWin দ্রুত স্কোর"],
  ["BanglaWin Quick Score", "BanglaWin দ্রুত স্কোর"],
  ["24/7 withdrawal support.", "২৪/৭ উত্তোলন সুবিধা।"],
  ["BanglaWin CTA", "BanglaWin পরবর্তী ধাপ"],
  ["Common Payment", "সাধারণ পেমেন্ট"],
  ["Slots + Casino", "স্লট + ক্যাসিনো"],
  ["Beginner friendly", "নতুনদের জন্য সহজ"],
  ["Withdrawal", "উত্তোলন"],
  ["Min Deposit", "ন্যূনতম ডিপোজিট"],
  ["Best For", "যাদের জন্য ভালো"],
  ["Deposit Guide", "ডিপোজিট গাইড"],
  ["Promotions", "প্রমোশন"],
  ["Promotion", "প্রমোশন"],
  ["Deposit & Withdraw Guide", "ডিপোজিট ও উত্তোলন গাইড"],
  ["BestPlayBD Reviews", "BestPlayBD রিভিউ"],
  ["Reviews", "রিভিউ"],
  ["Games Guide", "গেমস গাইড"],
  ["Live promo comparison", "লাইভ প্রমোশন তুলনা"],
  ["Quick checklist", "দ্রুত চেকলিস্ট"],
  ["Promo guide", "প্রমোশন গাইড"],
  ["Join Telegram", "Telegram এ যোগ দিন"],
  ["Telegram Update Channel", "Telegram আপডেট চ্যানেল"]
);

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
  const signupChooser = document.getElementById("signupChooser");
  if (signupChooser) signupChooser.remove();
}

const savedLang = localStorage.getItem("bestplaybd_lang") || "bn";
applyLanguage(savedLang);

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLanguage(btn.dataset.lang);
    renderDynamicContent().then(applySignupLinks);
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

const FALLBACK_PROMOS = [
  { id: "mcw-first-deposit", brand: "MCW", tag_bn: "স্পোর্টস + ক্যাসিনো", tag_en: "Sports + Casino", title_bn: "MCW ফার্স্ট ডিপোজিট বোনাস", title_en: "MCW First Deposit Bonus", summary_bn: "স্পোর্টস + ক্যাসিনো • ২৪/৭ উত্তোলন", summary_en: "Sports + Casino • 24/7 Withdrawal", updated: "Updated recently", featured: true },
  { id: "banglawin-slots", brand: "BanglaWin", tag_bn: "স্লট প্রমোশন", tag_en: "Slots Promo", title_bn: "BanglaWin স্লট ও ক্যাসিনো প্রমোশন", title_en: "BanglaWin Slots and Casino Promo", summary_bn: "বেশি প্রমোশন • ৳১০০ থেকে শুরু", summary_en: "Higher promos • ৳100 start", updated: "Updated recently", featured: true },
  { id: "khelaghor-sports", brand: "Khelaghor", tag_bn: "স্পোর্টস-কেন্দ্রিক", tag_en: "Sports Focus", title_bn: "Khelaghor স্পোর্টস ও ক্যাসিনো অফার", title_en: "Khelaghor Sports and Casino Offer", summary_bn: "ক্রিকেট • ফুটবল • ক্যাসিনো", summary_en: "Cricket • Football • Casino", updated: "Updated recently", featured: true },
  { id: "deshislots-casino", brand: "Deshislots", tag_bn: "দেশি স্লট", tag_en: "Deshi Slots", title_bn: "Deshislots স্লট, ক্যাসিনো ও ক্যাশব্যাক", title_en: "Deshislots Slots, Casino and Cashback", summary_bn: "স্লট + ক্যাসিনো • দেশি অভিজ্ঞতা", summary_en: "Slots + Casino • Deshi vibes", updated: "Updated recently", featured: true },
  { id: "banglabet-start", brand: "Banglabet", tag_bn: "নতুনদের জন্য সহজ", tag_en: "Beginner Friendly", title_bn: "Banglabet বোনাস ও সহজ শুরু", title_en: "Banglabet Bonus and Easy Start", summary_bn: "নতুনদের জন্য সহজ • ৳১০০ থেকে শুরু", summary_en: "Beginner friendly • ৳100 start", updated: "Updated recently", featured: true }
];

function brandSlug(brand) {
  const key = String(brand || "mcw").toLowerCase().replace(/[^a-z0-9]/g, "");
  if (key.includes("banglawin")) return "banglawin";
  if (key.includes("khelaghor")) return "khelaghor";
  if (key.includes("deshislots")) return "deshislots";
  if (key.includes("banglabet")) return "banglabet";
  return "mcw";
}


function promoVisualChips(brand) {
  const visuals = {
    mcw: ["24/7", "SPORTS", "CASINO"],
    banglawin: ["SLOTS", "BONUS", "৳100+"],
    khelaghor: ["SPORTS", "BD", "24/7"],
    deshislots: ["SLOTS", "CASH", "BD"],
    banglabet: ["START", "৳100+", "BD"]
  };
  return visuals[brandSlug(brand)] || visuals.mcw;
}

function walletLogosHTML() {
  const wallets = [
    { cls: "wallet-bank", logo: "assets/wallets/bank-deposit.svg", label: "Bank Deposit", bn: "ব্যাংক ডিপোজিট" },
    { cls: "wallet-bkash", logo: "assets/wallets/bkash.svg", label: "bKash", bn: "বিকাশ" },
    { cls: "wallet-nagad", logo: "assets/wallets/nagad.svg", label: "Nagad", bn: "নগদ" },
    { cls: "wallet-rocket", logo: "assets/wallets/rocket.svg", label: "Rocket", bn: "রকেট" },
    { cls: "wallet-upay", logo: "assets/wallets/upay.svg", label: "Upay", bn: "উপায়" },
    { cls: "wallet-crypto", logo: "assets/wallets/crypto.svg", label: "Crypto", bn: "ক্রিপ্টো" },
    { cls: "wallet-ok", logo: "assets/wallets/ok-wallet.svg", label: "OK Wallet", bn: "ওকে ওয়ালেট" },
    { cls: "wallet-sure", logo: "assets/wallets/surecash.svg", label: "SureCash", bn: "শিওরক্যাশ" },
    { cls: "wallet-tap", logo: "assets/wallets/tap.svg", label: "tap", bn: "ট্যাপ" }
  ];
  return wallets.map((wallet) => {
    const name = currentLang() === "bn" ? wallet.bn : wallet.label;
    return "<span class=\"wallet-logo " + wallet.cls + "\" title=\"" + wallet.label + "\"><img class=\"wallet-img\" src=\"" + assetPath(wallet.logo) + "\" alt=\"" + wallet.label + " logo\"><span class=\"wallet-name\" data-bn=\"" + wallet.bn + "\" data-en=\"" + wallet.label + "\">" + name + "</span></span>";
  }).join("");
}

function enhanceWalletLogos() {
  document.querySelectorAll(".payment-grid:not(.payment-mini)").forEach((grid) => {
    grid.classList.add("logo-strip");
    grid.innerHTML = walletLogosHTML();
  });
}

function legacyPromoCardHTML(promo, data) {
  const lang = currentLang();
  const tag = promo[`tag_${lang}`];
  const title = promo[`title_${lang}`];
  const summary = promo[`summary_${lang}`];
  const detailsText = lang === "bn" ? "প্রমোর বিস্তারিত" : "Promo Details";
  const signupText = lang === "bn" ? "বোনাস ক্লেইম করুন" : "Claim Bonus";
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
        </div>
        <h3>${title}</h3>
        <p class="promo-summary">${summary}</p>
        <div class="promo-card-actions">
          <a class="btn btn-secondary" href="${detailsHref}">${detailsText}</a>
          <a class="btn btn-primary" href="${targetLink}" data-signup-brand="${promo.brand || 'MCW'}" target="_blank" rel="nofollow noopener">${signupText}</a>
        </div>
      </div>
    </article>
  `;
}

function promoCardHTML(promo, data) {
  const lang = currentLang();
  const tag = promo[`tag_${lang}`] || promo.tag_en || promo.brand || "Promo";
  const title = promo[`title_${lang}`] || promo.title_en || `${promo.brand || "Brand"} Promo`;
  const summary = promo[`summary_${lang}`] || promo.summary_en || "Sports + Casino - 24/7 Withdrawal";
  const detailsText = lang === "bn" ? "প্রমোর বিস্তারিত" : "Promo Details";
  const signupText = lang === "bn" ? "বোনাস ক্লেইম করুন" : "Claim Bonus";
  const brandName = promo.brand || "MCW";
  const visualChips = promoVisualChips(brandName);
  const targetLink = getSignupLink(brandName);
  const detailsHref = window.location.pathname.includes("/pages/") ? "promos.html" : "pages/promos.html";
  const slug = brandSlug(brandName);
  return `
    <article class="promo-banner promo-${slug} dynamic-promo-card">
      <div class="promo-left">
        <div class="promo-meta">
          <span class="promo-brand">${brandName}</span>
          <span class="promo-tag">${tag}</span>
        </div>
        <h3>${title}</h3>
        <p class="promo-summary">${summary}</p>
        <div class="promo-actions">
          <a class="btn btn-primary" href="${targetLink}" data-signup-brand="${brandName}" target="_blank" rel="nofollow noopener">${signupText}</a>
          <a class="btn btn-secondary" href="${detailsHref}">${detailsText}</a>
        </div>
      </div>
      <div class="promo-right" aria-hidden="true">
        <span class="promo-orb orb-one"></span>
        <span class="promo-orb orb-two"></span>
        <span class="promo-chip">${visualChips[0]}</span>
        <span class="promo-mini-chip promo-mini-one">${visualChips[1]}</span>
        <span class="promo-mini-chip promo-mini-two">${visualChips[2]}</span>
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
    grid.innerHTML = FALLBACK_PROMOS.map((promo) => promoCardHTML(promo, { signup_link: SIGNUP_URL })).join("");
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
              <a class="btn btn-primary" href="${promoLink(promo, data)}" data-signup-brand="${promo.brand || 'MCW'}" target="_blank" rel="nofollow noopener">${promo[`cta_${lang}`] || (lang === "bn" ? "সাইন আপ করুন" : "Sign Up Now")}</a>
              <a class="btn btn-secondary" href="https://t.me/bestplaybd_win_big" target="_blank" rel="nofollow noopener">${lang === "bn" ? "টেলিগ্রাম আপডেট" : "Telegram Updates"}</a>
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
                <div class="link-pill"><strong>${lang === "bn" ? "পরবর্তী ধাপ" : "Call to Action"}</strong><span>${promo[`cta_${lang}`] || (lang === "bn" ? "সাইন আপ করুন" : "Sign Up Now")}</span></div>
              </div>
            </div>
          </div>

          <div class="detail-stack">
            <div class="content-shell">
              <h2>${lang === "bn" ? "কীভাবে প্রমোটি দেখবেন" : "How to Use This Page"}</h2>
              <ol>
                <li>${lang === "bn" ? "অফারের সারাংশ আগে দেখুন" : "Read the promo summary first"}</li>
                <li>${lang === "bn" ? "ব্যানার ও ব্যাখ্যা মিলিয়ে বুঝুন" : "Match the banner with the short explanation"}</li>
                <li>${lang === "bn" ? "সাইন আপ বাটন ব্যবহার করুন" : "Use the signup button to continue"}</li>
                <li>${lang === "bn" ? "পরের আপডেটের জন্য টেলিগ্রাম ফলো করুন" : "Follow Telegram for the next update"}</li>
              </ol>
            </div>

            <div class="content-shell">
              <h2>${lang === "bn" ? "দ্রুত এগিয়ে যান" : "Quick Action"}</h2>
              <div class="detail-actions">
                <a class="btn btn-primary" href="${promoLink(promo, data)}" data-signup-brand="${promo.brand || 'MCW'}" target="_blank" rel="nofollow noopener">${promo[`cta_${lang}`] || (lang === "bn" ? "সাইন আপ করুন" : "Sign Up Now")}</a>
                <a class="btn btn-secondary" href="promos.html">${lang === "bn" ? "সব প্রমোশন দেখুন" : "See All Promos"}</a>
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
          "<div class=\"card-actions\"><a class=\"btn btn-primary\" href=\"" + brandLink(brand, data) + "\" data-signup-brand=\"" + brand.brand + "\" target=\"_blank\" rel=\"nofollow noopener\">" + (lang === "bn" ? "সাইন আপ করুন" : "Sign Up") + "</a><a class=\"btn btn-secondary\" href=\"" + reviewPath + "\">" + (lang === "bn" ? "রিভিউ" : "Review") + "</a></div>" +
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
          "<td data-label=\"Action\"><a class=\"mini-cta\" href=\"" + brandLink(brand, data) + "\" data-signup-brand=\"" + brand.brand + "\" target=\"_blank\" rel=\"nofollow noopener\">" + (lang === "bn" ? "সাইন আপ করুন" : "Sign Up") + "</a></td>" +
        "</tr>"
      ).join("");
    }
    if (featuredGrid) {
      featuredGrid.classList.add("home-promo-showcase");
      featuredGrid.innerHTML = data.promos.filter(p => p.featured).slice(0,5).map((promo) => promoCardHTML(promo, data)).join("");
    }
    if (allPromoGrid) allPromoGrid.innerHTML = data.promos.map((promo) => promoCardHTML(promo, data)).join("");
  } catch (error) {
    if (featuredGrid) {
      featuredGrid.classList.add("home-promo-showcase");
      featuredGrid.innerHTML = FALLBACK_PROMOS.map((promo) => promoCardHTML(promo, { signup_link: SIGNUP_URL })).join("");
    }
    if (allPromoGrid) allPromoGrid.innerHTML = FALLBACK_PROMOS.map((promo) => promoCardHTML(promo, { signup_link: SIGNUP_URL })).join("");
    if (brandGrid && !brandGrid.children.length) brandGrid.innerHTML = `<div class="card empty-state"><h3>Unable to load data</h3></div>`;
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
      item.rel = "nofollow noopener";
    });
  } catch (error) {
    // noop
  }
}


function enhanceGamePlayButtons() {
  const lang = currentLang();
  document.querySelectorAll(".game-provider-section .game-section-head").forEach((head) => {
    if (head.querySelector(".game-play-action")) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "game-play-action mini-cta";
    button.setAttribute("data-open-signup", "");
    button.setAttribute("data-bn", "এখনই খেলুন");
    button.setAttribute("data-en", "Play Now");
    button.textContent = lang === "bn" ? "এখনই খেলুন" : "Play Now";
    head.appendChild(button);
  });
}

async function renderDynamicContent() {
  enhanceWalletLogos();
  await Promise.all([
    renderPromosPage(),
    renderPromoDetailPage(),
    hydrateTelegramLinks(),
    renderHomeBrandSections()
  ]);
  enhanceFooterLogo();
  enhanceGamePlayButtons();
  bindSignupChooser();
}

function signupBrands() {
  return [
    { brand: "MCW", best_bn: "স্পোর্টস + ক্যাসিনো", best_en: "Sports + Casino", deposit: "৳200", rating: "4.9/5" },
    { brand: "BanglaWin", best_bn: "স্লট + বেশি প্রমোশন", best_en: "Slots + Higher Promos", deposit: "৳100", rating: "4.8/5" },
    { brand: "Khelaghor", best_bn: "স্পোর্টস + ক্যাসিনো", best_en: "Sports + Casino", deposit: "৳100", rating: "4.7/5" },
    { brand: "Deshislots", best_bn: "স্লট + দেশি অভিজ্ঞতা", best_en: "Slots + Deshi Vibes", deposit: "৳100", rating: "4.7/5" },
    { brand: "Banglabet", best_bn: "নতুনদের জন্য সহজ", best_en: "Beginner Friendly", deposit: "৳100", rating: "4.7/5" }
  ];
}

function ensureSignupChooser() {
  if (document.getElementById("signupChooser")) return;
  const lang = currentLang();
  const brands = signupBrands();
  const modal = document.createElement("div");
  modal.id = "signupChooser";
  modal.className = "signup-modal-backdrop";
  modal.hidden = true;
  modal.innerHTML = `
    <div class="signup-modal" role="dialog" aria-modal="true" aria-labelledby="signupChooserTitle">
      <button class="signup-close" type="button" data-close-signup aria-label="Close">×</button>
      <span class="section-kicker">${lang === "bn" ? "সাইন আপ করুন" : "Sign Up"}</span>
      <h2 id="signupChooserTitle">${lang === "bn" ? "আপনার পছন্দের ব্র্যান্ড বেছে নিন" : "Choose Your Preferred Brand"}</h2>
      <p>${lang === "bn" ? "সব ৫টি ব্র্যান্ডের সাইন আপ লিংক নিচে রাখা হয়েছে। যেটা আপনার জন্য ভালো মনে হয় সেটিতে এগিয়ে যান।" : "All 5 brand signup links are here. Pick the one that fits your preference and continue."}</p>
      <div class="signup-brand-grid">
        ${brands.map((item, index) => `
          <a class="signup-brand-option" href="${getSignupLink(item.brand)}" data-signup-brand="${item.brand}" target="_blank" rel="nofollow noopener">
            <span class="rank-badge">#${index + 1}</span>
            <strong>${item.brand}</strong>
            <small>${lang === "bn" ? item.best_bn : item.best_en}</small>
            <em>${item.deposit} · 24/7 · ★ ${item.rating}</em>
            <b>${lang === "bn" ? "সাইন আপ করুন" : "Sign Up"}</b>
          </a>
        `).join("")}
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function openSignupChooser() {
  ensureSignupChooser();
  const modal = document.getElementById("signupChooser");
  if (modal) modal.hidden = false;
}

function closeSignupChooser() {
  const modal = document.getElementById("signupChooser");
  if (modal) modal.hidden = true;
}

function bindSignupChooser() {
  ensureSignupChooser();
  ensureFloatingSignup();
  document.querySelectorAll("[data-open-signup]").forEach((button) => {
    if (button.dataset.signupBound) return;
    button.dataset.signupBound = "true";
    button.addEventListener("click", openSignupChooser);
  });
  document.querySelectorAll("[data-close-signup]").forEach((button) => {
    if (button.dataset.closeBound) return;
    button.dataset.closeBound = "true";
    button.addEventListener("click", closeSignupChooser);
  });
  const modal = document.getElementById("signupChooser");
  if (modal && !modal.dataset.backdropBound) {
    modal.dataset.backdropBound = "true";
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeSignupChooser();
    });
  }
}

function ensureFloatingSignup() {
  const isHome = !window.location.pathname.includes("/pages/");
  if (!isHome || document.querySelector(".signup-float")) return;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "signup-float";
  button.setAttribute("data-open-signup", "");
  button.setAttribute("data-bn", "সাইন আপ করুন");
  button.setAttribute("data-en", "Sign Up");
  button.textContent = currentLang() === "bn" ? "সাইন আপ করুন" : "Sign Up";
  document.body.appendChild(button);
}

function enhanceFooterLogo() {
  document.querySelectorAll(".site-footer .footer-wrap").forEach((footer) => {
    if (footer.querySelector(".footer-brand-logo")) return;
    const firstBlock = footer.querySelector("div:first-child");
    if (!firstBlock) return;
    const logo = document.createElement("a");
    logo.className = "footer-brand-logo";
    logo.href = window.location.pathname.includes("/pages/") ? "../index.html" : "index.html";
    logo.innerHTML = `<img src="${assetPath("assets/logo.svg")}" alt="BestPlayBD logo"><span><strong>BestPlayBD</strong><small data-bn="BD বোনাস তুলনা" data-en="BD Bonus Compare">${currentLang() === "bn" ? "BD বোনাস তুলনা" : "BD Bonus Compare"}</small></span>`;
    firstBlock.prepend(logo);
    const duplicateBrand = firstBlock.querySelector(":scope > strong");
    if (duplicateBrand) duplicateBrand.classList.add("footer-text-brand");
  });
}

renderDynamicContent().then(() => {
  applySignupLinks();
  enhanceFooterLogo();
  enhanceGamePlayButtons();
  bindSignupChooser();
});
