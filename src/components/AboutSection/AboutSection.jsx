// src/components/AboutSection/AboutSection.jsx
import React from 'react';
import styles from './AboutSection.module.scss';
import aboutImage from '../../assets/images/about-us.png'; // Left side image
import aboutImageShaded from '../../assets/images/about-us-right.png'; // Shaded image for the background

const AboutSection = () => {
    return (
        <section id="about" className={styles.about}>
            {/* Left Side Image */}
            <div className={styles.imageContainer}>
                <img src={aboutImage} alt="FDHS Training" />
            </div>

            {/* Right Side Content with Shaded Image in the Background */}
            <div className={styles.content}>
                <div className={styles.textContent}>
                    <div className={styles.headingAboutUs}>FDHS</div>
                    <div className={styles.paraAboutUs}>FDHS is a non-profit dedicated to skill enhancement in the healthcare sector.</div>
                    <div className={styles.subHeadingAboutUs}>Mission Statement:</div>
                    <div className={styles.paraAboutUs}>Providing accessible, quality education for aspiring healthcare professionals.</div>
                    <div className={styles.overlayImage}>
                    <img src={aboutImageShaded} alt="Shaded Background" />
                </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
