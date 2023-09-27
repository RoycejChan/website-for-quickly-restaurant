import React from "react";
import { Link } from "react-router-dom";
import InstagramLogo from "../../assets/mediaLogos/instagram.png"
import FacebookLogo from "../../assets/mediaLogos/facebook.png"
import YelpLogo from "../../assets/mediaLogos/Yelplogo.png"

export default function Footer() {
    return (
        <div className="footer-Container">
            <div className="top-footer">
                <ul className="footer-media">
                    <li className="footer-list-item"><a target="_blank" href="https://www.instagram.com/quicklystockton/"><img src={InstagramLogo} alt="Instagram" /></a></li>
                    <li className="footer-list-item"><a target="_blank" href="https://www.facebook.com/profile.php?id=100047058086575"><img src={FacebookLogo} alt="Facebook" /></a></li>
                    <li className="footer-list-item"><a target="_blank" href="https://www.yelp.com/biz/quickly-stockton"><img src={YelpLogo} alt="Yelp" /></a></li>
                </ul>
                <ul className="footer-list">
                    <li className="footer-list-item"><a href="#">JOBS</a></li>
                    <li className="footer-list-item"><a href="#">CONTACT</a></li>
                </ul>
            </div>
            <div className="bottom-footer">
                <ul className="footer-legal">
                    <li className="bottom-footer-item"><Link to="/Privacypolicy">Privacy Policy</Link></li>
                    <li className="bottom-footer-item"><Link to="/Termsofuse">Terms of Privacy</Link></li>
                </ul>
                <ul className="footer-legal-bottom-row">
                    <li className="bottom-footer-item">uServe 2019 All Rights Reserved</li>
                    <li className="bottom-footer-item">Powered by Universal Processing LLC</li>
                </ul>
            </div>
        </div>
    )
}