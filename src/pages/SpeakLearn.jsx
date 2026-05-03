import React, { useState, useEffect } from "react";
import speakingSentences from "../data/speakingSentences";

function SpeakLearn() {
    const language = localStorage.getItem("language") || "English";

    const [sentence, setSentence] = useState("");
    const [spokenText, setSpokenText] = useState("");
    const [result, setResult] = useState(null);
    const [listening, setListening] = useState(false);

    // 🎯 pick random sentence on load
    useEffect(() => {
        getRandomSentence();
    }, []);

    const getRandomSentence = () => {
        const pool = speakingSentences[language] || speakingSentences["English"];
        const random = pool[Math.floor(Math.random() * pool.length)];
        setSentence(random);
        setResult(null);
        setSpokenText("");
    };

    const startListening = () => {
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;

        const recognition = new SpeechRecognition();

        recognition.lang =
            language === "Spanish"
                ? "es-ES"
                : language === "French"
                    ? "fr-FR"
                    : language === "German"
                        ? "de-DE"
                        : language === "Japanese"
                            ? "ja-JP"
                            : language === "Korean"
                                ? "ko-KR"
                                : "en-US";

        recognition.onstart = () => setListening(true);

        recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;
            setSpokenText(text);
            checkAnswer(text);
        };

        recognition.onend = () => setListening(false);

        recognition.onerror = (e) => console.log(e.error);

        recognition.start();
    };

    const normalize = (str) =>
        str
            .toLowerCase()
            .normalize("NFD") // splits accents
            .replace(/[\u0300-\u036f]/g, "") // removes accents
            .replace(/[.,!?]/g, "") // removes punctuation
            .trim();

    const checkAnswer = (text) => {
        if (normalize(text) === normalize(sentence)) {
            setResult("correct");
        } else {
            setResult("wrong");
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <h2>Speak & Learn 🎤</h2>

                <p style={styles.sentence}>{sentence}</p>

                <button onClick={startListening} style={styles.btn}>
                    {listening ? "Listening..." : "Speak"}
                </button>
                <br />
                <br />
                <button onClick={getRandomSentence} style={styles.btn}>
                    Next Sentence
                </button>
                <br />
                <br />
                <p>You said: {spokenText}</p>

                {result === "correct" && <p style={{ color: "green" }}>Correct ✔</p>}
                {result === "wrong" && <p style={{ color: "red" }}>Try again ✖</p>}
            </div>
        </div>
    );
}

export default SpeakLearn;

const styles = {
    page: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f6f7fb",
    },
    card: {
        background: "white",
        padding: "80px",
        borderRadius: "20px",
        width: "400px",
        textAlign: "center",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    },
    sentence: {
        fontSize: "20px",
        margin: "20px 0",
    },
    btn: {
        padding: "10px 20px",
        background: "#6b4ce6",
        color: "white",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
    },
    text: {
        marginTop: "15px",
        color: "#555",
    },
};