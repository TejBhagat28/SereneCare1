import React, { useState } from "react";
import DoctorCard from "./DoctorCard";
import "./Doctors.css";
import doctorsData from "./doctorsData";

function Doctors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");

  const filteredDoctors = doctorsData.filter((doc) => {
    return (
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (specialtyFilter ? doc.specialty === specialtyFilter : true) &&
      (experienceFilter ? doc.experience >= parseInt(experienceFilter) : true)
    );
  });

  return (
    <div className="doctors-page">
      <h1>Our Doctors</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name or specialty..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Filters */}
      <div className="filters">
        <select onChange={(e) => setSpecialtyFilter(e.target.value)}>
          <option value="">All Specialties</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Neurology">Neurology</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="Dermatology">Dermatology</option>
          <option value="Allergy & Immunology">Allergy & Immunology</option>
          <option value="Nephrology">Nephrology</option>
          <option value="Dentistry">Dentist</option>
          <option value="Gynecology">Gynecology</option>
          <option value="Psychiatry">Psychiatry</option>
          <option value="Gastroenterology">Gastroenterology</option>
          <option value="Urology">Urology</option>
          <option value="General Surgery">General Surgery</option>
        </select>

        <select onChange={(e) => setExperienceFilter(e.target.value)}>
          <option value="">All Experience Levels</option>
          <option value="5">5+ years</option>
          <option value="10">10+ years</option>
        </select>
      </div>

      {/* Doctors List */}
      <div className="doctor-list">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc) => <DoctorCard key={doc.id} doctor={doc} />)
        ) : (
          <p>No doctors found.</p>
        )}
      </div>
    </div>
  );
}

export default Doctors;
