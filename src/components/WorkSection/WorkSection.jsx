import React from "react";
import Education1 from "../../assets/images/education/Skilllab.jpg"
import Education2 from "../../assets/images/education/MedicalCollege.jpg"
import Education3 from "../../assets/images/education/handover.jpg"
import Education4 from "../../assets/images/education/trainerinitiative.jpg"
import Education5 from "../../assets/images/education/Dissection.jpg"
import Education6 from "../../assets/images/education/ContinuedMedicalEducation.jpg"
import Education7 from "../../assets/images/education/Q&ASession.jpg"
import Education8 from "../../assets/images/education/50Educators.jpg"
import Education9 from "../../assets/images/education/VirtualCadaverDissection.jpg"
import Education10 from "../../assets/images/education/Handsonsession.jpg"
import Education11 from "../../assets/images/education/StudentsanatomyLecture.jpg"
import Education12 from "../../assets/images/education/SimulationSkilllab.jpg"
import Education13 from "../../assets/images/education/educators.jpg"
import Education14 from "../../assets/images/education/Punjab’sfirstsmartskilllab.jpg"
import Education15 from "../../assets/images/education/Studentawareness.jpg"
import Education16 from "../../assets/images/education/ExperienceCentre.jpg"
import Education17 from "../../assets/images/education/J&K’sfirstSimulatedskill.jpg"
import Education18 from "../../assets/images/education/Bloom’slevel.jpg"
import Education19 from "../../assets/images/education/RegionalSpineInjury.jpg"
import Education20 from "../../assets/images/education/SmartICU.jpg"
import HealthCamp1 from "../../assets/images/healthcamps/HealthCamp1.jpg"
import HealthCamp2 from "../../assets/images/healthcamps/HealthCamp2.jpg"
import HealthCamp3 from "../../assets/images/healthcamps/HealthCamp3.jpg"
import HealthCamp4 from "../../assets/images/healthcamps/HealthCamp4.jpg"
import HealthCamp5 from "../../assets/images/healthcamps/HealthCamp5.jpg"
import HealthCamp6 from "../../assets/images/healthcamps/HealthCamp6.jpg"
import HealthCamp7 from "../../assets/images/healthcamps/HealthCamp7.jpg"
import HealthCamp8 from "../../assets/images/healthcamps/HealthCamp8.jpg"
import HealthCamp9 from "../../assets/images/healthcamps/HealthCamp9.jpg"
import HealthCamp10 from "../../assets/images/healthcamps/HealthCamp10.jpg"
import HealthCamp11 from "../../assets/images/healthcamps/HealthCamp11.jpg"
import HealthCamp12 from "../../assets/images/healthcamps/HealthCamp12.jpg"
import HealthCamp13 from "../../assets/images/healthcamps/HealthCamp13.jpg"
import HealthCamp14 from "../../assets/images/healthcamps/HealthCamp14.jpg"
import HealthCamp15 from "../../assets/images/healthcamps/HealthCamp15.jpg"
import HealthCamp16 from "../../assets/images/healthcamps/HealthCamp16.jpg"
import HealthCamp17 from "../../assets/images/healthcamps/HealthCamp17.jpg"
import HealthCamp18 from "../../assets/images/healthcamps/HealthCamp18.jpg"
import HealthCamp19 from "../../assets/images/healthcamps/HealthCamp19.jpg"
import HealthCamp20 from "../../assets/images/healthcamps/HealthCamp41.jpg"
import HealthCamp21 from "../../assets/images/healthcamps/HealthCamp21.jpg"
import HealthCamp22 from "../../assets/images/healthcamps/HealthCamp22.jpg"
import HealthCamp23 from "../../assets/images/healthcamps/HealthCamp23.jpg"
import HealthCamp24 from "../../assets/images/healthcamps/HealthCamp24.jpg"
import HealthCamp25 from "../../assets/images/healthcamps/HealthCamp25.jpg"
import HealthCamp26 from "../../assets/images/healthcamps/HealthCamp26.jpg"
import HealthCamp27 from "../../assets/images/healthcamps/HealthCamp27.jpg"
import HealthCamp28 from "../../assets/images/healthcamps/HealthCamp28.jpg"
import HealthCamp29 from "../../assets/images/healthcamps/HealthCamp29.jpg"
import HealthCamp30 from "../../assets/images/healthcamps/HealthCamp30.jpg"
import HealthCamp31 from "../../assets/images/healthcamps/HealthCamp31.jpg"
import HealthCamp32 from "../../assets/images/healthcamps/HealthCamp32.jpg"
import HealthCamp33 from "../../assets/images/healthcamps/HealthCamp33.jpg"
import HealthCamp34 from "../../assets/images/healthcamps/HealthCamp34.jpg"
import HealthCamp35 from "../../assets/images/healthcamps/HealthCamp35.jpg"
import HealthCamp36 from "../../assets/images/healthcamps/HealthCamp36.jpg"
import HealthCamp37 from "../../assets/images/healthcamps/HealthCamp37.jpg"
import HealthCamp38 from "../../assets/images/healthcamps/HealthCamp38.jpg"
import HealthCamp40 from "../../assets/images/healthcamps/HealthCamp40.jpg"
import HealthCamp41 from "../../assets/images/healthcamps/HealthCamp41.jpg"
import styles from "./WorkSection.module.scss";

const WorkSection = () => {
  const images = [Education1, Education2, Education3, Education4, Education5, Education6, Education7, Education8, Education9, Education10, Education11, Education12, Education13, Education14, Education15, Education16, Education17, Education18, Education19, Education20];

  const healthcampsimages = [HealthCamp1, HealthCamp2, HealthCamp3, HealthCamp4, HealthCamp5, HealthCamp6, HealthCamp7, HealthCamp8, HealthCamp9, HealthCamp10, HealthCamp11, HealthCamp12, HealthCamp13, HealthCamp14, HealthCamp15, HealthCamp16, HealthCamp17, HealthCamp18, HealthCamp19, HealthCamp20, HealthCamp21, HealthCamp22, HealthCamp23, HealthCamp24, HealthCamp25, HealthCamp26, HealthCamp27, HealthCamp28, HealthCamp29, HealthCamp30, HealthCamp31, HealthCamp32, HealthCamp33, HealthCamp34, HealthCamp35, HealthCamp36, HealthCamp37, HealthCamp38, HealthCamp40, HealthCamp41];

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
            {images.slice(0, 10).map((image, index) => (
              <div key={index} className={styles.imageCard}>
                <img src={image} alt={`Work ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.gallery}>
          <div className={styles.column}>
            {images.slice(10, 20).map((image, index) => (
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
            {healthcampsimages.slice(0, 20).map((image, index) => (
              <div key={index} className={styles.imageCard}>
                <img src={image} alt={`Work ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.gallery}>
          <div className={styles.column}>
            {healthcampsimages.slice(20, 40).map((image, index) => (
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
