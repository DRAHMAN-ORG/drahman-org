/* Adjust JavaScript (theme-toggle.js) */

// SVG icons for moon and sun (you can replace these with your own or use a library)
//var moon = '<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 18a6 6 0 100-12 6 6 0 000 12zM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
//var sun = '<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 11.507a9.493 9.493 0 0018 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.494 9.494 0 003 11.507z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';

// Function to set the theme
//function setTheme(theme) {
//  document.documentElement.setAttribute('data-theme', theme);
//  localStorage.setItem('theme', theme);
//  updateToggleButton(theme);
//}

// Function to update the toggle button
//function updateToggleButton(theme) {
//  const themeToggle = document.getElementById('theme-toggle');
//  themeToggle.innerHTML = theme === 'dark' ? sun : moon; // Use SVG icons instead of text
//  themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
//}
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateToggleButton(theme);
  }
  
  // Function to update the toggle button
  function updateToggleButton(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>'; 
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  }
// Check for saved user preference or use system preference
const savedTheme = localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
}

// Click event on the toggle button
document.getElementById('theme-toggle').addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

// Listen for changes in system preference
prefersDarkScheme.addEventListener('change', (e) => { 
  const newTheme = e.matches ? 'dark' : 'light';
  setTheme(newTheme);
});