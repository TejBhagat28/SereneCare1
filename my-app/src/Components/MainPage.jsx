// import React from "react";
// import "./MainPage.css";
// import { Link } from "react-router-dom";

// function MainPage() {
//   return (
//     <div className="main-page">
//       <nav className="navbar">
//         <div className="logo">🏥 SereneCare+</div>
//         <ul className="nav-links">
//           <li>
//             <Link
//               to="/main-page"
//               style={{ color: "white", textDecoration: "none" }}
//             >
//                 Home            
//             </Link>
            
//             </li>
//           <li>
//             <Link to="/doctors"
//               style={{ color: "white", textDecoration: "none" }}
//             >
//               Book Appointment
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About Us</Link>
  
//             </li>
//           <li>
//             <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       <header className="hero">
//         <h1>Your Health, Our Priority</h1>
//         <p>
//           Book appointments easily and get expert care from our trusted doctors.
//         </p>
//         <button className="cta-btn">Book Now</button>
//       </header>

//       <section className="services">
//         <div className="card">
//           <h2>🩺 Book Appointment</h2>
//           <p>Schedule a meeting with a doctor of your choice.</p>
//         </div>
//         <div className="card">
//           <h2>👨‍⚕️ Find Doctors</h2>
//           <p>View profiles and specialties of our doctors.</p>
//         </div>
//         <div className="card">
//           <h2>📅 View Schedule</h2>
//           <p>Check available time slots for consultations.</p>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default MainPage;
import React from "react";
import "./MainPage.css";
import { Link, useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="main-page">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">🏥 SereneCare+</div>
        <ul className="nav-links">
          <li>
            <Link to="/main-page" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/doctors" className="nav-link">
              Book Appointment
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <header className="hero">
        <h1>Your Health, Our Priority</h1>
        <p>
          Book appointments easily and get expert care from our trusted doctors.
        </p>
        <button className="cta-btn" onClick={() => navigate("/doctors")}>
          Book Now
        </button>
      </header>

      {/* SERVICES SECTION */}
      <section className="services">
        <div className="card" onClick={() => navigate("/doctors")}>
          <h2>🩺 Book Appointment</h2>
          <p>Schedule a meeting with a doctor of your choice.</p>
        </div>

        <div className="card" onClick={() => navigate("/our-doctors")}>
          <h2>👨‍⚕️ Our Doctors</h2>
          <p>View profiles and specialties of our doctors.</p>
        </div>

        <div className="card" onClick={() => navigate("/view-schedule")}>
          <h2>📅 View Schedule</h2>
          <p>Check available time slots for consultations.</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>💬 What Our Patients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>
              “Booking an appointment has never been this easy! I got connected
              to a great doctor in minutes.”
            </p>
            <h4>- Riya Sharma</h4>
          </div>
          <div className="testimonial">
            <p>
              “SereneCare+ helped me find the right specialist without any
              hassle. Highly recommend!”
            </p>
            <h4>- Ankit Verma</h4>
          </div>
          <div className="testimonial">
            <p>
              “The platform is super clean and easy to use. Excellent service
              and caring doctors!”
            </p>
            <h4>- Sneha Patel</h4>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 SereneCare+ | All Rights Reserved</p>
        <p>
          Designed with ❤️ by <strong>Tej</strong>
        </p>
      </footer>
    </div>
  );
}

export default MainPage;
