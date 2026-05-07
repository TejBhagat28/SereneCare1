// src/Components/AppointmentsPage.jsx
import React, { useEffect, useState } from "react";
import "./AppointmentsPage.css";
import { useNavigate } from "react-router-dom";

function AppointmentsPage() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const BASE_URL = "https://serene-care-backend.onrender.com";
  useEffect(() => {
    fetch(`${BASE_URL}/api/appointments`)
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching appointments:", err);
        setError("Failed to fetch appointments.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="appointments-page">
      <div className="top-bar">
        <h2>All Appointments 📋</h2>
        <button className="back-btn" onClick={() => navigate("/admin-page")}>
          Back to Dashboard
        </button>
      </div>

      {loading && <p>Loading appointments...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && appointments.length === 0 && (
        <p>No appointments found.</p>
      )}

      <div className="appointments-list">
        {appointments.map((appt) => (
          <div key={appt._id} className="appointment-card">
            <h3>{appt.name}</h3>
            <p><strong>Doctor:</strong> {appt.doctor}</p>
            <p><strong>Date:</strong> {appt.date}</p>
            <p><strong>Time:</strong> {appt.time}</p>
            <p><strong>Reason:</strong> {appt.reason}</p>
            <p><strong>Email:</strong> {appt.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppointmentsPage;
