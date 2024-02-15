import React from "react";

const Bienvenida = () => {
  return (
    <div id="section-1">
      <div className="p-top1 d-flex bienvenida">
        <div className="bienvenida-overlay">
          <div className="w-50 bienvenidaText" id="firstDkt">
            <h1>Importamos lo que más te importa</h1>

            <hr className="hr" />
            <h3>
              De manera rápida y segura realizamos tus embarques hasta la puerta
              de tu negocio.
            </h3>
            <div className="d-flex flex-column flex-sm-row">
              <button
                className="btn btn-primary m-1"
                data-bs-toggle="modal"
                data-bs-target="#contactModal"
              >
                Cotiza tu Carga
              </button>
              <a
                className="btn btn-light m-1"
                href="https://wa.me/528123684781?text=Hola,%20estoy%20interesado%20en%20el%20servicio"
                target="_blank"
              >
                Mandanos Mensaje
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bienvenida;
