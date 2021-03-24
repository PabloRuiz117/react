import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div id="internal-pages">
      <Link to="/Inicio">{props.uno}</Link>
      <Link to="./Recetario">{props.dos}</Link>
      <Link to="#">{props.tres}</Link>
      <Link to="/Contacto">{props.cuatro}</Link>
      <Link to="#">{props.cinco}</Link>
    </div>
  );
};

export default Nav;
