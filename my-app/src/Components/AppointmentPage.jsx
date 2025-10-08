import React, { useState } from "react";
import { useParams } from "react-router-dom";
import doctorsData from "./doctorsData";
import "./AppointmentPage.css";

function AppointmentPage() {
  const { id } = useParams();
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

  // Show only available times for the selected date
  const availableTimes = formData.date
    ? selectedDoctor?.schedule[formData.date] || []
    : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      doctor: selectedDoctor.name,
      date: "",
      time: "",
      reason: "",
    });
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
      </form>
    </div>
  );
}

export default AppointmentPage;
