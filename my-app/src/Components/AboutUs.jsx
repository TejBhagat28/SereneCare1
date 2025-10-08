import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About <span>SereneCare+</span></h1>
        <p>
          Empowering healthcare with compassion, technology, and trust.
        </p>
      </div>

      <div className="about-content">
        <section className="about-section fade-in">
          <h2>Who We Are</h2>
          <p>
            <strong>SereneCare+</strong> is a digital healthcare platform that
            bridges the gap between patients and doctors. We make healthcare
            access simple, fast, and reliable — connecting you to verified
            specialists anytime, anywhere.
          </p>
        </section>

        <section className="about-section fade-in">
          <h2>Our Mission</h2>
          <p>
            To redefine patient care by bringing seamless appointment booking,
            transparent healthcare services, and trusted medical professionals
            onto one platform.
          </p>
        </section>

        <section className="about-section fade-in">
          <h2>Our Core Values</h2>
          <div className="about-values">
            <div className="value-card">
              <h3>💙 Compassion</h3>
              <p>We care deeply about every patient’s journey and well-being.</p>
            </div>
            <div className="value-card">
              <h3>⚙️ Innovation</h3>
              <p>We use technology to simplify and enhance the healthcare experience.</p>
            </div>
            <div className="value-card">
              <h3>🛡️ Trust</h3>
              <p>Your data and health are secure with our verified healthcare partners.</p>
            </div>
          </div>
        </section>

        <section className="about-section fade-in">
          <h2>Why Choose SereneCare+</h2>
          <ul className="about-list">
            <li>✅ Easy and instant appointment booking</li>
            <li>✅ Verified and experienced doctors</li>
            <li>✅ Secure and private consultations</li>
            <li>✅ 24/7 access to trusted healthcare information</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
