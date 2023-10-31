import { Nav, Navbar as NavbarBootstrap } from "react-bootstrap";
import { Link
  //, useHistory 
} from "react-router-dom";
import LogoJCIComponent from "./LogoJCI/LogoJCI";
import LogoKawsayComponent from "./LogoKawsay/LogoKawsay";

const NavBar = () => {
  //const { push } = useHistory();
  return (
    <>
      <NavbarBootstrap collapseOnSelect expand="lg" bg="white">
        <NavbarBootstrap.Brand className="font-weight-bold text-muted">
          <LogoKawsayComponent />
        </NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarBootstrap.Collapse>

          <Nav className="mx-auto">
            <Link to="/" className="colorNav mx-2 text-decoration-none">
              <h5>Calculadora</h5>
            </Link>
            <Link to="/consejos" className="colorNav mx-2 text-decoration-none">
              <h5>Mejora tu impacto</h5>
            </Link>
            <Link to="/planta" className="colorNav mx-2 text-decoration-none">
              <h5>Planta un arbol</h5>
            </Link>
            <Link
              to="/newsletter"
              className="colorNav mx-4 text-decoration-none"
            >
              <h5>Suscríbete</h5>
            </Link>
            <Link to="/faq" className="colorNav mx-4 text-decoration-none">
              <h5>FAQ</h5>
            </Link>
          </Nav>
          <LogoJCIComponent />

        </NavbarBootstrap.Collapse>
      </NavbarBootstrap>
    </>
  );
};
export default NavBar;
