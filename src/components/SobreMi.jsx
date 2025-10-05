import React, { useEffect, useState } from "react";
import "./SobreMi.css";

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
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}>
      <img
        className="sobre-mi-img"
        src={process.env.PUBLIC_URL + "/img/caro.jpg"}
        alt="Foto de Carolina"
      />

      <div className="sobre-mi-texto">
        <h2 style={styles.title}>Sobre mí</h2>
        <p style={styles.text}>🌿Soy caro!!!</p>
        <p style={styles.text}>
          Web Developer en crecimiento, me apasiona transformar ideas en
          experiencias digitales claras, atractivas y funcionales.Disfruto del
          proceso creativo de unir diseño minimalista con código limpio, siempre
          buscando que cada detalle sume a la experiencia del usuario.💻
        </p>
        <p style={styles.text}>
          Actualmente sigo expandiendo mis conocimientos en HTML, CSS,Sass,
          Bootstrap,Node.js JavaScript y React, creando proyectos propios que
          reflejan mi evolución y curiosidad por la tecnología.
        </p>

        <p style={styles.text}>
          ✨ Me definen la proactividad y la adaptabilidad. Creo en el
          aprendizaje continuo como motor para crecer y en la tecnología como
          puente para generar impacto positivo.
        </p>
      </div>
    </section>
  );
}
const styles = {
  section: {
    backgroundColor: "#24493E",
    color: "#EAE3D2",
    padding: "3rem 2rem",
    maxWidth: "1000px",
    margin: "2rem auto",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "2.5rem",
    marginBottom: "1rem",
    color: "#4ABDAC",
  },
  text: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: "1.25rem",
    lineHeight: "1.6",
    marginBottom: "1rem",
  },
};
