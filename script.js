// ── COHORT CONFIG — only edit this section for each new intake ────────────
const COHORT = {
  // ── Toggle between states ──
  comingSoon: true,          // true = show "Coming Soon" sticky note
  comingSoonDates: { en: "Jul 5 – Aug 30", id: "5 Jul – 30 Agt" },

  schedule: {
    en: "Cohort A: Mon 8:00pm · Sat 10:30am (WIB) Cohort B: Thu 8pm · Sun 8:00pm (WIB)",
    id: "Kohort A: Senin pukul 20.00 · Sabtu pukul 10.30 (WIB) Kohort B: Kamis pukul 20.00 · Minggu pukul 20.00 (WIB)"
  },
  dates: {
    en: "5 Jul – 30 Aug 2026",
    id: "5 Jul – 30 Aug 2026"
  },
  pricingIntro: {
    en: "Early bird until 31 July. Lock your seat — only 5–7 students per cohort.",
    id: "Early bird sampai 31 Juli. Amankan tempatmu — hanya 5–7 siswa per cohort."
  },
  earlyBirdNote: {
    en: "Register before 31 July to lock this price.",
    id: "Daftar sebelum 31 Juli untuk mengunci harga ini."
  },
  ctaSub: {
    en: "Min 5 students. Max 7. Early bird closes 31 July.",
    id: "Min 5 siswa. Maks 7. Early bird tutup 31 Juli."
  },
  month2Payment: {
    en: "By end of Week 3. It locks your seat for the second half of the program.",
    id: "Akhir minggu ke-3. Ini mengamankan tempatmu untuk paruh kedua program."
  },

  earlyBirdUpfront: "Rp 2.400.000",
  normalUpfront:    "Rp 2.800.000",

  registerLink: "https://forms.gle/GfPT1bRhs8mve3P99",
  whatsappLink: "https://wa.me/6287886681160",
};
// ──────────────────────────────────────────────────────────────────────────

function applyConfig() {
  // Coming soon state
  const note = document.getElementById('coming-soon-note');
  if (note) note.style.display = COHORT.comingSoon ? 'flex' : 'none';

  // Grey out register buttons when coming soon
  document.querySelectorAll('[data-config-href="registerLink"]').forEach(el => {
    el.classList.toggle('greyed', COHORT.comingSoon);
  });

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
