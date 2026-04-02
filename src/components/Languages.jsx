import React from "react";
import "../styles.css";
import english from "../assets/english.png"
import korean from "../assets/korean.png"
import spain from "../assets/spain.png"
import japan from "../assets/japan.png"
import german from "../assets/german.png"
import french from "../assets/french.png"

function Languages() {
  return (
    <div className="languages">
      <h2>Choose from 10+ languages</h2>

      <div className="language-list">
        <div className="lang-card">
          <img src={spain} alt="" />
          <h2>Spanish</h2>
        </div>
        <div className="lang-card">
          <img src={german} alt="" />
          <h2>German</h2>
        </div>
        <div className="lang-card">
          <img src={french} alt="" />
          <h2>French</h2>
        </div>
        <div className="lang-card">
          <img src={japan} alt="" />
          <h2>Japanese</h2>
        </div>
        <div className="lang-card">
          <img src={korean} alt="" />
          <h2>Korean</h2>
        </div>
        <div className="lang-card">
          <img src={english} alt="" />
          <h2>English</h2>
        </div>
      </div>
    </div>
  );
}

export default Languages;