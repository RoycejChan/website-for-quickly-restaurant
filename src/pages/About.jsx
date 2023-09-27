import React from "react";
import aboutusHero from "../assets/aboutusheader.jpg";

export default function About() {
  return (
    <div className="aboutus-container">
      <div className="aboutus-img-container">
        <img src={aboutusHero} alt="" className="aboutus-img" />
      </div>
      <div className="aboutus-content">
        <h1 className="aboutus-header">ABOUT US</h1>
      </div>
        <div className="aboutus-message">
          <p>
            "Welcome to Quickly Boba Tea, your go-to destination for the most refreshing boba tea drinks in Stockton, CA. Our menu boasts an enticing variety, from classic Milk Tea to invigorating Fruit Tea and delicate Rose Tea, and so much more! But we're not just about drinks; we also offer a delectable selection of Grilled Pork Sandwiches and Rice Bowls that are sure to satisfy your cravings.

            You can find us conveniently located south of Brandon Blvd, right at the intersection of Parsons Avenue and Oakfield Drive. Whether you're in the mood to dine in or prefer the comfort of your own space, we've got you covered. Order online for speedy carryout or delivery service!

            At Quickly Boba Tea, we take pride in being your trusted counter-serve cafe chain for authentic Taiwanese bubble tea, available in an array of delightful flavors. Join us today to experience the perfect blend of taste and tradition."
          </p>
        </div>
      <div className="location-details-container">
        <h2 className="location-details-header">Location Details</h2>
        <div className="location-details-content">

          <ul className="location-details-list">
            <li>
              <p>2092383732</p>
            </li>
            <li>
              <p>RobinHood Street</p>
            </li>
            </ul>
          <ul className="location-details-list">
            <li>
              <p>Business Hours: 11am-9pm</p>
              <p>No online order past 9pm</p>
            </li>
            <li>
              <p>Free parking</p>
            </li>
          </ul>
          <h1 className="Google">Insert Yasdlorem   Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolore praesentium a aut et placeat consequatur porro eius molestiae debitis numquam vitae nobis, architecto unde tempore ipsa repellendus ex in. our Image Here</h1>
            {/* ENTER ABOUT US/HISTORY of restuarant */}
        </div>
      </div>
    </div>
  );
}
