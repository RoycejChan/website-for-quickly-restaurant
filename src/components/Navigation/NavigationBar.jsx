import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/quicklylogo.png";
import pinIcon from "../../assets/pin-location-icon.png";

export default function NavBar() {
  return (
    <div className="navBar-Container">
      <img src={logo} alt="Quickly Logo" className="nav-logo" />
      <ul className="nav-list">
        <li className="list-item"><Link to="/">Home</Link></li>
        <li className="list-item"><Link to="/menu">Menu</Link></li>
        <li className="list-item"><Link to="/about">About Us</Link></li>
        <li className="list-item"><Link to="/contact">Contact Us</Link></li>
        <button className="nav-btn">Checkout</button>
      </ul>
      <img src={pinIcon} alt="" />
      <li className="list-item-location">Stockton CA</li>
    </div>
  );
}