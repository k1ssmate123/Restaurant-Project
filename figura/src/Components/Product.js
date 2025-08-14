import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Product.css";
import { useCart } from "../Contexts/cartContext.js";

import { toast } from "react-toastify";
function Product({ name, price, id }) {
  const { addToCart } = useCart();

  const handleClick = () => {
    addToCart({ id: id, name: name, price: price });
    toast.success(`${name} hozzáadva a kosárhoz!`, {
      position: "bottom-right",
      autoClose: 350,
    });
  };
  return (
    <>
      <Col className="product__col product__name">{name}</Col>
      <Col className="product__col product__price">
        <p>Kiszállítás esetén {Math.round(price * 1.13)} Ft</p>
        <p style={{ fontSize: "60%" }}>Helyben: {price} Ft</p>
      </Col>
      <Col className="product__col product__cart">
        <Button
          onClick={handleClick}
          variant="outline-secondary"
          id={id}
          name={id}
        >
          <ShoppingCartIcon /> Kosárba rak
        </Button>
      </Col>
    </>
  );
}

export default Product;
