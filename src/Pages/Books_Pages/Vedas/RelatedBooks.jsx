// components/RelatedBooks.js
import React from 'react';

const RelatedBooks = ({ books, onBookSelect }) => {
  return (
    <div className="fade-in mt-16">
      <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">Other Sacred Texts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="h-48 overflow-hidden">
              <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-amber-800">{book.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{book.description}</p>
              <button className="mt-4 w-full bg-amber-100 text-amber-800 py-2 rounded-lg text-sm font-semibold hover:bg-amber-200 transition-colors"  onClick={() => onBookSelect(book.id)}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedBooks;