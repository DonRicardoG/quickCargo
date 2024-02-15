import React from "react";
import provedor from "../assets/proveedor.webp";
import aliances from "../assets/aliances.webp";
import comercializadora from "../assets/comercializadora.webp";
import advisory from "../assets/advisory.webp";

const Servicios = () => {
  return (
    <div
      className="container-lg pt-1 d-flex flex-column align-center justify-content-center"
      id="section-4"
    >
      <h1 className="my-1 purpleH fs-1 mb-3 text-center">Nuestros Servicios</h1>
      <div className="card-container ">
        <div className="card c-width">
          <img
            src={comercializadora}
            className="card-img-top mt-2 p-2"
            alt="comercializadora"
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">Comercializadora</h5>
            <p className="card-text">
              Con QuickCargoMx podrás hacer tus pagos en el extranjero
              deducibles de impuestos.
            </p>
          </div>
        </div>
        <div className="card c-width">
          <img
            src={provedor}
            className="card-img-top mt-2 p-2"
            alt="proveedor"
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">Proveedores Verificados</h5>
            <p className="card-text">
              Contamos con provedores verificados que ponemos a tu disposición
              para hacer seguras tus compras.
            </p>
          </div>
        </div>
        <div className="card c-width">
          <img src={aliances} className="card-img-top mt-2 p-2" alt="aliaces" />
          <div className="card-body">
            <h5 className="card-title fw-bold">Alianzas</h5>
            <p className="card-text">
              Acuerdos preferenciales con agencias para la importación de
              contenedores.
            </p>
          </div>
        </div>
        <div className="card c-width">
          <img
            src={advisory}
            className="card-img-top mt-2 p-2"
            alt="asesoria"
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">Asesoría</h5>
            <p className="card-text">
              Te apoyamos en la gestión logística para el inicio de tu negocio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
