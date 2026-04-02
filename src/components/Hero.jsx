import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import hero_img from "../assets/hero_img.png"

function Hero() {
  return (
    <div className="hero">
      <div>
        <h1>Learn a new language the smart way</h1>
        <p>Practice speaking, reading, and writing with Fluentia.</p>
        <Link to="/signup" className="btn-primary hero-btn">
          Start Learning
        </Link>
      </div>
      <img src={hero_img} alt="heroimage" />
    </div>
  );
}

export default Hero;