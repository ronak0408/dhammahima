import React, { useEffect, useRef } from "react";

export default function AboutTemple({ data }) {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("opacity-100", "translate-y-0");
                    }
                });
            },
            { threshold: 0.2 }
        );

        const section = sectionRef.current;
        if (section) {
            section.querySelectorAll(".animate-on-scroll").forEach((el) => {
                el.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-700", "ease-out");
                observer.observe(el);
            });
        }
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full max-w-5xl mx-auto rounded-3xl bg-[#f9f9f9] backdrop-blur-sm border border-gray-200 shadow-md p-10 my-12 overflow-hidden select-none"
        >
            {/* Floating Icon Decorations */}
            <div aria-hidden="true" className="pointer-events-none absolute -top-16 left-1/4 text-yellow-200 text-7xl opacity-10 animate-slow-float select-none">{data.floatingIcons[0]}</div>
            <div aria-hidden="true" className="pointer-events-none absolute bottom-8 right-10 text-purple-300 text-9xl opacity-10 animate-slow-spin select-none">{data.floatingIcons[1]}</div>
            
            {/* Main Heading */}
            <h1 className="animate-on-scroll font-cinzel underline decoration-yellow-400 decoration-4 underline-offset-8 text-4xl md:text-5xl font-extrabold text-purple-900 mb-12 flex items-center gap-4 select-text">
                <span className="text-yellow-500">{data.titleIcon}</span> {data.title}
            </h1>

            {/* Overview */}
            <article className="animate-on-scroll mb-10 mx-auto max-w-[90%]">
                <h2 className="font-crimson text-3xl text-yellow-600 mb-3 border-b-4 border-yellow-400 inline-block pb-2">{data.overview.title}</h2>
                <p className="text-gray-800 font-crimson text-lg md:text-xl leading-relaxed">{data.overview.text}</p>
            </article>

            {/* Mythological Origin */}
            <article className="animate-on-scroll mb-10 mx-auto max-w-[90%]">
                <h2 className="font-cinzel text-2xl md:text-3xl text-saffron-700 mb-3 border-b-4 border-orange-300 inline-block pb-2 flex items-center gap-2">
                    <span className="text-2xl">{data.mythology.icon}</span> {data.mythology.title}
                </h2>
                <p className="text-gray-800 font-crimson text-lg leading-relaxed bg-orange-50/60 rounded-lg p-6 shadow-sm">{data.mythology.text}</p>
            </article>

            {/* Architectural Highlights */}
            <article className="animate-on-scroll mb-10 mx-auto max-w-[90%]">
                <h2 className="font-crimson text-3xl text-blue-600 mb-3 border-b-4 border-blue-400 inline-block pb-2 flex items-center gap-2">
                    <span className="text-2xl">{data.architecture.icon}</span> {data.architecture.title}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-800 font-crimson text-base md:text-lg">
                    {data.architecture.points.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
            </article>

            {/* Spiritual Significance */}
            <article className="animate-on-scroll mb-10 mx-auto max-w-[90%]">
                 <h2 className="font-crimson text-3xl text-purple-700 mb-3 border-b-4 border-purple-500 inline-block pb-2 flex items-center gap-2">
                    <span className="text-2xl">{data.significance.icon}</span> {data.significance.title}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-800 font-crimson text-base md:text-lg text-purple-800 hover:text-purple-900 hover:shadow-outline transition duration-300">
                   {data.significance.points.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
            </article>

            {/* Historical Timeline */}
            <article className="animate-on-scroll mb-10 mx-auto max-w-[90%] overflow-x-auto">
                <h2 className="font-crimson text-3xl text-green-700 mb-4 border-b-4 border-green-400 inline-block pb-2 flex items-center gap-2">
                    <span className="text-2xl">{data.timeline.icon}</span> {data.timeline.title}
                </h2>
                <table className="w-full min-w-[320px] border-separate border-spacing-y-2 text-left shadow rounded-md overflow-hidden">
                    <thead>
                        <tr className="bg-green-200 text-green-900 font-semibold text-lg">
                            <th className="px-4 py-2"><span role="img" aria-label="date">🕰️</span> Period</th>
                            <th className="px-4 py-2"><span role="img" aria-label="event">📜</span> Event</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.timeline.events.map(({ period, event }, idx) => (
                            <tr key={idx} className={`${idx % 2 === 0 ? 'bg-green-50' : 'bg-green-100'} text-green-900 text-base`}>
                                <td className="px-4 py-3 align-top font-semibold">{period}</td>
                                <td className="px-4 py-3">{event}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </article>

            {/* Notable Beliefs & Legends */}
            <article className="animate-on-scroll mx-auto max-w-[90%]">
                <h2 className="font-crimson text-3xl text-indigo-700 mb-5 border-b-4 border-indigo-500 inline-block pb-2 flex items-center gap-2">
                    <span className="text-2xl">{data.beliefs.icon}</span> {data.beliefs.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {data.beliefs.items.map(({ icon, text }, i) => (
                        <div key={i} className="flex items-start gap-4 bg-indigo-50/40 backdrop-blur-sm rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-[1.02] transition transform duration-300">
                            <div className="text-indigo-600 text-3xl flex-shrink-0 select-none">{icon}</div>
                            <p className="text-gray-800 font-serif leading-relaxed">{text}</p>
                        </div>
                    ))}
                </div>
            </article>

            {/* Conclusion */}
            <article className="animate-on-scroll mt-12 mx-auto max-w-[90%]">
                <h2 className="font-cinzel text-2xl md:text-3xl text-green-800 mb-3 border-b-4 border-green-400 inline-block pb-2 flex items-center gap-2">
                    <span className="text-2xl">{data.conclusion.icon}</span> {data.conclusion.title}
                </h2>
                <p className="text-gray-800 font-crimson text-lg leading-relaxed bg-green-50/70 rounded-lg p-6 shadow-sm mb-5">{data.conclusion.text}</p>
                <div className="flex items-center mt-2">
                    <span className="font-semibold text-green-700 mr-2">Website:</span>
                    <a href={data.conclusion.website} target="_blank" rel="noopener noreferrer" className="text-green-900 hover:text-green-500 underline font-mono text-base">{data.conclusion.website}</a>
                </div>
            </article>
        </section>
    );
}