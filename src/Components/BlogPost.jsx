import React, { useState } from 'react';
import { LuImagePlus, LuMapPin, LuCalendarClock, LuSun, LuPencil, LuPersonStanding } from 'react-icons/lu';

// Main App component for the blog posting form
const App = () => {
  // State variables to hold the form data
  const [topic, setTopic] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [imageFile, setImageFile] = useState(null); // Changed state to hold the file object
  const [deity, setDeity] = useState('');
  const [location, setLocation] = useState('');
  const [bestTime, setBestTime] = useState('');
  const [entryTiming, setEntryTiming] = useState('');
  const [content, setContent] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Log the form data to the console
    console.log('Form Submitted!', {
      topic,
      authorName,
      imageFile, // This will now be a File object
      deity,
      location,
      bestTime,
      entryTiming,
      content,
    });

    // To send the file to a backend API, you would typically use FormData
    // const formData = new FormData();
    // formData.append('topic', topic);
    // formData.append('authorName', authorName);
    // if (imageFile) {
    //   formData.append('image', imageFile);
    // }
    // formData.append('deity', deity);
    // formData.append('location', location);
    // formData.append('bestTime', bestTime);
    // formData.append('entryTiming', entryTiming);
    // formData.append('content', content);
    
    // fetch('/api/blog-posts', {
    //   method: 'POST',
    //   body: formData,
    // });
  };

  return (
    // The main container for the entire form, centered on the screen
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* The form card with a white background, shadow, and rounded corners */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        {/* Title for the form */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center font-inter">Create a New Blog Post</h2>
        
        {/* The form element itself */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Topic input field */}
          <div>
            <label htmlFor="topic" className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <LuPencil className="mr-2" /> Topic
            </label>
            <input
              type="text"
              id="topic"
              name="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Enter the topic of your blog post"
              required
            />
          </div>

          {/* Author Name input field */}
          <div>
            <label htmlFor="authorName" className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <LuPersonStanding className="mr-2" /> Author Name
            </label>
            <input
              type="text"
              id="authorName"
              name="authorName"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Your name"
              required
            />
          </div>
          
          {/* Image file input field */}
          <div>
            <label htmlFor="imageFile" className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <LuImagePlus className="mr-2" /> Upload Image
            </label>
            <input
              type="file"
              id="imageFile"
              name="imageFile"
              onChange={(e) => setImageFile(e.target.files[0])}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {imageFile && (
              <p className="mt-2 text-sm text-gray-500">Selected file: {imageFile.name}</p>
            )}
          </div>
          
          {/* Deity input field */}
          <div>
            <label htmlFor="deity" className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <LuSun className="mr-2" /> Deity
            </label>
            <input
              type="text"
              id="deity"
              name="deity"
              value={deity}
              onChange={(e) => setDeity(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Name of the deity"
            />
          </div>
          
          {/* Location input field */}
          <div>
            <label htmlFor="location" className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <LuMapPin className="mr-2" /> Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Where is the location?"
            />
          </div>
          
          {/* Best Time input field */}
          <div>
            <label htmlFor="bestTime" className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <LuCalendarClock className="mr-2" /> Best Time
            </label>
            <input
              type="text"
              id="bestTime"
              name="bestTime"
              value={bestTime}
              onChange={(e) => setBestTime(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="e.g., 'Winter season' or 'Sunrise'"
            />
          </div>
          
          {/* Entry Timing input field */}
          <div>
            <label htmlFor="entryTiming" className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <LuCalendarClock className="mr-2" /> Entry Timing
            </label>
            <input
              type="text"
              id="entryTiming"
              name="entryTiming"
              value={entryTiming}
              onChange={(e) => setEntryTiming(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="e.g., '10:00 AM to 5:00 PM'"
            />
          </div>

          {/* Content textarea field */}
          <div>
            <label htmlFor="content" className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <LuPencil className="mr-2" /> Content
            </label>
            <textarea
              id="content"
              name="content"
              rows="5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Write the main content of your blog post here"
              required
            ></textarea>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
          >
            Submit Blog Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
