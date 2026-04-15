import React from "react";
import "./TemplePage.css";

export default function BlogSection({ data }) {
    return (
        <section className="kn-blogs-wrap">
            <h2 className="kn-blogs-title">{data.title}</h2>
            <div className="kn-blogs-list">
                {data.posts.map((b, i) => (
                    <a href={b.link} key={i} className="kn-blog-block fade-in-on-scroll">
                        <img src={b.img} alt={b.title} className="kn-blog-img"/>
                        <div className="kn-blog-body">
                            <div className="kn-blog-title">{b.title}</div>
                            <div className="kn-blog-intro">{b.intro}</div>
                            <span className="kn-blog-read">Read More →</span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}