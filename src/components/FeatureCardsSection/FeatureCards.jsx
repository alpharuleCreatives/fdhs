// src/components/FeatureCardsSection/FeatureCardsSection.jsx
import React from 'react';
import styles from './FeatureCard.module.scss';
import BookBulb from '../../assets/images/bookBulb.png';
import GraduationCap from '../../assets/images/graduationCap.png';
import Badge from '../../assets/images/badge.png';

const FeatureCardsSection = () => {
    return (
        <div className={styles.featureCards}>
            {/* Feature Card 1 */}
            <div className={styles.card}>
                <img src={BookBulb} alt="Quality Courses" />
                <p>Quality Courses in <br />Physiotherapy & Nursing</p>
            </div>

            {/* Feature Card 2 */}
            <div className={styles.card}>
                <img src={GraduationCap} alt="Hands-on Training" />
                <p>Real-world <br />Hands-on Training</p>
            </div>

            {/* Feature Card 3 */}
            <div className={styles.card}>
                <img src={Badge} alt="Empowering Professionals" />
                <p>Empowering <br />Healthcare Professionals</p>
            </div>
        </div>
    );
};

export default FeatureCardsSection;
