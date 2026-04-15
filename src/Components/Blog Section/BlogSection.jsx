import React from 'react';
import blogBg from '../../assets/blog section/bdr1.jpeg';

const blogs = [
    {
        id: 1,
        title: 'Sacred Architecture of Ancient Temples',
        description: 'Discover the divine geometry and spiritual significance behind Hindu temple architecture, from Vastu Shastra principles to cosmic symbolism.',
        slug: 'sacred-architecture-ancient-temples',
    },
    {
        id: 2,
        title: 'Char Dham Yatra: The Ultimate Pilgrimage',
        description: 'Explore the spiritual journey of Char Dham - Badrinath, Dwarka, Puri, and Rameswaram, and their significance in Hindu tradition.',
        slug: 'char-dham-yatra-ultimate-pilgrimage',
    },
    {
        id: 3,
        title: 'Festival Celebrations Across Sacred Sites',
        description: 'Experience the vibrant celebrations of major Hindu festivals at different temples and their cultural importance.',
        slug: 'festival-celebrations-sacred-sites',
    },
    {
        id: 4,
        title: 'Mantras and Their Spiritual Power',
        description: 'Understand the ancient science of mantras, their pronunciation, meanings, and transformative effects on mind and soul.',
        slug: 'mantras-spiritual-power',
    },
    {
        id: 5,
        title: 'Temple Rituals and Their Significance',
        description: 'Learn about daily temple rituals, puja procedures, and the spiritual science behind Hindu worship practices.',
        slug: 'temple-rituals-significance',
    },
    {
        id: 6,
        title: 'Meditation Practices in Sacred Spaces',
        description: 'Explore traditional meditation techniques practiced in temples and their role in spiritual awakening.',
        slug: 'meditation-practices-sacred-spaces',
    },
    {
        id: 7,
        title: 'Divine Stories Behind Temple Deities',
        description: 'Discover the fascinating legends, stories, and historical significance of various temple deities across India.',
        slug: 'divine-stories-temple-deities',
    },
    {
        id: 8,
        title: 'Ayurveda and Spiritual Healing',
        description: 'Uncover the connection between Ayurvedic principles and spiritual healing practices in ancient Indian tradition.',
        slug: 'ayurveda-spiritual-healing',
    }
];

const BlogSection = () => (
    <div
        className="min-h-screen w-full relative bg-cover bg-center font-sans"
        style={{ backgroundImage: `url(${blogBg})` }}
    >
        {/* Greyish blur overlay */}
        <div className="absolute inset-0 backdrop-blur-md bg-gray-100/60 z-0"></div>

        {/* Main content */}
        <div className="relative z-10 max-w-[1200px] mx-auto min-h-screen flex flex-col px-4 sm:px-16 pt-16 pb-10">

            {/* Header */}
            <header className="text-center mb-11">
                <span className="inline-block mb-2 text-[46px] font-medium text-[#6f3c97] font-poppins">
                    ॐ
                </span>
                <h1 className="text-[2.3rem] font-extrabold text-[#2c3e50] mb-[7px] font-poppins tracking-tight">
                    Spiritual <span className="text-[#6f3c97] font-extrabold tracking-wide">Blog Library</span>
                </h1>
                <p className="text-[#636363] text-lg font-inter mb-0">
                    Insights and knowledge from the sacred traditions of India
                </p>
            </header>

            {/* Blogs grid */}
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                {blogs.map((blog, index) => {
                    const borderColors = ['border-l-[#3498db]', 'border-l-[#e471b8]', 'border-l-[#ffe066]'];
                    const borderColorClass = `border-l-4 ${borderColors[index % borderColors.length]}`;

                    return (
                        <div
                            key={blog.id}
                            className={`bg-[#fafbfc]/80 rounded-xl shadow-[0_2px_14px_rgba(44,62,80,0.06)] 
                            flex flex-col items-center p-6 relative transition-transform duration-150 
                            ease-in-out hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(44,62,80,0.13),0_2px_10px_rgba(52,152,219,0.06)] z-10 
                            ${borderColorClass}`}
                        >
                            <div className="text-2xl text-[#6f3c97] mb-3 text-center select-none">
                                📖
                            </div>
                            <h2 className="font-poppins font-semibold text-[#2c3e50] text-[1.08rem] mb-2 text-center tracking-wide leading-tight">
                                {blog.title}
                            </h2>
                            <p className="font-inter text-[#363942] text-[0.98rem] font-medium opacity-[0.95] text-center mb-4">
                                {blog.description}
                            </p>
                            <a
                                href={`/blog/${blog.slug}`}
                                className="font-poppins font-medium text-sm bg-[#fff] text-[#2c3e50] rounded-md border border-gray-300
                                shadow px-4 py-1.5 transition duration-150 hover:bg-[#eee] hover:text-[#3498db] hover:border-gray-400"
                            >
                                Read More
                            </a>
                        </div>
                    );
                })}
            </div>

            {/* Explore Blogs Button */}
            <div className="text-center mt-4 mb-2">
                <a
                    href="/blogs"
                    className="inline-block font-poppins font-extrabold text-lg bg-white text-[#6f3c97] rounded-[24px] border border-gray-200 shadow-[0_2px_11px_rgba(44,62,80,0.08)]
                    px-8 py-3.5 no-underline transition-colors duration-150 hover:bg-[#e471b8] hover:text-white"
                >
                    Explore All Blogs 🪔
                </a>
            </div>

            {/* Footer Mantra */}
            <footer className="mt-8 text-center">
                <span className="block font-poppins font-semibold text-[#6f3c97] text-lg opacity-[0.93] tracking-wide mb-1 select-text">
                    सर्वे भवन्तु सुखिनः
                </span>
                <span className="italic font-inter text-[#333333cc] opacity-[0.82] text-base select-text">
                    May all be happy and at peace
                </span>
            </footer>
        </div>
    </div>
);

export default BlogSection;
