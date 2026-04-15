
import React, { useState, useEffect } from 'react';
import '../mantras/allMantras.css';
 import mantraData from '../../../Json/mantras.json';
 import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";


function AllMantras() {
 const [mantras, setMantras] = useState([]);
  const [filteredMantras, setFilteredMantras] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMantra, setSelectedMantra] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});

  useEffect(() => {
    // In a real app, this would come from an API
    setMantras(mantraData.mantras);
    setFilteredMantras(mantraData.mantras);
  }, []);

  // Filter mantras based on search term and category
  useEffect(() => {
    let results = mantras;
    
    if (searchTerm) {
      results = results.filter(mantra => 
        mantra.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mantra.sanskritName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mantra.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mantra.benefits.some(benefit => benefit.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (selectedCategory !== 'all') {
      results = results.filter(mantra => 
        mantra.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    
    setFilteredMantras(results);
  }, [searchTerm, selectedCategory, mantras]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleShuffle = () => {
    // Shuffle the mantras array
    const shuffled = [...filteredMantras].sort(() => Math.random() - 0.5);
    setFilteredMantras(shuffled);
  };

  const toggleFavorite = (id) => {
    setMantras(prevMantras => 
      prevMantras.map(mantra => 
        mantra.id === id ? {...mantra, isFavorite: !mantra.isFavorite} : mantra
      )
    );
  };

  const playAudio = (mantra) => {
    setSelectedMantra(mantra);
    setIsPlaying(true);
    // In a real app, this would play the actual audio
    console.log(`Playing audio for ${mantra.name}`);
  };

  const closeModal = () => {
    setSelectedMantra(null);
    setIsPlaying(false);
  };

  const toggleCardExpand = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const openModalFromCard = (mantra) => {
    setSelectedMantra(mantra);
  };

  return (
    <div className="App">
      <Navbar />
      <Header />
      <main className="max-w-7xl mx-auto px-4 pb-16">
        <SearchFilter 
          onSearch={handleSearch}
          onCategoryChange={handleCategoryChange}
          onShuffle={handleShuffle}
          selectedCategory={selectedCategory}
          categories={mantraData.categories}
        />
        <MantraGrid 
          mantras={filteredMantras}
          onToggleFavorite={toggleFavorite}
          onPlayAudio={playAudio}
          expandedCards={expandedCards}
          onToggleCardExpand={toggleCardExpand}
          onOpenModal={openModalFromCard}
        />
      </main>
      <Footer />
      
      {/* Modal for mantra details */}
      {selectedMantra && (
        <MantraModal 
          mantra={selectedMantra} 
          onClose={closeModal}
          isPlaying={isPlaying}
          onPlayAudio={playAudio}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
}

// Header Component
const Header = () => {
  return (
    <header className="text-center py-12">
      <div className="floating-icon inline-block p-4 rounded-full bg-amber-900 bg-opacity-20 mb-4">
        <i className="fas fa-om text-4xl text-amber-300"></i>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-amber-300 header-glow mb-4">Divine Mantras</h1>
      <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-8">Ancient sacred chants for spiritual growth, healing, and inner peace</p>
      
      <div className="flex flex-wrap justify-center gap-4 mb-2">
        <div className="stats-box flex items-center">
          <i className="fas fa-mantra text-amber-400 text-xl mr-2"></i>
          <span className="mantra-counter text-amber-300 text-2xl">{mantraData.mantras.length}</span>
          <span className="text-amber-100 ml-2">Mantras</span>
        </div>
        <div className="stats-box flex items-center">
          <i className="fas fa-clock text-amber-400 text-xl mr-2"></i>
          <span className="text-amber-100">5000+ Years</span>
        </div>
        <div className="stats-box flex items-center">
          <i className="fas fa-hands-praying text-amber-400 text-xl mr-2"></i>
          <span className="text-amber-100">Spiritual Tradition</span>
        </div>
      </div>
    </header>
  );
};

// Search and Filter Component
const SearchFilter = ({ onSearch, onCategoryChange, onShuffle, selectedCategory, categories }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-10 p-4 bg-slate-800 bg-opacity-40 rounded-2xl border border-amber-800 border-opacity-30">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search mantras by name, benefits, or deity..."
          className="w-full p-4 pl-12 rounded-xl search-input"
          onChange={onSearch}
        />
        <span className="absolute left-4 top-4 text-amber-400">
          <i className="fas fa-search fa-lg"></i>
        </span>
      </div>
      
      <select 
        className="p-4 rounded-xl filter-select"
        value={selectedCategory}
        onChange={onCategoryChange}
      >
        <option value="all">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      
      <button 
        className="p-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-medium transition-colors"
        onClick={onShuffle}
      >
        <i className="fas fa-random mr-2"></i>Shuffle
      </button>
    </div>
  );
};

// Mantra Card Component
const MantraCard = ({ mantra, onToggleFavorite, onPlayAudio, expandedCards, onToggleCardExpand, onOpenModal }) => {
  const isExpanded = expandedCards[mantra.id];
  
  const getDifficultyClass = (difficulty) => {
    switch(difficulty) {
      case 'beginner': return 'difficulty-beginner';
      case 'intermediate': return 'difficulty-intermediate';
      case 'advanced': return 'difficulty-advanced';
      default: return 'difficulty-beginner';
    }
  };

  return (
    <div className="devotional-card">
      <div 
        className="mantra-image" 
        style={{ backgroundImage: `url("https://www.chardham-pilgrimage-tour.com/assets/images/top-tourist-places-enroute-kedarnath-dham.webp)` }}
      >
        <div className="category-badge">{mantra.category}</div>
        <div className="deity-icon">
          <i className={mantra.deity.icon}></i>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-semibold text-amber-200">{mantra.name}</h2>
            <p className="sanskrit-text">{mantra.sanskritName}</p>
          </div>
          <button 
            className="favorite-button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(mantra.id);
            }}
            style={{ color: mantra.isFavorite ? '#f87171' : '#f59e0b' }}
          >
            <i className={`${mantra.isFavorite ? 'fas' : 'far'} fa-heart text-xl`}></i>
          </button>
        </div>
        
        <div className="sanskrit-text mb-5">
          {mantra.text}
        </div>
        
        <div className="mb-5">
          <span className={`feature-badge ${getDifficultyClass(mantra.difficulty)}`}>
            {mantra.difficulty}
          </span>
          <span className="feature-badge" style={{ 
            background: "rgba(245, 158, 11, 0.2)", 
            color: "#f59e0b", 
            border: "1px solid rgba(245, 158, 11, 0.4)" 
          }}>
            <i className="fas fa-clock mr-1"></i>
            {mantra.bestTimes.join('/')}
          </span>
          <span className="feature-badge" style={{ 
            background: "rgba(101, 163, 13, 0.2)", 
            color: "#84cc16", 
            border: "1px solid rgba(101, 163, 13, 0.4)" 
          }}>
            <i className="fas fa-repeat mr-1"></i>
            {mantra.idealCount}x
          </span>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <button 
            className="play-button flex items-center px-5 py-2.5 text-white rounded-full font-medium"
            onClick={(e) => {
              e.stopPropagation();
              onPlayAudio(mantra);
            }}
          >
            <i className="fas fa-play-circle mr-2"></i>
            Listen
          </button>
          <button 
            className="detail-button flex items-center px-5 py-2.5 text-violet-200 rounded-full font-medium"
            onClick={(e) => {
              e.stopPropagation();
              onToggleCardExpand(mantra.id);
            }}
          >
            <i className={`fas ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'} mr-2`}></i>
            {isExpanded ? 'Less' : 'More'}
          </button>
        </div>
      </div>
      
      {/* Expanded Details */}
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-amber-700 bg-slate-900 bg-opacity-60">
          <div className="grid grid-cols-1 gap-5 mt-5">
            <div>
              <h3 className="font-medium text-amber-200 flex items-center mb-2">
                <i className="fas fa-info-circle mr-2 text-amber-400"></i>
                Meaning
              </h3>
              <p className="text-amber-100">{mantra.meaning}</p>
            </div>
            
            <div>
              <h3 className="font-medium text-amber-200 flex items-center mb-2">
                <i className="fas fa-star mr-2 text-amber-400"></i>
                Benefits
              </h3>
              <ul className="benefits-list text-amber-100">
                {mantra.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="stats-box text-center">
              <div className="text-amber-300 mb-1">
                <i className="fas fa-clock"></i>
              </div>
              <div className="text-sm text-amber-200">Best Time</div>
              <div className="font-medium text-amber-100">{mantra.bestTimes.join(', ')}</div>
            </div>
            
            <div className="stats-box text-center">
              <div className="text-amber-300 mb-1">
                <i className="fas fa-repeat"></i>
              </div>
              <div className="text-sm text-amber-200">Repetitions</div>
              <div className="font-medium text-amber-100">{mantra.idealCount}</div>
            </div>
            
            <div className="stats-box text-center">
              <div className="text-amber-300 mb-1">
                <i className="fas fa-signal"></i>
              </div>
              <div className="text-sm text-amber-200">Difficulty</div>
              <div className="font-medium text-amber-100">{mantra.difficulty}</div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-between items-center">
            <a href="#" className="text-amber-400 hover:text-amber-300 font-medium text-sm flex items-center">
              Detailed Explanation
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
            
            <button 
              className="text-violet-300 hover:text-violet-200 text-sm flex items-center"
              onClick={() => onOpenModal(mantra)}
            >
              <i className="fas fa-expand mr-1"></i>
              Full View
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Mantra Grid Component
const MantraGrid = ({ mantras, onToggleFavorite, onPlayAudio, expandedCards, onToggleCardExpand, onOpenModal }) => {
  if (mantras.length === 0) {
    return (
      <div className="text-center py-16">
        <i className="fas fa-search fa-3x text-amber-500 mb-4"></i>
        <p className="text-amber-200 text-xl mb-4">No mantras found matching your search</p>
        <button className="px-6 py-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-medium transition-colors">
          Clear filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {mantras.map(mantra => (
        <MantraCard 
          key={mantra.id} 
          mantra={mantra} 
          onToggleFavorite={onToggleFavorite}
          onPlayAudio={onPlayAudio}
          expandedCards={expandedCards}
          onToggleCardExpand={onToggleCardExpand}
          onOpenModal={onOpenModal}
        />
      ))}
    </div>
  );
};

// Mantra Modal Component
const MantraModal = ({ mantra, onClose, isPlaying, onPlayAudio, onToggleFavorite }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        
        <div className="modal-header">
          <h2 className="text-3xl font-semibold text-amber-200">{mantra.name}</h2>
          <p className="sanskrit-text">{mantra.sanskritName}</p>
          <button 
            className="favorite-button"
            onClick={() => onToggleFavorite(mantra.id)}
            style={{ color: mantra.isFavorite ? '#f87171' : '#f59e0b' }}
          >
            <i className={`${mantra.isFavorite ? 'fas' : 'far'} fa-heart text-xl`}></i>
          </button>
        </div>
        
        <div className="modal-body">
          <div className="sanskrit-text-large">
            {mantra.text}
          </div>
          
          <div className="meaning-section">
            <h3 className="section-title">Meaning</h3>
            <p className="meaning-text">{mantra.meaning}</p>
          </div>
          
          <div className="benefits-section">
            <h3 className="section-title">Benefits</h3>
            <ul className="benefits-list">
              {mantra.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          
          <div className="details-grid">
            <div className="detail-item">
              <i className="fas fa-clock"></i>
              <span>Best Time</span>
              <strong>{mantra.bestTimes.join(', ')}</strong>
            </div>
            <div className="detail-item">
              <i className="fas fa-repeat"></i>
              <span>Repetitions</span>
              <strong>{mantra.idealCount}</strong>
            </div>
            <div className="detail-item">
              <i className="fas fa-signal"></i>
              <span>Difficulty</span>
              <strong>{mantra.difficulty}</strong>
            </div>
            <div className="detail-item">
              <i className="fas fa-tags"></i>
              <span>Category</span>
              <strong>{mantra.category}</strong>
            </div>
          </div>
        </div>
        
        <div className="modal-footer">
          <button 
            className="play-button-large"
            onClick={() => onPlayAudio(mantra)}
          >
            <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
            {isPlaying ? 'Pause' : 'Play'} Recitation
          </button>
          <button className="secondary-button">
            <i className="fas fa-info-circle"></i>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};





export default AllMantras;