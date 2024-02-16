import React from "react";
import logo from "./../assets/logo1.webp";
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-gray">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link
          className="navbar-brand"
          href="#"
          smooth={true}
          to="section-1"
          duration={100}
        >
          <img
            className="me-2"
            src={logo}
            alt="logo"
            height="60px"
            width="80px"
          />
          <span className="font">
            <span className="purpleLogo">Quick</span>Cargo
            <span className="purpleLogo">Mx</span>
          </span>
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav m-auto mb-lg-0 align-items-center justify-content-around flex-row">
            <li className="nav-item text-center">
              <Link
                className="nav-link fs-6 fw-bold mx-1"
                smooth={true}
                href="#"
                to="section-2"
                duration={100}
                offset={-50}
              >
                Proceso
              </Link>
            </li>
            <li className="nav-item text-center">
              <Link
                className="nav-link fs-6 fw-bold mx-1"
                href="#"
                smooth={true}
                to="section-3"
                duration={100}
                offset={-560}
              >
                Conocenos
              </Link>
            </li>
            <li className="nav-item text-center">
              <Link
                className="nav-link fs-6 fw-bold mx-1"
                href="#"
                smooth={true}
                to="section-4"
                duration={100}
                offset={-200}
              >
                Servicios
              </Link>
            </li>
            {/* <li className="nav-item text-center">
              <Link
                className="nav-link fs-6 fw-bold mx-1"
                href="#scrollspyHeading5"
              >
                Testimonios
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
