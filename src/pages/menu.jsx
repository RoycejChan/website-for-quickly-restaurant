import React from "react";
import { Routes, Route, Link, Outlet, useParams } from "react-router-dom";
import Category from "./menuCategories/Category";
import data from "../data/menuData.json"; 


export default function Menu() {
    const { menuItemId } = useParams();

  return (
    <div className="menu-container">

      <div className="menu-header">
        <h1>Our Menu</h1>
      </div>



      <nav className="menu-nav-container">
                    <ul className="menu-nav">
                        <li className="menu-nav-item"><Link to="/menu/Category">Slush(Ice)</Link></li>
                        <li className="menu-nav-item">Milk Tea</li>
                        <li className="menu-nav-item">Smoothie</li>
                        <li className="menu-nav-item">Milk Shake</li>
                        <li className="menu-nav-item">Snow</li>
                        <li className="menu-nav-item">Espresso Premium Tea</li>
                        <li className="menu-nav-item">Rose Tea</li>
                        <li className="menu-nav-item">Yogurt Drinks</li>
                        <li className="menu-nav-item">Flavored Tea</li>
                        <li className="menu-nav-item">Flirty Milk</li>
                        <li className="menu-nav-item">Fruity Delight</li>
                        <li className="menu-nav-item">Coffee</li>
                        <li className="menu-nav-item">Snack</li>
                        <li className="menu-nav-item">Egg Puffs</li>
                        <li className="menu-nav-item">Rice Bowl</li>
                        <li className="menu-nav-item">Bento Box</li>
                        <li className="menu-nav-item">Fried Rice</li>
                        <li className="menu-nav-item">Chow Mein</li>
                    </ul>
        </nav>
        <Outlet />

            <Routes>
            <Route path="/Category" element={<Category menuData={data.slush} />} />
            </Routes>
    </div>
  );
}
