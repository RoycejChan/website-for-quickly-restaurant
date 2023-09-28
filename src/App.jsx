import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/Navigation/NavigationBar";
import Contact from "./pages/Contact";
import Footer from "./components/Navigation/Footer";
import Termsofuse from "./pages/termsofuse";
import Privacypolicy from "./pages/privacypolicy";
import About from "./pages/About";

import Layout from "./components/Navigation/Homelayout"; 


import "./css/navbar.css";
import "./css/global.css";
import "./css/hero.css";
import "./css/contact.css";
import "./css/footer.css";
import "./css/tou.css"
import "./css/aboutus.css"
import "./css/privacypolicy.css"
import "./css/home.css"

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
            path="/"
            element={
              <Layout>
                <Route path="/" element={<Layout />} />
              </Layout>
            }
          />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Termsofuse" element={<Termsofuse />} />
          <Route path="/Privacypolicy" element={<Privacypolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}