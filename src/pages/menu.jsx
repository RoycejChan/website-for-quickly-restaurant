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
                        <li className="menu-nav-item"><Link to={`/menu/Category/slush`}>Slush(Ice)</Link></li>
                        <li className="menu-nav-item"><Link to={`/menu/Category/milkTea`}>Milk Tea</Link></li>
                        <li className="menu-nav-item"><Link to={`/menu/Category/snow`}>Snow</Link></li>
                        <li className="menu-nav-item"><Link to={`/menu/Category/premiumTea`}>Espresso Premium Tea</Link></li>
                        <li className="menu-nav-item"><Link to={`/menu/Category/rosetea`}>Rose Tea</Link></li>
                        <li className="menu-nav-item"><Link to={`/menu/Category/yogurtDrinks`}>Yogurt Drinks</Link></li>
                        <li className="menu-nav-item"><Link to={`/menu/Category/flavoredTea`}>Flavored Tea</Link></li>
                        <li className="menu-nav-item"><Link to={`/menu/Category/flirtymilk`}>Flirty Milk</Link></li>
                        <li className="menu-nav-item"><Link to={`/menu/Category/fruityDelight`}>Fruity Delight</Link></li>
                        <li className="menu-nav-item"><Link to={`/menu/Category/coffee`}>Coffee</Link></li>
                        <li className="menu-nav-item"><Link to={`/menu/Category/snacks`}>Snack</Link></li>
                        <li className="menu-nav-item"><Link to={`/menu/Category/eggpuffs`}>Egg Puffs</Link></li>
                        <li className="menu-nav-item"><Link to={`/menu/Category/riceBowl`}>Rice Bowl</Link></li>
                        <li className="menu-nav-item"><Link to={`/menu/Category/bentoBox`}>Bento Box</Link></li>
                        <li className="menu-nav-item"><Link to={`/menu/Category/friedRice`}>Fried Rice</Link></li>
                        <li className="menu-nav-item"><Link to={`/menu/Category/chowMein`}>Chow Mein</Link></li>
                        <li className="menu-nav-item"><Link to={`/menu/Category/makeYourOwn`}>Make Your Own</Link></li>
                    </ul>
        </nav>
        <Outlet />

            <Routes>
            <Route path="/Category/:menuItemId" element={<Category menuData={data} />} />
            </Routes>
    </div>
  );
}
