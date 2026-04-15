import React, { useState, useEffect, useRef } from "react";
import "./TemplePage.css";

export default function HeroGallery({ data }) {
    const { images, quotes, quoteIcon } = data;
    const [idx, setIdx] = useState(0);
    const [quoteIdx, setQuoteIdx] = useState(0);
    const timeout = useRef(null);

    useEffect(() => {
        timeout.current = setTimeout(() => {
            setIdx(prevIdx => (prevIdx + 1) % images.length);
            setQuoteIdx(prevQuoteIdx => (prevQuoteIdx + 1) % quotes.length);
        }, 4200);
        return () => clearTimeout(timeout.current);
    }, [idx, quoteIdx, images.length, quotes.length]);

    return (
        <section className="kn-hero-section">
            {images.map((src, i) => (
                <img
                    src={src}
                    key={src}
                    alt={`Kedarnath hero ${i + 1}`}
                    className={`kn-hero-img${i === idx ? " active" : ""}`}
                />
            ))}
            <div className="kn-hero-bottom-quote fade-in-animation">
                <span aria-hidden className="kn-hero-om">{quoteIcon}</span>
                <span>{quotes[quoteIdx]}</span>
            </div>
        </section>
    );
}