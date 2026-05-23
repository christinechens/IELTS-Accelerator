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
