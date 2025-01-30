import React, { useState, useRef } from 'react';
import InvertedCommas from '../../assets/images/inverted-commas.png';
import styles from './TestimonialsSection.module.scss';

const testimonialsData = [
    { quote: "My elderly father has been more mobile and happy thanks to their amazing service.", author: "Priya Rana" },
    { quote: "This service has been a blessing for my family. Great job!", author: "Rahul Sharma" },
    { quote: "Their dedication and support have been outstanding.", author: "Ananya Verma" }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className={styles.testimonialsContainer}>
            <h2 className={styles.title}>
                Students <span className={styles.highlight}>Testimonial</span>
            </h2>

            <div className={styles.carouselWrapper}>
                {/* Left Navigation Button */}
                <button className={`${styles.navButton} ${styles.left}`} onClick={prevSlide}>
                    <span>&#10094;</span>
                </button>

                {/* Testimonial Cards */}
                <div className={styles.carouselContainer} ref={carouselRef}>
                    <div className={styles.carousel}>
                        {testimonialsData.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`${styles.testimonialCard} ${
                                    index === currentIndex ? styles.active : styles.inactive
                                }`}
                            >
                                <div className={styles.quoteMark}>
                                    <img src={InvertedCommas} alt='inverted-commas'/>
                                </div>
                                <div className={styles.testimonialText}>{testimonial.quote}</div>
                                <div className={styles.author}>{testimonial.author}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Navigation Button */}
                <button className={`${styles.navButton} ${styles.right}`} onClick={nextSlide}>
                    <span>&#10095;</span>
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
