import React from "react";
import image1 from "../../assets/heroImage1.jpg"

export default function homeHero() {
    return (
        <div className="hero-section">
            <div className="h-carousel" data-aos="slide-right">
                <img src={image1} alt="" className="hero-img" />
            </div>
            <div className="hero-content" >
                <h1 className="hero-header" data-aos="zoom-out-down">QUICKLY</h1>
                <button className="hero-btn" data-aos="zoom-out-down">View our Menu</button>
            </div>
        </div>
    )
}