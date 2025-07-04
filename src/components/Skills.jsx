// src/components/Skills.jsx
// src/components/Skills.jsx
import React from "react";
import "./Skills.css";


const skills = [
  { nombre: "HTML5", nivel: "Sólido", icono: "📄" },
  { nombre: "CSS3", nivel: "Sólido", icono: "🎨" },
  { nombre: "JavaScript", nivel: "Práctico", icono: "⚙️" },
  { nombre: "React", nivel: "Aprendiendo", icono: "⚛️" },
  { nombre: "Git / GitHub", nivel: "Práctico", icono: "🛠️" },
  { nombre: "Diseño Responsivo", nivel: "Sólido", icono: "📱" }
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icono}</div>
            <h3 className="skill-name">{skill.nombre}</h3>
            <p className="skill-nivel">{skill.nivel}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

  