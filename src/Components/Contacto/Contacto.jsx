import React from "react";
import Form from "../Form";
import contact from "../../assets/contactBG.webp";
import style from "./Contacto.module.css";

const Contacto = () => {
  return (
    <div className={style.contactContainer}>
      <div className={style.contactTitles}>
        <h1>¿Te gustaría hacer una consulta gratiuta?</h1>
        <h5>Hablanos por Whatsapp/Email o dejanos tu información.</h5>
        <img src={contact} alt="contact Bg" height="350px" width="350px" />
      </div>

      <div>
        <div className={style.formContainer}>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contacto;
