import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "@mui/material/Button";
import useFetch from "../Hooks/useFetch";
import "./Style/Menu.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Spinner from "react-bootstrap/Spinner";
import Offcanvas from "react-bootstrap/Offcanvas";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import MenuProduct from "../Components/MenuProduct";
function Menu() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data: menuCategories, error: categoryError } = useFetch(
    "https://localhost:7146/Menu/Categories"
  );

  const { data: menuItems, error: itemError } = useFetch(
    "https://localhost:7146/Menu/Items"
  );

  const [choosenCategories, setCategories] = useState([]);

  useEffect(() => {
    if (menuCategories) {
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
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  const handleCategoryChange = (isChecked, category) => {
    if (isChecked) {
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
      onChange={(e) => handleCategoryChange(e.target.checked, category)}
    />
  );

  const renderCategory = (category) => {
    if (choosenCategories.find((c) => c.id === category.id)) {
      const itemsInCategory = menuItems.filter(
        (item) => item.categoryId === category.id
      );

      return (
        <MenuProduct category={category} itemsInCategory={itemsInCategory} />
      );
    }
    return null;
  };

  const renderMenuItems = () => {
    return menuCategories.map(renderCategory);
  };

  return (
    <Container className="menu__main">
      <h1 class="menu__title">
        <Button onClick={handleShow}>
          <p class="menu__titleButton">
            <DehazeIcon />
          </p>
        </Button>
        <div class="menu__titleLabel">Étlap / Itallap</div>
      </h1>
      {renderMenuItems()}

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Szűrés
            <br />
            <Button
              onClick={() => {
                setCategories(() => {
                  return [];
                });
              }}
            >
              Feltételek törlése
              <ClearAllIcon />
            </Button>
            <br />
            <Button
              onClick={() => {
                setCategories(menuCategories);
              }}
            >
              Összes kijelölése
              <SelectAllIcon />
            </Button>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>{menuCategories.map(checkBoxes)}</Form>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
}

export default Menu;
