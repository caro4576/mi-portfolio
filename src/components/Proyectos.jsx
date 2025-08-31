import React, { useState, useRef, useEffect } from "react";
import "./Proyectos.css";

const proyectos = [
  {
    titulo: "Café Blog",
    descripcion:
      "Blog visual sobre café, creado con HTML, Js y CSS. Diseño responsive y cálido.",
    link: "https://caro4576.github.io/Blog-De-Cafe/",
    imagen: process.env.PUBLIC_URL + "/img/BlogdeCafe.png",
  },
  {
    titulo: "UntrefSchool",
    descripcion:
      "Web institucional para una escuela primaria, proyecto integrador Untref.",
    link: "https://caro4576.github.io/PROYECTO-INTEGRADOR-WEB-UNTREFSCHOOL/",
    imagen: process.env.PUBLIC_URL + "/img/Untref-School.png",
  },
  {
    titulo: "Landing Centro Médico",
    descripcion:
      "Sitio en desarrollo para un centro de diagnóstico endoscópico. Proyecto real.",
    link: "https://caro4576.github.io/sitio-digestivo/",
    imagen: process.env.PUBLIC_URL + "/img/ideb.png",
  },
  {
    titulo: "Trabajo integrador front-end",
    descripcion: "Trabajo práctico integrando la API de Rick and Morty.",
    link: "https://caro4576.github.io/trabajo-integrador-frontend/",
    imagen: process.env.PUBLIC_URL + "/img/rick-Morty.png",
  },
  {
    titulo: "Proyecto Udemy",
    descripcion:
      "Sitio en desarrollo tipo institucional. Proyecto de curso autodidacta.",
    link: "https://caro4576.github.io/trabajo_autodidacta/",
    imagen: process.env.PUBLIC_URL + "/img/FrontEnd-Store.png",
  },
  {
    titulo: "festival musica",
    descripcion:
      "Proyecto realizado como parte del curso de Desarrollo Web de (https://codigoconjuan.com).",
    link: "https://caro4576.github.io/proyectofestivalmusica/",
    imagen: process.env.PUBLIC_URL + "/img/festival-musica.png",
  },
  {
    titulo: "Proyecto Sass",
    descripcion:
      "Proyecto realizado como parte del curso de Desarrollo Web de Ignacio Bluuweb .",
    link: "https://caro4576.github.io/proyecto-sass/",
    imagen: process.env.PUBLIC_URL + "/img/sass.png",
  },
];

export default function Proyectos() {
  const [proyectoActivo, setProyectoActivo] = useState(null);
  const modalRef = useRef(null);

  const abrirModal = (proyecto) => {
    setProyectoActivo(proyecto);
  };

  const cerrarModal = () => {
    setProyectoActivo(null);
  };

  // Detectar clic fuera del modal
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        cerrarModal();
      }
    };

    if (proyectoActivo) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [proyectoActivo]);

  return (
    <section className="proyectos-section" id="proyectos">
      <h2>Proyectos</h2>
      <p className="intro">
        Estos proyectos reflejan mi camino de aprendizaje autodidacta.
        Actualmente estoy explorando React y diseño visual.
      </p>

      <div className="proyectos-grid">
        {proyectos.map((proyecto, index) => (
          <div className="proyecto-card" key={index}>
            <img src={proyecto.imagen} alt={proyecto.titulo} />
            <div className="proyecto-info">
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
              <button className="btn-ver" onClick={() => abrirModal(proyecto)}>
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>

      {proyectoActivo && (
        <div className="modal">
          <div className="modal-content" ref={modalRef}>
            <button className="cerrar" onClick={cerrarModal}>
              ✖
            </button>
            <h3>{proyectoActivo.titulo}</h3>
            <img src={proyectoActivo.imagen} alt={proyectoActivo.titulo} />
            <p>{proyectoActivo.descripcion}</p>
            <a
              href={proyectoActivo.link}
              target="_blank"
              rel="noopener noreferrer">
              Ir al proyecto
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
