// theme-toggle.js
(function() {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateToggleButton(theme);
    }

    function updateToggleButton(theme) {
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌓';
        themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    }

    // Verificar la preferencia guardada del usuario o usar la preferencia del sistema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // Escuchar cambios en la preferencia del sistema
    prefersDarkScheme.addListener((e) => {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
    });
})();
