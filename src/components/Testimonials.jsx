import React from "react";
import "../styles.css";
import langs from "../assets/langs.png"
function Testimonials() {
  return (
    <div className="testimonials">
      <h2>What our learners say</h2>
      <div class="row">
      <img src={langs} alt="" />
      <div className="testimonial-grid">
        <div className="testimonial-card">
          <p>"Fluentia made learning Spanish fun and easy!"</p>
          <h4>- Riya</h4>
        </div>

        <div className="testimonial-card">
          <p>"I love the streak and XP system."</p>
          <h4>- Aman</h4>
        </div>

        <div className="testimonial-card">
          <p>"Best way to stay consistent."</p>
          <h4>- Neha</h4>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Testimonials;