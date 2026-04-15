import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import TourismChatbotWidget from "./Components/TourismChatbotWidget";

function Root() {
  return (
    <>
      <Navbar />
      <main>
        {/* The Outlet component renders the content of the current child route */}
        <Outlet />
      </main>
      <Footer />
      <TourismChatbotWidget />
    </>
  );
}

export default Root;