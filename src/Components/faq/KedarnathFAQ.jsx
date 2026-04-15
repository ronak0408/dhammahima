// FAQPage.jsx
import React, { useState } from "react";
import "./SpiritualFAQ.css";

const faqData = [
    {
        question:
            "How can participation in the Char Dham Yatra, including visits to Yamunotri, Gangotri, Kedarnath, and Badrinath, transform a seeker’s spiritual journey in the Himalayan tradition?",
        answer:
            "The Char Dham Yatra immerses pilgrims in ancient rituals and the serene Himalayas, fostering a sense of devotion, humility, and self-reflection. The experience weaves myth, community, and natural beauty, helping seekers to return home with renewed clarity and spiritual depth."
    },
    {
        question:
            "What preparations are essential for a safe and enriching Kedarnath pilgrimage, considering remote access, mountain weather, and local customs?",
        answer:
            "Travelers should focus on physical training, acclimatization, carrying layered clothing and essential medicines, and planning for route or weather delays. Respecting temple etiquette and local culture ensures a harmonious, meaningful pilgrimage amidst the Himalayas."
    },
    {
        question:
            "How are seasonal festivals and daily ceremonies at Char Dham temples celebrated, and what guidelines should visitors follow when attending these sacred rituals?",
        answer:
            "Festivals and daily aarti involve devotional chanting, offerings, and vibrant processions. Visitors should dress modestly, maintain silence during rituals, and participate with reverence to honor centuries-old traditions integral to the temple’s spiritual ambiance."
    },
    {
        question:
            "How do modern travel options—like helicopter services and advanced accommodations—shape the Char Dham pilgrimage experience while preserving a sense of tradition?",
        answer:
            "Modern transport and lodging make the journey accessible, but spiritual fulfillment comes from mindful pauses, walking part of the routes, and immersing in local customs. Balancing comfort with authentic rituals preserves the deeper spiritual value of the Yatra."
    },
    {
        question:
            "What guidance can help first-time pilgrims ensure their Char Dham Yatra is well-organized, respectful, and spiritually rewarding from start to finish?",
        answer:
            "First-timers should register in advance, follow weather advisories, pack appropriately, and respect temple customs and the environment. Engaging with local communities and traditions enriches the journey and fosters harmony with the sacred setting."
    }
];

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="faq-bg-wrapper">
            <div className="faq-bg-overlay" />
            <main className="faq-content-container" role="region" aria-label="Frequently Asked Questions">
                <h2 className="faq-title">Frequently Asked Questions</h2>
                <div className="faq-list">
                    {faqData.map((item, idx) => (
                        <section
                            key={idx}
                            className={`faq-item${openIndex === idx ? " open" : ""}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                aria-expanded={openIndex === idx}
                                aria-controls={`faq-answer-${idx}`}
                                id={`faq-question-${idx}`}
                                type="button"
                            >
                                <span className="faq-question-text">{item.question}</span>
                                <span
                                    className="faq-icon"
                                    aria-hidden="true"
                                    style={{ transform: openIndex === idx ? "rotate(90deg)" : "rotate(0deg)" }}
                                >
                  <svg width="22" height="22" viewBox="0 0 22 22">
                    <polyline
                        points="6 9 11 14 16 9"
                        fill="none"
                        stroke="#7c87c4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                  </svg>
                </span>
                            </button>
                            <div
                                className={`faq-answer${openIndex === idx ? " visible" : ""}`}
                                id={`faq-answer-${idx}`}
                                aria-labelledby={`faq-question-${idx}`}
                                aria-hidden={openIndex !== idx}
                            >
                                <p>{item.answer}</p>
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default FAQPage;
