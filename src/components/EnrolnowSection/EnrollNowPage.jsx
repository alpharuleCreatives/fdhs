// src/components/EnrollNowPage/EnrollNowPage.jsx
import React from "react";
import styles from "./EnrollNowPage.module.scss";

const EnrollNowPage = () => {
  return (
    <section className={styles.enrollNowSection}>
      {/* Heading */}
      <h2 className={styles.enrollNowHeading}>Enroll Now</h2>

      {/* Infinite Scrolling Courses Card List */}
      <div className={styles.coursesCardList}>
        {/* Duplicate cards for seamless infinite scrolling */}
        <div className={styles.coursesCard}></div>
        <div className={styles.coursesCard}></div>
        <div className={styles.coursesCard}></div>
        <div className={styles.coursesCard}></div>
        <div className={styles.coursesCard}></div>
        <div className={styles.coursesCard}></div>
      </div>
    </section>
  );
};

export default EnrollNowPage;
