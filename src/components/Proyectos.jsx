import React, { useState } from 'react';
import './Proyectos.css';

const proyectos = [
  {
    titulo: 'Café Blog',
    descripcion: 'Blog visual sobre café, creado con HTML, Js y CSS. Diseño responsive y cálido.',
    link: 'https://caro4576.github.io/Blog-De-Cafe/',
    imagen: '/img/cafe-blog.jpg'
  },
  {
    titulo: 'UntrefSchool',
    descripcion: 'Web institucional para una escuela primaria, proyecto integrador Untref.',
    link: 'https://caro4576.github.io/PROYECTO-INTEGRADOR-WEB-UNTREFSCHOOL/',
    imagen: '/img/untref.jpg'
  },
  {
    titulo: 'Landing Centro Médico',
    descripcion: 'Sitio en desarrollo para un centro de diagnóstico endoscópico. Proyecto real.',
    link: '#',
    imagen: '/img/landing.jpg'
  },
  {
    titulo: 'Trabajo integrador front-end',
    descripcion: 'Trabajo práctico integrando la API de Rick and Morty.',
    link: 'https://caro4576.github.io/trabajo-integrador-frontend/',
    imagen: '/img/rickmorty.jpg'
  },
  {
    titulo: 'Proyecto Udemy',
    descripcion: 'Sitio en desarrollo tipo institucional. Proyecto de curso autodidacta.',
    link: 'https://caro4576.github.io/trabajo_autodidacta/',
    imagen: '/img/udemy.jpg'
  }
];

export default function Proyectos() {
  const [proyectoActivo, setProyectoActivo] = useState(null);

  const abrirModal = (proyecto) => {
    setProyectoActivo(proyecto);
  };

  const cerrarModal = () => {
    setProyectoActivo(null);
  };

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
              <button className="btn-ver" onClick={() => abrirModal(proyecto)}>Ver más</button>
            </div>
          </div>
        ))}
      </div>

      {proyectoActivo && (
        <div className="modal">
          <div className="modal-content">
            <button className="cerrar" onClick={cerrarModal}>✖</button>
            <h3>{proyectoActivo.titulo}</h3>
            <img src={proyectoActivo.imagen} alt={proyectoActivo.titulo} />
            <p>{proyectoActivo.descripcion}</p>
            <a href={proyectoActivo.link} target="_blank" rel="noopener noreferrer">Ir al proyecto</a>
          </div>
        </div>
      )}
    </section>
  );
}


  