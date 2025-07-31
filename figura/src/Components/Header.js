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
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function Header() {
  const { isLoggedIn, logout } = useAuth();
  const { emptyCart, cart, removeFromCart, fullPrice } = useCart();
  function LoggedIn() {
    if (!isLoggedIn) {
      console.log(sessionStorage.getItem("userName"));
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
      const price = fullPrice;
      return (
        <DropdownButton
          id="dropdown-basic-button"
          title={
            <span style={{ alignItems: "center" }}>
              <ShoppingCartIcon />
              {fullPrice()} Ft
            </span>
          }
        >
          {cart.map((x) => {
            return (
              <Dropdown.Item>
                {x.name} - {x.price} Ft
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    removeFromCart(x);
                  }}
                >
                  <DeleteIcon />
                </Button>
              </Dropdown.Item>
            );
          })}

          <p>Összesen: {fullPrice()} Ft</p>
        </DropdownButton>
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
