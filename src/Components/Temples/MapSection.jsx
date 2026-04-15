import React from "react";
import "./TemplePage.css"; // Or your relevant CSS file

export default function MapSection({ data }) {
    // A check to prevent errors if data is not yet loaded
    if (!data) {
        return null;
    }

    return (
        <section className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-lg border border-yellow-300 border-opacity-30 p-6 flex flex-col items-stretch justify-stretch w-full h-full">
            <div className="mb-3">
                <h3 className="text-yellow-600 text-xl font-serif font-semibold mb-1 select-none flex items-center gap-2">
                    <span role="img" aria-label="location">{data.icon}</span> {data.title}
                </h3>
                <p className="text-gray-800 font-crimson text-base leading-normal m-5">
                    {data.description}
                </p>
            </div>

            <div className="flex-1 flex min-h-[320px]">
                <iframe
                    title={data.title}
                    src={data.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" // This is a key attribute
                    className="rounded-xl shadow-md"
                />
            </div>
        </section>
    );
}