import React, { useEffect, useState } from 'react';
import './SobreMi.css';

export default function SobreMi() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="sobre-mi"
      style={{
        ...styles.section,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      <img
        className="sobre-mi-img"
        src={process.env.PUBLIC_URL + '/img/caro-biker.jpg'}
        alt="Foto de Carolina"
      />

      <div className="sobre-mi-texto">
        <h2 style={styles.title}>Sobre mí</h2>
        <p style={styles.text}>
          Soy Caro, profesional de la salud en transición al desarrollo web, apasionada por la tecnología y el aprendizaje continuo.
        </p>
        <p style={styles.text}>
          He desarrollado proyectos prácticos, incluyendo una aplicación de Rick and Morty que consume APIs y ejercicios en TypeScript, todos disponibles en mi GitHub.
        </p>
        <p style={styles.text}>
          Mi experiencia en salud me ha brindado habilidades de trabajo en equipo y comunicación, que ahora aplico en entornos tecnológicos. Me considero una persona proactiva, siempre en busca de nuevos desafíos que me permitan crecer profesionalmente.
        </p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#24493E',
    color: '#EAE3D2',
    padding: '3rem 2rem',
    maxWidth: '1000px',
    margin: '2rem auto',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    marginBottom: '1rem',
  },
};





  