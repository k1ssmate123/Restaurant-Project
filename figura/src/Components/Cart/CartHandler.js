import React from "react";
import { useCart } from "../../Contexts/cartContext.js";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartProduct from "./CartProduct.js";
import Badge from "react-bootstrap/Badge";

function CartHandler() {
  const { emptyCart, cart, removeFromCart, fullPrice } = useCart();
  if (emptyCart) {
    return;
  }

  return (
    <DropdownButton
      variant="outline-secondary"
      className="header__dropdownButton"
      title={
        <span>
          <ShoppingCartIcon />
          {fullPrice()} Ft
        </span>
      }
    >
      {cart.map((x) => {
        return <CartProduct item={x} remove={removeFromCart} />;
      })}
      <Dropdown.Divider />
      <Dropdown.Item>Összesen: {fullPrice()} Ft</Dropdown.Item>
    </DropdownButton>
  );
}

export default CartHandler;
