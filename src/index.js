import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />

    {/* Estas etiquetas que encierran nuestro componenete se refiere a que contenido vamos a mostrar */}
  </React.StrictMode>,
  document.getElementById("root")
  //  Esta declaracion indica donde vamos a mostrar el contenido
);
