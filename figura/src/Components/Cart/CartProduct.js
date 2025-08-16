import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function CartProduct({ item, remove }) {
  return (
    <Dropdown.Item
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <div
        style={{
          flex: 1,
          whiteSpace: "normal",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span>{item.name}</span>
        <span style={{ fontSize: "0.9em", color: "#666" }}>
          {item.price} Ft
        </span>
      </div>

      <Button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          remove(item);
        }}
        variant="outline-danger"
        style={{ flexShrink: 0 }}
      >
        <DeleteIcon />
      </Button>
    </Dropdown.Item>
  );
}

export default CartProduct;
