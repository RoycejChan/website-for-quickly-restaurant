import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/Navigation/NavigationBar";
import Hero from "./components/Navigation/Hero";
import Contact from "./pages/Contact";
import Footer from "./components/Navigation/Footer";
import Termsofuse from "./pages/termsofuse";
import Privacypolicy from "./pages/privacypolicy";
import About from "./pages/About";



import "./css/navbar.css";
import "./css/global.css";
import "./css/hero.css";
import "./css/contact.css";
import "./css/footer.css";
import "./css/tou.css"
import "./css/aboutus.css"
import "./css/privacypolicy.css"

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Hero />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/Termsofuse" element={<Termsofuse />} />
        <Route path="/Privacypolicy" element={<Privacypolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}
