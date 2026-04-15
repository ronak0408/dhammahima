import React, { useEffect, useState } from "react";

const images = [
  {
    title: "Kedarnath Temple",
    url: "https://dwq3yv87q1b43.cloudfront.net/public/blogs/17461074317621-1958249122.png",
  },
  { title: "Badrinath Temple", url: "https://www.chardhamhotel.in/blog/wp-content/uploads/2024/09/Badrinath-Temple.jpg" },
  { title: "Golden Temple", url: "https://www.astroved.com/astropedia/assets/images/temples/golden-temple.jpg" },
  { title: "Isckon Vrindavan", url: "https://mathuravrindavanhotel.com/wp-content/uploads/2018/04/Iskcon-Mandir-vrindavan-1360x800.jpg" },
  { title: "Ayodhya", url: "https://assets.telegraphindia.com/telegraph/2024/Jan/1705897674_ayodhya-ram-mandir.jpg" },
  { title: "Tirupati Balaji", url: "https://tirupatibalajitravels.co.in/wp-content/uploads/2024/01/balaji-temple-1.webp" },
  { title: "Rameshwaram", url: "https://static.wixstatic.com/media/6642a4_fe9bff1cef914db49d5da0af8f13594c~mv2.webp/v1/fill/w_568,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6642a4_fe9bff1cef914db49d5da0af8f13594c~mv2.webp" },
];

export default function PopularDestinations() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const getClass = (index) => {
    const total = images.length;
    const pos = (index - current + total) % total;

    // Center
    if (pos === 0) return "z-30 scale-110 blur-0 opacity-100";
    // Immediate right/left
    if (pos === 1 || pos === total - 1) return "z-20 scale-100 blur-[1px] opacity-90";
    // Far right/left
    if (pos === 2 || pos === total - 2) return "z-10 scale-95 blur-[2px] opacity-70";
    // Others hidden
    return "opacity-0 pointer-events-none scale-90";
  };

  const getTranslateX = (index) => {
    const total = images.length;
    const pos = (index - current + total) % total;
    const spacing = 300;

    switch (pos) {
      case 0:
        return `translateX(0px)`;
      case 1:
        return `translateX(${spacing}px)`;
      case 2:
        return `translateX(${spacing * 2}px)`;
      case total - 1:
        return `translateX(-${spacing}px)`;
      case total - 2:
        return `translateX(-${spacing * 2}px)`;
      default:
        return `translateX(0px)`;
    }
  };

  return (
    <div className="w-full py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Most Popular Destinations
      </h2>

      <div className="w-full flex justify-center px-4 md:px-8">
        <div className="relative h-[420px] w-full max-w-[1000px] flex justify-center items-center">
          {images.map((item, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out transform ${getClass(index)}`}
              style={{
                transform: `${getTranslateX(index)}`,
              }}
            >
              <div className="w-[280px] h-[400px] bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-300 relative">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white py-2 text-center text-lg">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
