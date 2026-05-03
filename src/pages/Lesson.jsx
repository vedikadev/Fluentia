import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import lessons from "../data/lessons";

function Lesson() {
  const navigate = useNavigate();
  const { id } = useParams();

  const language = localStorage.getItem("language") || "Spanish";
  const userId = localStorage.getItem("userId");

  const lesson = lessons?.[language]?.find(
    (l) => l.id === Number(id)
  );

  if (!lesson) {
    return (
      <div style={styles.errorPage}>
        <h2>Lesson not found 😢</h2>
        <button style={styles.btn} onClick={() => navigate("/dashboard")}>
          Go Back
        </button>
      </div>
    );
  }

  const questions = lesson.questions || [];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswer = (option) => {
    const correct = questions[current].answer;
    const correctAns = option === correct;

    setSelected(option);

    if (correctAns) {
      setIsCorrect(true);
      setScore((prev) => prev + 10);
    } else {
      setIsCorrect(false);
    }

    setTimeout(() => {
      setSelected(null);
      setIsCorrect(null);

      if (current < questions.length - 1) {
        setCurrent((prev) => prev + 1);
      } else {
        // ✅ XP (USER BASED)
        const xpKey = `xp_${userId}`;
        const oldXP = parseInt(localStorage.getItem(xpKey)) || 0;

        localStorage.setItem(xpKey, oldXP + score + (correctAns ? 10 : 0));

        // ✅ COMPLETED LESSONS (USER BASED FIX)
        const completedKey = `completedLessons_${userId}`;

        const completed =
          JSON.parse(localStorage.getItem(completedKey)) || [];

        if (!completed.includes(String(id))) {
          completed.push(String(id));
          localStorage.setItem(completedKey, JSON.stringify(completed));
        }

        alert("Lesson completed 🎉");
        navigate("/dashboard");
      }
    }, 800);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2>{lesson.title}</h2>
        <p style={{ color: "#666" }}>{lesson.description}</p>

        <div style={styles.quizBox}>
          <h3>{questions[current].question}</h3>

          <div style={styles.options}>
            {questions[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(opt)}
                style={{
                  ...styles.option,
                  background:
                    selected === opt
                      ? isCorrect
                        ? "#4ade80"
                        : "#f87171"
                      : "white",
                  color: selected === opt ? "white" : "#333",
                }}
              >
                {opt}
              </button>
            ))}
          </div>

          <p style={styles.progress}>
            {current + 1} / {questions.length}
          </p>

          <p style={styles.xp}>XP: {score}</p>
        </div>
      </div>
    </div>
  );
}

export default Lesson;

/* styles same as yours */
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f6f7fb",
  },
  card: {
    width: "420px",
    background: "white",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  quizBox: { marginTop: "20px" },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "15px",
  },
  option: {
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    cursor: "pointer",
    textAlign: "left",
  },
  progress: { marginTop: "15px", color: "#777" },
  xp: { marginTop: "5px", fontWeight: "bold" },
  btn: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "#6b4ce6",
    color: "white",
    border: "none",
    borderRadius: "10px",
  },
  errorPage: { textAlign: "center", paddingTop: "80px" },
};