import React, { useState } from 'react';
// import './index.css'; // Make sure to import your Tailwind CSS

function App() {
  const [tripData, setTripData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    travelMode: '',
  });
  const [isTripPlanned, setIsTripPlanned] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const mantras = [
    "Om Namah Shivaya",
    "Hare Krishna Hare Krishna",
    "Om Jai Jagdish Hare",
    "Gayatri Mantra",
    "Vakratunda Mahakaya",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripData({ ...tripData, [name]: value });
  };

  const handlePlanTrip = (e) => {
    e.preventDefault();
    if (tripData.destination && tripData.startDate && tripData.endDate && tripData.travelMode) {
      setIsTripPlanned(true);
      setCurrentStep(0); // Reset progress for a new trip
    } else {
      alert("Please fill out all the fields.");
    }
  };

  const travelSteps = {
    car: [
      "Ensure your car is serviced and has a full tank.",
      "Plan your route and check for any traffic updates.",
      "Start your journey, make sure to take breaks.",
      "Arrive at your destination temple.",
      "Find parking and begin your darshan."
    ],
    train: [
      "Book your train tickets in advance.",
      "Pack essentials for the train journey.",
      "Take a local bus/auto to the railway station.",
      "Board the train and enjoy the ride.",
      "Reach the destination, then take a taxi/auto to the temple."
    ],
    plane: [
      "Book your flight tickets.",
      "Arrive at the airport 2-3 hours before your flight.",
      "Check in your luggage and pass through security.",
      "Board the flight and enjoy the aerial view.",
      "Upon landing, take a taxi to the temple."
    ],
    bus: [
      "Book your bus tickets.",
      "Pack light for the journey.",
      "Reach the bus stand on time.",
      "Board the bus and relax during the journey.",
      "Get down at the destination bus stop and take a local ride to the temple."
    ],
  };

  const budgetEstimates = {
    car: '₹5,000 - ₹10,000',
    train: '₹2,000 - ₹5,000',
    plane: '₹8,000 - ₹15,000',
    bus: '₹1,500 - ₹3,000',
  };

  const accommodationOptions = [
    { type: 'Basic', description: 'Dharamshala or budget guest house.', price: '₹500 - ₹1,000 / night' },
    { type: 'Medium', description: '3-star hotel with basic amenities.', price: '₹2,000 - ₹4,000 / night' },
    { type: 'Premium', description: '4-star hotel or resort with all facilities.', price: '₹5,000+ / night' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      
      {/* Mantra Header */}
      <div className="bg-yellow-600 text-white py-2 px-4 text-center text-lg font-bold">
        <marquee behavior="scroll" direction="left" scrollamount="5">
          {mantras.map((mantra, index) => (
            <span key={index} className="mx-8">{mantra}</span>
          ))}
        </marquee>
      </div>

      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-yellow-600 mb-8">Spiritual Trip Planner</h1>
        
        {/* Trip Planning Form */}
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-xl mb-8">
          <form onSubmit={handlePlanTrip} className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Plan Your Journey</h2>
            
            {/* Destination */}
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destination (Temple / City / State)</label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={tripData.destination}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Kashi Vishwanath Temple"
              />
            </div>
            
            {/* Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={tripData.startDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={tripData.endDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            {/* Travel Mode */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Travel Mode</label>
              <div className="flex flex-wrap gap-4">
                {['car', 'train', 'plane', 'bus'].map(mode => (
                  <label key={mode} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="travelMode"
                      value={mode}
                      checked={tripData.travelMode === mode}
                      onChange={handleInputChange}
                      className="form-radio h-4 w-4 text-yellow-600"
                    />
                    <span className="ml-2 capitalize text-gray-700">{mode}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-6 bg-yellow-600 text-white font-bold rounded-md hover:bg-yellow-700 transition-colors duration-200"
            >
              Plan My Trip
            </button>
          </form>
        </div>

        {/* Trip Details Section (Conditional) */}
        {isTripPlanned && (
          <div className="space-y-8">
            
            {/* Map Integration */}
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Route to {tripData.destination}</h2>
              <div className="w-full h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
                {/* This is a simple iframe. Replace with a library like react-google-maps for a real app. */}
                <iframe
                  title="google-maps"
                  src={`https://maps.google.com/maps?q=${tripData.destination}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Travel Steps and Progress */}
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Step-by-Step Travel Plan ({tripData.travelMode.toUpperCase()})</h2>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 transition-all duration-500 ease-in-out"
                    style={{ width: `${(currentStep / travelSteps[tripData.travelMode].length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Steps List */}
              <ul className="list-decimal list-inside space-y-2 text-gray-700">
                {travelSteps[tripData.travelMode].map((step, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer transition-colors duration-200 ${index < currentStep ? 'text-green-600 line-through' : 'hover:text-blue-500'}`}
                    onClick={() => setCurrentStep(index + 1)}
                  >
                    {step}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setCurrentStep(0)}
                className="mt-4 py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                Reset Progress
              </button>
            </div>
            
            {/* Expenses and Accommodation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Budget Estimator */}
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Budget Estimator</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Travel Cost ({tripData.travelMode.toUpperCase()})</h3>
                    <p className="text-green-600 text-xl font-bold">{budgetEstimates[tripData.travelMode]}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Additional Costs</h3>
                    <ul className="list-disc list-inside text-gray-700">
                      <li>Accommodation: Varies based on choice.</li>
                      <li>Food & Local Travel: Varies (approx. ₹500 - ₹1,500/day)</li>
                      <li>Temple Offerings & Donations: Optional.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Accommodation */}
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Accommodation near {tripData.destination}</h2>
                <div className="space-y-4">
                  {accommodationOptions.map((option, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-md">
                      <h3 className="text-lg font-semibold text-blue-700">{option.type}</h3>
                      <p className="text-gray-600 text-sm">{option.description}</p>
                      <p className="text-gray-800 font-bold mt-1">{option.price}</p>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;