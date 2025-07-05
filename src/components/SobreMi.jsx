// src/components/SobreMi.jsx
import React, { useEffect, useState } from 'react';

export default function SobreMi() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id='sobre-mi' style={{ ...styles.section, opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}>
      <h2 style={styles.title}>Sobre mí</h2>
      <p style={styles.text}>
        Soy Caro, profesional de la salud en transición al desarrollo web,
        apasionada por la tecnología y el aprendizaje continuo.
        Actualmente, me estoy formando en Desarrollo Web Frontend en UNTREF y
        complemento mi formación con cursos en Udemy sobre JavaScript moderno y desarrollo web</p>
        <p style={styles.text}>
        He desarrollado proyectos prácticos, incluyendo una aplicación de Rick an Morty  que consume APIs y ejercicios en TypeScript,
        todos disponibles en mi GitHub.</p>
        <p  style={styles.text} >
        Mi experiencia en salud me ha brindado habilidades de trabajo en equipo y comunicación,
        que ahora aplico en entornos tecnológicos.
        Me considero una persona proactiva, siempre en busca de nuevos desafíos que me permitan crecer profesionalmente.
        Estoy comprometida con el aprendizaje continuo y la mejora constante, lo que me permite adaptarme rápidamente a nuevas tecnologías y metodologías de trabajo.
        Busco oportunidades para crecer como desarrolladora y contribuir con soluciones innovadoras en equipos dinámicos y colaborativos
      </p>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#24493E',
    color: '#EAE3D2',
    padding: '3rem 2rem',
    maxWidth: '700px',
    margin: '2rem auto',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#4ABDAC',
  },
  text: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: '1.25rem',
    lineHeight: '1.6',
  },
};

  