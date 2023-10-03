import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

export default function Category({ menuData }) {
  const { menuItemId } = useParams();
  const selectedMenu = menuData[menuItemId];

  useEffect(() => {
    const selectedItemsJSON = localStorage.getItem("selectedItems");
    if (selectedItemsJSON) {
      setSelectedItems(JSON.parse(selectedItemsJSON));
    }
  }, []);

  const [selectedItems, setSelectedItems] = useState([]);

  const [selectedItemID, setSelectedItemID] = useState(null);

  const handleMenuItemClick = (menuItem, index) => {
    setSelectedItems([...selectedItems, menuItem]);
    setSelectedItemID(index);
  };


  const selectedItemIDRef = useRef(0); // Initialize the ref with 0
  
  useEffect(() => {
    const selectedItemsJSON = JSON.stringify(selectedItems);
    localStorage.setItem("selectedItems", selectedItemsJSON);
    selectedItemIDRef.current += 1; 
    console.log(selectedItemIDRef.current);  
  }, [selectedItems]);
  
  if (!selectedMenu) {
    return <div>Menu item not found.</div>;
  }

  return (
    <div className="menu-object">
      {selectedMenu.map((menuItem, index) => (
        <div
          key={index}
          className={`menu-object-flex ${selectedItemID === index ? 'menu-object-selected' : ''}`}
          onClick={() => handleMenuItemClick(menuItem, index)}
        >
          <h1 className="menuItem-name">{menuItem.name}</h1>
          <h1 className="menuItem-price">{menuItem.price}</h1>
        </div>
      ))}
    </div>
  );
}
