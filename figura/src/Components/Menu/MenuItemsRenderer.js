import React from "react";
import MenuProduct from "./MenuProduct";

function MenuItemsRenderer({ menuCategories, choosenCategories, menuItems }) {
  const renderCategory = (category) => {
    if (choosenCategories.find((c) => c.id === category.id)) {
      const itemsInCategory = menuItems.filter(
        (item) => item.categoryId === category.id
      );

      return (
        <MenuProduct category={category} itemsInCategory={itemsInCategory} />
      );
    }
  };

  return <>{menuCategories.map(renderCategory)}</>;
}

export default MenuItemsRenderer;
