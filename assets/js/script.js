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
// Archivo: hamburger-menu.js

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const headerNav = document.querySelector('.header__nav');
    const header = document.querySelector('.header');
    const menuItems = document.querySelectorAll('.header__menu-item');

    function toggleMenu() {
        header.classList.toggle('menu-open');
        
        const isExpanded = header.classList.contains('menu-open');
        menuToggle.setAttribute('aria-expanded', isExpanded);
        
        if (isExpanded) {
            headerNav.style.display = 'block';
        } else {
            headerNav.style.display = 'none';
        }
    }

    menuToggle.addEventListener('click', toggleMenu);

    // Cerrar el menú al hacer clic en un elemento del menú
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) { // Asume que 768px es el breakpoint móvil
                toggleMenu();
            }
        });
    });

    // Ajustar la visibilidad del menú en resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            headerNav.style.display = 'block';
            header.classList.remove('menu-open');
            menuToggle.setAttribute('aria-expanded', 'false');
        } else if (!header.classList.contains('menu-open')) {
            headerNav.style.display = 'none';
        }
    });
});