import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Category({ menuData }) {
  const { menuItemId } = useParams();
  const selectedMenu = menuData[menuItemId];

  // Initialize the state variable to store selected menu items
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems]);

  const handleMenuItemClick = (menuItem) => {
    // Add the selected menu item to the state variable
    setSelectedItems([...selectedItems, menuItem]);
  };

  if (!selectedMenu) {
    return <div>Menu item not found.</div>;
  }

  return (
    <div className="menu-object">
      {selectedMenu.map((menuItem, index) => (
        <div
          key={index}
          className="menu-object-flex"
          onClick={() => handleMenuItemClick(menuItem)}
        >
          <h1 className="menuItem-name">{menuItem.name}</h1>
          <h1 className="menuItem-price">{menuItem.price}</h1>
        </div>
      ))}
    </div>
  );
}
