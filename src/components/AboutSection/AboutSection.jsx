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
                    <div className={styles.paraAboutUs}>The Federation of Digital Health Sciences (FDHS) is a Section 8 non-profit organization dedicated to skilling, upskilling, and reskilling healthcare professionals through innovative technologies like AI, AR, VR, and MR. Approved by NITI Aayog, FDHS is committed to transforming medical education and the healthcare landscape. Its three-pronged approach focuses on direct engagement, strategic partnerships, and harnessing technology to foster an ecosystem of growth. This ecosystem aims to nurture future leaders who drive sustainable development for the nation.
                    </div>
                    <div className={styles.paraAboutUs}>
                    Over time, FDHS has expanded its impact through dynamic public-private partnerships and multi-stakeholder collaborations involving government entities, the corporate sector, NSDC, and sector skill councils.</div>
                    {/* <div className={styles.subHeadingAboutUs}>Mission Statement:</div>
                    <div className={styles.paraAboutUs}>Providing accessible, quality education for aspiring healthcare professionals.</div> */}
                    <div className={styles.overlayImage}>
                    <img src={aboutImageShaded} alt="Shaded Background" />
                </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
