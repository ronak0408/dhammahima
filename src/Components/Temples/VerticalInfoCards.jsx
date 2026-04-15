import React from 'react';

export default function VerticalInfoCards({ data }) {
    const [infoCard, ritualsCard] = data;

    return (
        <section className="flex flex-col md:flex-row justify-center items-stretch w-full mx-auto gap-8 my-12 px-4">
            {/* Basic Information Card */}
            <div className="flex-1 max-w-[45%] bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-xl border border-yellow-200 border-opacity-50 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-yellow-400 p-8 min-w-[290px]" style={{ minHeight: '410px' }}>
                <h2 className="text-2xl font-serif font-semibold text-yellow-500 mb-6 flex items-center select-none">
                    <span role="img" aria-label="location" className="mr-2">{infoCard.icon}</span>
                    {infoCard.title}
                </h2>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-800">
                    {infoCard.details.map(item => (
                        <React.Fragment key={item.label}>
                            <dt className="font-semibold">{item.label}</dt>
                            <dd>{item.value}</dd>
                        </React.Fragment>
                    ))}
                </dl>
            </div>
            
            {/* Rituals and Aarti Card */}
            <div className="flex-1 max-w-[45%] bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-xl border border-blue-300 border-opacity-50 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-blue-400 p-8 min-w-[290px] flex flex-col justify-between" style={{ minHeight: '410px' }}>
                <div>
                    <h2 className="text-2xl font-serif font-semibold text-blue-500 mb-6 flex items-center select-none">
                        <span role="img" aria-label="prayer" className="mr-2">{ritualsCard.icon}</span>
                        {ritualsCard.title}
                    </h2>
                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-800 mb-4">
                        {ritualsCard.timings.map(item => (
                             <React.Fragment key={item.label}>
                                <dt className="font-semibold">{item.label}</dt>
                                <dd>{item.value}</dd>
                            </React.Fragment>
                        ))}
                    </dl>
                    <p className="text-sm italic text-gray-600">
                        {ritualsCard.note}<br />
                        <span className="block mt-2 text-blue-500 font-serif not-italic">
                            {ritualsCard.quote.text}<br />
                            <span className="text-[1.1em] text-yellow-600">{ritualsCard.quote.author}</span>
                        </span>
                        <span className="block mt-3 text-gray-800">{ritualsCard.description}</span>
                    </p>
                </div>
            </div>
        </section>
    );
}