import React from "react";
import "../styles.css";

function Features() {
  return (
    <div className="features">
      <h2>Why learn with Fluentia?</h2>

      <div className="feature-grid">
        <div className="feature-card">
          <h3>Interactive Lessons</h3>
          <p>Practice speaking, reading and writing.</p>
        </div>

        <div className="feature-card">
          <h3>Track Progress</h3>
          <p>Monitor your daily learning streak.</p>
        </div>

        <div className="feature-card">
          <h3>Gamified Learning</h3>
          <p>Earn XP, level up and stay motivated.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;