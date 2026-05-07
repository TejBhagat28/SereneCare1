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

  const toggleForm = () => setIsSignIn(!isSignIn);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Backend endpoint
    const BASE_URL = "https://serene-care-backend.onrender.com";
    const url = isSignIn
  ? `${BASE_URL}/api/login`
  : `${BASE_URL}/api/register`;

    // Prepare data to match backend field names
    const payload = isSignIn
      ? { email: formData.email, password: formData.password }
      : { name: formData.username, email: formData.email, password: formData.password };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        sessionStorage.setItem("user", JSON.stringify(data.user));
        console.log("✅ User saved to sessionStorage:", data.user);
        
        if (isSignIn) {
          console.log("✅ Login successful:", data);
          setFormData({ username: "", email: "", password: "" });
          navigate("/main-page"); // Redirect after login
        } else {
          console.log("✅ Signup successful:", data);
          setIsSignIn(true); // Switch to Sign In view
          setFormData({ username: "", email: "", password: "" });
        }
      } else {
        alert(data.message || data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("❌ Error:", err);
      alert("Server error. Please check your connection.");
    }
  };

  // 🔙 Back button handler
  const handleBack = (e) => {
    e.preventDefault();
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
            <button type="button" className="back-btn" onClick={handleBack}>
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
