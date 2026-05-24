// ============================================================
// Maths Learning Hub — script.js
// Handles: bilingual toggle (ZH/EN), navbar scroll, animations
// ============================================================

(function () {
  'use strict';

  // ── Language state ──
  let currentLang = localStorage.getItem('mlh-lang') || 'zh';

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('mlh-lang', lang);

    // Update all data-zh / data-en elements
    document.querySelectorAll('[data-zh][data-en]').forEach(function (el) {
      el.textContent = el.getAttribute('data-' + lang);
    });

    // Update lang toggle label
    const label = document.getElementById('langLabel');
    if (label) label.textContent = lang === 'zh' ? 'EN' : '中';

    // Update html lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-HK' : 'en';
  }

  // ── Lang toggle button ──
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      applyLang(currentLang === 'zh' ? 'en' : 'zh');
    });
  }

  // ── Navbar scroll shadow ──
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // ── Intersection Observer for card entrance animations ──
  if ('IntersectionObserver' in window) {
    const animTargets = document.querySelectorAll('.tool-card, .formula-card');
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    animTargets.forEach(function (el) {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });
  }

  // ── Init ──
  applyLang(currentLang);
})();
