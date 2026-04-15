import React, { useState, useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../Pages/FamousPlaces/chitrakoot.css';
import ramRamAudio from './../../assets/audio/heyRam.mp4';

export default function ChitrakootApp() {
  const [currentImage, setCurrentImage] = useState(0);
  const [expandedTemple, setExpandedTemple] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef(null);
  // Sample data for temples
  const temples = [
    {
      id: 1,
      name: "Kamadgiri Temple",
      description: "Considered the most sacred place in Chitrakoot, this temple is believed to be the original Chitrakoot. The Parikrama (circumambulation) of this mountain is about 5 km and is said to fulfill all wishes of devotees.",
      detailedInfo: "Kamadgiri, meaning 'the mountain that fulfills desires', is the heart of Chitrakoot. It is believed to be the original Chitrakoot where Lord Rama spent his exile. The temple complex includes many small shrines dedicated to various deities. Devotees perform parikrama (circumambulation) of the hill which is approximately 5 km long and takes about 2-3 hours to complete.",
      image: "https://images.unsplash.com/photo-1548708612-7896d3434d67?ixlib=rb-4.0.3",
      timing: "5:00 AM - 9:00 PM",
      bestTimeToVisit: "October to March",
      significance: "Fulfills wishes, Spiritual enlightenment",
      link: "/temples/kamadgiri"
    },
    {
      id: 2,
      name: "Bharat Milap Temple",
      description: "This temple marks the spot where Bharata met Lord Rama to persuade him to return to Ayodhya and take his rightful place on the throne.",
      detailedInfo: "Bharat Milap Temple commemorates the emotional meeting between Lord Rama and his brother Bharata after their father's death. According to Ramayana, Bharata traveled to Chitrakoot to request Rama's return to Ayodhya. The temple stands at the exact spot where this historic meeting took place. The site is marked by the footprints of Lord Rama and Bharata.",
      image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3",
      timing: "6:00 AM - 8:00 PM",
      bestTimeToVisit: "Throughout the year",
      significance: "Brotherly love, Duty and responsibility",
      link: "/temples/bharat-milap"
    },
    {
      id: 3,
      name: "Hanuman Dhara Temple",
      description: "Located on a hilltop, this temple features a natural stream of water flowing over the idol of Hanuman. It is reached by climbing 360 steps.",
      detailedInfo: "Hanuman Dhara Temple is situated on a hilltop and is dedicated to Lord Hanuman. The temple gets its name from the continuous stream of water (dhara) that falls on the Hanuman idol. According to legend, after setting Lanka on fire, Lord Hanuman came here to cool himself. Lord Rama created this water stream to soothe him. The climb of 360 steps offers a panoramic view of Chitrakoot.",
      image: "https://images.unsplash.com/photo-1580327452092-fc076e57d3a5?ixlib=rb-4.0.3",
      timing: "5:30 AM - 7:30 PM",
      bestTimeToVisit: "October to March",
      significance: "Devotion, Strength and perseverance",
      link: "/temples/hanuman-dhara"
    },
    {
      id: 4,
      name: "Sati Anusuya Ashram",
      description: "This ancient ashram is dedicated to Sati Anusuya, known for her devotion and chastity. It's believed that the Mandakini River was created here.",
      detailedInfo: "Sati Anusuya Ashram is located amidst dense forests about 16 km from Chitrakoot. It was the hermitage of Sage Atri and his wife Anusuya. According to mythology, the trinity of gods - Brahma, Vishnu, and Shiva - tested Anusuya's devotion and were turned into babies by her power. The Mandakini River is believed to have originated here when Anusuya performed penance.",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3",
      timing: "Sunrise to Sunset",
      bestTimeToVisit: "October to March",
      significance: "Devotion, Chastity, Spiritual power",
      link: "/temples/sati-anusuya"
    },
    {
      id: 5,
      name: "Ram Ghat",
      description: "The most famous ghat in Chitrakoot where Lord Rama bathed daily during his exile. Evening aarti here is a mesmerizing experience.",
      detailedInfo: "Ram Ghat is the main bathing ghat on the Mandakini River where Lord Rama, Sita, and Lakshmana bathed during their exile. It is believed that taking a dip in the sacred waters of Ram Ghat cleanses one of all sins. The evening aarti (prayer ceremony) is a spectacular sight with hundreds of lamps floating on the river. Many rituals and ceremonies are performed here throughout the year.",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3",
      timing: "24 hours",
      bestTimeToVisit: "October to March",
      significance: "Purification, Spiritual cleansing, Divine connection",
      link: "/temples/ram-ghat"
    },
    {
      id: 6,
      name: "Gupt Godavari",
      description: "A mysterious cave with two natural throne-like stones believed to have been used by Rama and Lakshmana, and a stream that appears and disappears.",
      detailedInfo: "Gupt Godavari is a fascinating cave located about 18 km from Chitrakoot. It features two natural throne-like stones believed to have been used by Lord Rama and Lakshmana for holding court. The cave has a stream that appears from nowhere and disappears into the ground, reminiscent of the Godavari River. The narrow passages and natural formations make it an intriguing spiritual site.",
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3",
      timing: "8:00 AM - 5:00 PM",
      bestTimeToVisit: "October to March",
      significance: "Mystery, Divine presence, Natural wonder",
      link: "/temples/gupt-godavari"
    }
  ];

  // Major Festivals data
  const festivals = [
    {
      id: 1,
      name: "Ram Navami",
      description: "Celebration of Lord Rama's birth with special prayers and processions",
      image: "https://images.unsplash.com/photo-1604535596136-5f5a92ca92b2?ixlib=rb-4.0.3",
      time: "March/April"
    },
    {
      id: 2,
      name: "Diwali",
      description: "Festival of lights celebrating Lord Rama's return to Ayodhya",
      image: "https://images.unsplash.com/photo-1605190557072-1c8c2d43640a?ixlib=rb-4.0.3",
      time: "October/November"
    },
    {
      id: 3,
      name: "Makar Sankranti",
      description: "Holy bath in Mandakini River and donation ceremonies",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3",
      time: "January"
    },
    {
      id: 4,
      name: "Shravan Maas",
      description: "Special month of worship with daily rituals and fasting",
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3",
      time: "July/August"
    }
  ];

  // Nearby Attractions data
  const attractions = [
    {
      id: 1,
      name: "Panna National Park",
      description: "Famous tiger reserve and diamond mines",
      image: "https://images.unsplash.com/photo-1564349683132-038d46bcb9be?ixlib=rb-4.0.3",
      distance: "70 km"
    },
    {
      id: 2,
      name: "Khajuraho Temples",
      description: "UNESCO World Heritage site with exquisite sculptures",
      image: "https://images.unsplash.com/photo-1588507391986-4b513cee8492?ixlib=rb-4.0.3",
      distance: "130 km"
    },
    {
      id: 3,
      name: "Prayagraj (Allahabad)",
      description: "Holy confluence of Ganges, Yamuna and Saraswati rivers",
      image: "https://images.unsplash.com/photo-1581510716806-5e5eeceb0c32?ixlib=rb-4.0.3",
      distance: "120 km"
    },
    {
      id: 4,
      name: "Kalinjar Fort",
      description: "Ancient fort with historical and architectural significance",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3",
      distance: "90 km"
    }
  ];

  // Art, Music & Culture data
  const culture = [
    {
      id: 1,
      name: "Ram Leela",
      description: "Traditional dramatic re-enactment of Lord Rama's life",
      image: "https://images.unsplash.com/photo-1572981779307-38f8b8849d3f?ixlib=rb-4.0.3"
    },
    {
      id: 2,
      name: "Classical Music",
      description: "Devotional singing and classical music traditions",
      image: "https://images.unsplash.com/photo-1511370235399-1802c9e8d9e7?ixlib=rb-4.0.3"
    },
    {
      id: 3,
      name: "Traditional Crafts",
      description: "Wood carving and religious artifact making",
      image: "https://images.unsplash.com/photo-1565307528294-f70f3c7094e2?ixlib=rb-4.0.3"
    },
    {
      id: 4,
      name: "Spiritual Discourses",
      description: "Religious storytelling and philosophical discussions",
      image: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3"
    }
  ];

  // Traditional Food data
  const foods = [
    {
      id: 1,
      name: "Chitrakoot Peda",
      description: "Sweet milk-based delicacy, a local specialty",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3"
    },
    {
      id: 2,
      name: "Satvik Thali",
      description: "Pure vegetarian meal without onion or garlic",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3"
    },
    {
      id: 3,
      name: "Kachori Sabzi",
      description: "Spicy fried pastry with vegetable curry",
      image: "https://images.unsplash.com/photo-1630918037678-a8f7e0f9c9c6?ixlib=rb-4.0.3"
    },
    {
      id: 4,
      name: "Jalebi",
      description: "Sweet, syrupy spiral-shaped dessert",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3"
    }
  ];

  const chitrakootImages = [
    "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1548708612-7896d3434d67?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1580327452092-fc076e57d3a5?ixlib=rb-4.0.3"
  ];
// Define your Ram Ram audio URL here, using passed prop or fallback
  // const ramRamAudio = audioSrc || 'C:\Users\hp\Documents\DhamMahimaReact\mahima\src\assets\audio/heyRam.mp4';
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    // Auto change hero images every 5 seconds
    const imageInterval = setInterval(() => {
      setCurrentImage(prev => (prev === chitrakootImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(imageInterval);
    };
  }, []);

  const prevSlide = () =>
    setCurrentImage((prev) => (prev === 0 ? chitrakootImages.length - 1 : prev - 1));
  
  const nextSlide = () =>
    setCurrentImage((prev) => (prev === chitrakootImages.length - 1 ? 0 : prev + 1));

  const toggleTempleExpand = (id) => {
    if (expandedTemple === id) {
      setExpandedTemple(null);
    } else {
      setExpandedTemple(id);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-orange-800 font-semibold">Loading Spiritual Journey...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-900 to-black text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-white p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold">Chitrakoot Dham</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#overview" className="hover:text-orange-300 transition">Overview</a>
            <a href="#temples" className="hover:text-orange-300 transition">Temples</a>
            <a href="#festivals" className="hover:text-orange-300 transition">Festivals</a>
            <a href="#attractions" className="hover:text-orange-300 transition">Attractions</a>
            <a href="#culture" className="hover:text-orange-300 transition">Culture</a>
            <a href="#food" className="hover:text-orange-300 transition">Food</a>
            <a href="#gallery" className="hover:text-orange-300 transition">Gallery</a>
            <a href="#visit" className="hover:text-orange-300 transition">Plan Visit</a>
          </nav>
          <button className="bg-orange-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-orange-400 transition">
            Plan Pilgrimage
          </button>
        </div>
      </header>
       {/* Hero Section */}
      <div className="relative h-96 w-full overflow-hidden">
        {/* Background image (current slide) */}
        <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${chitrakootImages[currentImage]})`,
          }}
        />

        {/* Optional dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

        {/* Content overlay (centered text) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 drop-shadow">
            Welcome to Chitrakoot Dham
          </h1>
          <p className="text-lg md:text-xl max-w-2xl opacity-95">
            The Spiritual Abode Where Divinity Meets Nature's Serenity
          </p>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-full shadow-md">
            Begin Spiritual Journey
          </button>
        </div>

        {/* Image indicators (bottom center) */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {chitrakootImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              aria-label={`View image ${idx + 1}`}
              className={`w-3 h-3 rounded-full ${idx === currentImage ? 'bg-orange-400' : 'bg-white'} focus:outline-none focus:ring-2 focus:ring-orange-300`}
            />
          ))}
        </div>

        {/* Top-right mini audio player overlay */}
        <div className="absolute top-3 right-3 z-40 bg-white/90 backdrop-blur-md rounded-lg shadow-md border border-white/60 px-3 py-2 flex items-center gap-2"
             role="group" aria-label="Audio player">
          <button
            aria-label="Play audio"
            onClick={() => audioRef.current?.play()}
            className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600"
          >
            <span className="sr-only">Play</span>
            ▶
          </button>
          <button
            aria-label="Pause audio"
            onClick={() => audioRef.current?.pause()}
            className="w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center hover:bg-yellow-600"
          >
            <span className="sr-only">Pause</span>
            ❚❚
          </button>
          <button
            aria-label="Stop audio"
            onClick={() => {
              if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
              }
            }}
            className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600"
          >
            <span className="sr-only">Stop</span>
            ■
          </button>

          {/* Hidden audio element (provide your actual source) */}
          <audio ref={audioRef} src={ ramRamAudio} preload="auto" />
        </div>
      </div>
     

      {/* Overview Section */}
      <section id="overview" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-orange-800 mb-8">The Spiritual Significance of Chitrakoot</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-6">
              Chitrakoot, meaning "the hill of many wonders," is a sacred town of religious, historical, archaeological and ecological importance. Situated in the northern Vindhya range of mountains, it is known for its natural beauty and spiritual significance.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              This holy place is believed to be where Lord Rama, Sita, and Lakshmana spent eleven and half years of their fourteen years of exile. It is said that all gods and goddesses came to Chitrakoot when Rama performed the Shraddha ceremony of his father.
            </p>
            <p className="text-lg text-gray-700">
              The serene Mandakini River, lush forests, and peaceful atmosphere make Chitrakoot an ideal destination for spiritual seekers and nature lovers alike.
            </p>
          </div>
        </div>
      </section>

      {/* Temples Section */}
      <section id="temples" className="py-16 bg-orange-50 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-orange-800 mb-12">Sacred Temples of Chitrakoot</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {temples.map((temple) => (
              <div key={temple.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={temple.image} 
                    alt={temple.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-orange-800 mb-2">{temple.name}</h3>
                  <p className="text-gray-600 mb-4">{temple.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Sacred Site</span>
                    <button 
                      onClick={() => toggleTempleExpand(temple.id)}
                      className="text-orange-700 font-semibold flex items-center"
                    >
                      {expandedTemple === temple.id ? 'Show Less' : 'Read More'}
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 transition-transform ${expandedTemple === temple.id ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  
                  {expandedTemple === temple.id && (
                    <div className="mt-4 pt-4 border-t border-orange-100">
                      <h4 className="font-semibold text-orange-700 mb-2">Detailed Information:</h4>
                      <p className="text-gray-700 mb-4">{temple.detailedInfo}</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-orange-700">Timings:</h5>
                          <p className="text-gray-600">{temple.timing}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-orange-700">Best Time to Visit:</h5>
                          <p className="text-gray-600">{temple.bestTimeToVisit}</p>
                        </div>
                        <div className="col-span-2">
                          <h5 className="font-semibold text-orange-700">Significance:</h5>
                          <p className="text-gray-600">{temple.significance}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <Link
                          to={temple.link}
                          className="text-orange-600 hover:text-orange-800 font-medium text-sm flex items-center"
                        >
                          Detailed Explanation
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Festivals Section */}
      <section id="festivals" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-orange-800 mb-12">Major Festivals of Chitrakoot</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {festivals.map((festival) => (
              <div key={festival.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={festival.image} 
                    alt={festival.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-orange-800 mb-2">{festival.name}</h3>
                  <p className="text-gray-600 mb-2">{festival.description}</p>
                  <p className="text-orange-600 font-semibold">Time: {festival.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Attractions Section */}
      <section id="attractions" className="py-16 bg-orange-50 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-orange-800 mb-12">Nearby Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {attractions.map((attraction) => (
              <div key={attraction.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-orange-800 mb-2">{attraction.name}</h3>
                  <p className="text-gray-600 mb-2">{attraction.description}</p>
                  <p className="text-orange-600 font-semibold">Distance: {attraction.distance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Art, Music & Culture Section */}
      <section id="culture" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-orange-800 mb-12">Art, Music & Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-orange-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional Food Section */}
      <section id="food" className="py-16 bg-orange-50 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-orange-800 mb-12">Traditional Food</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {foods.map((food) => (
              <div key={food.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={food.image} 
                    alt={food.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-orange-800 mb-2">{food.name}</h3>
                  <p className="text-gray-600">{food.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-orange-800 mb-8">Chitrakoot Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {chitrakootImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src={image} 
                  alt={`Chitrakoot ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Visit Section */}
      <section id="visit" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-orange-800 mb-8">Plan Your Spiritual Journey</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-orange-800 mb-2">Best Time to Visit</h3>
                <p className="text-gray-600">October to March offers pleasant weather for spiritual activities and exploration.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-orange-800 mb-2">How to Reach</h3>
                <p className="text-gray-600">Well connected by road, rail, and air with nearest airport in Prayagraj (120 km away).</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-orange-800 mb-2">Stay Options</h3>
                <p className="text-gray-600">Various dharamshalas, ashrams, and hotels available for all budgets.</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <button className="bg-orange-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
                Download Pilgrimage Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Chitrakoot Dham</h3>
              <p className="text-green-200">The Spiritual Heart of India where divinity meets nature's beauty.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white transition">Home</a></li>
                <li><a href="#temples" className="text-green-200 hover:text-white transition">Temples</a></li>
                <li><a href="#gallery" className="text-green-200 hover:text-white transition">Gallery</a></li>
                <li><a href="#visit" className="text-green-200 hover:text-white transition">Plan Visit</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <address className="not-italic text-green-200">
                <p>Chitrakoot, Uttar Pradesh</p>
                <p className="mt-2">India</p>
                <p className="mt-2">info@chitrakootdham.com</p>
                <p className="mt-2">+91 98765 43210</p>
              </address>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-green-200 mb-4">Subscribe for spiritual updates and events</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-lg text-gray-800 w-full" />
                <button className="bg-yellow-500 text-green-900 px-4 py-2 rounded-r-lg font-semibold">Subscribe</button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-200">
            <p>© {new Date().getFullYear()} Chitrakoot Dham. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};