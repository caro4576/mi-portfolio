import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__links">
        <li>
          <a href="https://www.linkedin.com/in/caro-desarrolladora" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/caro4576" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/carobibbo/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=61576341242355" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://wa.me/5492266634460" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </li>
      </ul>
      <p className="footer__text">© 2025 Carolina Bibbo. Hosted on <a href="https://netlify.com" target="_blank" rel="noreferrer">Netlify</a></p>
    </footer>
  );
}

export default Footer;




