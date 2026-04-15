import React from 'react';

// The BookSection component receives a 'book' prop
const BookSection = ({ book }) => {
  // Check if book exists to prevent errors
  if (!book) {
    return <div>Loading book information...</div>;
  }

  // Function to format text with line breaks
  const formatText = (text) => {
    return text.split('||').map((paragraph, index) => (
      <p key={index} className="mb-4">{paragraph}</p>
    ));
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-10 p-6 sm:p-8 md:p-12 mb-12 fade-in">
      {/* Book Cover */}
      <div className="flex justify-center items-center flip-card">
        <div className="flip-card-inner">
          <img
            src={book.coverImage}
            alt={`${book.title} Book`}
            className="rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md h-80 sm:h-96 object-cover"
          />
        </div>
      </div>

      {/* Book Info */}
      <div className="space-y-4 sm:space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-yellow-800">{book.title}</h1>
        <p className="text-sm text-gray-500">
          Translated by <span className="font-semibold">{book.translator}</span>
        </p>

        <div className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
          {formatText(book.description)}
        </div>

        {/* Book Meta */}
        <ul className="text-gray-600 space-y-1 text-sm">
          <li><strong>Genre:</strong> {book.meta.genre}</li>
          <li><strong>Language:</strong> {book.meta.language}</li>
          <li><strong>Pages:</strong> {book.meta.pages}</li>
          <li><strong>Publisher:</strong> {book.meta.publisher}</li>
          <li className="flex items-center gap-2 text-base font-semibold text-green-700">
            <i className="fas fa-money-bill-wave"></i> {book.meta.price}
          </li>
        </ul>

        {/* Purchase Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <a
            href={book.purchaseLinks.amazon}
            className="inline-flex justify-center items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition purchase-btn"
          >
            <i className="fab fa-amazon"></i> Buy on Amazon
          </a>
          <a
            href={book.purchaseLinks.flipkart}
            className="inline-flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition purchase-btn"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/16/Flipkart_logo.png"
              alt="Flipkart"
              className="h-5 w-auto"
            />
            Buy on Flipkart
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookSection;