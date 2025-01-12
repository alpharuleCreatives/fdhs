import React from 'react';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutSection from '../components/AboutSection/AboutSection';
import CollaborationSection from '../components/CollaborationSection/CollaborationSection';
import WorkSection from '../components/WorkSection/WorkSection';
import CoursesSection from '../components/CoursesSection/CoursesSection';
import TestimonialsSection from '../components/TestimonialsSection/TestimonialsSection';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutSection />
            <CollaborationSection />
            <WorkSection />
            <CoursesSection />
            <TestimonialsSection />
            <Footer />
        </>
    );
};

export default Home;
