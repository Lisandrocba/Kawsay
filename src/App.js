import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calculator from "./calculator/Calculator.jsx";
import EcoAdvice from "./ecoAdvice.jsx";
import Donate from "./Donate.jsx";
import Newsletter from "./Newsletter.jsx";
import FooterComponent from "./Components/Footer";
import FAQ from "./FAQ.jsx";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Calculator />} />
          <Route path="/consejos" render={() => <EcoAdvice />} />
          <Route path="/planta" render={() => <Donate />} />
          <Route path="/faq" render={() => <FAQ />} />
          <Route path="/newsletter" render={() => <Newsletter />} />
        </Switch>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
