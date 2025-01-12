// src/components/CoursesSection/CoursesSection.jsx
import React from "react";
import styles from "./CoursesSection.module.scss";
import checkIcon from "../../assets/images/tick-square.png"; // Ensure correct icon path
import Bulb from "../../assets/images/advantagesBulb.png"; // Ensure correct

const CoursesSection = () => {
  return (
    <section id="courses" className={styles.courses}>
      {/* Header Section */}
      <h2>
        Certification Program
        <span className={styles.underline}></span>
      </h2>

      {/* Description Section */}
      <p className={styles.description}>
        Recognized certifications with comprehensive course coverage.
      </p>

      {/* Courses List Section */}
      <ul>
        <li>
          <img src={checkIcon} alt="Check Icon" />
          <span>Physiotherapy</span>
        </li>
        <li>
          <img src={checkIcon} alt="Check Icon" />
          <span>Nursing</span>
        </li>
        <li>
          <img src={checkIcon} alt="Check Icon" />
          <span>Healthcare Management</span>
        </li>
      </ul>

      {/* Upcoming Courses Section with Infinite Scrolling */}
      <div className={styles.upcomingCoursesSection}>
        <div className={styles.upcomingCoursesHeading}>Upcoming Courses</div>
        <div className={styles.coursesCardList}>
          <div className={styles.coursesCard}></div>
          <div className={styles.coursesCard}></div>
          <div className={styles.coursesCard}></div>
          <div className={styles.coursesCard}></div>
          <div className={styles.coursesCard}></div>
          <div className={styles.coursesCard}></div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
