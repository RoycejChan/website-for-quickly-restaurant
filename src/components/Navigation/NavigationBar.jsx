import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/quicklylogo.png";
import pinIcon from "../../assets/pin-location-icon.png";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("menuOpen:", menuOpen); // Add this line for debugging
  };

  return (
    <>
      <div className={`navBar-Container ${menuOpen ? "nav-open" : ""}`}>
        <img src={logo} alt="Quickly Logo" className="nav-logo" data-aos="flip-up" />

        <ul className={`nav-list ${menuOpen ? "nav-open" : "nav-close"}`} data-aos="slide-left">
          <li className={`list-item ${menuOpen ? "nav-open" : "nav-close"}`}><Link to="/">Home</Link></li>
          <li className={`list-item ${menuOpen ? "nav-open" : "nav-close"}`}><Link to="/menu">Menu</Link></li>
          <li className={`list-item ${menuOpen ? "nav-open" : "nav-close"}`}><Link to="/about">About Us</Link></li>
          <li className={`list-item ${menuOpen ? "nav-open" : "nav-close"}`}><Link to="/contact">Contact Us</Link></li>
          <Link to="checkout"><button className="nav-btn">Checkout</button></Link>
        </ul>
        <div className="location">
          <img src={pinIcon} alt="" data-aos="slide-down" data-aos-duration="2000" />
          <li className="list-item-location">Stockton CA</li>
        </div>
        <button className="show-nav" onClick={toggleMenu}>SHOW NAV</button>
      </div>
    </>
  );
}
