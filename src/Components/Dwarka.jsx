import React from 'react';

function Dwarka() {
  return (
    <div
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('https://nomadictourist.com/wp-content/uploads/2016/04/60b73-dscn1053.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90 z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 lg:px-16 py-16 gap-12 max-w-7xl mx-auto">

        {/* Left Image with Floating Box */}
        <div className="relative w-full md:w-1/2">
          <img
            src="https://s7ap1.scene7.com/is/image/incredibleindia/dwarkadish-temple-01-attr-hero?qlt=82&ts=1726734784547"
            alt="Dwarkadhish Temple"
            className="rounded-lg w-full object-cover shadow-xl h-[400px] sm:h-[450px] md:h-[500px]"
          />

          {/* Floating Quote Box */}
          <div className="absolute inset-x-0 -bottom-12 flex justify-center px-4">
            <div className="bg-white text-gray-800 px-5 py-4 rounded-lg shadow-md w-full sm:w-4/5 md:w-[80%] text-center">
              <p className="text-sm sm:text-base mb-1">
                Dwarka, the city of Krishna, where every wave of the Arabian Sea whispers tales of divine love and glory.
              </p>
              <p className="text-xl sm:text-2xl font-bold text-red-500">Jai Shri Dwarikadhish</p>
            </div>
          </div>
        </div>

        {/* Right Info Box */}
        <div className="bg-white bg-opacity-90 text-gray-900 p-6 sm:p-8 lg:p-10 rounded-lg w-full md:w-1/2 shadow-xl mt-16 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">About Dwarka</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-6">
            Dwarka, one of the sacred Char Dhams of India, is a city where mythology breathes through every stone and wave.
            Located on the western coast of Gujarat, it is believed to be the ancient kingdom of Lord Krishna, now submerged beneath the Arabian Sea.
            <br /><br />
            The majestic Dwarkadhish Temple, with its intricate carvings and spiritual aura, draws devotees and travelers from across the world.
            Whether it’s witnessing the grand evening aarti, walking along Gomti Ghat, or simply feeling the divine breeze by the sea —
            Dwarka offers an experience that is deeply spiritual, historically rich, and eternally peaceful.
          </p>
          <button className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition duration-300">
            More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dwarka;
