import React, { useState } from 'react';
import Navbar from '/src/components/Navbar';
import Footer from '/src/components/Footer.jsx';
import Modal from './Modal'; // Assuming Modal component exists
import HeroSection from './HeroSection';
import { blogData } from './blogData'; // Using specified import path
import './BlogPage.css'; // Scoped styles for this component

const BlogPage = () => {
    // State management to control the modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);

    // Handlers to open and close the modal
    const openModal = (blog) => {
        setSelectedBlog(blog);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBlog(null);
    };

    return (
        <>
            <Navbar />
            <div className="goku-page-wrapper">
                <HeroSection />
                <main className="goku-card-container">
                    {blogData.map((blog) => (
                        <article key={blog.id} className="goku-card">
                            <div className="goku-card__image-wrapper">
                                <img src={blog.cardImage} alt={blog.title} className="goku-card__image" />
                            </div>
                            <div className="goku-card__content">
                                <h3 className="goku-card__title">{blog.title}</h3>
                                <p className="goku-card__description">{blog.shortDescription}</p>
                                <button className="goku-card__button" onClick={() => openModal(blog)}>
                                    Read More
                                </button>
                            </div>
                        </article>
                    ))}
                </main>
            </div>

            {/* Conditionally render the Modal component when triggered */}
            {isModalOpen && <Modal blog={selectedBlog} onClose={closeModal} />}

<Footer />
        </>
    );
};

export default BlogPage;