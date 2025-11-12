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

async function checkYouTubeUploadToday() {
  const apiKey = "AIzaSyBe67a0-qIYhodHBj7FfSF2K6PrHOW0MEQ";
  const channelId = "UCM4Zvt9DVqzAHJOJoCgcF_g";
  const today = new Date().toISOString().split("T")[0];

  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=5`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    for (const item of data.items) {
      const publishedDate = item.snippet.publishedAt.split("T")[0];
      if (publishedDate === today) {
        return {
          uploaded: true,
          title: item.snippet.title,
          time: item.snippet.publishedAt,
        };
      }
    }
  } catch (error) {
    console.error("YouTube API error:", error);
  }

  return { uploaded: false };
}

async function updateStatusWidget() {
  const result = await checkYouTubeUploadToday();
  const statusText = document.getElementById("statusText");

  if (result.uploaded) {
    statusText.textContent = "✅ Productive Day";
    statusText.style.color = "lime";
    statusText.title = `Uploaded: ${result.title} at ${new Date(result.time).toLocaleTimeString()}`;
  } else {
    statusText.textContent = "😴 Free Day";
    statusText.style.color = "gray";
    statusText.title = "No upload detected today";
  }
}

document.addEventListener("DOMContentLoaded", updateStatusWidget);
