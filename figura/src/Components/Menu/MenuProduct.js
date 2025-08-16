import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../Product";

function MenuProduct({ category, itemsInCategory }) {
  return (
    <React.Fragment key={category.id}>
      <div className="menu__containerTitle">{category.name}</div>

      {itemsInCategory.map((item, index) => (
        <Row key={item.id} className="menu__itemRow">
          <Product
            name={item.name}
            key={index}
            price={item.price}
            id={item.id}
          />
        </Row>
      ))}
    </React.Fragment>
  );
}

export default MenuProduct;
