//NewUI 4 JavaScript file
//This is REQUIRED for NewUI 4 to work proporly

// DARK MODE TOGGLE
document.addEventListener('DOMContentLoaded', () => {
  const modeToggle = document.querySelector('.mode-toggle');
  const body = document.body;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  function setMode(isDark) {
    if(isDark) {
      body.classList.add('dark-mode');
      modeToggle.textContent = 'Light Mode';
    } else {
      body.classList.remove('dark-mode');
      modeToggle.textContent = 'Dark Mode';
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
  const savedMode = localStorage.getItem('theme');
  setMode(savedMode === 'dark' || (!savedMode && prefersDark));
  modeToggle.addEventListener('click', () => {
    setMode(!body.classList.contains('dark-mode'));
  });

  // Text carousel (HTML-editable)
  const carousel = document.querySelector('.text-carousel');
  const contentElem = carousel.querySelector('.carousel-content');
  const items = Array.from(contentElem.querySelectorAll('span'));
  const prevBtn = carousel.querySelector('.carousel-button.prev');
  const nextBtn = carousel.querySelector('.carousel-button.next');
  let index = 0;
  function showCarousel(i) {
    items.forEach((item, idx) => {
      item.style.display = idx === i ? 'inline' : 'none';
    });
  }
  showCarousel(index);
  prevBtn.addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    showCarousel(index);
  });
  nextBtn.addEventListener('click', () => {
    index = (index + 1) % items.length;
    showCarousel(index);
  });
});
