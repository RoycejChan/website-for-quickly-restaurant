import React from "react";
import { useParams } from "react-router-dom";

export default function Category({ menuData }) {
  const { menuItemId } = useParams();
  const selectedMenu = menuData[menuItemId];

  if (!selectedMenu) {
    return <div>Menu item not found.</div>;
  }

  return (
    <div className="menu-object">
      {selectedMenu.map((menuItem, index) => (
        <div key={index} className="menu-object-flex">
          <h1 className="menuItem-name">{menuItem.name}</h1>
          <h1 className="menuItem-price">{menuItem.price}</h1>
        </div>
      ))}
    </div>
  );
}
