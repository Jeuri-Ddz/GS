document.addEventListener('DOMContentLoaded', () => {
  const deck = document.querySelector('.deck');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const dots = Array.from(document.querySelectorAll('.dot'));
  const prevBtn = document.querySelector('.arrow-prev');
  const nextBtn = document.querySelector('.arrow-next');
  const indicator = document.getElementById('current-label');
  const total = slides.length;
  let current = 0;

  const setActive = (index) => {
    current = Math.max(0, Math.min(index, total - 1));
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;
    indicator.textContent = slides[current].dataset.label;
    document.getElementById('slide-count').textContent =
      `${String(current + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  };

  const goTo = (index) => {
    const target = slides[Math.max(0, Math.min(index, total - 1))];
    target.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  };

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'PageDown') goTo(current + 1);
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') goTo(current - 1);
  });

  // Convierte el scroll vertical del ratón/trackpad en desplazamiento horizontal
  deck.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      deck.scrollLeft += e.deltaY;
    }
  }, { passive: false });

  // Detecta qué diapositiva está visible (swipe táctil, scroll directo, etc.)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
        setActive(slides.indexOf(entry.target));
      }
    });
  }, { root: deck, threshold: [0.6] });

  slides.forEach((slide) => observer.observe(slide));

  setActive(0);
});
