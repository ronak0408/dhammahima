import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './HeroSection.css'; // Scoped styles for this component

const HeroSection = () => {
    return (
        <header className="goku-hero">
            <div className="goku-hero__overlay"></div>
            <div className="goku-hero__content-wrapper">
                <h1 className="goku-hero__heading">
                    Explore Divine Temples
                </h1>
               <div className='flex gap-7'> <Link to="/home" className="goku-hero__homelink">
                    Home
                </Link>
                 <Link to="/BlogPost" className="goku-hero__homelink">
                    Post Blog
                </Link></div>

            </div>
        </header>
    );
};

export default HeroSection;
