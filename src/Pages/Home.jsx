import React from 'react';
import HeroSection from '../Components/HeroSection';
import AttractionsSlider from '../Components/AttractionsSlider'
import Temples_Home from '../Components/Badrinath_Home'
import Kedarnath_Home from '../Components/Kedarnath_Home'
import Dwarka from '../Components/Dwarka'
import VashnoDevi from '../Components/VashnoDevi'

import WelcomeSection from '../Components/WelcomSection'
import ThreeDCar from '../Components/ThreeDCar'
import BlogSection from "../Components/Blog Section/BlogSection.jsx";
import KedarnathFAQ from "../Components/faq/KedarnathFAQ.jsx";
import OurServices from "../Components/ourServices/ourServices.jsx";
import SacredDhams from "../Pages/SacredDhams.jsx";
// ... other component imports
// No need to import Navbar, Footer, or the Chatbot anymore

function Home() {
  return (
    <>
      {/* The Navbar is now handled by Root.jsx */}
      <HeroSection />
      <WelcomeSection />
      <AttractionsSlider />
      <OurServices />
      <Temples_Home />
      <Kedarnath_Home />
      <Dwarka />
      <VashnoDevi />
      <BlogSection />
      <KedarnathFAQ />
      {/* The Footer and Chatbot are also handled by Root.jsx */}
    </>
  );
}

export default Home;