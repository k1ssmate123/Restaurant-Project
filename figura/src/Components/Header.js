import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import logo from "../img/logopixelaf.jpg";
import { Link } from "react-router";
import "./Header.css";
import { useAuth } from "../Contexts/authContext.js";
function Header() {
  const { userData, isLoggedIn, logout } = useAuth();

  function LoggedIn() {
    if (!isLoggedIn) {
      return (
        <Nav className="ms-auto">
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
          <Nav.Link as={Link} to="/profile">
            {userData.name}
          </Nav.Link>
          <Nav.Link onClick={logout}>Kijelentkezés</Nav.Link>
        </Nav>
      );
    }
  }

  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      className="bg-body-tertiary"
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

          {LoggedIn()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
