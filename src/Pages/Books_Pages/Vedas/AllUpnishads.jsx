import { useParams, useNavigate } from 'react-router-dom';
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import BookSection from './BookSection';
import AuthorSection from './AuthorSection';
import RelatedBooks from './RelatedBooks';
import Loading from '../Loading';
import upnishadsData from '../../../Json/upnishads.json';
import ReviewSection from './reviewSection';
import React, { useState } from 'react';


const AllUpnishads = () => {
  const { upnishadsId } = useParams();
   const navigate = useNavigate();
  const upnishad = upnishadsData.upanishads.find(v => v.id === upnishadsId);

  const handleBookSelect = (upnishadsId) => {
    // Find the book in the related books array
    const book = upnishad.relatedBooks.find(b => b.id === upnishadsId);
      navigate(`/upnishads/${book.id}`);

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
    const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Priya Patel",
      rating: 4,
      text: "The Manusmriti translation is excellent with detailed explanations of ancient laws and social structures.",
      category: "Smriti",
      book: "Manusmriti"
    }
  ]);

  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };
  if (!upnishad) {
    return <div>Upnishads not found</div>;
  }
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white text-gray-800 py-10 px-4 sm:px-6 md:px-20 mt-15">
        {/* Main Book Card */}
        <div className="App bg-gradient-to-b from-amber-50 to-amber-100 min-h-screen py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-10">
              <h1 className="text-4xl font-bold text-amber-900 mb-2">Sacred Texts Collection</h1>
              <p className="text-amber-700">Discover the wisdom of ancient scriptures</p>
            </header>

            <BookSection book={upnishad.book} />
            <AuthorSection author={upnishad.author} />
            <RelatedBooks books={upnishad.relatedBooks} onBookSelect={handleBookSelect} />
          </div>
        </div>

        {/* Rating & Reviews Section */}
        <div className="max-w-6xl mx-auto mt-12 sm:mt-16 bg-white rounded-3xl shadow-md p-6 sm:p-8 md:p-12 space-y-8">
          <ReviewSection category="Upnishads" bookTitle="The Upnishads"  reviews={reviews}
        onAddReview={handleAddReview}/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllUpnishads;