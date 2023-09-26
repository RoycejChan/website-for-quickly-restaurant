import React from "react";
import NavBar from "./components/Navigation/NavigationBar";
import Hero from "./components/Navigation/Hero";
import Contact from "./pages/Contact";

import "./css/navbar.css";
import "./css/global.css";
import "./css/hero.css";
import "./css/contact.css";

export default function App() {
  return (
    <>
        <NavBar />
        <Hero />
        <Contact />
    </>
  );
}
