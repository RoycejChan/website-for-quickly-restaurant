import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Category({ menuData }) {
  const { menuItemId } = useParams();
  const selectedMenu = menuData[menuItemId];

  // Load selected items from local storage when the component loads
  useEffect(() => {
    const selectedItemsJSON = localStorage.getItem("selectedItems");
    if (selectedItemsJSON) {
      setSelectedItems(JSON.parse(selectedItemsJSON));
    }
  }, []);

  const [selectedItems, setSelectedItems] = useState([]);

  const handleMenuItemClick = (menuItem) => {
    setSelectedItems([...selectedItems, menuItem]);
  };

  // Save the selected items to local storage whenever it changes
  useEffect(() => {
    const selectedItemsJSON = JSON.stringify(selectedItems);

    localStorage.setItem("selectedItems", selectedItemsJSON);
  }, [selectedItems]);

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
