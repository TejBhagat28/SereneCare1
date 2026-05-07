import React from "react";
import doctorsData from "./doctorsData";
import styles from "./OurDoctors.module.css";

const OurDoctors = () => {
  // Group doctors by specialty
  const groupedDoctors = doctorsData.reduce((groups, doctor) => {
    const { specialty } = doctor;
    if (!groups[specialty]) groups[specialty] = [];
    groups[specialty].push(doctor);
    return groups;
  }, {});

  return (
    <div className={styles.doctorsPage}>
      <h1 className={styles.title}>Meet Our Specialists</h1>
      <p className={styles.subtitle}>
        Discover our experienced doctors, categorized by their specialties.
      </p>

      {Object.keys(groupedDoctors).map((specialty) => (
        <div key={specialty} className={styles.specialtySection}>
          <h2 className={styles.specialtyHeading}>{specialty}</h2>

          <div className={styles.cardsGrid}>
            {groupedDoctors[specialty].map((doc) => (
              <div key={doc.id} className={styles.card}>
                <div className={styles.imageContainer}>
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className={styles.image}
                  />
                </div>
                <div className={styles.details}>
                  <h3>{doc.name}</h3>
                  <p className={styles.qualification}>{doc.qualification}</p>
                  {doc.tagline && (
                    <p className={styles.tagline}>“{doc.tagline}”</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurDoctors;
