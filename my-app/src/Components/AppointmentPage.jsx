import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // <-- import useNavigate
import doctorsData from "./doctorsData";
import "./AppointmentPage.css";

function AppointmentPage() {
  const { id } = useParams();
  const navigate = useNavigate(); // <-- initialize navigate
  const selectedDoctor = doctorsData.find((doc) => doc.id === Number(id));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    doctor: selectedDoctor ? selectedDoctor.name : "",
    date: "",
    time: "",
    reason: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const availableTimes = formData.date
    ? selectedDoctor?.schedule[formData.date] || []
    : [];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          doctor: selectedDoctor.name,
          date: "",
          time: "",
          reason: "",
        });
        console.log("Appointment saved with ID:", data.id);
      } else {
        alert(data.message || "Failed to book appointment.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Could not connect to server. Try again later.");
    }
  };

  return (
    <div className="appointment-page">
      <h1>Book Your Appointment</h1>

      {submitted && (
        <p className="success-msg">✅ Appointment booked successfully!</p>
      )}

      <form className="appointment-form" onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Doctor:</label>
        <input type="text" value={selectedDoctor.name} disabled />

        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label>Time:</label>
        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Time --</option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
          {formData.date && availableTimes.length === 0 && (
            <option disabled>No slots available</option>
          )}
        </select>

        <label>Reason for Appointment:</label>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          placeholder="Describe your symptoms or reason"
          required
        ></textarea>

        <button
          type="submit"
          disabled={!formData.date || availableTimes.length === 0}
        >
          Confirm Booking
        </button>
         {/* Back Button */}
      <button
        className="back-button"
        onClick={() => navigate("/main-page")}
      >
         Back 
      </button>
      </form>
    </div>
  );
}

export default AppointmentPage;
