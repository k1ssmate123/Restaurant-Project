import React, { useEffect, useState } from "react";

/* React Bootstrap/Styling */
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "@mui/material/Button";
import Spinner from "react-bootstrap/Spinner";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Style/Menu.css";

/* Icons */
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import SelectAllIcon from "@mui/icons-material/SelectAll";

/*Custom Components/Hooks */
import MenuItemsRenderer from "../Components/Menu/MenuItemsRenderer";
import useFetch from "../Hooks/useFetch";

function Menu() {
  const [show, setShow] = useState(false);

  const { data: menuCategories, error: categoryError } = useFetch(
    "http://192.168.1.39:5036/Menu/Categories"
  );

  const { data: menuItems, error: itemError } = useFetch(
    "http://192.168.1.39:5036/Menu/Items"
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

  return (
    <Container className="menu__main">
      <h1 className="menu__title">
        <Button onClick={() => setShow(true)}>
          <p className="menu__titleButton">
            <DehazeIcon /> Szűrés
          </p>
        </Button>
        <div className="menu__titleLabel">Étlap / Itallap</div>
      </h1>

      <MenuItemsRenderer
        menuCategories={menuCategories}
        menuItems={menuItems}
        choosenCategories={choosenCategories}
      />

      <Offcanvas show={show} onHide={() => setShow(false)}>
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
