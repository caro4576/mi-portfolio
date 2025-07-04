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
        Soy una persona que ama la libertad, la paz, el mar y la montaña. Apunto a lograr mi libertad financiera para aventurarme sin límites. Me apasiona el desarrollo web y crear experiencias digitales que transmitan esa esencia de calma y fuerza.
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

  