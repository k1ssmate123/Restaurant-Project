import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import logo from "../../img/logopixelaf.jpg";
import { Link } from "react-router";
import "./Header.css";
import NavbarLoginHandler from "./NavbarLoginHandler";

function Header() {
  return (
    <Navbar
      data-bs-theme="light"
      collapseOnSelect
      sticky="top"
      expand="lg"
      className="header__container"
    >
      <Container fluid>
        <Navbar.Brand>
          <Image className="header__logo" thumbnail src={logo}></Image>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Főoldal
            </Nav.Link>
            <Nav.Link as={Link} to="/menu">
              Étlap
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery">
              Galéria
            </Nav.Link>
          </Nav>

          <NavbarLoginHandler />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
