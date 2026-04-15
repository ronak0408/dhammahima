import React from 'react';

function VashnoDevi() {
  return (
    <div
      className="relative bg-cover bg-center text-white "
      style={{
        backgroundImage: `url('https://s7ap1.scene7.com/is/image/incredibleindia/1-vaishno-devi-jammu-jk-attr-hero?qlt=82&ts=1742154619862')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row-reverse items-center justify-center px-4 sm:px-8 lg:px-16 py-16 gap-12 max-w-7xl mx-auto">

        {/* Left: Image with Quote Box */}
        <div className="relative w-full md:w-1/2">
          <img
            src="https://www.chardhamhotel.in/blog/wp-content/uploads/2024/09/Kedarnath-Temple.jpg"
            alt="Maa Vaishno Devi"
            className="rounded-lg w-full object-cover shadow-xl h-[400px] sm:h-[450px] md:h-[500px]"
          />

          {/* Floating Quote Box */}
          <div className="absolute inset-x-0 -bottom-12 flex justify-center px-4">
            <div className="bg-white text-gray-800 px-5 py-4 rounded-lg shadow-md w-full sm:w-4/5 md:w-[80%] text-center">
              <p className="text-sm sm:text-base mb-1">
              Where divinity meets the Himalayas — Kedarnath, the eternal abode of Lord Shiva
              </p>
              <p className="text-xl sm:text-2xl font-bold text-red-600">Jai Baba Kedarnath</p>
            </div>
          </div>
        </div>

        {/* Right: About Section */}
        <div className="bg-white bg-opacity-90 text-gray-900 p-6 sm:p-8 lg:p-10 rounded-lg w-full md:w-1/2 shadow-xl mt-16 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">About Kedarnath</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-6">
            Kedarnath is a sacred Hindu pilgrimage site located in the Rudraprayag district of Uttarakhand, India, nestled in the majestic Himalayas at an altitude of approximately 3,583 meters (11,755 feet). It is home to the revered Kedarnath Temple, one of the twelve Jyotirlingas of Lord Shiva and a prominent part of the Char Dham Yatra. Surrounded by snow-capped peaks and situated near the Mandakini River, the temple is believed to have been built by the Pandavas and later revived by Adi Shankaracharya in the 8th century.
            <br /><br />
            Kedarnath holds immense mythological and spiritual significance. It is said that after the Kurukshetra war, the Pandavas sought Lord Shiva’s blessings for salvation. Shiva, avoiding them, took the form of a bull and vanished into the ground at Kedarnath, leaving behind his hump, which is now worshipped as the deity in the temple.
          </p>
          <button className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition duration-300">
            More
          </button>
        </div>
      </div>
    </div>
  );
}

export default VashnoDevi;
