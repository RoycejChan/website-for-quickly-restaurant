import React from "react";
import aboutusHero from "../assets/aboutusheader.jpeg";
import locationImage from "../assets/quickly-location-img.png"
export default function About() {
  return (
    <div className="aboutus-container">
      <div className="aboutus-img-container">
        <img src={aboutusHero} alt="" id="aboutus-img" data-aos="slide-right" data-aos-duration="1000"/>
      </div>
      <div className="aboutus-content">
        <h1 className="aboutus-header">ABOUT US</h1>
      </div>
        <div className="aboutus-message">
          <p>
            "Welcome to Quickly Boba Tea, your go-to destination for the most refreshing boba tea drinks in Stockton, CA. Our menu boasts an enticing variety, from classic Milk Tea to invigorating Fruit Tea and delicate Rose Tea, and so much more! But we're not just about drinks; we also offer a delectable selection of Grilled Pork Sandwiches and Rice Bowls that are sure to satisfy your cravings.
            <br/><br />
            You can find us conveniently located south of Brandon Blvd, right at the intersection of Parsons Avenue and Oakfield Drive. Whether you're in the mood to dine in or prefer the comfort of your own space, we've got you covered. Order online for speedy carryout or delivery service!
            <br /> <br />
            At Quickly Boba Tea, we take pride in being your trusted counter-serve cafe chain for authentic Taiwanese bubble tea, available in an array of delightful flavors. Join us today to experience the perfect blend of taste and tradition."
          </p>
        </div>
      <div className="location-details-container">
              <h2 className="location-details-header">Location Details</h2>
        <div className="location-details-content">
          <div className="location-details-list-container">
              <ul className="location-details-list">
                <li>
                  <p>📞(209)-227-8596</p>
                </li>
                <li>
                  <p>📍 960 W Robinhood Dr, Stockton, CA 95207</p>
                </li>
                <li>
                  <p>🏪Business Hours: 11am-10pm Everyday</p>
                </li>
                </ul>
              <ul className="location-details-list">
                <li>
                  <p>🚗Free parking</p>
                </li>
                <li>
                  <p>🥡Dine In & Takeout</p>
                </li>
                <li>
                  <p>🙅‍♀️No delivery</p>
                </li>
                <li>
                  <p className="reminder">❌No Online Orders Past 9 PM</p>
                </li>
              </ul>
          </div>
            <div className="aboutus-location-img">
              <a target="_blank" href="https://www.google.com/maps/place/Quickly/@37.9996646,-121.3182908,17z/data=!4m6!3m5!1s0x80900c5a8e60dbbb:0xd7f81272128a94ec!8m2!3d37.9999786!4d-121.3175287!16s%2Fg%2F1ptz6j6l7?entry=ttu">
                <img src={locationImage} alt="" className="google-location-img" />
              </a>
            </div>
        </div>
      </div>
      <div className="aboutus-history">

      </div>
    </div>
  );
}
