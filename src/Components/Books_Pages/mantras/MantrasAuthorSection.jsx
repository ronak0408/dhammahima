
import React from 'react';

const MantrasAuthorSection = ({ author }) => {
  const formatText = (text) => {
    if (!text) return null;
    return text.split('||').map((paragraph, index) => (
      <p key={index} className="mb-4">{paragraph}</p>
    ));
  };

  return (
    <div className="max-w-6xl mx-auto mt-12 bg-white rounded-3xl shadow-md p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
      <img
        src={author.image}
        alt={author.name}
        className="rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover border-4 border-blue-400"
      />
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">About {author.name}</h2>
        <div className="text-gray-700 mt-2 text-sm sm:text-base">
          {formatText(author.description)}
        </div>
      </div>
    </div>
  );
};

export default MantrasAuthorSection;