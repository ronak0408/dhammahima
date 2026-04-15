import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { 
  FaBell, 
  FaCalendarAlt, 
  FaBook, 
  FaMapMarkerAlt,
  FaMinus,
  FaPlus,
  FaArrowRight 
} from 'react-icons/fa';

const sections = [
  {
    title: "Vedas",
    items: [
      { name: "Rigveda", link: "/vedas/rigveda" },
      { name: "Samaveda", link: "/vedas/samaveda" },
      { name: "Yajurveda", link: "/vedas/yajurveda" },
      { name: "Atharvaveda", link:  "/vedas/atharvaveda"}
    ],
  },
  {
    title: "Itihasas",
    items: [
      { name: "Ramayana", link: "/itihasas/ramayana" },
      { name: "Mahabharata", link: "/itihasas/mahabharata" },
      { name: "Bhagavad Gita", link: "/itihasas/bhagavad-gita" },
    ],
  },
  {
    title: "Upanishads",
    items: [
      { name: "Isha Upanishad", link: "/upnishads/isha-upanishad" },
      { name: "Kena Upanishad", link: "/upnishads/kena-upanishad" },
      { name: "Mundaka Upanishad", link: "/upnishads/mundaka-upanishad" },
      { name: "Mandukya Upanishad", link: "/upnishads/mandukya-upanishad" },
      { name: "Chandogya Upanishad", link: "/upnishads/chandogya-upanishad" },
      { name: "Brihadaranyaka Upanishad", link: "/upnishads/brihadaranyaka-upanishad" },
      { name: "Taittiriya Upanishad", link: "/upnishads/taittiriya-upanishad" },
      { name: "Aitareya Upanishad", link: "/upnishads/aitareya-upanishad" },
    ],
  },
  {
    title: "Smritis",
    items: [
      { name: "Manusmriti", link: "/smriti/manusmriti" },
      { name: "Yajnavalkya Smriti", link: "/smriti/yajnavalkya-smriti" },
      { name: "Narada Smriti", link: "/smriti/narada-smriti" },
      { name: "Parashara Smriti", link: "/smriti/parashara-smriti" },
    ],
  },
  {
    title: "Puranas",
    items: [
      { name: "Bhagavata Purana", link: "/puranas/bhagavata-purana" },
      { name: "Vishnu Purana", link: "/puranas/vishnu-purana" },
      { name: "Shiva Purana", link: "/puranas/shiva-purana" },
      { name: "Markandeya Purana", link: "/puranas/markandeya-purana" },
      { name: "Brahma Purana", link: "/puranas/brahma-purana" },
      { name: "Skanda Purana", link: "/puranas/skanda-purana" },
      { name: "Padma Purana", link: "/puranas/padma-purana" },
      { name: "Narada Purana", link: "/puranas/narada-purana" },
    ],
  },
  {
    title: "Granths",
    items: [
      { name: "Guru Granth Sahib", link: "/granth/guru-granth-sahib" },
      { name: "Ramcharitmanas", link: "/granth/ramcharitmanas" },
      { name: "Hanuman Chalisa", link: "/granth/hanuman-chalisa" },
      { name: "Ashtavakra Gita", link: "/granth/ashtavakra-gita" },
      { name: "Shankar Bhashya (Commentaries)", link: "/granth/shankar-bhashya" },
    ],
  },
 {
  title: "Mantras",
  items: [
    // Vishnu/Lakshmi Mantras
    { name: "Gayatri Mantra", link: "/mantras/gayatri-mantra" },
    { name: "Mahamrityunjaya Mantra", link: "/mantras/mahamrityunjaya-mantra" },
    { name: "Om Namo Narayanaya", link: "/mantras/om-namo-narayanaya" },
    { name: "Hare Krishna Mahamantra", link: "/mantras/hare-krishna-mahamantra" },
    { name: "Vishnu Sahasranama", link: "/mantras/vishnu-sahasranama" },
    { name: "Lakshmi Mantra", link: "/mantras/lakshmi-mantra" },
    
    // Shiva Mantras
    { name: "Om Namah Shivaya", link: "/mantras/om-namah-shivaya" },
    { name: "Shiva Tandava Stotram", link: "/mantras/shiva-tandava" },
    { name: "Rudra Gayatri", link: "/mantras/rudra-gayatri" },
    { name: "Shiva Mahimna Stotra", link: "/mantras/shiva-mahimna" },
    
    // Devi Mantras
    { name: "Durga Mantra", link: "/mantras/durga-mantra" },
    { name: "Saraswati Mantra", link: "/mantras/saraswati-mantra" },
    { name: "Navarna Mantra (Devi Kavacham)", link: "/mantras/navarna" },
    { name: "Lalita Sahasranama", link: "/mantras/lalita-sahasranama" },
    
    // Ganesha Mantras
    { name: "Ganesh Mantra", link: "/mantras/ganesh-mantra" },
    { name: "Ganesh Atharvashirsha", link: "/mantras/ganesh-atharvashirsha" },
    { name: "Vakratunda Mahakaya", link: "/mantras/vakratunda" },
    
    // Planetary Mantras (Navagraha)
    { name: "Surya Mantra", link: "/mantras/surya-mantra" },
    { name: "Chandra Mantra", link: "/mantras/chandra" },
    { name: "Mangal Mantra", link: "/mantras/mangal" },
    { name: "Budh Mantra", link: "/mantras/budh" },
    { name: "Guru Mantra", link: "/mantras/guru" },
    { name: "Shukra Mantra", link: "/mantras/shukra" },
    { name: "Shani Mantra", link: "/mantras/shani" },
    { name: "Rahu Mantra", link: "/mantras/rahu" },
    { name: "Ketu Mantra", link: "/mantras/ketu" },
    
    // Daily Practice Mantras
    { name: "Sandhya Mantra", link: "/mantras/sandhya" },
    { name: "Pratah Smarana Mantra", link: "/mantras/pratah" },
    { name: "Shanti Mantra (Om Sahana Vavatu)", link: "/mantras/shanti-mantra" },
    { name: "Guru Mantra (Om Shri Gurave Namah)", link: "/mantras/guru-mantra" },
    
    // Special Purpose Mantras
    { name: "Mrityunjaya Mantra (Alternate)", link: "/mantras/mrityunjaya-alt" },
    { name: "Dhanvantri Mantra (Healing)", link: "/mantras/dhanvantri" },
    { name: "Vastu Shanti Mantra", link: "/mantras/vastu" },
    { name: "Garbha Raksha Mantra (Pregnancy)", link: "/mantras/garbha-raksha" },
    { name: "Shanti Mantra", link: "/mantras/shanti-mantra"}
  ]
},
  {
    title: "Yoga Sutra",
    items: [
      { name: "Yoga Sutras of Patanjali", link: "/yogSutra/yoga-sutras-of-patanjali" },
      { name: "Hatha Yoga Pradipika", link: "/yogSutra/hatha-yoga-pradipika" },
      { name: "Bhagavad Gita (Yoga Sections)", link: "/yogSutra/bhagavad-gita-yoga-sections" },
      { name: "Gheranda Samhita", link: "/yogSutra/gheranda-samhita" },
      { name: "Shiva Samhita", link: "/yogSutra/shiva-samhita" },
    ],
  }
];

export default function Books() {
  const [visibleItems, setVisibleItems] = useState(8); // Initial number of items to show
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="relative flex flex-col min-h-screen text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://www.chardham-pilgrimage-tour.com/assets/images/top-tourist-places-enroute-kedarnath-dham.webp" // Replace with your image path
          alt="Hinduism Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero */}
        <section className="pt-20 pb-8 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Hinduism Sacred Books
          </h1>
          <p className="mt-2 text-lg md:text-xl font-medium">
            Vedas • Upanishads • Puranas • Smritis • Granths • Mantras • Yoga Sutra
          </p>
        </section>

        {/* Content */}
    
 <section className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-6 pb-10">
      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-10">
        {sections.map((section, idx) => (
                 <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-2xl transition">
            <h2 className="text-xl font-bold mb-3 border-b border-yellow-300 pb-2">
              {section.title}
            </h2>
            <ul className="space-y-2">
              {section.items.slice(0, visibleItems).map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.link}
                    className="text-base hover:text-yellow-300 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Show More button (only when there are more items) */}
            {section.items.length > 8 && visibleItems < section.items.length && (
              <button
                onClick={() => setVisibleItems(prev => prev + 8)}
                className="mt-3 text-yellow-300 hover:text-yellow-400 text-sm flex items-center"
              >
                Show More <FaArrowRight className="ml-1" />
              </button>
            )}
            {/* View All link (alternative approach) */}
            {section.items.length > 8 && (
              <Link 
                to={`/mantras`} 
                className="mt-2 block text-sm text-yellow-300 hover:text-yellow-400"
              >
                View All {section.title} →
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Accordion */}
      <div className="md:hidden space-y-4">
        {sections.map((section, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl shadow-md">
            <button
              onClick={() => toggleSection(idx)}
              className="w-full flex justify-between items-center p-4 text-lg font-semibold"
            >
              {section.title}
              {openIndex === idx ? <FaMinus /> : <FaPlus />}
            </button>
            {openIndex === idx && (
              <ul className="px-4 pb-3 space-y-2">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.link}
                      className="text-base hover:text-yellow-300 transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Additional Links */}
       <div className="mt-16 border-t border-yellow-300/30 pt-10">
    <h3 className="text-xl font-bold mb-6 text-center">More Spiritual Resources</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Link 
        to="/daily-puja" 
        className="bg-white/5 hover:bg-yellow-500/10 p-4 rounded-lg text-center transition-colors"
      >
        <div className="text-yellow-300 mb-2">
          <FaBell className="inline-block text-xl" />
        </div>
        Daily Puja Guide
      </Link>
      <Link 
        to="/festivals" 
        className="bg-white/5 hover:bg-yellow-500/10 p-4 rounded-lg text-center transition-colors"
      >
        <div className="text-yellow-300 mb-2">
          <FaCalendarAlt className="inline-block text-xl" />
        </div>
        Hindu Festivals
      </Link>
      <Link 
        to="/sacred-texts" 
        className="bg-white/5 hover:bg-yellow-500/10 p-4 rounded-lg text-center transition-colors"
      >
        <div className="text-yellow-300 mb-2">
          <FaBook className="inline-block text-xl" />
        </div>
        Sacred Texts
      </Link>
      <Link 
        to="/temple-locator" 
        className="bg-white/5 hover:bg-yellow-500/10 p-4 rounded-lg text-center transition-colors"
      >
        <div className="text-yellow-300 mb-2">
          <FaMapMarkerAlt className="inline-block text-xl" />
        </div>
        Temple Locator
      </Link>
    </div>
  </div>

  {/* Quick Links Footer */}
  <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
    <Link to="/about" className="hover:text-yellow-300 transition">About Us</Link>
    <span className="text-gray-400">•</span>
    <Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link>
    <span className="text-gray-400">•</span>
    <Link to="/privacy" className="hover:text-yellow-300 transition">Privacy Policy</Link>
    <span className="text-gray-400">•</span>
    <Link to="/donate" className="text-yellow-300 hover:text-yellow-400 transition">Donate</Link>
  </div>

      <Outlet />
    </section>
      </div>
    </main>
  );
}
