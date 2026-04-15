// components/LoadingSpinner.js
import './LoadingSpinner.css';

const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="spinner"></div>
    <p>Loading translations...</p>
  </div>
);

export default LoadingSpinner;