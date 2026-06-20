/* ═══════════════════════════════════════════════════════════════
   Cakes'MA Confeitaria — script.js
   Módulos: Header · Hero · Mobile Menu · Scroll Reveal · Lightbox
═══════════════════════════════════════════════════════════════ */

(() => {
  'use strict';

  /* ────────────────────────────────────────
     HEADER — adiciona classe .scrolled
  ──────────────────────────────────────── */
  const header = document.getElementById('site-header');

  const handleScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // estado inicial ao carregar

  /* ────────────────────────────────────────
     HERO — Ken Burns ao carregar imagem
  ──────────────────────────────────────── */
  const heroSection = document.querySelector('.hero');
  const heroImg = heroSection?.querySelector('.hero-bg img');

  if (heroImg) {
    if (heroImg.complete) {
      heroSection.classList.add('loaded');
    } else {
      heroImg.addEventListener('load', () => heroSection.classList.add('loaded'));
    }
  }

  /* ────────────────────────────────────────
     MOBILE MENU — toggle acessível
  ──────────────────────────────────────── */
  const toggle     = document.querySelector('.mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  const setMenuOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    mobileMenu.setAttribute('aria-hidden', String(!open));
    mobileMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  // Abrir/fechar ao clicar no botão
  toggle?.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setMenuOpen(!isOpen);
  });

  // Fechar ao clicar em qualquer link interno do menu
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  // Fechar com tecla Escape (fora do lightbox)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.classList.contains('open')) {
      setMenuOpen(false);
    }
  });

  /* ────────────────────────────────────────
     SCROLL REVEAL — IntersectionObserver
  ──────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach(el => revealObserver.observe(el));

  /* ────────────────────────────────────────
     LIGHTBOX — galeria acessível
  ──────────────────────────────────────── */
  const lightbox    = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-image');
  const prevBtn     = lightbox.querySelector('.prev');
  const nextBtn     = lightbox.querySelector('.next');
  const galleryCards = [...document.querySelectorAll('.gallery-card[data-index]')];

  // Monta array de imagens a partir dos data attributes dos cards
  const images = galleryCards.map(card => ({
    src: card.dataset.src,
    alt: card.dataset.alt,
  }));

  let currentIndex = 0;

  const updateArrows = () => {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === images.length - 1;
  };

  const showImage = (index) => {
    currentIndex = Math.max(0, Math.min(index, images.length - 1));
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt;
    updateArrows();
  };

  const openLightbox = (index) => {
    showImage(index);
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightbox.querySelector('.lightbox-close').focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    galleryCards[currentIndex]?.focus(); // devolve foco ao card que abriu
  };

  // Abrir ao clicar em cada card
  galleryCards.forEach(card => {
    card.addEventListener('click', () => {
      openLightbox(Number(card.dataset.index));
    });
  });

  // Navegar entre imagens
  prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
  nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

  // Fechar ao clicar no backdrop ou no botão fechar
  lightbox.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', closeLightbox);
  });

  // Teclado: Escape fecha, setas navegam
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  });

})();