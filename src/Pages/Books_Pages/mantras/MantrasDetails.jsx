import { useState } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import MantraSection from './MantraSection';
import MantrasAuthorSection from './MantrasAuthorSection';
import RelatedMantras from './RelatedMantras';
import mantrasData from '../../../Json/mantraDetails.json';
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";


const MantrasDetails = () => {
  const { mantraId } = useParams();
    const navigate = useNavigate();
  const mantra = mantrasData.mantras.find(m => m.id === mantraId);
  const [selectedMantra, setSelectedMantra] = useState(null);

  const handleMantraSelect = (mantraId) => {
    const selected = mantra.relatedMantras.find(m => m.id === mantraId);
      navigate(`/mantras/${selected.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!mantra) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Mantra Not Found</h2>
          <p className="text-gray-700">The requested mantra could not be found.</p>
        </div>
      </div>
    );
  }

  return (
      <>
      <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white text-gray-800 py-10 px-4 sm:px-6 md:px-20 mt-15">
        {/* Main Book Card */}
       <div className="App bg-gradient-to-b from-amber-50 to-amber-100 min-h-screen py-8 px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Sacred Mantras</h1>
          <p className="text-blue-700 text-lg">Ancient chants for spiritual transformation</p>
        </header>

       <MantraSection mantra={mantra.mantra} />
      <MantrasAuthorSection author={mantra.author} />
      <RelatedMantras mantras={mantra.relatedMantras} onMantraSelect={handleMantraSelect} />

        {/* Practice Guide */}
        <div className="max-w-6xl mx-auto mt-12 bg-white rounded-3xl shadow-md p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">How to Practice This Mantra</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">Step 1: Preparation</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Take a bath or wash your hands and face</li>
                <li>Find a quiet, clean space for practice</li>
                <li>Sit facing east or north if possible</li>
                <li>Use a meditation cushion for comfort</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-700 mb-2">Step 2: Posture</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Sit in Padmasana, Sukhasana or on a chair</li>
                <li>Keep your spine straight and shoulders relaxed</li>
                <li>Rest your hands on your knees in Chin or Jnana mudra</li>
                <li>Close your eyes gently</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Step 3: Chanting</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Begin with three deep breaths</li>
                <li>Chant the mantra with correct pronunciation</li>
                <li>Focus on the meaning and vibration</li>
                <li>Use a mala to count repetitions if needed</li>
              </ul>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-amber-700 mb-2">Step 4: Completion</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>After chanting, sit quietly for a few minutes</li>
                <li>Observe the stillness and vibrations</li>
                <li>Slowly bring awareness back to your surroundings</li>
                <li>Express gratitude for the practice</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
       <Footer />
        </>
  );
};

export default MantrasDetails;