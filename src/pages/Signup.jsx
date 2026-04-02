import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (user.password !== user.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const res = await API.post("/signup", user);

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("name", res.data.user.name);
            localStorage.setItem("userId", res.data.user._id);

            navigate("/select-language");
        } catch (err) {
            alert(err.response.data.message);
        }
    };
    return (
  <div className="login-page">

    <div className="signup-left">
      <div className="overlay">
        <h1>Join Fluentia</h1>
        <p>Start Your Language Journey Today</p>
      </div>
    </div>

    <div className="login-right">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

      
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

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

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn-primary">
          Sign Up
        </button>


        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  </div>
);

}

export default Signup;