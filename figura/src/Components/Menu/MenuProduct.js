import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../Product";

function MenuProduct({ category, itemsInCategory }) {
  return (
    <React.Fragment key={category.id}>
      <Row className="menu__containerTitle">
        <Col>{category.name}</Col>
        <Col className="menu__containerTitlePrice">Bruttó ár</Col>
        <Col></Col>
      </Row>

      {itemsInCategory.map((item) => (
        <Row key={item.id} className="menu__itemRow">
          <Product name={item.name} price={item.price} id={item.id} />
        </Row>
      ))}
    </React.Fragment>
  );
}

export default MenuProduct;
