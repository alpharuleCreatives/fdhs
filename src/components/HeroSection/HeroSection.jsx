// src/components/HeroSection/HeroSection.jsx
import React from 'react';
import styles from './HeroSection.module.scss';
import heroImage from '../../assets/images/hero-bg.png'; // Ensure the image path is correct

const HeroSection = () => {
    return (
        <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1>Empower your career in <br /> <span>Healthcare</span></h1>
                <p>Join industry-leading courses in Physiotherapy & Nursing with RSIC Mohali</p>
                <a href="#courses" className={styles.ctaButton}>Get Certified Now</a>
            </div>
        </section>
    );
};

export default HeroSection;
