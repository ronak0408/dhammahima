import React from "react";

export default function AboutPostCards({ data }) {
    const [festivalsCard, attractionsCard] = data;

    return (
        <section className="flex flex-col md:flex-row justify-center items-stretch w-full mx-auto gap-8 mt-10 px-4 max-w-5xl">
            {/* Card 1: Major Festivals */}
            <div className="flex-1 max-w-[45%] bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-yellow-200 border-opacity-40 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl p-8 min-w-[290px] flex flex-col">
                <h2 className="text-2xl font-serif font-semibold text-yellow-500 mb-5 flex items-center select-none">
                    <span role="img" aria-label="festival" className="mr-2">{festivalsCard.icon}</span>
                    {festivalsCard.title}
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 text-base md:text-lg font-medium font-crimson">
                    {festivalsCard.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>

            {/* Card 2: Nearby Attractions */}
            <div className="flex-1 max-w-[45%] bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-indigo-200 border-opacity-40 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl p-8 min-w-[290px] flex flex-col">
                <h2 className="text-2xl font-serif font-semibold text-indigo-600 mb-5 flex items-center select-none">
                    <span role="img" aria-label="attractions" className="mr-2">{attractionsCard.icon}</span>
                    {attractionsCard.title}
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 text-base md:text-lg font-medium font-crimson">
                    {attractionsCard.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
        </section>
    );
}