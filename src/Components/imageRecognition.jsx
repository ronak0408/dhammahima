import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Upload, X, Loader2, Search } from 'lucide-react';

const ImageSearchPage = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResults([]); // Clear previous results
  };

  const handleCaptureClick = () => {
    fileInputRef.current.click();
  };

  const analyzeImage = async () => {
    if (!image) return;
    setIsLoading(true);

    try {
      // Simulate API processing (replace with actual Google Vision/AWS Rekognition)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock results - replace with real API response
      const mockResults = [
        { label: "Hindu Temple", confidence: 92 },
        { label: "Shiva Lingam", confidence: 87 },
        { label: "Kedarnath Temple", confidence: 78 }
      ];
      
      setResults(mockResults);
    } catch (error) {
      console.error("Image analysis failed:", error);
      alert("Failed to analyze image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResultClick = (result) => {
    // Navigate to relevant page based on recognition
    const query = result.label.toLowerCase();
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Search by Image</h1>
        
        {/* Image Upload Area */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
          {preview ? (
            <div className="relative">
              <img 
                src={preview} 
                alt="Preview" 
                className="max-h-64 mx-auto rounded-lg mb-4"
              />
              <button
                onClick={() => {
                  setPreview('');
                  setImage(null);
                }}
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-1 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <Camera className="w-12 h-12 mx-auto text-gray-400" />
              <p className="text-gray-500">Upload an image of a temple or religious symbol</p>
            </div>
          )}
          
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />
          
          <button
            onClick={handleCaptureClick}
            className={`mt-4 px-4 py-2 rounded-md ${
              preview ? 'bg-gray-200 text-gray-800' : 'bg-yellow-500 text-white'
            }`}
          >
            {preview ? 'Change Image' : 'Select Image'}
          </button>
        </div>
        
        {/* Analyze Button */}
        {preview && (
          <button
            onClick={analyzeImage}
            disabled={isLoading}
            className={`w-full py-3 rounded-md mb-6 ${
              isLoading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-yellow-500 hover:bg-yellow-600 text-white'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Analyzing...
              </span>
            ) : (
              'Recognize Image'
            )}
          </button>
        )}
        
        {/* Results */}
        {results.length > 0 && (
          <div className="border-t pt-4">
            <h2 className="text-lg font-semibold mb-4">Recognition Results</h2>
            <div className="space-y-2">
              {results.map((result, index) => (
                <div
                  key={index}
                  onClick={() => handleResultClick(result)}
                  className="p-3 hover:bg-yellow-50 cursor-pointer border rounded-md flex justify-between"
                >
                  <span>{result.label}</span>
                  <span className="text-gray-500">{result.confidence}% match</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSearchPage;