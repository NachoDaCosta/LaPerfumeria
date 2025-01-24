import React from "react";
import "./Main.css";

const Main = () => {
  // Función para truncar texto
  function largotexto(texto) {
    if (texto.length > 20) {
      return texto.slice(0, 20) + "...";
    }
    return texto;
  }


  return (
    <main>
      <h1>Conocé nuestros productos</h1>
      <div className="productos">
        <div className="producto">
          <img alt="" className="producto-imagen" src="./imgs/uno.jpg" />
          <div className="nombre">
            {largotexto("Bade'e Al Oud Oud for Glory")}
          </div>
          <div className="precio">$500</div>
        </div>

        <div className="producto">
          <img alt="" className="producto-imagen" src="./imgs/dos.jpg" />
          <div className="nombre">{largotexto("Khamrah de Lattafa")}</div>
          <div className="precio">$500</div>
        </div>

        <div className="producto">
          <img alt="" className="producto-imagen" src="./imgs/tres.jpg" />
          <div className="nombre">{largotexto("Odyssey Mandarin Sky")}</div>
          <div className="precio">$500</div>
        </div>

        <div className="producto">
            <img alt="" className="producto-imagen" src="./imgs/cuatro.jpg" />
          <div className="nombre">{largotexto("Club de nuit Untold")}</div>
          <div className="precio">$500</div>
        </div>

        <div className="producto">
          <img alt="" className="producto-imagen" src="./imgs/cinco.jpg" />
          <div className="nombre">{largotexto("9Pm Rebel")}</div>
          <div className="precio">$500</div>
        </div>

        <div className="producto">
          <img alt="" className="producto-imagen" src="./imgs/seis.jpg" />
          <div className="nombre">
            {largotexto("Bade'e Al Oud Honor & Glory")}
          </div>
          <div className="precio">$500</div>
        </div>
      </div>
    </main>
  );
};

export default Main;
