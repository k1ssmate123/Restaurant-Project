import React from "react";
import { useCart } from "../Contexts/cartContext.js";
import DropdownButton from "react-bootstrap/DropdownButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartProduct from "./CartProduct.js";
import Badge from "react-bootstrap/Badge";

function CartHandler() {
  const { emptyCart, cart, removeFromCart, fullPrice } = useCart();
  if (emptyCart) {
    return <></>;
  }

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

export default CartHandler;
