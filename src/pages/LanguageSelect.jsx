import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import API from "../services/api";
import Navbar from "../components/Navbar";

function LanguageSelect() {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const languages = ["Spanish", "French", "German", "Japanese", "Korean", "English"];

  const handleContinue = async () => {
    if (selected === "") {
      alert("Please select a language");
      return;
    }

    const userId = localStorage.getItem("userId");

    try {
      await API.post("/select-language", {
        userId: userId,
        language: selected
      });

      localStorage.setItem("language", selected);

      navigate("/dashboard");
    } catch (err) {
      alert("Error saving language");
    }
  };

  return (
    <>
    <Navbar />
    <div className="language-page">
      <h2>Choose a language to learn</h2>

      <div className="language-grid">
        {languages.map((lang) => (
          <div
            key={lang}
            className={`language-card ${selected === lang ? "active" : ""}`}
            onClick={() => setSelected(lang)}
          >
            {lang}
          </div>
        ))}
      </div>

      <button className="btn-primary" onClick={handleContinue}>
        Continue
      </button>
    </div>
    </>
  );
}

export default LanguageSelect;