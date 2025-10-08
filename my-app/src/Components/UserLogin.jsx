// src/Components/UserLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserLogin.css";
import userImg from "../assets/img4.png";

function UserLogin() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignIn) {
      if (
        formData.email === "patient@example.com" &&
        formData.password === "1234"
      ) {
        console.log("Login successful!");
        navigate("/main-page");
      } else {
        alert("Invalid email or password");
      }
    } else {
      console.log("Signing up with:", formData);
      alert("Sign-up successful! Please sign in.");
      setIsSignIn(true);
    }
  };

  // 🔙 Back button handler
  const handleBack = () => {
    navigate("/first-page");
  };

  return (
    <div className="user-login-container fade-in">
      <div className="user-login-left">
        <img src={userImg} alt="User portal" className="user-login-image" />
      </div>

      <div className="user-login-right">
        <div className="user-login-box">
          <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
          <form onSubmit={handleSubmit}>
            {!isSignIn && (
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">{isSignIn ? "Sign In" : "Sign Up"}</button>
            {/* 🔙 Back button */}
            <button className="back-btn" onClick={handleBack}>
              Back
            </button>
          </form>

          <p onClick={toggleForm} className="toggle-text">
            {isSignIn
              ? "Don't have an account? Sign Up"
              : "Already have an account? Sign In"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
