import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Formulario = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="container">
        <form>
          <div className="row">
            <div className="col-25">
              <label for="fname">Primer Nombre: </label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Nombre"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">Primer Apellido:</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Apellido"
              />
            </div>
          </div>
          <div className="row">
            <div clas="col-25">
              <label for="subject">Mensaje: </label>
            </div>
            <div className="col-75">
              <textarea
                id="subject"
                name="subject"
                placeholder="Indica el motivo..."
              ></textarea>
            </div>
          </div>
          <div className="row">
            <input type="submit" value="Contactar" />
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Formulario;
