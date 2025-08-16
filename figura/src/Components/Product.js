import React from "react";
import Button from "react-bootstrap/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../Contexts/cartContext.js";
import { toast } from "react-toastify";
import "./Product.css";

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
    <div className="product-container">
      <div className="product-info">
        <span className="product-name">{name}</span>
        <p className="product-delivery">
          Kiszállítás esetén {Math.round(price * 1.13)} Ft
        </p>
        <p className="product-local">Helyben: {price} Ft</p>
      </div>

      <Button
        onClick={handleClick}
        variant="outline-secondary"
        id={id}
        name={id}
        className="product-button"
      >
        <ShoppingCartIcon /> Kosárba rak
      </Button>
    </div>
  );
}

export default Product;
