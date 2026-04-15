import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const treksData = [
  {
    id: 1,
    name: "Triund Trek",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/42/10/8e/triund-hill.jpg?w=1200&h=1200&s=1",
    description: "The Triund Trek is one of Himachal Pradesh’s most beloved short treks—perfect for both beginners and seasoned hikers. Nestled in the Dhauladhar mountain range, this scenic trail starts from McLeod Ganj or Dharamkot and ascends through lush oak and deodar forests, offering jaw-dropping views of snow-clad peaks on one side and the Kangra valley on the other. In just 4–5 hours of hiking, you reach the Triund ridge, where the horizon opens up to panoramic mountain vistas, and nights under the stars become unforgettable memories. With a moderate difficulty level and rewarding scenery, Triund is ideal for a weekend adventure, a romantic campout, or a peaceful solo retreat into the mountains.",
    length: "9 km (one way)",
    startPoint: "McLeod Ganj / Dharamkot",
    location: { lat: 32.2556, lng: 76.3466 },
  },
  {
    id: 2,
    name: "Hampta Pass Trek",
    image: "https://dwq3yv87q1b43.cloudfront.net/public/blogs/fit-in/1200x675/Blog_20250325-1104890508-1742897167.jpg",
    description: "A dramatic crossover trek that takes you from the lush green valleys of Kullu to the arid, desert-like landscape of Lahaul. The pass itself is a stunning sight.",
    length: "35 km",
    startPoint: "Jobra, near Manali",
    location: { lat: 32.268, lng: 77.404 },
  },
  {
    id: 3,
    name: "Kheerganga Trek",
    image: "https://footlooseforever.com/wp-content/uploads/2025/03/ad_4nxco2sfcbdn_1zsqdkiue39-xj_ynxzg3q6u9rztyr2yuakuz7u60xbd-sdlhbjaz-1_a5f6artujp-inlvyebljjsfhczlrn2klgd5jrcnrmj094bzfhqxjx9re01djboc5clzt.jpg",
    description: "Famous for its natural hot water springs, Kheerganga is a spiritual and scenic journey through the Parvati Valley. The trail is lined with beautiful waterfalls.",
    length: "12 km (one way)",
    startPoint: "Barshaini",
    location: { lat: 31.9969, lng: 77.4478 },
  },
  {
    id: 4,
    name: "Bhrigu Lake Trek",
    image: "https://www.thesearchingsouls.com/wp-content/uploads/2023/05/bHRIGU-lAKE.jpg",
    description: "A high-altitude alpine lake, Bhrigu Lake is believed to be the meditation spot of the sage Bhrigu. The trek offers stunning panoramic views of the Pir Panjal and Dhauladhar ranges.",
    length: "25 km",
    startPoint: "Gulaba, near Manali",
    location: { lat: 32.3926, lng: 77.2458 },
  },
  {
    id: 5,
    name: "Pin Parvati Pass Trek",
    image: "https://trekthehimalayas.com/images/PinParvatiPassTrek/Slider/69e20414-c7a0-4b76-9d00-166c45cc0231_Pin-Parvati-Pass.webp",
    description: "A challenging and rewarding trek that connects the lush Parvati Valley to the barren Pin Valley in Spiti. It's an expedition for experienced trekkers.",
    length: "110 km",
    startPoint: "Kaza / Mudh",
    location: { lat: 31.868, lng: 77.92 },
  },
  {
    id: 6,
    name: "Beas Kund Trek",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=2070&auto=format&fit=crop",
    description: "This trek takes you to the source of the Beas River. It's a relatively short trek that offers close-up views of major peaks like Hanuman Tibba and Friendship Peak.",
    length: "16 km",
    startPoint: "Solang Valley",
    location: { lat: 32.369, lng: 77.164 },
  },
];

const MapPinIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const RouteIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="6" r="3" />
    <path d="M18 9a9 9 0 0 0-9 9" />
  </svg>
);

// ✅ Banner Section
const Banner = () => (
  <div
    className="relative h-[50vh] bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://www.naturetravelagency.com/uploads/1724499766best%20time%20to%20visit%20himachal%20Pradesh%20for%20snowfall.png')",
    }}
  >
    <div className="absolute inset-0 bg-black/65 flex flex-col items-center justify-center text-white p-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Himachal Trekking Adventures</h1>
      <p className="mt-4 text-lg md:text-xl max-w-2xl">
        Discover the most breathtaking trekking sites in the heart of the Himalayas.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold text-lg rounded-full shadow-md transition duration-300"
      >
        Go to Home
      </Link>
    </div>
  </div>
);

// ✅ Intro Section After Banner
const IntroSection = () => (
  <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 text-center">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
        Why Trekking in Himachal Pradesh is a Dream Come True
      </h2>
      <p className="text-lg text-gray-600">
        Nestled in the lap of the mighty Himalayas, Himachal Pradesh offers an unparalleled trekking experience that combines adventure, serenity, and spiritual bliss.
        From alpine lakes shimmering in the sunlight to ancient trails whispering legends, every step here connects you deeper with nature.
      </p>
      <p className="mt-4 text-lg text-gray-600">
        Whether you’re a first-time hiker or a seasoned mountaineer, Himachal's trails will challenge your spirit, refresh your soul, and leave you craving for more.
      </p>
    </div>
  </section>
);

// ✅ Trek Card
const TrekCard = ({ trek, onSelect }) => (
  <div
    className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer group"
    onClick={() => onSelect(trek)}
  >
    <img src={trek.image} alt={trek.name} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">
        {trek.name}
      </h3>
      <p className="text-gray-600 mt-2 flex items-center">
        <RouteIcon className="w-5 h-5 mr-2 text-gray-500" />
        {trek.length}
      </p>
    </div>
  </div>
);

// ✅ Modal for Trek Detail
const TrekDetailModal = ({ trek, onClose }) => {
  if (!trek) return null;
  const mapSrc = `https://maps.google.com/maps?q=${trek.location.lat},${trek.location.lng}&hl=en&z=14&output=embed`;

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-130 overflow-y-auto relative flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 bg-white/50 backdrop-blur-sm rounded-full p-2 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="w-full lg:w-1/2 p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{trek.name}</h2>
          <p className="text-gray-700 mb-6">{trek.description}</p>
          <div className="space-y-4">
            <div className="flex items-center text-lg">
              <RouteIcon className="w-6 h-6 mr-3 text-yellow-600 flex-shrink-0" />
              <div>
                <span className="font-semibold text-gray-800">Trek Length:</span>
                <span className="text-gray-600 ml-2">{trek.length}</span>
              </div>
            </div>
            <div className="flex items-center text-lg">
              <MapPinIcon className="w-6 h-6 mr-3 text-yellow-600 flex-shrink-0" />
              <div>
                <span className="font-semibold text-gray-800">Starting Point:</span>
                <span className="text-gray-600 ml-2">{trek.startPoint}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 min-h-[500px] lg:min-h-full">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-b-2xl lg:rounded-l-none lg:rounded-r-2xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

// ✅ Final App Component
export default function App() {
  const [selectedTrek, setSelectedTrek] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Navbar />
      <Banner />
      <IntroSection />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Explore the Trails</h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">Click on a trek to see more details and its location.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treksData.map((trek) => (
            <TrekCard key={trek.id} trek={trek} onSelect={setSelectedTrek} />
          ))}
        </div>
      </main>
      <TrekDetailModal trek={selectedTrek} onClose={() => setSelectedTrek(null)} />
      <Footer />
    </div>
  );
}
