// src/components/Navbar.js
import React from "react";
import "./Navbar.css";
import logo from "../components/assets/logo.svg"; // Assuming you have a logo file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="NoKasa Logo" className="logo" />
          <span className="logo-text">NoKasa</span>
        </div>
        <div className="navbar-links">
          <a href="#" className="navbar-link">
            For companies
          </a>
          <a href="#" className="navbar-link">
            For Scrap Dealers
          </a>
        </div>
        <button className="navbar-button">Talk to us</button>
      </div>
    </nav>
  );
};

export default Navbar;
