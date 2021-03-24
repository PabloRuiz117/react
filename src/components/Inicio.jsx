import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Body from "./Body";
import Footer from "./Footer";

const Inicio = () => {
  return (
    <div>
      <Header />
      <Nav
        uno="Inicio"
        dos="Recetario"
        tres="Maridajes"
        cuatro="Contacto"
        cinco="Nosotros"
      ></Nav>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};
export default Inicio;
