import { Link } from "react-router-dom";

const templesData = [
    {
        name: "Kashi Vishwanath Temple",
        slug: "kashi-vishwanath",
        summary: "One of the 12 Jyotirlingas of Lord Shiva, this temple holds immense religious significance and attracts millions of devotees annually.",
    },
    {
        name: "Annapurna Temple",
        slug: "annapurna",
        summary: "Dedicated to the Goddess of Nourishment, this temple is an important spiritual spot in Varanasi.",
    },
    {
        name: "Sankat Mochan Hanuman Temple",
        slug: "sankat-mochan-hanuman",
        summary: "A revered temple dedicated to Lord Hanuman, known for removing obstacles and fulfilling wishes.",
    },
    {
        name: "Durga Kund Mandir",
        slug: "durga-kund",
        summary: "A sacred shrine dedicated to Goddess Durga, famous for its vibrant festivals and rituals.",
    },
    {
        name: "Tulsi Manas Mandir",
        slug: "tulsi-manas",
        summary: "Built at the place where Tulsidas wrote the Ramcharitmanas, this temple attracts devotees and literati alike.",
    },
    {
        name: "Bharat Mata Mandir",
        slug: "bharat-mata",
        summary: "Dedicated to Mother India, this temple showcases a relief map of India sculpted in marble.",
    },
    {
        name: "Kal Bhairav Temple",
        slug: "kal-bhairav",
        summary: "A shrine dedicated to Kal Bhairav, a fierce manifestation of Lord Shiva, highly worshipped for protection.",
    },
];

export default function TemplesSection() {
    return (
        <section
            className="w-[80%] max-w-5xl mx-auto mb-12"
            aria-labelledby="temples-section-heading"
        >
            <h2
                id="temples-section-heading"
                className="text-2xl md:text-3xl font-bold text-purple-800 tracking-wide mb-6 animate-fade-in-up"
            >
                Famous Temples &amp; Spiritual Spots
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {templesData.map(({ name, slug, summary }) => (
                    <article
                        key={slug}
                        className="bg-white/90 rounded-lg border border-purple-200 p-5
                       backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <h3 className="text-lg font-semibold text-purple-700 mb-2">
                            <Link
                                to={`/temples/${slug}`}
                                aria-label={`Navigate to details about ${name}`}
                                className="hover:underline hover:text-purple-900 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded"
                            >
                                {name}
                            </Link>
                        </h3>
                        <p className="text-gray-800 mb-4 leading-relaxed">{summary}</p>
                        <Link
                            to={`/temples/${slug}`}
                            aria-label={`Read more about ${name}`}
                            className="text-purple-600 font-medium hover:underline hover:text-purple-900 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded"
                        >
                            Read more &rarr;
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}
