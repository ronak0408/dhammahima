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
            src="https://rukminim3.flixcart.com/image/850/1000/kxnl6kw0/shopsy-poster/h/x/i/medium-maa-vaishno-devi-wallpaper-hd-pindi-darshan-3-poster-on-original-imaga2dsnhazufjy.jpeg?q=20&crop=false"
            alt="Maa Vaishno Devi"
            className="rounded-lg w-full object-cover shadow-xl h-[400px] sm:h-[450px] md:h-[500px]"
          />

          {/* Floating Quote Box */}
          <div className="absolute inset-x-0 -bottom-12 flex justify-center px-4">
            <div className="bg-white text-gray-800 px-5 py-4 rounded-lg shadow-md w-full sm:w-4/5 md:w-[80%] text-center">
              <p className="text-sm sm:text-base mb-1">
                Climb the sacred mountains of Vaishno Devi, where every step echoes with devotion and every breath feels blessed.
              </p>
              <p className="text-xl sm:text-2xl font-bold text-red-600">Jai Mata Vaishno Devi</p>
            </div>
          </div>
        </div>

        {/* Right: About Section */}
        <div className="bg-white bg-opacity-90 text-gray-900 p-6 sm:p-8 lg:p-10 rounded-lg w-full md:w-1/2 shadow-xl mt-16 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">About Vaishno Devi</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-6">
            Nestled in the Trikuta Mountains of Jammu, Vaishno Devi is one of India’s most revered pilgrimage sites. Devotees trek 13 kilometers to the holy cave, where divine energy and spiritual peace await.
            <br /><br />
            Reaching the holy cave and witnessing the three sacred Pindis (manifestations of the Goddess) is a soul-touching moment. The cave radiates peace and spiritual power that words can't describe — you simply have to feel it.
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
