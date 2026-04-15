import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "https://www.tirthyatraindia.com/assets/images/spiritual-tours/kashi-vishwanath-temple.jpg",
  "https://assets.simplotel.com/simplotel/image/upload/x_93,y_0,w_1824,h_1026,r_0,c_crop,q_80,fl_progressive/w_750,f_auto,c_fit/the-lalita-grand/Hotels_for_Holi_in_Mathura,_best_hotel_in_Mathura_5"
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={images[currentIndex]}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        {/* SHLOKA */}
    <div className="relative px-8 py-10 max-w-4xl bg-gradient-to-br from-yellow-100/10 via-orange-200/10 to-transparent backdrop-blur-md rounded-3xl shadow-[0_0_60px_5px_rgba(255,200,0,0.15)] border border-yellow-400/30 mb-10">
  {/* Glowing Top Ornament Icon */}
  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 shadow-lg flex items-center justify-center animate-pulse">
      <span className="text-2xl text-white">🕉️</span>
    </div>
  </div>

  {/* Sanskrit Shloka Text */}
  <p className="text-3xl md:text-4xl font-bold text-yellow-100 text-center font-[TiroDevanagariMarathi,Georgia,serif] leading-relaxed tracking-wide drop-shadow-lg italic">
    ॐ नमः शिवाय <br />
    भक्ति से बड़ा कोई मार्ग नहीं, <br />
    और शिव से बड़ा कोई देव नहीं।
  </p>

  {/* Glow Border Bottom Animation */}
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-[2px] bg-gradient-to-r from-yellow-200 via-orange-300 to-yellow-200 animate-pulse rounded-full mt-4" />
</div>


        {/* HEADING */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
          Discover India’s Spiritual Soul
        </h1>

        {/* SUB-TEXT */}
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-6">
          From the temples of the Himalayas to the shores of Rameshwaram, begin your divine journey today.
        </p>

        {/* BUTTON */}
        <button className="bg-yellow-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-yellow-700 transition duration-300">
            <Link to="/dhams">Start Your Yatra</Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
