import React, { useState, useEffect } from 'react';
import './Modal.css'; // Import the component-specific CSS

const Modal = ({ blog, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (blog.images && blog.images.length > 1) {
            const timer = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % blog.images.length);
            }, 3500);
            return () => clearInterval(timer);
        }
    }, [blog.images]);

    return (
        <div className="zenitsu-modal-backdrop" onClick={onClose}>
            <div className="zenitsu-modal" onClick={(e) => e.stopPropagation()}>
                <button className="zenitsu-modal__close-btn" onClick={onClose}>&times;</button>

                <h2 className="zenitsu-modal__title">{blog.title}</h2>

                {blog.images && blog.images.length > 0 && (
                    <div className="zenitsu-carousel">
                        {blog.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${blog.title} - ${index + 1}`}
                                className={`zenitsu-carousel__image ${index === currentIndex ? 'zenitsu-carousel__image--active' : ''}`}
                            />
                        ))}
                    </div>
                )}

                <div className="zenitsu-infobox">
                    <div className="zenitsu-infobox__item"><strong>Deity:</strong> {blog.info.deity}</div>
                    <div className="zenitsu-infobox__item"><strong>Location:</strong> {blog.info.location}</div>
                    <div className="zenitsu-infobox__item"><strong>Best Time:</strong> {blog.info.bestTime}</div>
                    <div className="zenitsu-infobox__item"><strong>Entry:</strong> {blog.info.ticketPrice}</div>
                    <div className="zenitsu-infobox__item zenitsu-infobox__item--full-width"><strong>Timing:</strong> {blog.info.timing}</div>
                </div>

                <div className="zenitsu-description">
                    {blog.fullDescription.map((section, index) => (
                        <div key={index} className="zenitsu-description__category">
                            <h4>{section.category}</h4>
                            <p>{section.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Modal;