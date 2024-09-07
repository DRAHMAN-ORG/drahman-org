document.addEventListener('DOMContentLoaded', (event) => {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    });

    // Cierra el menú si se hace clic fuera de él
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnMenuToggle = menuToggle.contains(event.target);
        if (!isClickInsideNav && !isClickOnMenuToggle && nav.classList.contains('active')) {
            nav.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Maneja la navegación con teclado
    nav.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            nav.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.focus();
        }
    });
});
