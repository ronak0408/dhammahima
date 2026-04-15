import React from "react";

export default function WelcomeSection() {
  return (
    <section className="relative bg-white text-gray-800 min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/5/51/ABX_SHRI_PURUSHOTTAMA_KSHETRA_PURI.jpg')`,
        }}
      >
        {/* Dark Overlay */}
  <div className="absolute inset-0 bg-orange-400/60"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex justify-center items-center px-4 py-10">
        <div className="bg-white text-gray-800 rounded-xl shadow-lg max-w-7xl w-full p-6 sm:p-10 space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Welcome to <span className="text-pink-600">DhamMahima</span>{" "}
              <span className="text-purple-800">(Radhey Radhey)</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700">
              Discover peace, devotion, and the divine essence through the sacred Char Dham Yatra.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Your Spiritual Companion to Char Dham
              </h2>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-700">
                At DhamMahima, we guide you on a sacred pilgrimage to the revered Char Dham—
                Yamunotri, Gangotri, Kedarnath, and Badrinath. Our goal is to help you connect deeply
                with the divine through a seamless, spiritually enriching journey.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">The Divine Journey</h2>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-700">
                Nestled in the heart of the Himalayas, the Char Dham offers more than just breathtaking
                views—it’s a path to inner peace and spiritual awakening. Each destination carries
                ancient legends, blessings, and the promise of moksha (liberation).
              </p>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-700">
                Let DhamMahima be your guide in understanding the spiritual significance, best travel
                times, and practices to follow, so your pilgrimage becomes a true journey of the soul.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
