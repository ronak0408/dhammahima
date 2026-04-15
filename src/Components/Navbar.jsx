
import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Search, User, Mic, X, Loader2,Camera,Upload } from "lucide-react";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const routeMap = {
  kedarnath: "/kedarnath",
  badrinath: "/badrinath",
  gangotri: "/gangotri",
  calendar: "/festival-calendar",
  yamunotri: "/yamunotri",
  "vaishno devi": "/vaishnodevi",
  "mount kailash": "/mountkailash",
  varanasi: "/varanasi",
  chitrakoot: "/chitrakoot",
  haridwar: "/haridwar",
  "mathura vrindavan": "/mathura-vrindavan",

};

const Navbar = () => {
   const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageResults, setImageResults] = useState([]);
  const [isImageProcessing, setIsImageProcessing] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isVoicePopupOpen, setIsVoicePopupOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceResult, setVoiceResult] = useState("");
  const [recognition, setRecognition] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

   // Use the translation hook
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [recognition]);

  const initVoiceRecognition = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert(t('voiceNotSupported'));
      return null;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-IN"; // Set to Indian English

    recognition.onresult = (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0].transcript)
        .join("");
      setVoiceResult(transcript);
    };

    recognition.onerror = (e) => {
      console.error("Voice error:", e.error);
      setIsListening(false);
      setIsProcessing(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    return recognition;
  };

  const toggleListening = () => {
    if (!recognition) {
      const newRecognition = initVoiceRecognition();
      if (!newRecognition) return;
      setRecognition(newRecognition);
      newRecognition.start();
      setIsListening(true);
      setVoiceResult("");
    } else {
      if (isListening) {
        recognition.stop();
      } else {
        recognition.start();
      }
      setIsListening(!isListening);
    }
  };

  const handleVoiceSearchSubmit = async () => {
    if (!voiceResult) return;
    
    setIsProcessing(true);
    
    try {
      const query = voiceResult.trim().toLowerCase();
      
      // Check if the voice result matches any route directly
      if (routeMap[query]) {
        navigate(routeMap[query]);
      } else {
        // Check for partial matches
        const matchedRoute = Object.keys(routeMap).find(key => 
          query.includes(key.toLowerCase())
        );
        
        if (matchedRoute) {
          navigate(routeMap[matchedRoute]);
        } else {
          // Fallback to search page
          navigate(`/search?q=${encodeURIComponent(query)}`);
        }
      }
    } catch (error) {
      console.error("Voice search failed:", error);
    } finally {
      setIsProcessing(false);
      setIsVoicePopupOpen(false);
      setVoiceResult("");
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (routeMap[query]) {
      navigate(routeMap[query]);
    } else {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
    setShowSearch(false);
    setSearchQuery("");
    setSuggestions([]);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    const filtered = Object.keys(routeMap).filter((key) =>
      key.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(value ? filtered : []);
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(routeMap[suggestion]);
    setSearchQuery("");
    setSuggestions([]);
    setShowSearch(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isHovered || scrolled
            ? "bg-black bg-opacity-90 backdrop-blur shadow-md"
            : "bg-black"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-16 text-white">
            <NavLink
              to="/"
              className="text-2xl font-bold tracking-wide hover:text-yellow-400 transition"
            >
              {t('welcome')}
            </NavLink>

            <div className="hidden md:flex items-center space-x-6">
              {["/", "/dhams", "/famous", "/trekking", "/books", "/about", "/blogs", "/contact"].map(
                (path, index) => {
                  const labels = [
                   t('home'),
                    t('dhams'),
                    t('famous'),
                    t('trekking'),
                    t('books'),
                    t('about'),
                    t('blogs'),
                    t('contact'),
                  ];
                  return (
                    <NavLink
                      key={path}
                      to={path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-yellow-400 font-semibold"
                          : "hover:text-yellow-400 transition"
                      }
                    >
                      {labels[index]}
                    </NavLink>
                  );
                }
              )}

              <div className="flex items-center space-x-4 ml-4 relative">
                <button
                  onClick={() => {
                    setShowSearch((prev) => !prev);
                    setSuggestions([]);
                    setSearchQuery("");
                  }}
                  className="hover:text-yellow-400 transition-colors duration-300"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>

                <button
                  onClick={() => navigate("/login")}
                  className="hover:text-yellow-400 transition-colors duration-300 bg-yellow-600 w-18 rounded-3xl font-semibold"
                  aria-label="Account"
                >
                  <Link to="/login">LogIn</Link>
                </button>
                 <LanguageSwitcher />
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
                className="text-white text-3xl"
              >
                &#9776;
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Bar and Suggestions */}
      {showSearch && (
        <div className="absolute top-16 left-0 w-full bg-black px-4 py-4 z-50 shadow-md">
          <form 
            onSubmit={handleSearchSubmit}
            className="max-w-4xl mx-auto flex items-center bg-gray-100 rounded-full px-4 py-2"
          >
            <input
              type="text"
              placeholder={t('search') + "..."}
              value={searchQuery}
              onChange={handleInputChange}
              className="flex-grow bg-transparent outline-none text-gray-800 text-sm px-2"
              autoFocus
            />
            <button
              type="button"
              onClick={() => setIsVoicePopupOpen(true)}
              className="w-4 h-4 text-gray-500 mr-2 hover:text-yellow-500"
            >
              <Mic className="w-4 h-4"/>
            </button>
            <button
              type="button"
              onClick={() => setIsImagePopupOpen(true)}
              className="w-4 h-4 text-gray-500 mr-2 hover:text-yellow-500"
              title={t('searchByImage')}
            >
              <Camera className="w-4 h-4" />
            </button>
            <button
              type="submit"
              className="text-white bg-yellow-500 px-4 py-1 rounded-full text-sm hover:bg-yellow-600 transition"
            >
              {t('go')}
            </button>
          </form>

          {/* Voice Search Popup */}
          {isVoicePopupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
              <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg max-w-md w-full animate-fade-in">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-yellow-400">Voice Search</h3>
                  <button 
                    onClick={() => {
                      setIsVoicePopupOpen(false);
                      if (isListening && recognition) {
                        recognition.stop();
                      }
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col items-center mb-6">
                  {isProcessing ? (
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-3"></div>
                      <p className="text-gray-300">{t('processing')}</p>
                    </div>
                  ) : (
                    <>
                      <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 ${
                        isListening ? 'bg-red-500/20 pulse-animation' : 'bg-gray-800'
                      }`}>
                        <button
                          onClick={toggleListening}
                          className={`p-5 rounded-full ${
                            isListening ? 'bg-red-500' : 'bg-yellow-500'
                          } text-white shadow-lg transform hover:scale-105 transition`}
                        >
                          <Mic className="w-8 h-8" />
                        </button>
                      </div>
                      <p className="text-gray-400 text-sm">
                        {isListening ? "Speak now..." : t('clickToStart')}
                      </p>
                    </>
                  )}
                </div>

                <div className="bg-gray-800 p-4 rounded-lg mb-6 min-h-16">
                  {voiceResult ? (
                    <p className="text-white">{voiceResult}</p>
                  ) : (
                    <p className="text-gray-500 italic">
                     {isListening ? t('listening') : t('yourSpeech')}
                    </p>
                  )}
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => {
                      setIsVoicePopupOpen(false);
                      setVoiceResult("");
                      if (isListening && recognition) {
                        recognition.stop();
                      }
                    }}
                    className="px-4 py-2 text-gray-300 hover:text-white"
                  >
                    {t('cancel')}
                  </button>
                  <button
                    onClick={handleVoiceSearchSubmit}
                    disabled={!voiceResult || isProcessing}
                    className={`px-6 py-2 rounded-md ${
                      !voiceResult || isProcessing
                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                        : 'bg-yellow-500 hover:bg-yellow-600 text-black'
                    } transition`}
                  >
                    {isProcessing ? (
                      <span className="flex items-center">
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                       {t('searching')}
                      </span>
                    ) : (
                       t('search')
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {isImagePopupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
              <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg max-w-md w-full animate-fade-in">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-yellow-400">{t('imageSearch')}</h3>
                  <button 
                    onClick={() => {
                      setIsImagePopupOpen(false);
                      setImagePreview(null);
                      setImageResults([]);
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Image Upload Area */}
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-4 mb-4 text-center">
                  {imagePreview ? (
                    <div className="relative">
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        className="max-h-40 mx-auto rounded-lg"
                      />
                      <button
                        onClick={() => setImagePreview(null)}
                        className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-1 rounded-full"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ) : (
                    <div className="py-8">
                      <Upload className="w-8 h-8 mx-auto text-gray-500 mb-2" />
                      <p className="text-gray-400 text-sm">{t('uploadImageText')}</p>
                    </div>
                  )}
                  
                  <input
                    type="file"
                    id="image-upload"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) setImagePreview(URL.createObjectURL(file));
                    }}
                    accept="image/*"
                    className="hidden"
                  />
                  
                  <button
                    onClick={() => document.getElementById('image-upload').click()}
                    className={`mt-2 px-3 py-1 text-sm rounded-md ${
                      imagePreview ? 'bg-gray-700 text-white' : 'bg-yellow-500 text-black'
                    }`}
                  >
                   {imagePreview ? t('changeImage') : t('selectImage')}
                   </button>
                </div>

                {/* Rest of the popup remains the same */}
                {/* Analyze Button */}
                          <button
                            onClick={async () => {
                              if (!imagePreview) return;
                              setIsImageProcessing(true);
                              
                              // Simulate API call (replace with actual implementation)
                              await new Promise(resolve => setTimeout(resolve, 1500));
                              
                              // Mock results
                              setImageResults([
                                { label: "Shiva Lingam", confidence: 92 },
                                { label: "Hindu Temple", confidence: 85 }
                              ]);
                              
                              setIsImageProcessing(false);
                            }}
                            disabled={!imagePreview || isImageProcessing}
                            className={`w-full py-2 rounded-md mb-4 ${
                              !imagePreview || isImageProcessing
                                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                : 'bg-yellow-500 hover:bg-yellow-600 text-black'
                            }`}
                          >
                            {isImageProcessing ? (
                              <span className="flex items-center justify-center">
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            {t('analyzing')}
                              </span>
                            ) : (
                             t('recognizeImage')
                            )}
                          </button>

                          {/* Results */}
                          {imageResults.length > 0 && (
                            <div className="bg-gray-800 p-3 rounded-lg">
                              <h4 className="text-yellow-400 text-sm font-medium mb-2">{t('recognitionResults')}</h4>
                              <div className="space-y-2">
                                {imageResults.map((result, index) => (
                                  <div 
                                    key={index}
                                    onClick={() => {
                                      navigate(`/search?q=${encodeURIComponent(result.label)}`);
                                      setIsImagePopupOpen(false);
                                    }}
                                    className="flex justify-between p-2 hover:bg-gray-700 rounded cursor-pointer"
                                  >
                                    <span className="text-white">{result.label}</span>
                                    <span className="text-gray-400">{result.confidence}%</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
              </div>
            </div>
          )}

          {/* Suggestions Dropdown */}
          {suggestions.length > 0 && (
            <div className="max-w-4xl mx-auto mt-2 bg-white border rounded-md shadow-md text-black text-sm">
              {suggestions.map((item) => (
                <div
                  key={item}
                  onClick={() => handleSuggestionClick(item)}
                  className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-6 pb-6 pt-4 text-white flex flex-col space-y-4 mt-16 z-50">
          {[
            "/",
            "/dhams",
            "/famous",
            "/trekking",
            "/books",
            "/about",
            "/blogs",
            "/contact",
            "/search",
            "/login",
          ].map((path, index) => {
            const labels = [
                t('home'),
              t('dhams'),
              t('famous'),
              t('trekking'),
              t('books'),
              t('about'),
              t('blogs'),
              t('contact'),
              t('search'),
              t('login'),
            ];
            return (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-semibold"
                    : "hover:text-yellow-400 transition"
                }
              >
                {labels[index]}
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Navbar;