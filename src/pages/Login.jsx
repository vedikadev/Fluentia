import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/login", user);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.user.name);
      localStorage.setItem("userId", res.data.user._id);
      localStorage.setItem("language", res.data.user.language);

      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };
  return (
  <div className="login-page">

    <div className="login-left">
      <div className="overlay">
        <h1>FLUENTIA</h1>
        <p>Speak Beyond Borders</p>
      </div>
    </div>

    <div className="login-right">
      <form className="auth-form" onSubmit={handleSubmit}>
        
        <h2>Welcome Back</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn-primary">
          Login
        </button>

        

        <p>
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>

      </form>
    </div>
  </div>
);
}

export default Login;