import React from "react";

export default function FinalInfoCard({ data }) {
    return (
        <section className="bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-lg border border-yellow-300 border-opacity-40 p-8 min-w-[280px] max-w-full flex flex-col text-gray-900 font-sans h-full">
            <h2 className="text-2xl font-serif font-semibold text-yellow-600 mb-6 flex items-center select-none">
                <span role="img" aria-label="map" className="mr-3">{data.icon}</span>
                {data.title}
            </h2>
            <div className="space-y-4 leading-relaxed text-base md:text-lg font-medium">
                {data.methods.map(method => (
                    <div key={method.title}>
                        <h3 className="font-semibold text-yellow-700 mb-1">{method.title}</h3>
                        <p>{method.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}