import React from 'react';

const RelatedMantras = ({ mantras, onMantraSelect }) => {
  return (
    <div className="max-w-6xl mx-auto mt-12">
      <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Related Mantras</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mantras.map((mantra, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="h-48 overflow-hidden">
              <img src={mantra.coverImage} alt={mantra.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-blue-800">{mantra.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{mantra.description}</p>
              <button 
                className="mt-4 w-full bg-blue-100 text-blue-800 py-2 rounded-lg text-sm font-semibold hover:bg-blue-200 transition-colors"
                onClick={() => onMantraSelect(mantra.id)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedMantras;