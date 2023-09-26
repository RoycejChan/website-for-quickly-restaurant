import React from "react";
import NavBar from "./components/Navigation/NavigationBar";
import Hero from "./components/Navigation/Hero";
import Contact from "./pages/Contact";
import Footer from "./components/Navigation/Footer";
import Termsofuse from "./pages/termsofuse";

import "./css/navbar.css";
import "./css/global.css";
import "./css/hero.css";
import "./css/contact.css";
import "./css/footer.css";
import "./css/tou.css"

export default function App() {
  return (
    <>
        <NavBar />
        <Hero />
        <Contact />
        <Footer />
        <Termsofuse />
    </>
  );
}
