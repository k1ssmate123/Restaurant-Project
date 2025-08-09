import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import logo from "../img/logopixelaf.jpg";
import { Link } from "react-router";
import "./Header.css";
import { useAuth } from "../Contexts/authContext.js";
import { useCart } from "../Contexts/cartContext.js";
import DropdownButton from "react-bootstrap/DropdownButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartProduct from "./CartProduct.js";
import Badge from "react-bootstrap/Badge";
function Header() {
  const { isLoggedIn, logout } = useAuth();
  const { emptyCart, cart, removeFromCart, fullPrice } = useCart();
  function LoggedIn() {
    if (!isLoggedIn) {
      return (
        <Nav className="ms-auto">
          {CartHandling()}
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
          {CartHandling()}
          <Nav.Link as={Link} to="/profile">
            {sessionStorage.getItem("userName")}
          </Nav.Link>
          <Nav.Link onClick={logout}>Kijelentkezés</Nav.Link>
        </Nav>
      );
    }
  }

  function CartHandling() {
    if (!emptyCart) {
      return (
        <DropdownButton
          className="header__dropdownButton"
          title={
            <span style={{ alignItems: "center" }}>
              <ShoppingCartIcon />
              <Badge bg="info"> {fullPrice()} Ft</Badge>
            </span>
          }
        >
          {cart.map((x) => {
            return <CartProduct item={x} remove={removeFromCart} />;
          })}

          <p>Összesen: {fullPrice()} Ft</p>
        </DropdownButton>
      );
    }
  }
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

          {LoggedIn()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
