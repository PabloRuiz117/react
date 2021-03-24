import React from "react";
import Busqueda from "./Busqueda";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

const Recetario = () => {
  return (
    <div>
      <Header></Header>
      <Nav
        uno="Inicio"
        dos="MÉXICO"
        tres="E.U.U"
        cuatro="ITALIA"
        cinco="COREA"
      ></Nav>
      <Busqueda></Busqueda>
      <div className="fondo">
        <figure>
          <figcaption></figcaption>
        </figure>
        <figure>
          <figcaption></figcaption>
        </figure>
        <figure>
          <figcaption></figcaption>
        </figure>
        <figure>
          <figcaption></figcaption>
        </figure>
        <figure>
          <figcaption></figcaption>
        </figure>
        <figure>
          <figcaption></figcaption>
        </figure>
        <figure>
          <figcaption></figcaption>
        </figure>
        <figure>
          <figcaption></figcaption>
        </figure>
        <figure>
          <figcaption></figcaption>
        </figure>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Recetario;
