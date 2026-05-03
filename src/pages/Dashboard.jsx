import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaFire, FaStar, FaBook, FaGlobe, FaMoon, FaSun } from "react-icons/fa";
import lessons from "../data/lessons";

function Dashboard() {
  const navigate = useNavigate();

  const name = localStorage.getItem("name");
  const language = localStorage.getItem("language") || "Spanish";
  const userId = localStorage.getItem("userId");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") setDarkMode(true);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  // ✅ language lessons
  const lessonList = lessons[language] || [];

  // ✅ USER SPECIFIC DATA
  const completedKey = `completedLessons_${userId}`;

  let completedLessons = [];
  try {
    completedLessons = JSON.parse(localStorage.getItem(completedKey)) || [];
  } catch {
    completedLessons = [];
  }

  const uniqueCompleted = [...new Set(completedLessons.map(String))];

  // 🔥 SAFE PROGRESS (NO 167% BUG EVER)
  const progress =
    lessonList.length > 0
      ? Math.min(
        100,
        Math.round((uniqueCompleted.length / lessonList.length) * 100)
      )
      : 0;

  const xp = parseInt(localStorage.getItem(`xp_${userId}`)) || 0;

  const startLesson = (id) => {
    if (!lessonList.length) return;
    navigate(`/lesson/${id}`);
  };

  const randomLesson = () => {
    if (!lessonList.length) return;

    const random =
      lessonList[Math.floor(Math.random() * lessonList.length)];

    navigate(`/lesson/${random.id}`);
  };

  return (
    <div style={darkMode ? darkStyles.page : styles.page}>
      <Navbar />

      <div style={styles.container}>
        {/* DARK MODE */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button onClick={toggleDarkMode} style={styles.toggleBtn}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* HEADER */}
        <h1 style={darkMode ? darkStyles.heading : styles.heading}>
          Welcome, {name || "User"} 👋
        </h1>

        <p style={darkMode ? darkStyles.subText : styles.subText}>
          Learning {language} 🚀
        </p>

        {/* HERO */}
        <div style={darkMode ? darkStyles.hero : styles.hero}>
          <div>
            <h2>Continue Learning</h2>
            <p>Small steps every day = big results 🔥</p>
          </div>

          <button
            style={styles.heroBtn}
            onClick={() => lessonList.length && navigate(`/lesson/${lessonList[0].id}`)}
          >
            Start
          </button>
        </div>

        {/* STATS */}
        <h2 style={styles.sectionTitle}>Stats</h2>

        <div style={styles.cardContainer}>
          {[
            { icon: <FaGlobe />, title: "Language", value: language },
            { icon: <FaStar />, title: "XP", value: xp },
            { icon: <FaFire />, title: "Streak", value: "0 days" },
            { icon: <FaBook />, title: "Lessons", value: lessonList.length },
          ].map((item, i) => (
            <div key={i} style={darkMode ? darkStyles.card : styles.card}>
              {React.cloneElement(item.icon, { size: 22, color: "#6b4ce6" })}
              <h3>{item.title}</h3>
              <p>{item.value}</p>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div style={styles.buttonRow}>
          <button onClick={() => startLesson(lessonList[0]?.id)} style={styles.primaryBtn}>
            Start Lesson
          </button>

          <button onClick={() => navigate("/chat")} style={styles.primaryBtn}>
            AI Tutor
          </button>

          <button onClick={randomLesson} style={styles.outlineBtn}>
            Practice
          </button>

          <button
            onClick={() => alert(`Progress: ${progress}%`)}
            style={styles.outlineBtn}
          >
            Progress
          </button>

          <button
            onClick={() => navigate("/select-language")}
            style={styles.outlineBtn}
          >
            Change Language
          </button>
          <button
            onClick={() => navigate("/speak")}
            style={styles.primaryBtn}
          >
            Speak & Learn
          </button>
        </div>

        {/* PROGRESS */}
        <div style={darkMode ? darkStyles.progressCard : styles.progressCard}>
          <h3>Progress</h3>

          <div style={styles.progressBg}>
            <div style={{ ...styles.progressFill, width: `${progress}%` }} />
          </div>

          <p>{progress}% completed</p>
        </div>

        {/* LESSONS */}
        <h2>Lessons</h2>

        <div style={styles.lessonGrid}>
          {lessonList.map((lesson) => {
            const isDone = uniqueCompleted.includes(String(lesson.id));

            return (
              <div
                key={lesson.id}
                onClick={() => navigate(`/lesson/${lesson.id}`)}
                style={{
                  background: darkMode ? "#3c3750" : "#fff",
                  padding: "20px",
                  borderRadius: "12px",
                  cursor: "pointer",
                }}
              >
                <h3>{lesson.title}</h3>
                <p>{lesson.description}</p>
                <p>{isDone ? "100%" : "0%"} completed</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


/* LIGHT */
const styles = {
  page: { minHeight: "100vh", background: "#f6f7fb" },
  container: { padding: "40px", maxWidth: "1100px", margin: "auto" },
  heading: { fontSize: "32px", fontWeight: "700" },
  subText: { color: "#444" },

  toggleBtn: {
    background: "white",
    border: "none",
    padding: "10px",
    borderRadius: "50%",
    cursor: "pointer",
  },

  hero: {
    marginTop: "25px",
    background: "linear-gradient(135deg, #73a6f3, #5837c6)",
    padding: "40px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "20px",
  },

  heroBtn: {
    background: "white",
    border: "none",
    padding: "8px 14px",
    borderRadius: "10px",
    cursor: "pointer",
    color: "#6b4ce6",
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
  },

  buttonRow: { marginTop: "30px" },

  primaryBtn: {
    background: "#6b4ce6",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "10px",
    marginRight: "10px",
    cursor: "pointer",
  },

  outlineBtn: {
    border: "1px solid #6b4ce6",
    color: "#6b4ce6",
    padding: "10px 20px",
    borderRadius: "10px",
    marginRight: "10px",
    cursor: "pointer",
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
  },

  progressFill: {
    height: "100%",
    background: "#6b4ce6",
  },

  progressText: { color: "#666" },

  lessonGrid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px",
  },
};

/* DARK */
const darkStyles = {
  page: { minHeight: "100vh", background: "#2f293f", color: "white" },
  heading: { fontSize: "32px", fontWeight: "700" },
  subText: { color: "#ccc" },

  hero: {
    marginTop: "25px",
    background: "linear-gradient(135deg, #5e5871, #332169)",
    padding: "40px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "space-between",
  },

  card: {
    background: "#3c3750",
    padding: "20px",
    borderRadius: "16px",
    width: "180px",
  },

  progressCard: {
    marginTop: "40px",
    background: "#3c3750",
    padding: "20px",
    borderRadius: "12px",
  },

  cardTitle: { fontSize: "14px", color: "#ddd" },
};