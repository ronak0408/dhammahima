import React from "react";
import "./WhyChooseDhamMahima.css";

// Example icons -- replace with your images or SVG imports
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";

const cardData = [
    {
        title: "Spiritual Significance",
        text: `DhamMahima is dedicated to exploring the divine glory (Mahima) of sacred pilgrimage sites (Dham). Our mission is to share the spiritual essence, history, and significance of these holy abodes.`,
        borderClass: "border-red",
        icon: icon1,
    },
    {
        title: "Cultural & Religious Heritage",
        text: `India’s Dhams hold timeless wisdom and divine energy. DhamMahima serves as a digital guide, offering stories, travel insights, and devotional content to deepen your spiritual connection.`,
        borderClass: "border-blue",
        icon: icon2,
    },
    {
        title: "Unique Name, Deep Meaning",
        text: `The name ‘DhamMahima’ combines ‘Dham’ (sacred site) and ‘Mahima’ (divine glory). It reflects our commitment to unveiling the spiritual power and miracles of holy places.`,
        borderClass: "border-lightblue",
        icon: icon3,
    },
    {
        title: "For Devotees & Seekers",
        text: `Whether you seek blessings or wish to plan a pilgrimage, DhamMahima is your trusted resource for authentic and inspiring content about India’s sacred geography.`,
        borderClass: "border-orange",
        icon: icon4,
    },
    {
        id: 5,
        icon: icon1,  // Open book emoji (choose any matching your set)
        title: 'Spiritual Books',
        text: 'Whether you seek blessings or wish to plan a pilgrimage, DhamMahima is your trusted resource for authentic and inspiring content about India’s sacred geography.',
        borderClass: "border-red",

    }
];

export default function WhyChooseDhamMahima() {
    return (
        <section className="dhammahima-section">
            <div className="dhammahima-content">
                <h2 className="dhammahima-title">
                    Why Choose{" "}
                    <span className="highlight">DhamMahima</span>
                    ?
                </h2>
                <div className="dhammahima-subtitle">
                    We have many reasons, but here are the most divine ones
                </div>
                <div className="dhammahima-divider">
                    <div className="divider-half divider-half--red"></div>
                    <div className="divider-half divider-half--blue"></div>
                </div>
                <div className="dhammahima-cards">
                    {cardData.map((card) => (
                        <div
                            className={`dhammahima-card ${card.borderClass}`}
                            key={card.title}
                            tabIndex={0}
                        >
                            <div className="dhammahima-card-icon">
                                <img src={card.icon} alt={card.title} />
                            </div>
                            <div className="dhammahima-card-title">{card.title}</div>
                            <div className="dhammahima-card-text">{card.text}</div>
                            <div className="dhammahima-card-bottom-border"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
