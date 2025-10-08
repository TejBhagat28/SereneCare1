// src/Components/AdminLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import adminImg from "../assets/img2.jpg";
import "./AdminLogin.css";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "123") {
      navigate("/admin-page"); // ✅ goes to AdminPage
    } else {
      alert("Invalid credentials");
    }
  };

  const handleBack = () => {
    navigate("/first-page"); // ✅ navigate to FirstPage.jsx
  };

  return (
    <div className="admin-container">
      <div className="admin-left">
        <img src={adminImg} alt="Admin Portal" className="admin-image" />
      </div>

      <div className="admin-right">
        <h2 className="admin-title">Admin Login</h2>
        <form className="admin-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          {/* 🔙 Back Button */}
          <button className="back-btn" onClick={handleBack}>
            Back
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
