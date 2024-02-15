import React from "react";

const Conocenos = () => {
  return (
    <div
      className="conocenos d-flex justify-content-center align-items-center my-5"
      id="section-3"
    >
      <div className="row pt-4 pb-5 container-fluid">
        <div className="col-12 col-sm-6 col-lg-3 mt-3 px-4">
          <div className="h8 purpleLogo fw-bolder m-0">+357</div>
          <div className="h4 text-light mb-2">
            Clientes activos en todo México
          </div>
          <p className="m-0 pe-2 text-light fw-light">
            Nuestros clientes nos prefieren por nuestra rapidez, seguridad y
            atención.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 mt-3 px-4">
          <div className="h8 purpleLogo fw-bolder m-0">+400</div>
          <div className="h4 text-light mb-2">Embarques exitosos al mes.</div>
          <p className="m-0 pe-2 text-light fw-light">
            Día a día nos confían su mercancía para seguir creciendo su negocio.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 mt-3 px-4">
          <div className="h8 purpleLogo fw-bolder m-0">+1M Mxn</div>
          <div className="h4 text-light mb-2">De Ahorro</div>
          <p className="m-0 pe-2 text-light fw-light">
            Al ser nuestros honorarios con base en el peso/volumen de tu caja y
            no sobre el valor factura.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 mt-3 px-4">
          <div className="h8 purpleLogo fw-bolder m-0">+200</div>
          <div className="h4 text-light mb-2">Provedores verificados</div>
          <p className="m-0 pe-2 text-light fw-light">
            Si estás iniciando tu negocio te facilitamos el proceso de selección
            de provedores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conocenos;
