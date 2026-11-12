/* Little Endian — site behaviour. No dependencies. */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  /* ---- Sticky header shadow ------------------------------------------- */
  var hdr = document.querySelector('.hdr');
  if (hdr) {
    var onScroll = function () {
      hdr.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- Mobile navigation ---------------------------------------------- */
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav');
  if (burger && nav) {
    var setNav = function (open) {
      nav.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    burger.addEventListener('click', function () {
      setNav(burger.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setNav(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setNav(false);
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) setNav(false);
    });
  }

  /* ---- Reveal on scroll ----------------------------------------------- */
  var targets = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    Array.prototype.forEach.call(targets, function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = parseInt(el.getAttribute('data-delay') || '0', 10);
        setTimeout(function () { el.classList.add('is-in'); }, delay);
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    Array.prototype.forEach.call(targets, function (el) { io.observe(el); });
  }

  /* ---- Current year ---------------------------------------------------- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-year]'), function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---- Theme -----------------------------------------------------------
     Dark is the default. The system preference wins until the visitor picks
     a side with the toggle, and that choice is then remembered per browser.
     A tiny inline script in <head> applies it before first paint.          */
  var root = document.documentElement;
  var media = window.matchMedia('(prefers-color-scheme: light)');
  var metaTheme = document.querySelector('meta[name="theme-color"]');

  function stored() {
    try { return localStorage.getItem('le-theme'); } catch (err) { return null; }
  }
  function active() {
    var set = root.getAttribute('data-theme');
    if (set === 'light' || set === 'dark') return set;
    return media.matches ? 'light' : 'dark';
  }
  function paint(theme) {
    if (metaTheme) metaTheme.setAttribute('content', theme === 'light' ? '#ffffff' : '#07080c');
    Array.prototype.forEach.call(document.querySelectorAll('[data-theme-toggle]'), function (btn) {
      btn.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
    });
  }

  paint(active());

  Array.prototype.forEach.call(document.querySelectorAll('[data-theme-toggle]'), function (btn) {
    btn.addEventListener('click', function () {
      var next = active() === 'light' ? 'dark' : 'light';
      root.classList.add('theme-switch');          // no ragged cross-fade
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('le-theme', next); } catch (err) { /* private mode */ }
      paint(next);
      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () { root.classList.remove('theme-switch'); });
      });
    });
  });

  /* Follow the system while the visitor has not chosen for themselves. */
  var onScheme = function () { if (!stored()) paint(active()); };
  if (media.addEventListener) media.addEventListener('change', onScheme);
  else if (media.addListener) media.addListener(onScheme);

  /* ---- Remember language choice --------------------------------------- */
  try {
    var lang = document.documentElement.lang;
    if (lang) localStorage.setItem('le-lang', lang);
  } catch (err) { /* private mode — ignore */ }
})();
