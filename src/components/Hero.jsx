import React from "react";
import image1 from "../assets/heroImage1.jpg"

export default function Hero() {
    return (
        <div className="hero-section">
            <img src={image1} alt="" className="hero-img" />
        </div>
    )
}