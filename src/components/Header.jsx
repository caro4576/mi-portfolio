import React, { useState } from 'react';
import './Header.css';

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/caro-biker.jpg" alt="Carolina Bibbo" />
        <span>Carolina Bibbo</span>
      </div>

      <nav className={`nav ${menuAbierto ? 'activo' : ''}`}>
        <a href="#sobre-mi" onClick={cerrarMenu}>Sobre mí</a>
        <a href="#proyectos" onClick={cerrarMenu}>Proyectos</a>
        <a href="#skills" onClick={cerrarMenu}>Skills</a>
        <a href="#footer" onClick={cerrarMenu}>Contacto</a>
      </nav>

      <div className={`hamburguesa ${menuAbierto ? 'abierta' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
