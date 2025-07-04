import React from 'react';
import './Proyectos.css';

const proyectos = [
  {
    titulo: 'Café Blog',
    descripcion: 'Blog visual sobre café, creado con HTML y CSS. Diseño responsive y cálido.',
    link: 'https://tucafeblog.netlify.app',
    imagen: '/images/proyecto-cafe.jpg'
  },
  {
    titulo: 'UntrefSchool',
    descripcion: 'Web institucional para una escuela primaria, proyecto integrador Untref.',
    link: 'https://untrefschool.netlify.app',
    imagen: '/images/untrefschool.jpg'
  },
  {
    titulo: 'Landing Centro Médico',
    descripcion: 'Sitio en desarrollo para un centro de diagnóstico endoscópico. Proyecto real.',
    link: '#',
    imagen: '/images/landing-medico.jpg'
  }
];

export default function Proyectos() {
  return (
    <section className="proyectos-section" id="proyectos">
      <h2>Proyectos</h2>
      <p className="intro">
        Estos proyectos reflejan mi camino de aprendizaje autodidacta. Actualmente estoy explorando React y diseño visual.
      </p>
      <div className="proyectos-grid">
        {proyectos.map((proyecto, index) => (
          <div className="proyecto-card" key={index}>
            <img src={proyecto.imagen} alt={proyecto.titulo} />
            <div className="proyecto-info">
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
              <a href={proyecto.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

  