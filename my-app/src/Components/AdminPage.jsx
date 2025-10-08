// src/Components/AdminPage.jsx
import React from "react";
import "./AdminPage.css";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/admin-login");
  };

  return (
    <div className="dash">
      {/* Top bar */}
      <div className="top-bar">
        <div className="admin-info">
          <h2>Hello, Admin </h2>
          <p>
            {new Date().toLocaleDateString()} |{" "}
            {new Date().toLocaleTimeString()}
          </p>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Dashboard Title */}
      <h1>Admin Dashboard</h1>

      {/* Quick Stats */}
      <div className="stats-section">
        <div className="stat-card">
          <h3>Doctors</h3>
          <p>45</p>
        </div>
        <div className="stat-card">
          <h3>Patients</h3>
          <p>245</p>
        </div>
        <div className="stat-card">
          <h3>Appointments Today</h3>
          <p>18</p>
        </div>
      </div>

      {/* Main Management Sections */}
      <div className="inner-dash">
        <div className="doc" onClick={() => alert("Go to Doctors Management")}>
          <h2>Doctors</h2>
          <p>Manage doctor profiles and availability.</p>
        </div>
        <div className="pat" onClick={() => alert("Go to Patients Management")}>
          <h2>Patients</h2>
          <p>View and manage patient records.</p>
        </div>
        <div
          className="appo"
          onClick={() => alert("Go to Appointments Management")}
        >
          <h2>Appointments</h2>
          <p>Manage appointments and schedules.</p>
        </div>
      </div>

      {/* Notifications */}
      <div className="notifications">
        <h2>Recent Notifications</h2>
      </div>
    </div>
  );
}

export default AdminPage;
