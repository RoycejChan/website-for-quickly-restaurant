import React from "react";

export default function Category({ menuData }) {
  return (
    <div>
      {menuData.map((menuItem, index) => (
        <div key={index}>
          <h1>{menuItem.name}</h1>
          <p>{menuItem.price}</p>
        </div>
      ))}
    </div>
  );
}
