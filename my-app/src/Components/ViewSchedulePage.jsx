import React from "react";
import "./ViewSchedulePage.css";

const schedule = [
  { doctor: "Dr. Ananya Sharma", available: ["Mon", "Wed", "Fri"] },
  { doctor: "Dr. Rahul Mehta", available: ["Tue", "Thu", "Sat"] },
  { doctor: "Dr. Neha Kapoor", available: ["Mon", "Thu", "Sun"] },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

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
          {schedule.map((row, i) => (
            <tr key={i}>
              <td>{row.doctor}</td>
              {days.map((day, j) => (
                <td
                  key={j}
                  className={
                    row.available.includes(day) ? "available" : "not-available"
                  }
                >
                  {row.available.includes(day) ? "✅" : "❌"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewSchedulePage;
