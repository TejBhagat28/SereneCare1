import React from "react";
import { useNavigate } from "react-router-dom";
import "./DoctorCard.css";

function DoctorCard({ doctor }) {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate(`/appointment/${doctor.id}`);
  };

  return (
    <div className="doctor-card">
      <img src={doctor.image} alt={doctor.name} />
      <h3>{doctor.name}</h3>
      <p>
        <strong>{doctor.specialty}</strong>
      </p>
      <p>{doctor.qualification}</p>
      <p>Experience: {doctor.experience} years</p>
      <p>Rating: ⭐ {doctor.rating}</p>
      <p>Available: {doctor.availability}</p>
      <button onClick={handleBook}>Book Now</button>
    </div>
  );
}

export default DoctorCard;
