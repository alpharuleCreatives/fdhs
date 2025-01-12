import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import CollaborationSection from './components/CollaborationSection/CollaborationSection';
import WorkSection from './components/WorkSection/WorkSection';
import FeatureCardsSection from './components/FeatureCardsSection/FeatureCards';
import CoursesSection from './components/CoursesSection/CoursesSection';
import AdvantagesSection from './components/AdvantagesSection/AdvantagesSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import EnrollNowPage from './components/EnrolnowSection/EnrollNowPage';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutSection />
            <CollaborationSection />
            <WorkSection />
            <FeatureCardsSection />
            <CoursesSection />
            <AdvantagesSection/>
            <TestimonialsSection />
            <EnrollNowPage/>
            <Footer />
        </>
    );
};

export default App;