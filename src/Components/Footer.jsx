import React from "react";
import Map from "./Map";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start purpleBg2 text-muted position-relative">
      {/* <Map /> */}
      <div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span className="text-light fw-bold">
            Contactanos en Redes Sociales:
          </span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            {/* SVG */}
          </a>
        </div>
      </div>

      <div className="text-light">
        <div className="container text-center text-md-start">
          <div className="row pt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>QuickCargoMx
              </h6>
              <p>
                En QuickCargoMx comprendemos la complejidad y los altos costos
                de las importaciones, por lo tanto te respaldamos en todo
                momento para simplificar y economizar en todas tus operaciones.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Navegación</h6>
              <p>
                <a href="#!" className="text-reset">
                  Conocenos
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Testimonios
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contacto
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  ¿Como Funciona?
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
              <p>
                <i className="fas fa-home me-3"></i>14411 Export Rd, Laredo, TX
                78045, USA
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                quickcargomx@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> +52 81 2767 4582
              </p>
              <p>
                <i className="fas fa-print me-3"></i> +52 81 2767 4582
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center p-4 text-light">
        © 2024 Copyright:
        <a
          className="text-reset fw-bold"
          href="https://ricardogmz.netlify.app/"
        >
          ricardogmz.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
