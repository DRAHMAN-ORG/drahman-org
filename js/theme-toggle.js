const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌓';
    themeToggle.setAttribute('aria-label', body.classList.contains('dark-mode') ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
});
