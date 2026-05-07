// src/Components/AdminPage.jsx
import React, { useEffect, useState } from "react";
import "./AdminPage.css";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleLogout = () => {
    navigate("/admin-login");
  };

  const notifications = [
    {
      id: 1,
      title: "New Doctor Added",
      message: "Dr. Arjun Mehta (Cardiologist) joined the hospital team.",
      time: "10:30 AM",
    },
    {
      id: 2,
      title: "Appointment Scheduled",
      message: "Patient Rahul Sharma booked an appointment with Dr. Iyer.",
      time: "09:45 AM",
    },
    {
      id: 3,
      title: "Patient Discharged",
      message: "Patient Priya Nair was discharged successfully.",
      time: "08:15 AM",
    },
    {
      id: 4,
      title: "System Update",
      message: "Database backup completed successfully.",
      time: "07:50 AM",
    },
  ];

  const BASE_URL = "https://serene-care-backend.onrender.com";
  useEffect(() => {
    fetch(`${BASE_URL}/api/appointments`)
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error fetching appointments:", err);
        setError("Failed to fetch appointments.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="dash">
      {/* Top bar */}
      <div className="top-bar">
        <div className="admin-info">
          <h2>Hello, Admin 👋</h2>
          <p>
            {new Date().toLocaleDateString()} | {new Date().toLocaleTimeString()}
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
          <p>{appointments.length}</p>
        </div>
        <div className="stat-card">
          <h3>Appointments Today</h3>
          <p>{appointments.length}</p>
        </div>
      </div>

      {/* Management Section */}
      <div className="inner-dash">
        <div className="doc" onClick={() => navigate("/our-doctors")}>
          <h2>Doctors</h2>
          <p>Manage doctor profiles and availability.</p>
        </div>
        <div className="pat" onClick={() => alert("Go to Patients Management")}>
          <h2>Patients</h2>
          <p>View and manage patient records.</p>
        </div>
        <div className="appo" onClick={() => navigate("/appointments")}>
          <h2>Appointments</h2>
          <p>View and manage all appointments.</p>
        </div>
      </div> {/* ← Close inner-dash properly */}

      {/* Notifications */}
      <div className="notifications">
        <h2>Recent Notifications</h2>
        <ul className="notification-list">
          {notifications.map((note) => (
            <li key={note.id} className="notification-item">
              <div className="dot"></div>
              <div className="notification-content">
                <h4>{note.title}</h4>
                <p>{note.message}</p>
                <span>{note.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminPage;
