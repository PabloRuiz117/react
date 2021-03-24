import React from "react";
import Formulario from "./Formulario";
import Header from "./Header";
import Nav from "./Nav";

const Contacto = () => {
  return (
    <div>
      <Header></Header>
      <Nav
        uno="Inicio"
        dos="Recetario"
        tres="Maridajes"
        cuatro="Contacto"
        cinco="Nosotros"
      ></Nav>
      <Formulario></Formulario>
    </div>
  );
};

export default Contacto;
