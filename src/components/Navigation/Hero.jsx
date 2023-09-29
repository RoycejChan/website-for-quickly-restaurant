import React from "react";
import image1 from "../../assets/heroImage1.jpg"

export default function homeHero() {
    return (
        <div className="hero-section">
            <div className="h-carousel">
                <img src={image1} alt="" className="hero-img" />
            </div>
            <div className="hero-content">
                <h1 className="hero-header">QUICKLY</h1>
                <button className="hero-btn">View our Menu</button>
            </div>
        </div>
    )
}