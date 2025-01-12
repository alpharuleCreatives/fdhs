// src/components/AdvantagesSection/AdvantagesSection.jsx
import React from "react";
import styles from "./AdvantagesSection.module.scss";
import Bulb from "../../assets/images/advantagesBulb.png"; 

const AdvantagesSection = () => {
  return (
    <section className={styles.advantages}>
      {/* Heading Section */}
      <h2 className={styles.advantagesHeading}>Advantages</h2>
      
      {/* Advantages List Section */}
      <div className={styles.advantagesList}>
        {/* Advantage 1 */}
        <div className={styles.advantageCard}>
          <div className={styles.bulb}>
            <img src={Bulb} alt="Expert Faculty" />
          </div>
          <p className={styles.subject}>Expert Faculty from RSIC Mohali</p>
        </div>

        {/* Advantage 2 */}
        <div className={styles.advantageCard}>
          <div className={styles.bulb}>
            <img src={Bulb} alt="Hands-On Learning" />
          </div>
          <p className={styles.subject}>Hands-On Practice Learning</p>
        </div>

        {/* Advantage 3 */}
        <div className={styles.advantageCard}>
          <div className={styles.bulb}>
            <img src={Bulb} alt="Certification" />
          </div>
          <p className={styles.subject}>Globally Recognized Certification</p>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
