// ============================================================
// Maths Learning Hub — script.js
// Handles: bilingual toggle (ZH/EN), navbar scroll, animations,
//          hamburger menu (mobile)
// ============================================================

(function () {
  'use strict';

  // ── Language state ──
  let currentLang = localStorage.getItem('mlh-lang') || 'zh';

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('mlh-lang', lang);

    // Update all data-zh / data-en elements (skip KaTeX-rendered nodes)
    document.querySelectorAll('[data-zh][data-en]').forEach(function (el) {
      // Skip elements that contain child elements (e.g. KaTeX rendered math)
      if (el.children.length === 0) {
        el.textContent = el.getAttribute('data-' + lang);
      }
    });

    // Update desktop lang toggle label
    const label = document.getElementById('langLabel');
    if (label) label.textContent = lang === 'zh' ? 'EN' : '中';

    // Update mobile lang toggle label
    const labelMobile = document.getElementById('langLabelMobile');
    if (labelMobile) labelMobile.textContent = lang === 'zh' ? 'EN' : '中';

    // Update html lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-HK' : 'en';
  }

  // ── Desktop lang toggle ──
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      applyLang(currentLang === 'zh' ? 'en' : 'zh');
    });
  }

  // ── Mobile lang toggle ──
  const langToggleMobile = document.getElementById('langToggleMobile');
  if (langToggleMobile) {
    langToggleMobile.addEventListener('click', function () {
      applyLang(currentLang === 'zh' ? 'en' : 'zh');
    });
  }

  // ── Hamburger menu ──
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  function closeMobileMenu() {
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.classList.toggle('open', isOpen);
    });

    // Close when clicking a mobile nav link
    mobileMenu.querySelectorAll('.mobile-nav-link').forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close on resize to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) closeMobileMenu();
    }, { passive: true });
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
