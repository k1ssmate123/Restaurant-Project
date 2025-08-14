import { useAuth } from "../Contexts/authContext.js";
import CartHandler from "./CartHandler.js";
import { Link } from "react-router";
import Nav from "react-bootstrap/Nav";

function NavbarLoginHandler() {
  const { isLoggedIn, logout } = useAuth();
  if (!isLoggedIn) {
    return (
      <Nav className="ms-auto">
        <CartHandler />
        <Nav.Link as={Link} to="/login">
          Bejelentkezés
        </Nav.Link>
        <Nav.Link as={Link} to="/register">
          Regisztráció
        </Nav.Link>
      </Nav>
    );
  } else {
    return (
      <Nav className="ms-auto">
        <CartHandler />
        <Nav.Link as={Link} to="/profile">
          {sessionStorage.getItem("userName")}
        </Nav.Link>
        <Nav.Link onClick={logout}>Kijelentkezés</Nav.Link>
      </Nav>
    );
  }
}

export default NavbarLoginHandler;
