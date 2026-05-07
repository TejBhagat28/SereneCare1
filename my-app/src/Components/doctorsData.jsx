import d1 from "../assets/d1.png";
import d2 from "../assets/d2.png";
import d3 from "../assets/d3.png";
import d4 from "../assets/d4.png";
import d5 from "../assets/d5.png";
import d6 from "../assets/d6.png";
import d7 from "../assets/d7.png";
import d8 from "../assets/d8.png";
import d9 from "../assets/d9.png";
import d10 from "../assets/d10.png";
import d11 from "../assets/d11.png";
import d12 from "../assets/d12.png";
import d13 from "../assets/d13.png";
import d14 from "../assets/d14.png";
import d15 from "../assets/d15.png";
import d16 from "../assets/d16.png";
import d17 from "../assets/d17.png";
import d18 from "../assets/d18.png";
import d19 from "../assets/d19.png";
import d20 from "../assets/d20.png";
import d21 from "../assets/d21.png";
import d22 from "../assets/d22.png";
import d23 from "../assets/d23.png";
import d24 from "../assets/d24.png";
import d25 from "../assets/d25.png";
import d26 from "../assets/d26.png";
import d27 from "../assets/d27.png";
import d28 from "../assets/d28.png";
import d29 from "../assets/d29.png";
import d30 from "../assets/d30.png";
import d31 from "../assets/d31.png";
import d32 from "../assets/d32.png";
import d33 from "../assets/d33.png";
import d34 from "../assets/d34.png";
import d35 from "../assets/d35.png";
import d36 from "../assets/d36.png";
import d37 from "../assets/d37.png";
import d38 from "../assets/d38.png";
import d39 from "../assets/d39.png";
import d40 from "../assets/d40.png";
import d41 from "../assets/d41.png";
import d42 from "../assets/d42.png";
import d43 from "../assets/d43.png";
import d44 from "../assets/d44.png";
import d45 from "../assets/d45.png";


const generateRandomSchedule = (availability) => {
  const schedule = {};
  const start = new Date("2025-10-06");
  const end = new Date("2025-10-19");
  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:30 AM",
    "01:00 PM", "02:30 PM", "04:00 PM" , "05:30 PM" , "07:00 PM","08:00 PM"
  ];

  const getDayName = (date) =>
    date.toLocaleDateString("en-US", { weekday: "short" });

  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const day = getDayName(d);
    const dateStr = d.toISOString().split("T")[0];

    // Respect availability
    if (availability.includes(day)) {
      // Random 3–4 slots per day
      const shuffled = [...timeSlots].sort(() => 0.5 - Math.random());
      schedule[dateStr] = shuffled.slice(0, Math.floor(Math.random() * 2) + 3);
    }
  }
  return schedule;
};

const doctorsData = [
  {
    id: 1,
    name: "Dr. Sneha Iyer",
    specialty: "Neurology",
    experience: 10,
    rating: 4.7,
    image: d1,
    qualification: "MBBS, DM Neurology",
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    schedule: generateRandomSchedule(["Mon", "Tue", "Wed", "Thu", "Fri"]),
    tagline: "Bringing clarity to complex neurological care."

  },
  {
    id: 2,
    name: "Dr. Shreya Gupta",
    specialty: "Gynecology",
    experience: 13,
    rating: 4.8,
    image: d2,
    qualification: "MBBS, MD Gynecology",
    availability: ["Mon", "Wed", "Fri", "Sat"],
    schedule: generateRandomSchedule(["Mon", "Wed", "Fri", "Sat"]),
    tagline : "Empowering women’s health with compassion.",
  },
  {
    id: 3,
    name: "Dr. Varun Mishra",
    specialty: "Dermatology",
    experience: 9,
    rating: 4.5,
    image: d3,
    qualification: "MBBS, MD Dermatology",
    availability: ["Tue", "Thu", "Sat"],
    schedule: generateRandomSchedule(["Tue", "Thu", "Sat"]),
    tagline : "Your skin deserves expert care."
  },
  {
    id: 4,
    name: "Dr. Parag Kulkarni",
    specialty: "Urology",
    experience: 8,
    rating: 4.4,   
    image: d4,
    qualification: "MBBS, MCh Urology",
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    schedule: generateRandomSchedule(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]), 
    tagline : "Expert care for urinary and reproductive health",
  },
  {
    id: 5,
    name: "Dr. Sanjay Mehta",
    specialty: "Orthopedics",
    experience: 14,
    rating: 4.8,
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    schedule: generateRandomSchedule(["Mon", "Tue", "Wed", "Thu", "Fri"]),    
    image: d5,
    qualification: "MBBS, MS Orthopedics",
    tagline : "Restoring movement, rebuilding lives",
  },
  {
    id: 6,
    name: "Dr. Sunita Chawla",
    specialty: "Nephrology",
    experience: 9,
    rating: 4.5,
    availability: ["Mon", "Wed", "Fri", "Sat"],
    schedule: generateRandomSchedule(["Mon", "Wed", "Fri", "Sat"]),
    image: d6,
    qualification: "MBBS, DM Nephrology",
    tagline : "Dedicated to preserving renal health.",
  },
  {
    id: 7,
    name: "Dr. Kavita Desai",
    specialty: "Cardiology",
    experience: 15,
    rating: 4.9,
    image: d7,
    qualification: "MBBS, MD Cardiology",
    availability: ["Tue", "Thu", "Sat"],
    schedule: generateRandomSchedule(["Tue", "Thu", "Sat"]),
    tagline :"Caring for your heart, every beat of the way."
  },
  {
    id: 8,
    name: "Dr. Rohit Suresh",
    specialty: "Psychiatry",
    experience: 8,
    rating: 4.5,
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    schedule: generateRandomSchedule(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]),
    image: d8,
    qualification: "MBBS, MD Psychiatry",
    tagline :"Mind matters — we’re here to listen.",
  },
  {
    id: 9,
    name: "Dr. Rohit Malhotra",
    specialty: "Dermatology",
    experience: 10,
    rating: 4.7,
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    schedule: generateRandomSchedule(["Mon", "Tue", "Wed", "Thu", "Fri"]),
    image: d9,
    qualification: "MBBS, MD Dermatology",
    tagline : "Bringing out the best in your skin."
  },
  {
    id: 10,
    name: "Dr. Prakash Malviya",
    specialty: "Dentistry",
    experience: 7,
    rating: 4.4,
    availability: ["Mon", "Wed", "Fri", "Sat"],
    schedule: generateRandomSchedule(["Mon", "Wed", "Fri", "Sat"]),
    image: d10,
    qualification: "BDS, MDS Dentistry",
    tagline : "Your smile, our passion.",
  },
  {
    id: 11,
    name: "Dr. Shantanu Mukherjee",
    specialty: "General Surgery",
    experience: 15,
    rating: 4.9,
    availability: ["Tue", "Thu", "Sat"],
    schedule: generateRandomSchedule(["Tue", "Thu", "Sat"]),
    image: d11,
    qualification: "MBBS, MS General Surgery",
    tagline : "Expert hands for critical care.",
  },
  {
    id: 12,
    name: "Dr. Neha Kulkarni",
    specialty: "Pediatrics",
    experience: 8,
    rating: 4.5,
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    schedule: generateRandomSchedule(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]),
    image: d12,
    qualification: "MBBS, MD Pediatrics",
    tagline : "Where every child matters.",
  },
  {
    id: 13,
    name: "Dr. Jyoti Menon",
    specialty: "Psychiatry",
    experience: 10,
    rating: 4.6,
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    schedule: generateRandomSchedule(["Mon", "Tue", "Wed", "Thu", "Fri"]),
    image: d13,
    qualification: "MBBS, MD Psychiatry",
    tagline : "Healing minds, restoring balance.",
  },
  {
    id: 14,
    name: "Dr. Mohan Yadav",
    specialty: "Nephrology",
    experience: 8,
    rating: 4.4,
    availability: ["Mon", "Wed", "Fri", "Sat"],
    schedule: generateRandomSchedule(["Mon", "Wed", "Fri", "Sat"]),
    image: d14,
    qualification: "MBBS, DM Nephrology",
    tagline : "Healthy kidneys, healthy living.",
  },
  {
    id: 15,
    name: "Dr. Meera Bhandari",
    specialty: "Neurology",
    experience: 7,
    rating: 4.4,
    availability: ["Tue", "Thu", "Sat"],
    schedule: generateRandomSchedule(["Tue", "Thu", "Sat"]),
    image: d15,
    qualification: "MBBS, DM Neurology",
    tagline : "Rewiring hope through expert neurology.",
  },
  {
    id: 16,
    name: "Dr. Naveen Joshi",
    specialty: "Gynecology",
    experience: 9,
    rating: 4.5,
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    schedule: generateRandomSchedule(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]),
    image: d16,
    qualification: "MBBS, MD Gynecology",
    tagline : "Supporting women through all stages of life.",
  },
  {
    id: 17,
    name: "Dr. Harish Khanna",
    specialty: "Dentistry",
    experience: 10,
    rating: 4.6,
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    schedule: generateRandomSchedule(["Mon", "Tue", "Wed", "Thu", "Fri"]),
    image: d17,
    qualification: "BDS, MDS Dentistry",
    tagline : "Healthy teeth, confident you."
  },
  {
    id: 18,
    name: "Dr. Rajeev Nair",
    specialty: "Cardiology",
    experience: 11,
    rating: 4.5,
    availability: ["Mon", "Wed", "Fri", "Sat"],
    schedule: generateRandomSchedule(["Mon", "Wed", "Fri", "Sat"]),
    image: d18,
    qualification: "MBBS, MD Cardiology",
    tagline : "Stronger hearts, healthier lives."
  },
  {
    id: 19,
    name: "Dr. Sameer Puri",
    specialty: "Gastroenterology",
    experience: 9,
    rating: 4.5,
    availability: ["Tue", "Thu", "Sat"],
    schedule: generateRandomSchedule(["Tue", "Thu", "Sat"]),
    image: d19,
    qualification: "MBBS, DM Gastroenterology",
    tagline : "Your wellness begins from within.",
  },
  {
    id: 20,
    name: "Dr. Ajay Saxena",
    specialty: "Allergy & Immunology",
    experience: 8,
    rating: 4.5,
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    schedule: generateRandomSchedule(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]),
    image: d20,
    qualification: "MBBS, MD Allergy & Immunology",
    tagline : "Strengthening your body’s natural defense."
  },
  {
    id: 21,
    name: "Dr. Rakesh Saini",
    specialty: "Gastroenterology",
    experience: 14,
    rating: 4.8,
    availability: ["Tue", "Thu", "Sat"],
    schedule: generateRandomSchedule(["Tue", "Thu", "Sat"]),
    image: d21,
    qualification: "MBBS, DM Gastroenterology",
    tagline : "Where comfort meets digestive expertise."
  },
  {
    id: 22,
    name: "Dr. Ramesh Patel",
    specialty: "Neurology",
    experience: 8,
    rating: 4.5,
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    schedule: generateRandomSchedule(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]),
    image: d22,
    qualification: "MBBS, DM Neurology",
    tagline : "Your brain’s wellbeing, our focused mission.",
  },
  {
    id: 23,
    name: "Dr. Pankaj Tiwari",
    specialty: "Orthopedics",
    experience: 11,
    rating: 4.6,
    availability: ["Tue", "Thu", "Sat"],
    schedule: generateRandomSchedule(["Tue", "Thu", "Sat"]),
    image: d23,
    qualification: "MBBS, MS Orthopedics",
    tagline : "Strong bones. Stronger you.",
  },
  {
    id: 24,
    name: "Dr. Ritu Sinha",
    specialty: "Dentistry",
    experience: 8,
    rating: 4.5,
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    schedule: generateRandomSchedule(["Mon", "Tue", "Wed", "Thu", "Fri"]),
    image: d24,
    qualification: "BDS, MDS Dentistry",
    tagline : "Where every visit ends with a smile."
  },
  {
    id: 25,
    name: "Dr. Priya Menon",
    specialty: "Pediatrics",
    experience: 10,
    rating: 4.7,
     availability: ["Mon", "Wed", "Fri", "Sat"],
    schedule: generateRandomSchedule(["Mon", "Wed", "Fri", "Sat"]),
    image: d25,
    qualification: "MBBS, MD Pediatrics",
    tagline : "Gentle hands, kind hearts, brighter tomorrows."
  },
  {
    id: 26,
    name: "Dr. Ayesha Sharma",
    specialty: "Cardiology",
    experience: 12,
    rating: 4.8,
     availability: ["Mon", "Wed", "Fri", "Sat"],
    schedule: generateRandomSchedule(["Mon", "Wed", "Fri", "Sat"]),
    image: d26,
    qualification: "MBBS, MD Cardiology",
    tagline : "Your heart health is our top priority.",
  },
  {
    id: 27,
    name: "Dr. Isha Bansal",
    specialty: "Gynecology",
    experience: 11,
    rating: 4.7,
    availability: ["Tue", "Thu", "Sat"],
    schedule: generateRandomSchedule(["Tue", "Thu", "Sat"]),
    image: d27,
    qualification: "MBBS, MD Gynecology",
    tagline : "Trusted care for every woman’s journey",
  },
  {
    id: 28,
    name: "Dr. Rohan Chatterjee",
    specialty: "Allergy & Immunology",
    experience: 7,
    rating: 4.4,
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    schedule: generateRandomSchedule(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]),
    image: d28,
    qualification: "MBBS, MD Allergy & Immunology",
    tagline : "Empowering immune health for a better life.",
  },
  {
    id: 29,
    name: "Dr. Anita Reddy",
    specialty: "Orthopedics",
    experience: 9,
    rating: 4.5,
    availability: ["Tue", "Thu", "Sat"],
    schedule: generateRandomSchedule(["Tue", "Thu", "Sat"]),
    image: d29,
    qualification: "MBBS, MS Orthopedics",
    tagline : "Precision care for your joints and bones.",
  },
  {
    id: 30,
    name: "Dr. Anita Mehra",
    specialty: "Dentistry",
    experience: 12,
    rating: 4.8,
     availability: ["Mon", "Wed", "Fri", "Sat"],
    schedule: generateRandomSchedule(["Mon", "Wed", "Fri", "Sat"]),
    image: d30,
    qualification: "BDS, MDS Dentistry",
    tagline : "Healthy teeth, confident you.",
  },
  {
    id: 31,
    name: "Dr. Suman Rawat",
    specialty: "Urology",
    experience: 9,
    rating: 4.5,
     availability: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    schedule: generateRandomSchedule(["Mon", "Tue", "Wed", "Thu", "Fri"]),
    image: d31,
    qualification: "MBBS, MCh Urology",
    tagline : "Personalized solutions for delicate concerns.",
  },
  {
    id: 32,
    name: "Dr. Karan Bhatt",
    specialty: "Nephrology",
    experience: 11,
    rating: 4.7,
     availability: ["Mon", "Wed", "Fri", "Sat"],
    schedule: generateRandomSchedule(["Mon", "Wed", "Fri", "Sat"]),
    image: d32,
    qualification: "MBBS, DM Nephrology",
    tagline : "Caring for your kidneys, caring for your life.",
  },
  {
    id: 33,
    name: "Dr. Manish Agarwal",
    specialty: "Pediatrics",
    experience: 7,
    rating: 4.4,
    availability: ["Tue", "Thu", "Sat"],
    schedule: generateRandomSchedule(["Tue", "Thu", "Sat"]),
    image: d33,
    qualification: "MBBS, MD Pediatrics",
    tagline: "Nurturing healthy futures, one child at a time."
  },
  {
    id: 34,
    name: "Dr. Vandana Joshi",
    specialty: "Gastroenterology",
    experience: 7,
    rating: 4.4,
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    schedule: generateRandomSchedule(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]),
    image: d34,
    qualification: "MBBS, DM Gastroenterology",
    tagline : "Healthy digestion, healthy living",
  },
  {
    id: 35,
    name: "Dr. Abhishek Verma",
    specialty: "Psychiatry",
    experience: 12,
    rating: 4.8,
    availability: ["Tue", "Thu", "Sat"],
    schedule: generateRandomSchedule(["Tue", "Thu", "Sat"]),
    image: d35,
    qualification: "MBBS, MD Psychiatry",
    tagline : "Guiding you toward emotional wellbeing.",
  },
  {
    id: 36,
    name: "Dr. Shruti Sen",
    specialty: "Dermatology",
    experience: 12,
    rating: 4.8,
     availability: ["Mon", "Wed", "Fri", "Sat"],
    schedule: generateRandomSchedule(["Mon", "Wed", "Fri", "Sat"]),
    image: d36,
    qualification: "MBBS, MD Dermatology",
    tagline : "Healthy skin, confident you."
  },
  {
    id: 37,
    name: "Dr. Anjali Kaul",
    specialty: "Gastroenterology",
    experience: 11,
    rating: 4.6,
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    schedule: generateRandomSchedule(["Mon", "Tue", "Wed", "Thu", "Fri"]),
    image: d37,
    qualification: "MBBS, DM Gastroenterology",
    tagline : "Digestive health starts with expert care.",
  },
  {
    id: 38,
    name: "Dr. Shalini Verma",
    specialty: "Orthopedics",
    experience: 8,
    rating: 4.4,
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    schedule: generateRandomSchedule(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]),
    image: d38,
    qualification: "MBBS, MS Orthopedics",
    tagline : "Helping you stand tall and move freely again.",

  },
  {
    id: 39,
    name: "Dr. Harpreet Singh",
    specialty: "Urology",
    experience: 12,
    rating: 4.8,
    availability: ["Tue", "Thu", "Sat"],
    schedule: generateRandomSchedule(["Tue", "Thu", "Sat"]),
    image: d39,
    qualification: "MBBS, MCh Urology",
    tagline : "Precision care for life’s most vital systems."
  },
  {
    id: 40,
    name: "Dr. Pooja Saxena",
    specialty: "Gynecology",
    experience: 7,
    rating: 4.4,
     availability: ["Mon", "Wed", "Fri", "Sat"],
    schedule: generateRandomSchedule(["Mon", "Wed", "Fri", "Sat"]),
    image: d40,
    qualification: "MBBS, MD Gynecology",
    tagline : "Caring for women, every step of the way.",
  },
  {
    id: 41,
    name: "Dr. Arvind Sethi",
    specialty: "Neurology",
    experience: 13,
    rating: 4.8,
     availability: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    schedule: generateRandomSchedule(["Mon", "Tue", "Wed", "Thu", "Fri"]),
    image: d41,
    qualification: "MBBS, DM Neurology",
    tagline : "Dedicated to the science of the mind and nervous system.",
  },
  {
    id: 42,
    name: "Dr. Nisha Kapoor",
    specialty: "Dermatology",
    experience: 6,
    rating: 4.3,
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    schedule: generateRandomSchedule(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]),
    image: d42,
    qualification: "MBBS, MD Dermatology",
    tagline : "Healthy skin, confident you.",
  },
  {
    id: 43,
    name: "Dr. Priyanka Das",
    specialty: "Allergy & Immunology",
    experience: 10,
    rating: 4.6,
    availability: ["Tue", "Thu", "Sat"],
    schedule: generateRandomSchedule(["Tue", "Thu", "Sat"]),
    image: d43,
    qualification: "MBBS, MD Allergy & Immunology",
    tagline : "Protecting you from within.",
  },
  {
    id: 44,
    name: "Dr. Mrinal Agnihotri",
    specialty: "Cardiology",
    experience: 9,
    rating: 4.6,
     availability: ["Mon", "Wed", "Fri", "Sat"],
    schedule: generateRandomSchedule(["Mon", "Wed", "Fri", "Sat"]),
    image: d44,
    qualification: "MBBS, MD Cardiology",
    tagline : "Where compassion meets cardiac excellence.",
  },
  {
    id: 45,
    name: "Dr. Ashok Gupta",
    specialty: "Pediatrics",
    experience: 6,
    rating: 4.3,
     availability: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    schedule: generateRandomSchedule(["Mon", "Tue", "Wed", "Thu", "Fri"]),
    image: d45,
    qualification: "MBBS, MD Pediatrics",
    tagline: "Caring for little hearts and big smiles.",
  },
];

export default doctorsData;
