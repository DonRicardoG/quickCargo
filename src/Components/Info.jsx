import React from "react";
import foto from "../assets/foto-aduan.webp";

const Info = () => {
  return (
    <div className="container-lg" id="scrollspyHeading2">
      <div className="row p-5 pb-1">
        <div className="col-md-6">
          <img className="img-fluid p-sm-5" src={foto} alt="video" />
        </div>
        <div className="col-md-6 pt-5">
          <h2 className="fs-5 fs-sm-2 purpleH">
            Comprendemos las complicaciones y retos que representan realizar las
            importaciones por tu cuenta.
          </h2>
          <p className="fs-6 fs-sm-3 gray">
            En QuickCargoMx te brindamos una solución completa para tu negocio,
            simplificamos el proceso y los hacemos mas atractivo, para que
            puedas aumentar tus márgenes de ganancia y ser más competitivo en el
            mercado Mexicano.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
