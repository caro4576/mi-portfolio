import Header from "./components/Header";
import Proyectos from "./components/Proyectos";
import SobreMi from "./components/SobreMi";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

// otros imports...

function App() {
  return (
    <div>
      <Header />
      <SobreMi />
      <Proyectos />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;

// Estructura inicial de componentes en src/components/:
// - Header.jsx (nombre + navegación)
// - Presentacion.jsx (nombre + frase + fondo visual tipo hero)
// - SobreMi.jsx (tu estilo de vida, intereses y personalidad)
// - Proyectos.jsx (con tarjetas visuales)
// - Skills.jsx (íconos o progreso)
// - Footer.jsx (contacto, redes, Netlify)

// Incluir tipografías en public/index.html:
// <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Barlow+Condensed&family=Inter&display=swap" rel="stylesheet">

// Estilos recomendados: fondo oscuro (#1B2A41), detalles en verde oliva (#4A685F), texto claro (#EAE3D2), links coral oscuro (#D46A6A), tipografías modernas.

// Diseño limpio, visual, no tipo CV. Ir personalizando sección por sección para representar tu identidad.
