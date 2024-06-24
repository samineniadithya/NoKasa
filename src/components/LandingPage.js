// src/components/LandingPage.js
import React from "react";
import "./LandingPage.css";
import Navbar from "./Navbar";
import figmaImage from "../components/assets/image.svg";

const LandingPage = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="landing-page">
        <div className="left-section">
          <h1>Let's save the planet together!</h1>
          <p>
            At Nokasa, we boost recycling by bringing together consumers,
            q-commerce apps and scrap dealers.
          </p>
          <div className="buttons">
            <button className="connect-button">Let's connect</button>
            <button className="how-it-works-button">How it works</button>
          </div>
        </div>
        <div className="right-section">
          <img
            src={figmaImage}
            alt="Illustration"
            className="figma-illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
