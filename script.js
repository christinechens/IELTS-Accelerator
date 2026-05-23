// ── COHORT CONFIG — only edit this section for each new intake ────────────
const COHORT = {
  schedule: {
    en: "Mon 8pm · Sat 10:30am (WIB)",
    id: "Sen 20:00 · Sab 10:30 (WIB)"
  },
  dates: {
    en: "4 May – 22 Jun 2026",
    id: "4 Mei – 22 Jun 2026"
  },
  pricingIntro: {
    en: "Early bird until 30 April. Lock your seat — only 5–7 students per cohort.",
    id: "Early bird sampai 30 April. Amankan tempatmu — hanya 5–7 siswa per cohort."
  },
  earlyBirdNote: {
    en: "Register before 30 April to lock this price.",
    id: "Daftar sebelum 30 April untuk mengunci harga ini."
  },
  ctaSub: {
    en: "Min 5 students. Max 7. Early bird closes 30 April.",
    id: "Min 5 siswa. Maks 7. Early bird tutup 30 April."
  },
  month2Payment: {
    en: "By end of Week 3 (around 25 May). It locks your seat for the second half of the program.",
    id: "Akhir minggu ke-3 (sekitar 25 Mei). Ini mengamankan tempatmu untuk paruh kedua program."
  },

  earlyBirdUpfront: "Rp 2.400.000",
  normalUpfront:    "Rp 2.800.000",

  registerLink: "https://forms.gle/GfPT1bRhs8mve3P99",
  whatsappLink: "https://wa.me/6287886681160",
};
// ──────────────────────────────────────────────────────────────────────────

function applyConfig() {
  // Bilingual text — sets data-en/data-id so lang toggle still works
  document.querySelectorAll('[data-config]').forEach(el => {
    const val = COHORT[el.dataset.config];
    if (!val) return;
    el.setAttribute('data-en', val.en);
    el.setAttribute('data-id', val.id);
    el.innerHTML = val[lang];
  });

  // Price numbers
  document.querySelectorAll('[data-config-price]').forEach(el => {
    el.textContent = COHORT[el.dataset.configPrice];
  });

  // Links
  document.querySelectorAll('[data-config-href]').forEach(el => {
    el.href = COHORT[el.dataset.configHref];
  });
}

// ── LANG TOGGLE ──
let lang = 'en';
function toggleLang() {
  lang = lang === 'en' ? 'id' : 'en';
  document.getElementById('lang-toggle').innerHTML = lang === 'en' ? '🇮🇩 Bahasa' : '🇬🇧 English';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en]').forEach(el => {
    const v = el.getAttribute(lang === 'en' ? 'data-en' : 'data-id');
    if (v != null) el.innerHTML = v;
  });
}

// ── FAQ ──
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// ── REVEAL ON SCROLL ──
const io = new IntersectionObserver(es => {
  es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

applyConfig();
