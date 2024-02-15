import React from "react";

const Form = () => {
  return (
    <form
      target="_top"
      id="email-form"
      action="https://formsubmit.co/importaya@quickcargomx.com"
      method="post"
    >
      <legend className="text-center">
        Contactános llenando todos los campos
      </legend>
      <input type="hidden" name="_subject" value="Nueva cotización" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="thankyou.html" />
      <div className="contenedor-campos">
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            placeholder="Nombre"
            required
          />
        </div>
        <div className="campo">
          <label>Teléfono</label>
          <input
            type="tel"
            className="form-control"
            id="telefono"
            name="telefono"
            placeholder="Teléfono"
          />
        </div>
        <div className="campo w-100">
          <label>Correo</label>
          <input
            type="mail"
            className="form-control"
            id="correo"
            name="correo"
            placeholder="Mail"
          />
        </div>
        <div className="campo w-100">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            name="mensaje"
            className="form-control text-area"
            id="mensaje"
            cols="30"
            rows="5"
          ></textarea>
        </div>
      </div>
      <div className="enviar mt-2">
        <input
          id="form-submit"
          className="btn btn-primary"
          type="submit"
          value="Enviar"
        />
      </div>
    </form>
  );
};

export default Form;
