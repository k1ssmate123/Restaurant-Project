import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CartProduct({ item, remove }) {
  return (
    <Dropdown.Item>
      <Row>
        <Col></Col>
        <Col>
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
        </Col>
      </Row>
    </Dropdown.Item>
  );
}

export default CartProduct;
