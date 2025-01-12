// src/components/CollaborationSection/CollaborationSection.jsx
import React from "react";
import TickSquare from "../../assets/images/tick-square.png";
import styles from "./CollaborationSection.module.scss";
import rsicLogo from "../../assets/images/rsicLogo.png";
import serviceImage1 from "../../assets/images/service-1.png";
import serviceImage2 from "../../assets/images/service-2.png";
import serviceImage3 from "../../assets/images/service-3.png";

const CollaborationSection = () => {
  return (
    <section className={styles.collaboration}>
      {/* Collaboration Header Section */}
      <div className={styles.collabHeader}>
        <img src={rsicLogo} alt="RSIC Mohali" className={styles.logo} />
        <h2>In Collaboration with RSIC Mohali</h2>
        <img src={rsicLogo} alt="RSIC Mohali" className={styles.logo} />
      </div>

      {/* Service Section */}
      <div className={styles.serviceSection}>
        <div className={styles.textContent}>
          <div className={styles.headingcollaboration}>Regional Spinal Injuries Centre</div>
          <div className={styles.paracollaboration}>
          Welcome to the Regional Spine Injuries Centre, a leading healthcare institution in Mohali dedicated to providing specialized care for spine injuries. Our state-of-the-art facility is equipped with cutting-edge technology and staffed by a team of experienced and compassionate healthcare professionals.
          </div>
          <div className={styles.list}>
            {[
              {
                title: "Specialized Care",
                desc: "We specialize in the diagnosis, treatment, and rehabilitation of various spine injuries."
              },
              {
                title: "Diagnostic Facilities",
                desc: "Our center is equipped with state-of-the-art diagnostic facilities.",
              },
              {
                title: "Rehabilitation",
                desc: "Rehabilitation is a crucial aspect of the recovery process. Our dedicated rehabilitation services focus on restoring mobility.",
              },
              {
                title: "Patient-Centric Approach",
                desc: "At Regional Spine Injuries Centre, we prioritize the well-being of our patients.",
              },
            ].map((item, index) => (
              <div className={styles.listpoint} key={index}>
                <img src={TickSquare} alt="tick" className={styles.tickIcon} />
                <div>
                  <span className={styles.highlight}>{item.title}</span> -{" "}
                  <span>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Grid Section */}
        <div className={styles.imageGrid}>
        <div className={styles.twoimages}>
          <img src={serviceImage1} alt="Service 1" />
          <img src={serviceImage2} alt="Service 2" />
          </div>
          <div className={styles.singleimage}>
          <img src={serviceImage3} alt="Service 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
