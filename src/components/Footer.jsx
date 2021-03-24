import React from "react";
const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Enlaces utiles</h3>
              <ul>
                <li>
                  <a href="#">Recetas</a>
                </li>
                <li>
                  <a href="#">Tips</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>La compañia</h3>
              <ul>
                <li>
                  <a href="#">Aviso de privacidad</a>
                </li>
                <li>
                  <a href="#">Subir una receta</a>
                </li>
                <li>
                  <a href="#">Contacto</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>Nuestro objetivo </h3>
              <p>
                Dar a conocer un menú variado en búsquedas de recetas
                internacionales desde alternativas saludables hasta exóticas.
              </p>
            </div>
            <div className="col item social">
              <a href="#">
                <i class="icon ion-social-facebook"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-twitter"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-instagram"></i>
              </a>
            </div>
          </div>
          <p className="copyright">!Todo Recetas! &copy; 2019-2021</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
