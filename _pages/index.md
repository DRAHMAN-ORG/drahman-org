---
layout: default
title: Inicio
description: "Drahmán: Plataforma educativa innovadora que integra IA de forma ética y responsable en el aula. Descubre cómo transformar la educación con los guardianes del conocimiento."
permalink: /
---

<section class="hero" aria-labelledby="hero-title">
    <br> <br> <br>
    <h2 id="hero-title" class="hero__title">Enciende el Fuego del Conocimiento con Drahmán</h2>
    <br><br><br>
    <p class="hero__subtitle">Una plataforma educativa innovadora que integra la IA de forma ética y responsable en el aula</p>
    </section>

<section id="about" class="section" aria-labelledby="about-title">
    <h2 id="about-title">¿Quiénes son los Drahmanes?</h2>
    <p>Los Drahmanes son guardianes del conocimiento que combaten la ignorancia y promueven el aprendizaje. Cada Drahmán representa un área del saber y está diseñado para inspirar y guiar a los estudiantes en su viaje educativo, utilizando la inteligencia artificial de manera ética y responsable.</p>
</section>

<section id="features" class="section" aria-labelledby="features-title">
    <h2 id="features-title">Características</h2>
    <p>Drahmán integra los beneficios de la IA en tu aula de forma natural y sin complicaciones. Sin necesidad de conocimientos técnicos, transforma tu enseñanza y garantiza un aprendizaje más efectivo, personalizado y emocionante para cada estudiante. El futuro de la educación está al alcance de tu mano, permitiéndote inspirar, motivar y potenciar el talento de la próxima generación.</p>
    <br>
    <div class="feature__grid"> 
        {% for feature in site.data.features %}
        <div class="section-card feature">
        <br>
            {% responsive_image_block %}
                path: assets/images/{{ feature[0] | slugify }}.webp
                alt: "Icono de {{ feature[0] }}"
                class: "feature__image-container"
                loading: lazy
            {% endresponsive_image_block %}
              <div class="section-card__content">
            <h3 class="section-card__title">{{ feature[0] }}</h3>
            <p class="section-card__description">{{ feature[1] }}</p>
                <a href="#" class="button">Conocer más </a>
              </div>
        </div>
        {% endfor %}
    </div> 
</section>


<section id="characters" class="section" aria-labelledby="characters-title">
    <h2 id="characters-title">Personajes</h2>
    <p class="characters__intro">
        Dale vida a tus clases con los Drahmanes, guardianes que transforman la educación en una aventura inolvidable. A través de fascinantes narrativas y cuentos cautivadores, cada lección se vuelve emocionante y significativa. Este enfoque innovador no solo atrae a los estudiantes, sino que también potencia su comprensión, retención y pensamiento crítico. Con nuestros personajes, tus alumnos vivirán el conocimiento, forjando conexiones emocionales que perdurarán más allá del aula. Descubre cómo los Drahmanes iluminan cada área del saber con desafíos narrativos y aventuras educativas, inspirando una pasión duradera por el aprendizaje en cada estudiante.
    </p>

    <div class="character__grid"> 
        {% for personaje in site.personajes %}
        <div class="section-card character">
        <br> 
            <h3 class="character__name">{{ personaje.title }}</h3>
            {% responsive_image_block %}
                path: assets/images/{{personaje.image}}.webp
                alt: "{{ personaje.title }}" 
                class: "character__img"
                style: "width: 100%; max-width: 250px; aspect-ratio: 1 / 1; border-radius: 50%; margin-bottom: var(--spacing-medium); box-shadow: var(--box-shadow); object-fit: cover;"
                loading: lazy
            {% endresponsive_image_block %}

            <p>{{ personaje.description }}</p>
            <a href="{{ personaje.url | relative_url }}" class="button">¡Conoce a {{ personaje.title }}!</a> <br><br> 
        </div>
        {% endfor %}
    </div> 
</section>

<section id="myth" class="section" aria-labelledby="myth-title">
    <h2 id="myth-title">El Mito de los Drahmanes</h2>
    <p>Pronto descubrirás la fascinante leyenda de los Drahmanes, guardianes ancestrales del conocimiento que han emergido en la era digital. Mantente atento para sumergirte en esta épica historia que une la sabiduría antigua con la tecnología moderna.</p>
    <p>Sé el primero en conocer el mito</p>     
    <div class="button-container">
    <a href="{{ '/subscribe' | relative_url }}" class="button">Suscríbete</a>
    </div>
</section>

<section id="contact" class="section" aria-labelledby="contact-title">
    <h2 id="contact-title">Únete a la Evolución Educativa</h2>
    <p>Descubre cómo Drahmán puede transformar tu aula y preparar a tus estudiantes para los desafíos del futuro. Juntos, podemos encender el fuego del conocimiento en cada joven mente.</p>
</section>