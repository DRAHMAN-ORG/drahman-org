// /drahman-org/js/personajes.js
document.addEventListener('DOMContentLoaded', () => {
    const gradeLinks = document.querySelectorAll('.personaje-grade');
    gradeLinks.forEach(link => {
        link.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.target.click();
            }
        });
    });
});
