<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drahmán - Enciende el Fuego del Conocimiento</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

        :root {
            --bg-color: #ffffff;
            --text-color: #333333;
            --primary-color: #FF6600;
            --secondary-color: #FF9900;
            --accent-color: #0056b3;
        }

        body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
            transition: background-color 0.3s, color 0.3s;
            overflow-x: hidden;
        }

        body.dark-mode {
            --bg-color: #121212;
            --text-color: #ffffff;
            --accent-color: #4db8ff;
        }

        .background-animation {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.05;
            background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
            background-size: 400% 400%;
            animation: gradientBG 15s ease infinite;
        }

        @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
        }

        .logo {
            font-size: 24px;
            font-weight: 600;
        }

        nav a {
            color: var(--text-color);
            text-decoration: none;
            margin-left: 20px;
            transition: color 0.3s ease;
            font-weight: 400;
        }

        nav a:hover {
            color: var(--primary-color);
        }

        .hero {
            text-align: center;
            padding: 60px 0;
        }

        h1 {
            font-size: 48px;
            margin-bottom: 20px;
            font-weight: 600;
            word-wrap: break-word;
            hyphens: auto;
        }

        .subtitle {
            font-size: 24px;
            margin-bottom: 40px;
            font-weight: 300;
        }

        .cta-button {
            display: inline-block;
            background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
            color: #ffffff;
            text-decoration: none;
            padding: 15px 30px;
            border-radius: 30px;
            font-size: 18px;
            font-weight: 600;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .cta-button:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(255, 102, 0, 0.3);
        }

        .features {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin-top: 60px;
        }

        .feature {
            flex-basis: 30%;
            text-align: center;
            margin-bottom: 40px;
            transition: transform 0.3s ease;
            padding: 20px;
            border-radius: 10px;
            background-color: rgba(255, 255, 255, 0.05);
        }

        .feature:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .feature img {
            width: 80px;
            height: 80px;
            margin-bottom: 20px;
        }

        .characters {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin-top: 60px;
        }

        .character {
            flex-basis: 22%;
            text-align: center;
            margin-bottom: 40px;
            transition: transform 0.3s ease;
        }

        .character:hover {
            transform: scale(1.05);
        }

        .character img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin-bottom: 20px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .section {
            margin-bottom: 60px;
        }

        #theme-toggle {
            background: none;
            border: none;
            color: var(--text-color);
            cursor: pointer;
            font-size: 24px;
        }

        @media (max-width: 768px) {
            .feature, .character {
                flex-basis: 45%;
            }
        }

        @media (max-width: 480px) {
            .feature, .character {
                flex-basis: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="background-animation"></div>
    <div class="container">
        <header>
            <div class="logo">Drahmán</div>
            <nav>
                <a href="#about">Acerca de</a>
                <a href="#features">Características</a>
                <a href="#characters">Personajes</a>
                <a href="#myth">El Mito</a>
                <a href="#contact">Contacto</a>
                <button id="theme-toggle">🌓</button>
            </nav>
        </header>

        <section class="hero">
            <h1>Enciende el Fuego del Conocimiento con Drahmán</h1>
            <p class="subtitle">Una plataforma educativa innovadora que integra IA de forma ética y responsable en el aula</p>
            <a href="https://sites.google.com/view/drahman-beta/los-drahmanes" class="cta-button">¡Explora Drahmán Ahora!</a>
        </section>

        <section id="about" class="section">
            <h2>¿Quiénes son los Drahmanes?</h2>
            <p>Los Drahmanes son guardianes del conocimiento que combaten la ignorancia y promueven el aprendizaje. Cada Drahmán representa un área del saber y está diseñado para inspirar y guiar a los estudiantes en su viaje educativo, utilizando la inteligencia artificial de manera ética y responsable.</p>
        </section>

        <section id="features" class="features section">
            <div class="feature">
                <img src="/api/placeholder/80/80" alt="IA Ética">
                <h3>IA Ética en el Aula</h3>
                <p>Integra tecnología de vanguardia de manera responsable y segura en tus clases, fomentando un aprendizaje innovador y consciente.</p>
            </div>
            <div class="feature">
                <img src="/api/placeholder/80/80" alt="Aprendizaje Personalizado">
                <h3>Aprendizaje Personalizado</h3>
                <p>Adapta la experiencia educativa a las necesidades individuales de cada estudiante, maximizando su potencial de aprendizaje.</p>
            </div>
            <div class="feature">
                <img src="/api/placeholder/80/80" alt="Recursos Dinámicos">
                <h3>Recursos Dinámicos</h3>
                <p>Accede a una amplia gama de materiales interactivos y actualizados, diseñados para mantener el compromiso y la curiosidad de los estudiantes.</p>
            </div>
            <div class="feature">
                <img src="/api/placeholder/80/80" alt="Playground AI">
                <h3>Playground AI</h3>
                <p>Un espacio dedicado para que maestros y estudiantes experimenten con IA generativa, creando personajes y narrativas interactivas.</p>
            </div>
            <div class="feature">
                <img src="https://drive.google.com/file/d/1w9Q9Jk7fwH43R0xt7X6zElusd5p21jOn/view?usp=sharing" alt="Planifia">
                <h3>Planifia: Asistente del Maestro</h3>
                <p>Un bot inteligente diseñado para ayudar a los docentes en la planificación de lecciones, evaluaciones y tareas administrativas, optimizando su tiempo y mejorando la calidad educativa.</p>
            </div>
        </section>

        <section id="characters" class="characters section">
            <div class="character">
                <img src="/api/placeholder/150/150" alt="Cenia">
                <h3>Cenia</h3>
                <p>Guardiana de las Ciencias Naturales, inspira la curiosidad por el mundo natural y fomenta la conciencia ambiental.</p>
            </div>
            <div class="character">
                <img src="/api/placeholder/150/150" alt="Mathia">
                <h3>Mathia</h3>
                <p>Maestra de las Matemáticas, transforma los números y ecuaciones en aventuras lógicas fascinantes.</p>
            </div>
            <div class="character">
                <img src="https://drive.google.com/file/d/1aS27l1XPC2awAkDCfzTCyJwXyYRdm51E/view?usp=sharing" alt="Lenia">
                <h3>Lenia</h3>
                <p>Protectora de la Lengua y Literatura, despierta la pasión por las palabras y las historias que dan forma a nuestra cultura.</p>
            </div>
            <div class="character">
                <img src="/api/placeholder/150/150" alt="Socia">
                <h3>Socia</h3>
                <p>Guía de los Estudios Sociales, revela las conexiones entre el pasado, el presente y el futuro de nuestras sociedades.</p>
            </div>
        </section>

        <section id="myth" class="section">
            <h2>El Mito de los Drahmanes</h2>
            <p>Sumérgete en la fascinante leyenda de los Drahmanes, guardianes ancestrales del conocimiento que han emergido en la era digital para guiar a las nuevas generaciones. Descubre cómo estos seres mágicos combinan la sabiduría antigua con la tecnología moderna para transformar la educación en Ecuador y más allá.</p>
            <a href="https://sites.google.com/view/drahman-beta/los-drahmanes" class="cta-button">Descubre el Mito</a>
        </section>

        <section id="contact" class="section">
            <h2>Únete a la Evolución Educativa</h2>
            <p>Descubre cómo Drahmán puede transformar tu aula y preparar a tus estudiantes para los desafíos del futuro. Juntos, podemos encender el fuego del conocimiento en cada joven mente.</p>
            <a href="https://sites.google.com/view/drahman-beta/los-drahmanes" class="cta-button">¡Comienza Gratis Ahora!</a>
        </section>
    </div>

    <script>
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌓';
        });
    </script>
</body>
</html>