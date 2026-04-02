

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaFire, FaStar, FaBook, FaGlobe, FaMoon, FaSun } from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();

  const name = localStorage.getItem("name");
  const language = localStorage.getItem("language");

  // 🌙 DARK MODE STATE
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") setDarkMode(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <div style={darkMode ? darkStyles.page : styles.page}>
      <Navbar />

      <div style={styles.container}>
        {/* TOGGLE BUTTON */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button onClick={toggleDarkMode} style={styles.toggleBtn}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Greeting */}
        <h1 style={darkMode ? darkStyles.heading : styles.heading}>
          Welcome, {name || "User"} 👋
        </h1>
        <p style={darkMode ? darkStyles.subText : styles.subText}>
          Ready to continue your journey?
        </p>

        {/* HERO */}
        <div style={darkMode ? darkStyles.hero : styles.hero}>
          <div>
            <h2 style={styles.heroTitle}>Continue Learning</h2>
            <p style={styles.heroText}>
              You're doing great! Keep your streak alive 🔥
            </p>
          </div>

          <button
            style={styles.heroBtn}
            onClick={() => navigate("/lesson")}
          >
            Resume
          </button>
        </div>

        {/* STATS */}
        <h2 style={styles.sectionTitle}>Your Stats</h2>

        <div style={darkMode? darkStyles.cardContainer : styles.cardContainer}>
          {[ 
            { icon: <FaGlobe />, title: "Language", value: language || "N/A" },
            { icon: <FaStar />, title: "XP", value: "0" },
            { icon: <FaFire />, title: "Streak", value: "0 days" },
            { icon: <FaBook />, title: "Lessons", value: "5 Completed" },
          ].map((item, i) => (
            <div
              key={i}
              style={darkMode ? darkStyles.card : styles.card}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              {React.cloneElement(item.icon, {
                size: 22,
                color: "#6b4ce6",
              })}
              <h3 style={darkMode? darkStyles.cardTitle:styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardValue}>{item.value}</p>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div style={styles.buttonRow}>
          <button style={styles.primaryBtn}>Start Lesson</button>
          <button style={styles.outlineBtn}>Practice</button>
          <button style={styles.outlineBtn}>Progress</button>
        </div>

        {/* PROGRESS */}
        <div style={darkMode ? darkStyles.progressCard : styles.progressCard}>
          <h3>Daily Progress</h3>
          <div style={styles.progressBg}>
            <div style={styles.progressFill}></div>
          </div>
          <p style={styles.progressText}>30% completed</p>
        </div>
      </div>
    </div>
  );
}

/* 🎯 Hover */
const hoverIn = (e) => {
  e.currentTarget.style.transform = "translateY(-6px)";
};
const hoverOut = (e) => {
  e.currentTarget.style.transform = "translateY(0)";
};

/* 🌞 LIGHT MODE */
const styles = {
  page: { minHeight: "100vh", background: "#f6f7fb" },
  container: { padding: "40px", maxWidth: "1100px", margin: "auto" },
  heading: { fontSize: "32px", fontWeight: "700", color: "#3b3a3a" },
  subText: { color: "#090909" },

  toggleBtn: {
    background: "white",
    border: "none",
    padding: "10px",
    borderRadius: "50%",
    cursor: "pointer",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },

  hero: {
    marginTop: "25px",
    background: "linear-gradient(135deg, #73a6f3, #5837c6)",
    borderRadius: "20px",
    padding: "40px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
  },

  heroTitle: { fontSize: "24px" },
  heroText: { marginTop: "5px", opacity: 0.9 },

  heroBtn: {
    padding: "6px 12px",
    background: "white",
    color: "#6b4ce6",
    border: "none",
    borderRadius: "10px",
    fontWeight: "600",
    cursor: "pointer",
  },
  

  sectionTitle: { marginTop: "40px" },

  cardContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "16px",
    width: "180px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    transition: "0.3s",
  },

  cardTitle: { fontSize: "14px", color: "#666" },
  cardValue: { fontSize: "20px", fontWeight: "600" },

  buttonRow: { marginTop: "30px" },

  primaryBtn: {
    padding: "10px 20px",
    background: "#6b4ce6",
    color: "white",
    border: "none",
    borderRadius: "10px",
    marginRight: "10px",
  },

  outlineBtn: {
    padding: "10px 20px",
    border: "1px solid #6b4ce6",
    color: "#6b4ce6",
    borderRadius: "10px",
    marginRight: "10px",
  },

  progressCard: {
    marginTop: "40px",
    background: "white",
    padding: "20px",
    borderRadius: "12px",
  },

  progressBg: {
    height: "10px",
    background: "#ddd",
    borderRadius: "5px",
    marginTop: "10px",
  },

  progressFill: {
    width: "30%",
    height: "100%",
    background: "#6b4ce6",
    borderRadius: "5px",
  },

  progressText: { color: "#666" },
};

/* 🌙 DARK MODE */
const darkStyles = {
  page: { minHeight: "100vh", background: "#2f293f", color: "white" },
  container: { padding: "40px", maxWidth: "1100px", margin: "auto" },
  heading: {  fontSize: "32px", fontWeight: "700", color: "white" },
  subText: { color: "#d3d0d0" },

  card: {
    background: "#3c3750",
    padding: "20px",
    borderRadius: "16px",
    width: "180px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
  },

  progressCard: {
    marginTop: "40px",
    background: "#3c3750",
    padding: "20px",
    borderRadius: "12px",
  },
  hero: {
  marginTop: "25px",
  background: "linear-gradient(135deg, #5e5871, #332169)", // darker purple
  borderRadius: "20px",
  padding: "40px",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
},
cardContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    color: "white",
  },
   cardTitle: { fontSize: "14px", color: "#d1d1d1" },

};

export default Dashboard;