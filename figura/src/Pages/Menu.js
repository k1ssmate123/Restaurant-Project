import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Product from "../Components/Product";
import useFetch from "../Hooks/useFetch";
import "./Style/Menu.css";
import SearchIcon from "@mui/icons-material/Search";
function Menu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const { data: menuCategories, error: categoryError } = useFetch(
    "https://localhost:7146/Menu/Categories"
  );

  const { data: menuItems, error: itemError } = useFetch(
    "https://localhost:7146/Menu/Items"
  );

  const [choosenCategories, setCategories] = useState([]);

  useEffect(() => {
    if (menuCategories && choosenCategories.length === 0) {
      setCategories(menuCategories);
    }
  }, [menuCategories]);

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

  const handleCategoryChange = (e, category) => {
    if (e.target.checked) {
      setCategories([...choosenCategories, category]);
    } else {
      setCategories(choosenCategories.filter((c) => c.id !== category.id));
    }
  };

  const checkBoxes = (category) => (
    <Form.Check
      key={category.id}
      type="checkbox"
      id={category.id + "cat"}
      label={category.name}
      checked={choosenCategories.some((c) => c.id === category.id)}
      onChange={(e) => handleCategoryChange(e, category)}
    />
  );

  const renderCategory = (category) => {
    if (choosenCategories.find((c) => c.id === category.id)) {
      const itemsInCategory = menuItems.filter(
        (item) => item.categoryId === category.id
      );

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
    return null;
  };

  const renderMenuItems = () => {
    return menuCategories.map(renderCategory);
  };

  return (
    <Container className="menu__main">
      <h1 className="menu__title">
        <Button onClick={toggleDrawer(true)}>
          <SearchIcon />
        </Button>
        Étlap / Itallap
      </h1>
      {renderMenuItems()}
      <Drawer
        className="menu__drawer"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Form>{menuCategories.map(checkBoxes)}</Form>
      </Drawer>
    </Container>
  );
}

export default Menu;
