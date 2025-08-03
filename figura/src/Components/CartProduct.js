import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import DeleteIcon from "@mui/icons-material/Delete";
function CartProduct({ item, remove }) {
  return (
    <Dropdown.Item>
      {item.name} - {item.price} Ft
      <Button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          remove(item);
        }}
      >
        <DeleteIcon />
      </Button>
    </Dropdown.Item>
  );
}

export default CartProduct;
