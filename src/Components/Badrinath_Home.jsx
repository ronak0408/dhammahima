import React from 'react';

function Badrinath_Home() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('https://s7ap1.scene7.com/is/image/incredibleindia/2-mana-village-badrinath-uttarakhand-attr-hero?qlt=82&ts=1726646481060')`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-24">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-500 drop-shadow-lg">
            Featured Dhams
          </h1>
        </div>

        {/* Image + Text Side-by-Side */}
        <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-8">
          {/* Left Side: Image with Quote Box */}
          <div className="relative w-full md:w-1/2">
            <img
              src="https://www.taxiservicedehradun.com/image/rishikesh-to-badrinath-tempo-traveller.webp"
              alt="Badrinath"
              className="rounded-lg w-full object-cover shadow-lg h-80 sm:h-96"
            />
            {/* Bottom Quote Box (Attached to Image) */}
            <div className="absolute inset-x-0 -bottom-10 flex justify-center px-4 sm:px-0">
              <div className="bg-white text-gray-800 px-4 py-4 rounded-md shadow-lg w-full sm:w-4/5 md:w-[90%] lg:w-[70%] text-center">
                <p className="text-sm sm:text-base">
                  High in the Himalayas lies Badrinath — a sacred haven of spirituality, purity, and breathtaking natural beauty.
                </p>
                <p className="text-xl sm:text-2xl font-bold text-red-500 mt-2">
                  Har Har Badri, Goonje Himalaya Ke Paar!
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="bg-white bg-opacity-90 text-gray-900 p-5 sm:p-6 md:p-8 rounded-lg w-full md:w-1/2 shadow-lg mt-20 md:mt-0">
            <h2 className="text-2xl font-bold mb-4">About Badrinath</h2>
            <p className="text-base leading-7 mb-4 text-gray-700">
              Tucked high in the majestic Garhwal Himalayas of Uttarakhand, Badrinath is a sacred jewel among India’s Char Dham pilgrimage sites.
              Dedicated to Lord Vishnu, the ancient Badrinath Temple stands against a backdrop of snow-capped peaks and the gushing Alaknanda River —
              a sight that fills the soul with peace and wonder. Surrounded by legends and spiritual energy, every corner of Badrinath whispers
              stories from the Mahabharata and Vedic times. Whether you seek divine blessings, inner peace, or the beauty of untouched nature,
              Badrinath offers a truly magical and soul-stirring experience.
            </p>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Badrinath_Home;
