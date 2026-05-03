import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import API from "../services/api";
import Navbar from "../components/Navbar";

function LanguageSelect() {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const languages = [
    { name: "Spanish", emoji: "🇪🇸", color: "#ff4d4d" },
    { name: "French", emoji: "🇫🇷", color: "#4d79ff" },
    { name: "German", emoji: "🇩🇪", color: "#ffb84d" },
    { name: "Japanese", emoji: "🇯🇵", color: "#ff4da6" },
    { name: "Korean", emoji: "🇰🇷", color: "#4dff88" },
    { name: "English", emoji: "🇬🇧", color: "#a64dff" },
  ];

  const handleContinue = async () => {
    if (!selected) {
      alert("Please select a language");
      return;
    }

    const userId = localStorage.getItem("userId");

    try {
      await API.post("/select-language", {
        userId,
        language: selected,
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

      <div className="lang-page">
        <h1 className="lang-title">Choose your language</h1>
        <p className="lang-sub">You can change it later anytime</p>

        <div className="lang-grid">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className={`lang-card ${
                selected === lang.name ? "active" : ""
              }`}
              style={{
                borderColor:
                  selected === lang.name ? lang.color : "transparent",
              }}
              onClick={() => setSelected(lang.name)}
            >
              <div className="lang-emoji">{lang.emoji}</div>
              <div className="lang-name">{lang.name}</div>
            </div>
          ))}
        </div>

        <button
          className={`lang-btn ${selected ? "enabled" : ""}`}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </>
  );
}

export default LanguageSelect;