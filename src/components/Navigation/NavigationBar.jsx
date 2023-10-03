import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/quicklylogo.png";
import pinIcon from "../../assets/pin-location-icon.png";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navigation">
        <div className="navBar-Container">
          <img src={logo} alt="Quickly Logo" className="nav-logo" data-aos="flip-up" />

          {/* Desktop Navigation */}
          <ul className="nav-list" data-aos="slide-left">
            <li className="list-item"><Link to="/">Home</Link></li>
            <li className="list-item"><Link to="/menu">Menu</Link></li>
            <li className="list-item"><Link to="/about">About Us</Link></li>
            <li className="list-item"><Link to="/contact">Contact Us</Link></li>
            <Link to="checkout"><button className="nav-btn">Checkout</button></Link>
          </ul>

          <div className="location">
            <img src={pinIcon} alt="" data-aos="slide-down" data-aos-duration="2000" />
            <li className="list-item-location">Stockton CA</li>
          </div>
        </div>

        {/* Mobile Navigation */}
        <button className="show-mobile-nav" onClick={toggleMenu}>
         ≡
        </button>
        {menuOpen && (
          <div className={`mobile-nav-container ${menuOpen ? 'show' : ''}`} data-aos="slide-down">
            <img src={logo} alt="Quickly Logo" className="mobile-nav-logo" data-aos="flip-up" />
            <nav>
              <ul className="mobile-nav">
                <li className="mobile-list-item"><Link to="/menu">Menu</Link></li>
                <li className="mobile-list-item"><Link to="/about">About Us</Link></li>
                <li className="mobile-list-item"><Link to="/contact">Contact Us</Link></li>
                <Link to="checkout"><button className="mobile-nav-btn">Checkout</button></Link>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
