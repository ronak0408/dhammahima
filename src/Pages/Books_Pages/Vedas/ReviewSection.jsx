// components/ReviewSection.jsx
import React, { useState } from 'react';

const ReviewSection = ({ category, bookTitle, reviews = [], onAddReview }) => {
  const [formData, setFormData] = useState({
    name: '',
    rating: 0,
    text: ''
  });
  const [hoverRating, setHoverRating] = useState(0);

  // Function to generate star display
  const renderStars = (rating, isInteractive = false, onStarClick = null, onStarHover = null) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-xl cursor-pointer ${
              star <= (hoverRating || rating) ? 'text-yellow-500' : 'text-gray-300'
            }`}
            onClick={() => isInteractive && onStarClick(star)}
            onMouseEnter={() => isInteractive && onStarHover(star)}
            onMouseLeave={() => isInteractive && onStarHover(0)}
          >
            {star <= (hoverRating || rating) ? '★' : '☆'}
          </span>
        ))}
      </div>
    );
  };

  // Calculate average rating
  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;
    
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return total / reviews.length;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.rating || !formData.text) {
      alert('Please fill all fields');
      return;
    }

    const newReview = {
      id: Date.now(),
      name: formData.name,
      rating: parseInt(formData.rating),
      text: formData.text,
      category: category,
      book: bookTitle
    };

    onAddReview(newReview);
    
    // Reset form
    setFormData({
      name: '',
      rating: 0,
      text: ''
    });
    setHoverRating(0);
  };

  const averageRating = calculateAverageRating();

  return (
    <div className="mt-10 border-t pt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Reviews for {bookTitle || category}
      </h2>
      
      {/* Overall Rating */}
      <div className="mb-8 bg-amber-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-amber-800 mb-2">Overall Rating</h3>
        <div className="flex items-center gap-2">
          {renderStars(averageRating)}
          <span className="text-gray-700">
            ({averageRating.toFixed(1)} out of 5)
          </span>
        </div>
        <p className="text-gray-600 mt-2">
          Based on {reviews.length} reviews
        </p>
      </div>

      {/* Reviews List */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-gray-800 mb-4">User Reviews</h3>
        {reviews.length === 0 ? (
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <p className="text-gray-600">No reviews yet. Be the first to review!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-l-4 border-amber-500 pl-4 py-2 bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-semibold text-gray-800">{review.name}</p>
                  <div className="text-yellow-500">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <p className="text-gray-700 mt-2">{review.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Review Submission Form */}
      <div className="mt-8 border-t pt-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Leave a Review</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
            <div className="flex items-center">
              {renderStars(
                formData.rating, 
                true, 
                (rating) => setFormData({...formData, rating}),
                (rating) => setHoverRating(rating)
              )}
              <span className="ml-2 text-gray-600">{formData.rating || 0} out of 5</span>
            </div>
            <input type="hidden" name="rating" value={formData.rating} required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
            <textarea
              name="text"
              value={formData.text}
              onChange={handleInputChange}
              rows="4"
              placeholder="Share your thoughts about this text..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-2 rounded-lg transition"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewSection;