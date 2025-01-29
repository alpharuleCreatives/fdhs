// src/components/CollaborationSection/CollaborationSection.jsx
import React from "react";
import TickSquare from "../../assets/images/tick-square.png";
import styles from "./CollaborationSection.module.scss";
import rsicLogo from "../../assets/images/rsicLogo.png";
import PuzzleImage from "../../assets/images/PuzzleImage.png";

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
          <div className={styles.headingcollaboration}>
            Regional Spinal Injuries Centre
          </div>
          <div className={styles.paracollaboration}>
            The Federation of Digital Health Sciences (FDHS) is proud to
            announce its collaboration with the Regional Spinal Injuries Centre
            (RSIC), Mohali, to establish a Centre of Medical Excellence. This
            partnership aims to revolutionize medical education and training by
            enhancing Competency-Based Medical Education (CBME), Upskill
            Training, and placement services in Critical Care and Orthopaedics.
          </div>
          <div className={styles.subheadingcollaboration}>
            Key Objectives of the Partnership:
          </div>
          <div className={styles.list}>
            {[
              {
                desc: "Hybrid, Virtual, and Live Training: We've jointly estalished a state-of-the-art training center for the upskilling of healthcare professionals with a vision to elevate the medical education & healthcare lanscsape in India .",
              },
              {
                desc: "Joint Educational Programs: Developing innovative curricula integrating the expertise of both institutions.",
              },
              {
                desc: "Workshops and Seminars: Conducting events to share best practices and advance knowledge in healthcare.",
              },
              {
                desc: "Research and Development: Collaborating on groundbreaking research in medical education and training methodologies.",
              },
              {
                desc: "Upskilling Healthcare Professionals: Offering cutting-edge simulation and healthcare technology training to enhance clinical proficiency.",
              },
              {
                desc: "Job Creation: Generating employment opportunities for healthcare professionals, including doctors, residents, and critical care nurses.",
              },
              {
                desc: "Certifications and Career Advancement: Providing certifications and fostering career growth for local health staff.",
              },
            ].map((item, index) => (
              <div className={styles.listpoint} key={index}>
                <img src={TickSquare} alt="tick" className={styles.tickIcon} />
                <div>
                  <span className={styles.highlight}>{item.title}</span>{" "}
                  <span>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Grid Section */}
        <div className={styles.imageGrid}>
          <div className={styles.singleimage}>
            <img src={PuzzleImage} alt="Service 1" />
            <img src={PuzzleImage} alt="Service 2" />
            <img src={PuzzleImage} alt="Service 3" />
          </div>
        </div>
      </div>
      {/*Vision*/}
      <div className={styles.serviceSection}>
        <div className={styles.textContent}>
          <div className={styles.headingcollaboration}>
          Vision for Impact
          </div>
          <div className={styles.highlight}>
            Vision for ImpactThrough this collaboration, FDHS and RSIC aim to
            create a transformative ecosystem for medical professionals and
            students. By leveraging innovative technologies such as AI, AR, VR,
            and MR, the partnership strives to redefine healthcare training,
            ensuring high standards of patient care and professional
            development. 
          </div>
          <div className={styles.highlight}>
          For more updates on this partnership and upcoming
            initiatives, stay connected with us via our website and social media
            channels.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
