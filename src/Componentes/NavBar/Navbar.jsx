import React from "react";
import "./Navbar.css";
import { FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";
import { LiaAlignJustifySolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-izquierda">
        <LiaAlignJustifySolid className="icon-nav" />
        <span>Menú</span>
        <FaHeart className="icon-nav"/>
        <span>Favoritos</span>
      </div>
      <div className="nav-centro">
        <span>La Perfumeria</span>
      </div>

      <div className="nav-derecha">
        <FaUser className="icon-nav" />
        <span>Cuenta</span>
        <FaShoppingCart className="icon-nav" />
        <span>Carro</span>
      </div>
    </nav>
  );
};

export default Navbar;
