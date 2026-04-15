
import React from 'react';

const MantraSection = ({ mantra }) => {
  // Function to format text with line breaks
  const formatText = (text) => {
    if (!text) return null;
    return text.split('||').map((paragraph, index) => (
      <p key={index} className="mb-4">{paragraph}</p>
    ));
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-10 p-6 sm:p-8 md:p-12">
      {/* Mantra Image */}
      <div className="flex justify-center items-center flip-card">
        <div className="flip-card-inner">
          <img
            src={mantra.coverImage}
            alt={`${mantra.title} mantra`}
            className="rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md h-80 sm:h-96 object-cover"
          />
        </div>
      </div>

      {/* Mantra Info */}
      <div className="space-y-4 sm:space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-800">{mantra.title}</h1>
        
        <div className="p-4 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Mantra Text</h2>
          <p className="text-2xl text-blue-900 font-medium text-center">{mantra.text}</p>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg">
          <h2 className="text-xl font-semibold text-amber-700 mb-2">Translation</h2>
          <p className="text-gray-700">{mantra.translation}</p>
        </div>

        <div className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Meaning</h2>
          {formatText(mantra.meaning)}
        </div>

        {/* Mantra Meta */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Mantra Details</h2>
          <ul className="text-gray-600 space-y-2">
            <li className="flex">
              <span className="font-semibold w-32">Origin:</span>
              <span>{mantra.origin}</span>
            </li>
            <li className="flex">
              <span className="font-semibold w-32">Type:</span>
              <span>{mantra.meta.type}</span>
            </li>
            <li className="flex">
              <span className="font-semibold w-32">Language:</span>
              <span>{mantra.meta.language}</span>
            </li>
            <li className="flex">
              <span className="font-semibold w-32">Length:</span>
              <span>{mantra.meta.length}</span>
            </li>
            <li className="flex">
              <span className="font-semibold w-32">Best Time:</span>
              <span>{mantra.meta.bestTime}</span>
            </li>
            <li className="flex">
              <span className="font-semibold w-32">Repetitions:</span>
              <span>{mantra.meta.recommendedRepetitions}</span>
            </li>
          </ul>
        </div>

        {/* Benefits Section */}
        <div className="bg-green-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-green-800 mb-2">Benefits</h2>
          <p className="text-gray-700">{mantra.benefits}</p>
        </div>

        {/* Audio Player */}
        <div className="pt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Listen to Mantra</h2>
          <div className="flex items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-md transition">
              <i className="fas fa-play"></i>
            </button>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{width: '30%'}}></div>
            </div>
            <span className="text-gray-500 text-sm">0:00 / 5:42</span>
          </div>
          <a
            href={mantra.audioLink}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mt-2"
          >
            {/* <i className="fas fa-download"></i> Download Audio */}
          </a>
        </div>

        {/* Practice Tips */}
        <div className="bg-purple-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-purple-800 mb-2">Practice Tips</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Sit in a comfortable position with your spine straight</li>
            <li>Close your eyes and take a few deep breaths</li>
            <li>Chant the mantra with focus and devotion</li>
            <li>Use a mala (prayer beads) to count repetitions</li>
            <li>Practice regularly at the same time each day</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MantraSection;