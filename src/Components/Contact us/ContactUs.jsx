import React from 'react';
import './ConnectWithUs.css';
import templeBackground from '/images/temples/kedarnath.jpg';
import Navbar from '../Navbar';
import Footer from '../Footer';

const ConnectWithUs = () => {
    return (
        <div className="connect-app-container">
            {/* ==================== NAVBAR ==================== */}
            <nav className="connect-navbar">
                <Navbar />
            </nav>

            {/* ==================== MAIN CONTENT ==================== */}
            <div
                className="connect-spiritual-page"
                style={{ backgroundImage: `url(${templeBackground})` }}
            >
                <div className="connect-smoke-container">
                    {/* Smoke spans */}
                    <span></span><span></span><span></span><span></span><span></span>
                    <span></span><span></span><span></span><span></span><span></span>
                </div>
                <div className="connect-overlay"></div>
                <div className="connect-form-container">
                    <h2 className="connect-form-title">Connect With Us</h2>
                    <p className="connect-form-subtitle">
                        Share your journey, ask a question, or simply send your light. We are honored to receive it.
                    </p>
                    <form>
                        <div className="connect-form-group">
                            <label htmlFor="name" className="connect-form-label">Your Name</label>
                            <input type="text" id="name" placeholder="Let us know your earthly name" className="connect-form-input" />
                        </div>
                        <div className="connect-form-group">
                            <label htmlFor="email" className="connect-form-label">Your Sacred Email</label>
                            <input type="email" id="email" placeholder="your.path@example.com" className="connect-form-input" />
                        </div>
                        <div className="connect-form-group">
                            <label htmlFor="message" className="connect-form-label">Share Your Energy</label>
                            <textarea id="message" rows="5" placeholder="Pour your thoughts and inquiries here..." className="connect-form-textarea" />
                        </div>
                        <div className="connect-submit-button-wrapper">
                            <button type="submit" className="connect-submit-button">Send with Love</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* ==================== FOOTER ==================== */}
          <Footer></Footer>
        </div>
    );
};

export default ConnectWithUs;
