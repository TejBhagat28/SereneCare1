// src/utils/scheduleGenerator.js

export function generateSchedule(availability, startDate = "2025-10-06", days = 14) {
  const slots = ["09:00", "09:30", "10:00", "11:00", "11:30", "12:00", "14:00", "15:00", "16:00", "16:30"];
  const schedule = {};
  const start = new Date(startDate);

  const getAllowedDays = (availability) => {
    if (availability.includes("Mon-Sat")) return [1, 2, 3, 4, 5, 6];
    if (availability.includes("Mon-Fri")) return [1, 2, 3, 4, 5];
    if (availability.includes("Tue-Thu")) return [2, 3, 4];
    if (availability.includes("Wed-Sat")) return [3, 4, 5, 6];
    if (availability.includes("Tue-Fri")) return [2, 3, 4, 5];
    return [1, 2, 3, 4, 5];
  };

  const allowedDays = getAllowedDays(availability);

  for (let i = 0; i < days; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    const day = date.getDay();
    if (!allowedDays.includes(day)) continue;

    const numSlots = Math.floor(Math.random() * 2) + 3; // 3–4 slots
    const shuffled = [...slots].sort(() => 0.5 - Math.random());
    schedule[date.toISOString().split("T")[0]] = shuffled.slice(0, numSlots).sort();
  }

  return schedule;
}
