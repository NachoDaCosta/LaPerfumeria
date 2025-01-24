import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css"; // Importa el archivo CSS

const Footer = () => {
  return (
    <footer>
      <div className="column-footer">
        <a
          href="https://www.instagram.com/p/DE0xPqiMoJC/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaWhatsapp />
        </a>
      </div>

      <div className="column-footer">
        <span>WhastaApp</span>
        <span>Instagram</span>
      </div>
    </footer>
  );
};

export default Footer;
