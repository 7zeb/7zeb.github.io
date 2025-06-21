// NewUI 3 Dark Mode

(function() {
    const btn = document.getElementById('dark-toggle-btn');
    const icon = document.getElementById('dark-toggle-icon');

    // Aero Glass Moon Icon (SVG)
    const moon = `
    <svg width="1.5em" height="1.5em" viewBox="0 0 32 32" fill="none" aria-hidden="true" style="vertical-align:-0.25em;">
      <defs>
        <radialGradient id="aero-moon-grad" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
          <stop offset="0%" stop-color="#e7f7ff"/>
          <stop offset="60%" stop-color="#b7eaff"/>
          <stop offset="100%" stop-color="#34b3f1"/>
        </radialGradient>
        <radialGradient id="aero-moon-gloss" cx="45%" cy="25%" r="70%">
          <stop offset="0%" stop-color="#fff" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <path d="M25.5 19.5A11 11 0 0 1 12.5 6.5a9 9 0 1 0 13 13z" fill="url(#aero-moon-grad)" stroke="#7ad5f7" stroke-width="1.5"/>
      <ellipse cx="15" cy="13" rx="7.5" ry="7" fill="url(#aero-moon-gloss)" />
      <ellipse cx="23" cy="17" rx="2.5" ry="2" fill="#fff6" />
    </svg>
    `;

    // Aero Glass Sun Icon (SVG)
    const sun = `
    <svg width="1.5em" height="1.5em" viewBox="0 0 32 32" fill="none" aria-hidden="true" style="vertical-align:-0.25em;">
      <defs>
        <radialGradient id="aero-sun-grad" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
          <stop offset="0%" stop-color="#fffbe7"/>
          <stop offset="60%" stop-color="#ffe680"/>
          <stop offset="100%" stop-color="#f1b634"/>
        </radialGradient>
        <radialGradient id="aero-sun-gloss" cx="45%" cy="25%" r="70%">
          <stop offset="0%" stop-color="#fff" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="16" cy="16" r="7" fill="url(#aero-sun-grad)" stroke="#ffe680" stroke-width="1.5"/>
      <circle cx="16" cy="13" r="5" fill="url(#aero-sun-gloss)" />
      <!-- Sun rays -->
      <g stroke="#ffe680" stroke-width="2" stroke-linecap="round">
        <line x1="16" y1="3" x2="16" y2="7"/>
        <line x1="16" y1="25" x2="16" y2="29"/>
        <line x1="3" y1="16" x2="7" y2="16"/>
        <line x1="25" y1="16" x2="29" y2="16"/>
        <line x1="7.6" y1="7.6" x2="10.5" y2="10.5"/>
        <line x1="21.5" y1="21.5" x2="24.4" y2="24.4"/>
        <line x1="7.6" y1="24.4" x2="10.5" y2="21.5"/>
        <line x1="21.5" y1="10.5" x2="24.4" y2="7.6"/>
      </g>
    </svg>
    `;

    function setTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            icon.innerHTML = sun;
            btn.setAttribute('aria-label', 'Switch to light mode');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            icon.innerHTML = moon;
            btn.setAttribute('aria-label', 'Switch to dark mode');
        }
    }

    function getPreferredTheme() {
        const stored = localStorage.getItem('theme');
        if (stored === 'dark' || stored === 'light') return stored;
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }

    setTheme(getPreferredTheme());

    btn.addEventListener('click', function() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
})();
