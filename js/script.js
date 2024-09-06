        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌓';
        });
        const gradeLinks = document.querySelectorAll('.mathia-grade');
        gradeLinks.forEach(link => {
            link.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.target.click();
                }
            });
        });
