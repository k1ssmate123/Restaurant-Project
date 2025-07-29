import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Product from "../Components/Product";
import useFetch from "../Hooks/useFetch";
import "./Style/Menu.css";

function Menu() {
  const { data: menuCategories, error: categoryError } = useFetch(
    "https://localhost:7146/Menu/Categories"
  );

  const { data: menuItems, error: itemError } = useFetch(
    "https://localhost:7146/Menu/Items"
  );

  if (categoryError || itemError) {
    return (
      <div className="menu__error">
        <p>Hiba történt az adatok betöltésekor.</p>
        <p>{categoryError || itemError}</p>
      </div>
    );
  }

  if (!menuCategories || !menuItems) {
    return <div className="menu__loading">Betöltés...</div>;
  }

  const renderCategory = (category) => {
    const itemsInCategory = menuItems.filter(
      (item) => item.categoryId === category.id
    );

    return (
      <>
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
      </>
    );
  };

  return (
    <Container className="menu__main">
      <h1 className="menu__title">Étlap / Itallap</h1>
      {menuCategories.map(renderCategory)}
    </Container>
  );
}

export default Menu;
