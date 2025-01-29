import React from "react";
import Work1 from "../../assets/images/Work1.png";
import Work2 from "../../assets/images/Work2.png";
import Work3 from "../../assets/images/Work3.png";
import Work4 from "../../assets/images/Work4.png";
import Work5 from "../../assets/images/Work5.png";
import Work6 from "../../assets/images/Work6.png";
import styles from "./WorkSection.module.scss";

const WorkSection = () => {
  const images = [Work1, Work2, Work3, Work4, Work5, Work6];

  return (
    <section id="work" className={styles.work}>
      {/* Main Heading */}
      <div className={styles.mainHeading}>
        Our <span className={styles.highlight}>Work</span>
      </div>

      {/* Description */}
      <div className={styles.description}>
        At FDHS, we deliver excellence in physiotherapy and nursing training,
        hands-on experience, and empower healthcare professionals to enhance
        community care standards.
      </div>

      {/* Subheading */}
      <div className={styles.subHeading}>Education</div>

      {/* Image Gallery */}
      <div className={styles.galleryMain}>
        <div className={styles.gallery}>
          <div className={styles.column}>
            {images.slice(0, 3).map((image, index) => (
              <div key={index} className={styles.imageCard}>
                <img src={image} alt={`Work ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.gallery}>
          <div className={styles.column}>
            {images.slice(3, 6).map((image, index) => (
              <div key={index} className={styles.imageCard}>
                <img src={image} alt={`Work ${index + 4}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      
      {/* Subheading */}
      <div className={styles.subHeading}>Health Camps</div>

      {/* Image Gallery */}
      <div className={styles.galleryMain}>
        <div className={styles.gallery}>
          <div className={styles.column}>
            {images.slice(0, 3).map((image, index) => (
              <div key={index} className={styles.imageCard}>
                <img src={image} alt={`Work ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.gallery}>
          <div className={styles.column}>
            {images.slice(3, 6).map((image, index) => (
              <div key={index} className={styles.imageCard}>
                <img src={image} alt={`Work ${index + 4}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
