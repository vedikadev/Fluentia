import React from "react";
import "../styles.css";
import people from "../assets/people.png"
function HowItWorks() {
  return (
    <div className="how">
      <h2>How Fluentia Works</h2>
      <img src={people} alt="" />

      <div className="how-grid">
        <div className="how-card">
          <h3>1. Sign Up First</h3>
          <p>Create your account and get started.</p>
        </div>

        <div className="how-card">
          <h3>2. Choose Language</h3>
          <p>Select the language you want to learn.</p>
        </div>

        <div className="how-card">
          <h3>3. Start Learning</h3>
          <p>Complete lessons and earn XP.</p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;