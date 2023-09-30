import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/heroImage1.jpeg"

export default function homeHero() {
    return (
        <div className="hero-section">
            <div className="h-carousel" data-aos="slide-right">
                <img src={image1} alt="" id="hero-img" />
            </div>
            <div className="hero-content" >
                <h1 className="hero-header" data-aos="zoom-out-down">QUICKLY</h1>
                <button className="hero-btn" data-aos="zoom-out-down"><Link to="/Menu">View our Menu</Link></button>
            </div>
        </div>
    )
}