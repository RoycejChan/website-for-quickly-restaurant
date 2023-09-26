import React from "react";
import logo from "../../assets/quicklylogo.png"

export default function NavBar() {
    return (
        <div className="navBar-Container">
            <img src={logo} alt="Quickly Logo"className="nav-logo"/>
                <ul className="nav-list">
                    <li className="list-item">Home</li>
                    <li className="list-item">Menu</li>
                    <li className="list-item">About Us</li>
                    <li className="list-item">Locations</li>
                    <li className="list-item">Contact Us</li>
                    <li className="list-item">Hours & Location</li>
                    <button className="nav-btn">Checkout</button>
                </ul>
        </div>
    )
}