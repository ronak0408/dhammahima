import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Import all your layout components
import HeroGallery from "./HeroGallery";
import AboutTemple from "./AboutTemple";
import MapSection from "./MapSection";
import BlogSection from "./BlogSection";
import VerticalInfoCards from "./VerticalInfoCards";
import AboutPostCards from "./AboutPostCards";
import FinalInfoCard from "./FinalInfoCard";
import Navbar from "../Navbar";
import "./TemplePage.css";

const AnimatedBackground = () => (
    <>
        <style>{/* ... style content ... */}</style>
        <div className="aurora-bg absolute inset-0 -z-10 w-full min-h-screen bg-fixed"></div>
        <div className="absolute inset-0 -z-10 bg-white/30 backdrop-blur-[3px]"></div>
        <div className="pointer-events-none absolute inset-0 -z-10">
            {/* ... particle divs ... */}
        </div>
    </>
);

export default function TemplePage() {
    const { templeSlug } = useParams();
    const [templeData, setTempleData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Effect for loading temple data
    useEffect(() => {
        const loadTempleData = async () => {
            setLoading(true);
            setError(null);
            try {
                const dataModule = await import(`../../data/${templeSlug}.json`);
                setTempleData(dataModule.default);
            } catch (err) {
                console.error("Failed to load temple data:", err);
                setError(`Could not find data for "${templeSlug}".`);
                setTempleData(null);
            } finally {
                setLoading(false);
            }
        };
        loadTempleData();
    }, [templeSlug]);

    // ✅ ADD THIS MISSING useEffect FOR THE ANIMATION
    useEffect(() => {
        // Don't run this effect until the data has been loaded
        if (!templeData) return;

        // Set up the IntersectionObserver to add the "in-view" class
        const cb = (entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add("in-view");
                }
            });
        };
        
        const observer = new IntersectionObserver(cb, { threshold: 0.14 });
        
        // Find all elements with the animation class and start observing them
        const elements = document.querySelectorAll(".fade-in-on-scroll");
        elements.forEach(el => observer.observe(el));
        
        // Clean up the observer when the component unmounts or data changes
        return () => observer.disconnect();

    }, [templeData]); // 👈 This effect re-runs when templeData is loaded

    if (loading) {
        return <div className="flex justify-center items-center h-screen bg-gray-100">Loading...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen bg-red-100 text-red-700">{error}</div>;
    }
    
    if (!templeData) {
        return null; 
    }

    return (
        <div className="relative kn-bg min-h-screen overflow-x-hidden">
            <Navbar />
            <AnimatedBackground />

            <div className="kn-animated-bg pointer-events-none absolute inset-0 z-10">
                <div className="kn-bg-ornament kn-bg-om">ॐ</div>
                <div className="kn-bg-ornament kn-bg-mandala" />
            </div>

            <div className="relative z-20">
                <HeroGallery data={templeData.hero} />

                <div className="kn-info-strip-wrapper">
                    <VerticalInfoCards data={templeData.verticalInfoCards} />
                </div>

                <div className="kn-content">
                    <AboutTemple data={templeData.aboutTemple} />
                    <AboutPostCards data={templeData.aboutPostCards} />

                    <section className="flex flex-col md:flex-row gap-8 w-full max-w-5xl mx-auto py-8 px-4">
                        <div className="flex-1 min-w-[280px] flex">
                            <FinalInfoCard data={templeData.finalInfoCard} />
                        </div>
                        <div className="flex-1 min-w-[280px] flex">
                            <MapSection data={templeData.mapSection} />
                        </div>
                    </section>

                    <BlogSection data={templeData.blogSection} />
                </div>
            </div>
        </div>
    );
}