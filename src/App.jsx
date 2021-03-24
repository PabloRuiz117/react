import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Contacto from "./components/Contacto";
import Recetario from "./components/Recetario";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/inicio" component={Inicio} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/recetario" component={Recetario} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
