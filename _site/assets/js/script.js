document.addEventListener('DOMContentLoaded', (event) => {
    const menuToggle = document.querySelector('.header__menu-toggle'); 
    const nav = document.querySelector('.header__menu'); 

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');       // Toggle the 'active' class on the menu
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded); // Update aria-expanded attribute
    });

    // Close the menu if clicked outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnMenuToggle = menuToggle.contains(event.target);
        if (!isClickInsideNav && !isClickOnMenuToggle && nav.classList.contains('active')) {
            nav.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Handle keyboard navigation (Escape key)
    nav.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            nav.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.focus(); 
        }
    });
});

// Handle scroll effect on the header (if applicable)
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const scrollThreshold = 50; 

    function handleScroll() {
        const scrollRatio = Math.min(window.scrollY / scrollThreshold, 1);
        header.style.setProperty('--scroll-ratio', scrollRatio); 

        if (scrollRatio > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
});