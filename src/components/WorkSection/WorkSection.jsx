// src/components/WorkSection/WorkSection.jsx
import React from "react";
import Work1 from "../../assets/images/Work1.png";
import Work2 from "../../assets/images/Work2.png";
import Work3 from "../../assets/images/Work3.png";
import Work4 from "../../assets/images/Work4.png";
import Work5 from "../../assets/images/Work5.png";
import Work6 from "../../assets/images/Work6.png";
import Work7 from "../../assets/images/Work7.png";
import Work8 from "../../assets/images/Work8.png";
import Work9 from "../../assets/images/Work9.png";
import Work10 from "../../assets/images/Work1.png";
import Work11 from "../../assets/images/Work2.png";
import Work12 from "../../assets/images/Work3.png";
import Work13 from "../../assets/images/Work3.png";
import Work14 from "../../assets/images/Work4.png";
import Work15 from "../../assets/images/Work5.png";
import Work16 from "../../assets/images/Work6.png";
import Work17 from "../../assets/images/Work7.png";
import Work18 from "../../assets/images/Work8.png";
import styles from "./WorkSection.module.scss";

const WorkSection = () => {
  return (
    <section id="work" className={styles.work}>
      {/* Header Section */}
      <h2>
        Our <span className={styles.highlight}>Work</span>
      </h2>

      {/* Image Gallery Section with Custom Layout */}
      <div className={styles.gallery}>

        {/* Row Odd Layout */}
        <div className={styles.rowodd}>
          <div className={styles.leftImage}>
            <img src={Work1} alt="Work 1" />
          </div>
          <div className={styles.centerImages}>
            <img src={Work2} alt="Work 2" />
            <img src={Work3} alt="Work 3" />
          </div>
          <div className={styles.leftImage}>
            <img src={Work4} alt="Work 4" />
          </div>
        </div>

        {/* Row Even Layout (Updated with two columns and one center image) */}
        <div className={styles.roweven}>
          <div className={styles.leftColumn}>
            <img src={Work5} alt="Work 5" />
            <img src={Work6} alt="Work 6" />
          </div>
          <div className={styles.centerImage}>
            <img src={Work7} alt="Work 7" />
          </div>
          <div className={styles.rightColumn}>
            <img src={Work8} alt="Work 8" />
            <img src={Work9} alt="Work 9" />
          </div>
        </div>

        {/* Row Odd Layout */}
        <div className={styles.rowodd}>
          <div className={styles.leftImage}>
            <img src={Work10} alt="Work 10" />
          </div>
          <div className={styles.centerImages}>
            <img src={Work11} alt="Work 11" />
            <img src={Work12} alt="Work 12" />
          </div>
          <div className={styles.leftImage}>
            <img src={Work4} alt="Work 4" />
          </div>
        </div>

        {/* Row Even Layout */}
        <div className={styles.roweven}>
          <div className={styles.leftColumn}>
            <img src={Work5} alt="Work 5" />
            <img src={Work6} alt="Work 6" />
          </div>
          <div className={styles.centerImage}>
            <img src={Work7} alt="Work 7" />
          </div>
          <div className={styles.rightColumn}>
            <img src={Work8} alt="Work 8" />
            <img src={Work9} alt="Work 9" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
