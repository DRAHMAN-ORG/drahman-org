---
layout: default
title: Inicio
---

<section class="hero" aria-labelledby="hero-title">
    <h2 id="hero-title" class="hero__title">Enciende el Fuego del Conocimiento con Drahmán</h2>
    <p class="hero__subtitle">Una plataforma educativa innovadora que integra IA de forma ética y responsable en el aula</p>
    <a href="https://sites.google.com/view/drahman-beta/los-drahmanes" class="button">¡Explora Drahmán Ahora!</a>
</section>

<section id="about" class="section" aria-labelledby="about-title">
    <h2 id="about-title">¿Quiénes son los Drahmanes?</h2>
    <p>Los Drahmanes son guardianes del conocimiento que combaten la ignorancia y promueven el aprendizaje. Cada Drahmán representa un área del saber y está diseñado para inspirar y guiar a los estudiantes en su viaje educativo, utilizando la inteligencia artificial de manera ética y responsable.</p>
</section>

<!-- Add other sections (features, characters, myth, contact) here -->

<section id="characters" class="section" aria-labelledby="characters-title">
    <h2 id="characters-title">Personajes</h2>
    <div class="characters__grid">
    {% for personaje in site.personajes %}
        <div class="character">
            <img src="{{ personaje.image | default: '/assets/images/default-character.webp' | relative_url }}" alt="{{ personaje.title }}" class="character__image" width="150" height="150" loading="lazy">
            <h3 class="character__name">{{ personaje.title }}</h3>
            <p class="character__description">{{ personaje.description }}</p>
            <a href="{{ personaje.url | relative_url }}" class="button">¡Conoce a {{ personaje.title }}!</a>
        </div>
    {% endfor %}
    </div>
</section>