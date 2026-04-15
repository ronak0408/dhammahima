import React from 'react';
import myimage from '../../assets/blog section/2.jpeg'

const OurServices = () => {
    const cards = [
        {
            id: 1,
            icon: '🕉️',
            title: 'Explore Temples',
            description:
                'DhamMahima is dedicated to exploring the divine glory (Mahima) of sacred pilgrimage sites (Dham). Our mission is to share the spiritual essence, history, and significance of these holy abodes.',
            color: 'saffron',
            link: 'sacred-dhams',
        },
        {
            id: 2,
            icon: '🏛️',
            title: 'Festival Calendar',
            description:
                "India's Dhams hold timeless wisdom and divine energy. DhamMahima serves as a digital guide, offering stories, travel insights, and devotional content to deepen your spiritual connection.",
            color: 'lotus',
            link: '/festival-calendar',
        },
        {
            id: 3,
            icon: '🪔',
            title: 'Trip Planner',
            description:
                "The name 'DhamMahima' combines 'Dham' (sacred site) and 'Mahima' (divine glory). It reflects our commitment to unveiling the spiritual power and miracles of holy places and devotional content to deepen your spiritual connection. ",
            color: 'divine',
            link: '/Trip_Planner',
        },
        {
            id: 4,
            icon: '🙏',
            title: 'Multimedia Hub',
            description:
                "Whether you seek blessings or wish to plan a pilgrimage, DhamMahima is your trusted resource for authentic and inspiring content about India's sacred geography and devotional content to deepen your spiritual connection..",
            color: 'devotion',
            link: '/multimedia-hub',
        },
    ];

    const colorStyles = {
        saffron: {
            border: 'border-t-4 border-orange-400',
            circleBg: 'bg-gradient-to-br from-yellow-50 via-yellow-100 to-orange-100 border-orange-400',
            circleGlow: 'bg-orange-200',
        },
        lotus: {
            border: 'border-t-4 border-orange-500',
            circleBg: 'bg-gradient-to-br from-yellow-50 via-orange-100 to-orange-200 border-orange-500',
            circleGlow: 'bg-orange-300',
        },
        divine: {
            border: 'border-t-4 border-orange-700',
            circleBg: 'bg-gradient-to-br from-orange-50 to-orange-200 border-orange-700',
            circleGlow: 'bg-orange-400',
        },
        devotion: {
            border: 'border-t-4 border-yellow-300',
            circleBg: 'bg-gradient-to-br from-yellow-50 to-yellow-200 border-yellow-300',
            circleGlow: 'bg-yellow-300',
        },
    };

    return (
        <section className="relative w-full min-h-screen font-serif text-orange-900 overflow-hidden">
            {/* Full screen background image with semi-transparent overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${myimage})` }}
            ></div>
            <div class="absolute inset-0 z-0 bg-[rgba(255,255,255,0.5)] backdrop-blur-md"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="text-5xl mb-3 text-orange-600 animate-pulse">ॐ</div>
                    <h2 className="text-3xl font-semibold tracking-tight font-cinzel mb-1">
                        Our Enlightening{' '}
                        <span className="bg-gradient-to-r from-orange-600 via-yellow-400 to-orange-600 bg-clip-text text-transparent font-extrabold animate-shine">
              Services
            </span>
                    </h2>
                    <p className="italic text-sm max-w-lg mx-auto text-orange-900/90">
                        We have many reasons, but here are the most divine ones
                    </p>
                    <div className="mx-auto mt-4 h-1.5 w-36 rounded bg-gradient-to-r from-transparent via-orange-500 via-75% to-transparent" />
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, index) => (
                        <article
                            key={card.id}
                            className={`relative rounded-2xl bg-white bg-opacity-90 backdrop-blur-md p-5 shadow-md border border-white/25 transition-transform hover:shadow-lg hover:scale-105 ${colorStyles[card.color].border}`}
                            style={{
                                animation: 'cardAppear 0.8s ease-out backwards',
                                animationDelay: `${0.1 * (index + 1)}s`,
                            }}
                        >
                            <div
                                className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full border-4 ${colorStyles[card.color].circleBg}`}
                            >
                                <span className="text-2xl">{card.icon}</span>
                            </div>
                            <h3 className="text-center text-base text-orange-900 font-semibold mb-2 font-cinzel tracking-tight leading-tight">
                                {card.title}
                            </h3>

                            <p className="text-xs text-orange-900/80 leading-relaxed max-h-24 overflow-hidden">
                                {card.description}
                            </p>
                            <a
                                href={card.link}
                                className="block w-fit text-center mt-5 mx-auto px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold shadow-md hover:from-orange-500 hover:to-orange-600"
                            >
                                Discover More
                            </a>

                            <div className="text-xl mt-2 opacity-70 animate-gentleFloat">🪷</div>
                        </article>
                    ))}
                </div>

                {/* Footer Mantra */}
                <footer className="mt-12 text-center">
                    <p className="italic font-semibold tracking-wider text-orange-900/90 text-sm max-w-xl mx-auto">
                        सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः
                    </p>
                </footer>
            </div>

            {/* Scoped animations */}
            <style>{`
        @keyframes cardAppear {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes shine {
          to { background-position: 200% center; }
        }
        .animate-shine {
          animation: shine 3s linear infinite;
          background-size: 200% auto;
        }
        .animate-pulse {
          animation: pulse 3.5s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
};

export default OurServices;
