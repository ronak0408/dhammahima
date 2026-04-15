<<<<<<< HEAD
import { useState } from 'react'
import './App.css'
import KedarnathTemplePage from "./Components/Kedarnath/KedarnathTemplePage.jsx";
import { Home } from 'lucide-react';

=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import TourismChatbotWidget from "./Components/TourismChatbotWidget.jsx";
import SacredDhams from './Pages/SacredDhams.jsx';
import TemplePage from "./Components/Temples/TemplePage.jsx";
>>>>>>> d3905dd94e23f4b46121033cc70c9ecbdc4fb490

function App() {
    return (
        <Router>
            <Routes>
                {/* Homepage */}
                <Route path="/" element={<Home />} />

                {/* Sacred Dhams Page */}
                <Route path="/sacred-dhams" element={<SacredDhams />} />

                {/* The dynamic route for individual temple pages. This is correct. */}
                <Route path="/temple/:templeSlug" element={<TemplePage />} />

            </Routes>

            {/* Always show chatbot widget */}
            <TourismChatbotWidget />
        </Router>
    );
}

export default App;
