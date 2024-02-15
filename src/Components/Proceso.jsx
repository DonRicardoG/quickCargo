import React from "react";
import shopCart from "../assets/shopCart.svg";
import compra from "../assets/compra.svg";
import like from "../assets/like.svg";

const Proceso = () => {
  return (
    <div
      className="p-6 bg-gray w-100 d-flex flex-column justify-content-center"
      id="section-2"
    >
      <h1 className="w-sm-50 my-1 purpleH fs-1 mb-3">
        Te facilitamos el proceso de importación, para que te enfoques 100% en
        tu negocio.
      </h1>
      <p className="gray fs-4 mx-1 w-75">
        En QuickCargoMx apoyamos a los comerciantes que buscan innovar y crecer
        en el mercado Mexicano.
      </p>
      <div className="row justify-content-around margin-top2">
        <div className="col-4 bg-light rectangle-card my-5 mt-lg-1">
          <div className="circle m-auto bg-light">
            <img src={shopCart} alt="shop icon" />
          </div>
          <div>
            <h2 className="text-center purpleH">Cotiza</h2>
            <hr className="hr2 m-auto" />
            <p className="text-center mt-4 gray fs-5">
              Acércate con nosotros y encontrarás la mejor tarifa para tu
              negocio. Embarques desde $2,000MXN.
            </p>
          </div>
        </div>
        <div className="col-4 bg-light rectangle-card my-5 my-lg-1 lift">
          <div className="circle m-auto bg-light">
            <img src={compra} alt="compra icon" />
          </div>
          <div>
            <h2 className="text-center purpleH">Compra</h2>
            <hr className="hr2 m-auto" />
            <p className="text-center mt-4 gray fs-5 mx-1">
              Compra y envía a nuestra dirección en USA. Libera tu embarque de
              complicaciones aduanales, simplificando tu proceso.
            </p>
          </div>
        </div>
        <div className="col-4 bg-light rectangle-card my-5 mt-lg-1">
          <div className="circle m-auto bg-light">
            <img src={like} alt="like icon" />
          </div>
          <div>
            <h2 className="text-center purpleH">Recibe</h2>
            <hr className="hr2 m-auto" />
            <p className="text-center mt-4 gray fs-5 mx-1">
              Una vez liberado tu embarque en México, pagas nuestros honorarios
              y lo enviamos de manera rápida y segura.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proceso;
