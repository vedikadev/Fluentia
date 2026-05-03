import React, { useEffect, useRef, useState } from "react";
import { askGemini } from "../api/gemini";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Chat() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("darkMode") === "true"
    );
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const chatRef = useRef(null);

    // 🔥 auto scroll to bottom
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages, loading]);

    const handleAsk = async () => {
        if (!input.trim()) return;

        const userMsg = { role: "user", text: input };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");

        setLoading(true);

        const reply = await askGemini(input);

        const botMsg = { role: "bot", text: reply };
        setMessages((prev) => [...prev, botMsg]);

        setLoading(false);
    };

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("darkMode", newMode);
    };

    return (
        <div style={darkMode ? darkStyles.page : styles.page}>

            {/* TOP BAR */}
            <div style={darkMode ? darkStyles.topBar : styles.topBar}>
                <button
                    onClick={() => navigate("/dashboard")}
                    style={darkMode ? darkStyles.backBtn : styles.backBtn}
                >
                    ←
                </button>

                <h2 style={styles.title}>AI Tutor</h2>

                <button onClick={toggleDarkMode} style={styles.toggleBtn}>
                    {darkMode ? "🌞" : "🌙"}
                </button>
            </div>

            {/* CHAT AREA (FIXED HEIGHT, ONLY THIS SCROLLS) */}
            <div style={styles.chatWrapper}>
                <div style={darkMode ? darkStyles.chatCard : styles.chatCard}>
                    <div style={darkMode ? darkStyles.innerCard : styles.innerCard}>

                        {/* MESSAGES */}
                        <div ref={chatRef} style={darkMode ? darkStyles.chatContainer : styles.chatContainer}>
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    style={{
                                        ...styles.row,
                                        justifyContent:
                                            msg.role === "user" ? "flex-end" : "flex-start",
                                    }}
                                >
                                    <div
                                        style={{
                                            ...styles.bubble,
                                            background:
                                                msg.role === "user"
                                                    ? "linear-gradient(135deg, #73a6f3, #5837c6)"
                                                    : darkMode
                                                        ? "#4a445f"
                                                        : "#f3f0ff",
                                            color:
                                                msg.role === "user"
                                                    ? "white"
                                                    : darkMode
                                                        ? "white"
                                                        : "#333",
                                        }}
                                    >
                                        {msg.role === "bot" ? (
                                            <ReactMarkdown
                                                remarkPlugins={[remarkGfm]}
                                                components={{
                                                    h1: ({ ...props }) => (
                                                        <h1 style={{ fontSize: "18px", marginBottom: "8px" }} {...props} />
                                                    ),
                                                    h2: ({ ...props }) => (
                                                        <h2 style={{ fontSize: "16px", margin: "10px 0 6px" }} {...props} />
                                                    ),
                                                    p: ({ ...props }) => (
                                                        <p style={{ marginBottom: "8px", lineHeight: "1.5" }} {...props} />
                                                    ),
                                                    ul: ({ ...props }) => (
                                                        <ul style={{ paddingLeft: "18px", marginBottom: "8px" }} {...props} />
                                                    ),
                                                    li: ({ ...props }) => (
                                                        <li style={{ marginBottom: "4px" }} {...props} />
                                                    ),
                                                    hr: () => <hr style={{ margin: "10px 0", opacity: 0.3 }} />,
                                                }}
                                            >
                                                {msg.text}
                                            </ReactMarkdown>
                                        ) : (
                                            msg.text
                                        )}
                                    </div>
                                </div>
                            ))}

                            {/* 🔥 TYPING ANIMATION */}
                            {loading && (
                                <div style={{ ...styles.row, justifyContent: "flex-start" }}>
                                    <div
                                        style={{
                                            ...styles.bubble,
                                            background: darkMode ? "#4a445f" : "#f3f0ff",
                                            display: "flex",
                                            gap: "5px",
                                            alignItems: "center",
                                        }}
                                    >
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* INPUT */}
                        <div style={darkMode ? darkStyles.inputArea : styles.inputArea}>
                            <input
                                style={darkMode ? darkStyles.input : styles.input}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask something..."
                                onKeyDown={(e) => e.key === "Enter" && handleAsk()}
                            />

                            <button
                                style={darkMode ? darkStyles.sendBtn : styles.sendBtn}
                                onClick={handleAsk}
                            >
                                Send
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;

const styles = {
    page: {
        height: "100vh",
        background: "linear-gradient(180deg, #f6f7fb 60%, #ece9ff)",
        display: "flex",
        flexDirection: "column",
    },

    topBar: {
        background: "linear-gradient(135deg, #73a6f3, #5837c6)",
        color: "white",
        padding: "20px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    title: { margin: 0 },

    toggleBtn: {
        background: "white",
        border: "none",
        borderRadius: "10px",
        padding: "6px 10px",
        cursor: "pointer",
    },

    backBtn: {
        background: "white",
        border: "none",
        borderRadius: "10px",
        padding: "6px 12px",
        cursor: "pointer",
    },

    chatWrapper: {
        flex: 1,
        padding: "20px",
        display: "flex",
        justifyContent: "center",
    },

    chatCard: {
        width: "100%",
        maxWidth: "800px",
        borderRadius: "20px",
        padding: "2px",
        background: "linear-gradient(135deg, #73a6f3, #5837c6)",
    },

    innerCard: {
        background: "white",
        borderRadius: "18px",
        height: "83vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
    },

    chatContainer: {
        flex: 1,
        padding: "20px",
        overflowY: "auto",
    },

    row: { display: "flex", marginBottom: "12px" },

    bubble: {
        padding: "12px 16px",
        borderRadius: "14px",
        maxWidth: "65%",
    },

    inputArea: {
        display: "flex",
        padding: "15px",
        borderTop: "1px solid #eee",
    },

    input: {
        flex: 1,
        border: "none",
        outline: "none",
        padding: "10px",
    },

    sendBtn: {
        background: "linear-gradient(135deg, #73a6f3, #5837c6)",
        color: "white",
        border: "none",
        borderRadius: "10px",
        padding: "10px 16px",
    },
};

const darkStyles = {
    page: {
        height: "100vh",
        background: "linear-gradient(180deg, #2f293f, #1f1a2e)",
        display: "flex",
        flexDirection: "column",
    },

    topBar: {
        background: "linear-gradient(135deg, #5e5871, #332169)",
        color: "white",
        padding: "20px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    backBtn: {
        background: "#3c3750",
        border: "none",
        borderRadius: "10px",
        padding: "6px 12px",
        color: "white",
    },

    chatCard: {
        width: "100%",
        maxWidth: "800px",
        borderRadius: "20px",
        padding: "2px",
        background: "linear-gradient(135deg, #5e5871, #332169)",
    },

    innerCard: {
        background: "#3c3750",
        borderRadius: "18px",
        height: "83vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
    },

    chatContainer: {
        flex: 1,
        padding: "20px",
        overflowY: "auto",
    },

    inputArea: {
        display: "flex",
        padding: "15px",
        borderTop: "1px solid #555",
    },

    input: {
        flex: 1,
        border: "none",
        outline: "none",
        background: "transparent",
        color: "white",
    },

    sendBtn: {
        background: "linear-gradient(135deg, #73a6f3, #5837c6)",
        color: "white",
        border: "none",
        borderRadius: "10px",
        padding: "10px 16px",
    },
};