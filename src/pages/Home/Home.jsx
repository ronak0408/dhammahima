import React from 'react';
import HeroSection from './sections/HeroSection/HeroSection';
import SimpleIntroduction from './sections/SimpleIntroduction/SimpleIntroduction';
import ServicesSection from './sections/ServicesSection/ServicesSection';
import FeaturedTemplesSection from './sections/FeaturedTemplesSection/FeaturedTemplesSection';
import WhyChooseUsSection from './sections/WhyChooseUsSection/WhyChooseUsSection';
import BlogSection from './sections/BlogSection/BlogSection';
import FAQSection from './sections/FAQSection/FAQSection';

function Home() {
    return (
        <div>
            <HeroSection />
            <SimpleIntroduction />
            <ServicesSection />
            <FeaturedTemplesSection />
            <WhyChooseUsSection />
            <BlogSection />
            <FAQSection />
        </div>
    );
}

export default Home;
