import React from "react";
import doctorsData from "./doctorsData";
import "./ViewSchedulePage.css";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Helper to get available days for each doctor
function getAvailableDays(doc) {
  if (doc.availability && typeof doc.availability === "string") {
    if (doc.availability.includes("-")) {
      const [start, end] = doc.availability.split("-");
      const startIndex = days.indexOf(start);
      const endIndex = days.indexOf(end);
      return days.slice(startIndex, endIndex + 1);
    } else {
      return doc.availability.split(",").map((d) => d.trim());
    }
  } else if (doc.schedule && typeof doc.schedule === "object") {
    const weekdays = Object.keys(doc.schedule).map((dateStr) => {
      const date = new Date(dateStr);
      const dayIndex = date.getDay() === 0 ? 6 : date.getDay() - 1; // JS Sun=0
      return days[dayIndex];
    });
    return [...new Set(weekdays)]; // remove duplicates
  }
  return [];
}

// Helper to get time slots for a weekday
function getTimeSlots(doc, weekday) {
  if (doc.schedule && typeof doc.schedule === "object") {
    const times = [];
    Object.entries(doc.schedule).forEach(([dateStr, slots]) => {
      const date = new Date(dateStr);
      const dayIndex = date.getDay() === 0 ? 6 : date.getDay() - 1;
      if (days[dayIndex] === weekday) {
        times.push(...slots);
      }
    });
    return times;
  }
  return [];
}

function ViewSchedulePage() {
  return (
    <div className="page-container">
      <h1>📅 Doctors' Weekly Schedule</h1>

      <table className="schedule-table">
        <thead>
          <tr>
            <th>Doctor</th>
            {days.map((day, i) => (
              <th key={i}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {doctorsData.map((doc) => {
            const availableDays = getAvailableDays(doc);

            return (
              <tr key={doc.id}>
                <td>{doc.name}</td>
                {days.map((day, i) => {
                  const isAvailable = availableDays.includes(day);
                  const timeSlots = getTimeSlots(doc, day);

                  return (
                    <td
                      key={i}
                      className={isAvailable ? "available" : "not-available"}
                      title={timeSlots.length ? timeSlots.join(", ") : ""}
                    >
                      {isAvailable ? "✅" : "❌"}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewSchedulePage;
