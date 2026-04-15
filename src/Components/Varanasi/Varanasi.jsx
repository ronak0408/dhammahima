import React, { useState } from "react";
import Img1 from '../../assets/Varanasi/1.jpg';
import Img2 from '../../assets/Varanasi/2.jpg';
import Img3 from '../../assets/Varanasi/3.jpg';
import Img4 from '../../assets/Varanasi/4.jpg';
import Img5 from '../../assets/Varanasi/5.jpg';
import { Link } from "react-router-dom";
import TemplesSection from "./TemplesSection.jsx";

const varanasiImages = [Img1, Img2, Img3, Img4, Img5];




// Add your image URLs in the array below:


export default function VaranasiPage() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () =>
        setCurrent((prev) => (prev === 0 ? varanasiImages.length - 1 : prev - 1));
    const nextSlide = () =>
        setCurrent((prev) => (prev === varanasiImages.length - 1 ? 0 : prev + 1));

    return (
        <div className="relative min-h-screen flex flex-col"
             style={{
                 fontFamily: "'Inter', 'Nunito', 'Roboto', sans-serif"
             }}
        >
            {/* Background - keep everything scoped here */}
            <div
                aria-hidden
                className="fixed inset-0 -z-10 pointer-events-none"
                style={{
                    background: "linear-gradient(120deg, #D1C6F4 0%, #F1E6D7 50%, #DED9F3 100%)",
                    opacity: 0.85,
                    backgroundAttachment: "fixed",
                }}
            />

            {/* SPACING BELOW NAVBAR */}
            <div className="mt-16" />

            {/* HERO SECTION */}
            {/* HERO SECTION */}
            <section className="w-full flex flex-col items-center justify-center pt-6 pb-8">
                <h1 className="
      text-4xl md:text-5xl font-extrabold
      bg-gradient-to-br from-purple-800/80 via-yellow-500/70 to-blue-400/80
      bg-clip-text text-transparent
      tracking-tight drop-shadow-lg
      animate-fade-in-up
      text-center
    "
                >
                    Famous Cities: Varanasi
                </h1>
                <p className="mt-3 text-base md:text-xl text-gray-700 opacity-90 font-medium text-center animate-fade-in-up" style={{animationDelay:"150ms"}}>
                    The Spiritual Heart of India
                </p>
            </section>

            {/* GALLERY SECTION — now above overview! */}
            <section className="w-full flex flex-col items-center mb-16">
                <div className="
    w-[90vw] max-w-[90vw] mx-auto py-8 px-4 rounded-3xl
    bg-white/50 backdrop-blur-md shadow-2xl
    ring-1 ring-inset ring-purple-100/60
    animate-fade-in-up
  ">
                    <div className="flex items-center justify-between mb-8">
                        <button
                            onClick={prevSlide}
                            className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition text-purple-700"
                            aria-label="Previous Image"
                        >
                            &#8592;
                        </button>
                        <span
                            className="
          text-2xl md:text-3xl font-extrabold tracking-wider text-center
          bg-gradient-to-r from-purple-600 via-yellow-500 to-blue-400
          bg-clip-text text-transparent
          drop-shadow-lg select-none transition
          hover:underline hover:decoration-wavy hover:underline-offset-8
          hover:text-purple-700 focus-visible:ring-2 focus-visible:ring-purple-300 rounded
        "
                            tabIndex={0}
                            aria-label="Gallery"
                        >
        Gallery
      </span>
                        <button
                            onClick={nextSlide}
                            className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition text-purple-700"
                            aria-label="Next Image"
                        >
                            &#8594;
                        </button>
                    </div>
                    <div className="relative w-full overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-out"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {varanasiImages.map((src, idx) => (
                                <div
                                    key={idx}
                                    className="w-full flex-shrink-0 pr-4 last:pr-0 flex flex-col items-center"
                                    style={{ minWidth: "100%" }}
                                >
                                    <img
                                        src={src}
                                        alt={`Varanasi Gallery Image ${idx + 1}`}
                                        className="rounded-2xl shadow-lg object-cover w-full h-72 md:h-[25rem] transition-transform duration-700 hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-5 space-x-2">
                            {varanasiImages.map((_, idx) => (
                                <button
                                    key={idx}
                                    aria-label={`Go to image ${idx + 1}`}
                                    className={`rounded-full w-3 h-3 border border-purple-400 transition-all duration-300 ${
                                        idx === current ? "bg-purple-600 scale-110" : "bg-white/70"
                                    }`}
                                    onClick={() => setCurrent(idx)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* OVERVIEW SECTION + CARDS — remains the same, just below the gallery now */}
            <section className="w-full flex flex-col items-center mb-8">
                <h2 className="
      text-2xl md:text-3xl font-bold
      text-purple-800
      tracking-wide mb-4
      animate-fade-in-up
  ">
                    Overview
                </h2>
                <div
                    className="
      w-[90%] max-w-5xl bg-white/90 rounded-xl shadow-lg p-6 md:p-10 border
      border-gray-100 text-gray-900 font-medium text-lg leading-relaxed
      backdrop-blur-[2px] animate-fade-in-up
    "
                    style={{ animationDelay: "250ms" }}
                >
                    Varanasi, also known as Kashi or Banaras, is one of the oldest continuously inhabited cities in the world and the spiritual capital of India. Located on the banks of the sacred River Ganga in the state of Uttar Pradesh, Varanasi is considered the city of Lord Shiva and holds a unique place in Hinduism, Buddhism, and Jainism.
                    <br /><br />
                    <span className="font-semibold text-purple-700">🌟 Spiritual Significance</span><br />
                    Varanasi is believed to be founded by Lord Shiva himself, making it one of the holiest pilgrimage destinations in India. It is said that dying in Kashi grants <span className="italic">moksha</span> (liberation) from the cycle of rebirth. Every corner of the city is steeped in spiritual energy — from its 2,000+ temples to its mystical ghats, where life and death coexist peacefully.
                </div>

            </section>

            {/* HISTORY, CULTURE, TRAVEL SECTION — Insert after overview/cards */}
            <section className="w-full flex flex-col items-center mb-12">
                <div className="
    w-[90%] max-w-5xl bg-white/90 rounded-xl shadow-lg p-6 md:p-10 border
    border-gray-100 text-gray-900 font-normal text-lg leading-relaxed
    backdrop-blur-[2px] animate-fade-in-up
    space-y-7
  ">
                    {/* History & Culture */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-purple-800 mb-2 flex items-center gap-2">
                            <span role="img" aria-label="document">📜</span>
                            History &amp; Culture
                        </h3>
                        <p>
                            Varanasi has been a center of learning, music, and spirituality for over 3,000 years. It is mentioned in ancient texts like the Rigveda and was visited by great saints like Gautam Buddha, Adi Shankaracharya, Kabir, Tulsidas, and Guru Nanak. The city’s narrow lanes, classical music, and Sanskrit schools preserve an ancient way of life amidst modern chaos.
                        </p>
                    </div>
                    {/* Why Visit Varanasi */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-purple-800 mb-2 flex items-center gap-2">
                            <span role="img" aria-label="yoga">🧘‍♂️</span>
                            Why Visit Varanasi
                        </h3>
                        <ul className="list-disc list-inside pl-4 space-y-1">
                            <li>Attend the mesmerizing <span className="font-medium">Ganga Aarti</span></li>
                            <li>Take a boat ride at sunrise on the Ganges</li>
                            <li>Visit sacred temples and feel divine presence</li>
                            <li>Explore traditional silk weaving, music, and Banarasi paan</li>
                            <li>Experience life and death as one — a city that celebrates both equally</li>
                        </ul>
                    </div>
                    {/* Best Time to Visit */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-purple-800 mb-2 flex items-center gap-2">
                            <span role="img" aria-label="calendar">📅</span>
                            Best Time to Visit
                        </h3>
                        <p>
                            October to March offers pleasant weather for exploring. Major festivals like <span className="font-medium">Dev Deepawali, Mahashivratri,</span> and <span className="font-medium">Kartik Purnima</span> enhance the spiritual aura.
                        </p>
                    </div>
                    {/* How to Reach */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-purple-800 mb-2 flex items-center gap-2">
                            <span role="img" aria-label="train">🚉</span>
                            How to Reach
                        </h3>
                        <ul className="list-disc list-inside pl-4 space-y-1">
                            <li>
                                <span className="font-medium">By Air:</span> Lal Bahadur Shastri International Airport (VNS)
                            </li>
                            <li>
                                <span className="font-medium">By Rail:</span> Varanasi Junction and Kashi Railway Station are well-connected
                            </li>
                            <li>
                                <span className="font-medium">By Road:</span> Buses and taxis available from major cities in North India
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* FOOD SECTION — Place after previous sections */}
            <section className="w-full flex flex-col items-center mb-12">
                <div className="
    w-[90%] max-w-5xl bg-white/90 rounded-xl shadow-lg p-6 md:p-10 border
    border-gray-100 text-gray-900 font-normal text-lg leading-relaxed
    backdrop-blur-[2px] animate-fade-in-up
    space-y-8
  ">
                    {/* Section Header */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-orange-600 mb-2 flex items-center gap-2">
                            <span role="img" aria-label="food">🍛</span>
                            Traditional Food of Varanasi: A Divine Treat for the Tastebuds
                        </h3>
                        <p>
                            Varanasi’s food is as soul-satisfying as its spiritual aura. Rooted in <span className="font-semibold">Purity (Satvik)</span> and tradition, the cuisine here offers a mix of vegetarian delicacies, street food, and sweets that reflect the city's rich cultural heritage.
                        </p>
                    </div>
                    {/* Cards Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Card 1 - Must-Try Dishes */}
                        <div className="
        bg-white/80 rounded-xl shadow-md border border-orange-100
        p-6 flex flex-col gap-2 backdrop-blur-md
        transition-all duration-300 hover:shadow-xl
      ">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-2xl">🧆</span>
                                <span className="font-semibold text-lg text-orange-700">Must-Try Dishes in Varanasi</span>
                            </div>
                            <ul className="list-disc list-inside pl-2 space-y-1 text-gray-800">
                                <li>
                                    <span className="font-medium">Kachori Sabzi</span> – A traditional breakfast of crispy kachoris stuffed with dal and served with spicy potato curry.
                                </li>
                                <li>
                                    <span className="font-medium">Tamatar Chaat</span> – A unique spicy, tangy tomato-based chaat served hot with crushed papdi and ghee.
                                </li>
                                <li>
                                    <span className="font-medium">Baati Chokha</span> – A local delicacy made of baked wheat balls with spicy mashed potatoes, brinjal, and chutneys.
                                </li>
                                <li>
                                    <span className="font-medium">Malaiyyo (Nimish)</span> – A winter specialty made from milk froth, saffron, and dry fruits, as soft as clouds.
                                </li>
                                <li>
                                    <span className="font-medium">Chena Dahi Vada</span> – A refreshing sweet-and-sour snack made of soft paneer balls soaked in curd and spices.
                                </li>
                            </ul>
                        </div>
                        {/* Card 2 - Sweets & Desserts */}
                        <div className="
        bg-white/80 rounded-xl shadow-md border border-orange-100
        p-6 flex flex-col gap-2 backdrop-blur-md
        transition-all duration-300 hover:shadow-xl
      ">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-2xl">🍬</span>
                                <span className="font-semibold text-lg text-orange-700">Sweets & Desserts</span>
                            </div>
                            <ul className="list-disc list-inside pl-2 space-y-1 text-gray-800">
                                <li>
                                    <span className="font-medium">Rabri</span> – Thickened milk with sugar and dry fruits, served chilled.
                                </li>
                                <li>
                                    <span className="font-medium">Jalebi</span> – Golden, crispy, and dipped in sugar syrup, often eaten with curd.
                                </li>
                                <li>
                                    <span className="font-medium">Lassi</span> – Served in clay pots (kulhads), thick, creamy, and topped with malai.
                                </li>
                                <li>
                                    <span className="font-medium">Banarasi Paan</span> – A cultural icon — betel leaf filled with sweet and aromatic fillings, considered a must-have after meals.
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Famous Food Streets */}
                    <div>
                        <h4 className="text-lg md:text-xl font-semibold text-orange-600 mb-2 flex items-center gap-2">
                            <span role="img" aria-label="city">🏙️</span>
                            Famous Food Streets
                        </h4>
                        <ul className="list-disc list-inside pl-4 space-y-1 text-gray-900">
                            <li>
                                <span className="font-medium">Kachori Gali near Vishwanath Temple</span> – For authentic morning snacks.
                            </li>
                            <li>
                                <span className="font-medium">Godowlia Market</span> – A heaven for chaat, sweets, and street bites.
                            </li>
                            <li>
                                <span className="font-medium">Thatheri Bazaar &amp; Lanka Market</span> – For sweets and traditional Banarasi thali.
                            </li>
                        </ul>
                    </div>
                    {/* Spiritual Touch */}
                    <div>
                        <h4 className="text-lg md:text-xl font-semibold text-orange-600 mb-2 flex items-center gap-2">
                            <span role="img" aria-label="om">🕉️</span>
                            Spiritual Touch in Every Bite
                        </h4>
                        <p>
                            Most food in Varanasi is <span className="font-semibold">Satvik</span> (pure vegetarian and onion-garlic free), aligning with the city’s deeply spiritual character. Food is often offered to deities before being consumed, making it <span className="italic">prasadam</span> — sacred nourishment.
                        </p>
                    </div>
                </div>
            </section>

            {/* SHOPPING SECTION — Place after previous sections */}
            <section className="w-full flex flex-col items-center mb-12">
                <div className="
    w-[90%] max-w-5xl bg-white/90 rounded-xl shadow-lg p-6 md:p-10 border
    border-gray-100 text-gray-900 font-normal text-lg leading-relaxed
    backdrop-blur-[2px] animate-fade-in-up
    space-y-8
  ">
                    {/* Section Header */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-emerald-700 mb-2 flex items-center gap-2">
                            <span role="img" aria-label="shopping">🛍️</span>
                            Shopping in Varanasi: A Blend of Culture, Craft &amp; Spirituality
                        </h3>
                        <p>
                            Varanasi is not just about temples and ghats — it’s also a shopper’s paradise, especially for those seeking traditional Indian art, fabric, and spiritual souvenirs. Walking through the bustling lanes of Varanasi is like traveling through time, where every corner holds something handcrafted and unique.
                        </p>
                    </div>
                    {/* What to Buy */}
                    <div>
                        <h4 className="text-lg md:text-xl font-semibold text-emerald-600 mb-2 flex items-center gap-2">
                            <span role="img" aria-label="sparkles">✨</span>
                            What to Buy in Varanasi
                        </h4>
                        <ul className="list-disc list-inside pl-4 space-y-1 text-gray-900">
                            <li>
                                <span className="font-medium">Banarasi Sarees:</span> World-famous silk sarees with intricate gold and silver zari work — perfect for weddings and festivals.
                            </li>
                            <li>
                                <span className="font-medium">Rudraksha Beads &amp; Spiritual Items:</span> Sacred beads, malas, shivlings, copper pots, incense, and puja items.
                            </li>
                            <li>
                                <span className="font-medium">Handicrafts &amp; Wooden Toys:</span> Beautifully carved wooden artifacts, toys, masks, and decorative items.
                            </li>
                            <li>
                                <span className="font-medium">Brassware &amp; Metal Idols:</span> Devotional statues of Shiva, Ganesha, Durga, and more, along with traditional lamps (deepak).
                            </li>
                            <li>
                                <span className="font-medium">Musical Instruments:</span> Tabla, sitar, and other instruments used in Indian classical music.
                            </li>
                            <li>
                                <span className="font-medium">Paan Boxes &amp; Betel Nut Cutters:</span> Iconic items reflecting Banarasi tradition.
                            </li>
                        </ul>
                    </div>
                    {/* Famous Markets */}
                    <div>
                        <h4 className="text-lg md:text-xl font-semibold text-emerald-600 mb-2 flex items-center gap-2">
                            <span role="img" aria-label="map">📍</span>
                            Famous Markets in Varanasi
                        </h4>
                        <ul className="list-disc list-inside pl-4 space-y-1 text-gray-900">
                            <li>
                                <span className="font-medium">Vishwanath Gali</span> – Close to the Kashi Vishwanath Temple; best for souvenirs, spiritual items, rudraksha malas, and small idols.
                            </li>
                            <li>
                                <span className="font-medium">Thatheri Bazaar</span> – Known for brassware, copper utensils, and religious artifacts.
                            </li>
                            <li>
                                <span className="font-medium">Chowk and Godowlia Market</span> – Bustling lanes with Banarasi sarees, silk items, and street food.
                            </li>
                            <li>
                                <span className="font-medium">Lahurabir &amp; Madanpura</span> – Authentic silk saree weavers and wholesale shops.
                            </li>
                            <li>
                                <span className="font-medium">Rajan Silk Emporium</span> – Trusted stop for genuine Banarasi silk with certification.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* TRAVEL TIPS & SHOPPING TREASURES SECTION */}
            <section className="w-full flex flex-col items-center mb-12">
                <div className="
    w-[90%] max-w-5xl bg-white/90 rounded-xl shadow-lg p-6 md:p-10 border
    border-gray-100 text-gray-900 font-normal text-lg leading-relaxed
    backdrop-blur-[2px] animate-fade-in-up
    space-y-8
  ">
                    {/* Travel Tips */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-yellow-700 mb-3 flex items-center gap-2">
                            <span role="img" aria-label="gift">🎁</span>
                            Travel Tip for Tourists
                        </h3>
                        <ul className="list-disc list-inside pl-5 space-y-1 text-gray-900">
                            <li>Always check the silk quality and ask for authenticity if buying Banarasi sarees.</li>
                            <li>Bargaining is common in local markets but be respectful.</li>
                            <li>Many shops offer home shipping and customization for sarees or pooja items.</li>
                        </ul>
                    </div>

                    {/* Shopping Treasures Intro */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-yellow-700 mb-3 flex items-center gap-2">
                            <span role="img" aria-label="shopping bags">🛍️</span>
                            More Shopping Treasures in Varanasi
                        </h3>
                        <p>
                            Explore beyond the usual souvenirs with these exquisite categories popular in Varanasi.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 - Local Arts & Crafts */}
                        <div className="
        bg-white/80 rounded-xl shadow-md border border-yellow-200
        p-6 flex flex-col gap-3 backdrop-blur-md
        transition-all duration-300 hover:shadow-xl
      ">
                            <div className="flex items-center gap-2 mb-2">
                                <span role="img" aria-label="art palette" className="text-2xl">🎨</span>
                                <span className="font-semibold text-lg text-yellow-700">Local Arts &amp; Crafts</span>
                            </div>
                            <ul className="list-disc list-inside pl-5 space-y-1 text-gray-800">
                                <li><span className="font-medium">Gulabi Meenakari</span> – Rare pink enamel work unique to Varanasi, seen on jewelry and decor.</li>
                                <li><span className="font-medium">Stone Inlay Work &amp; Marble Crafts</span> – Mughal-style art with Hindu symbolism.</li>
                                <li><span className="font-medium">Miniature Paintings</span> – Depicting ghats, temples, and traditional life.</li>
                            </ul>
                        </div>

                        {/* Card 2 - Edible Souvenirs */}
                        <div className="
        bg-white/80 rounded-xl shadow-md border border-yellow-200
        p-6 flex flex-col gap-3 backdrop-blur-md
        transition-all duration-300 hover:shadow-xl
      ">
                            <div className="flex items-center gap-2 mb-2">
                                <span role="img" aria-label="candy" className="text-2xl">🍬</span>
                                <span className="font-semibold text-lg text-yellow-700">Edible Souvenirs</span>
                            </div>
                            <ul className="list-disc list-inside pl-5 space-y-1 text-gray-800">
                                <li><span className="font-medium">Banarasi Paan Boxes</span> – Pre-packed paan or paan masala as souvenirs.</li>
                                <li><span className="font-medium">Desi Ghee Sweets</span> – Pedas, khoya barfi, launglata, and kheer mohan.</li>
                                <li><span className="font-medium">Achar (Pickles)</span> – Spicy homemade varieties.</li>
                            </ul>
                        </div>

                        {/* Card 3 - Musical Instruments & Accessories */}
                        <div className="
        bg-white/80 rounded-xl shadow-md border border-yellow-200
        p-6 flex flex-col gap-3 backdrop-blur-md
        transition-all duration-300 hover:shadow-xl
      ">
                            <div className="flex items-center gap-2 mb-2">
                                <span role="img" aria-label="drum" className="text-2xl">🥁</span>
                                <span className="font-semibold text-lg text-yellow-700">Musical Instruments &amp; Classical Accessories</span>
                            </div>
                            <ul className="list-disc list-inside pl-5 space-y-1 text-gray-800">
                                <li><span className="font-medium">Benares Tabla</span> – Handmade, high-quality percussion instruments.</li>
                                <li><span className="font-medium">Flutes &amp; Harmoniums</span> – Often painted with local motifs.</li>
                                <li><span className="font-medium">Ghungroo (Dance Anklets)</span> – For classical dance forms like Kathak and Bharatnatyam.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Additional Categories */}
                    <div className="mt-8 space-y-4">
                        {/* Banarasi Handloom & Textiles */}
                        <div>
                            <h4 className="text-lg md:text-xl font-semibold text-yellow-700 flex items-center gap-2 mb-2">
                                <span role="img" aria-label="thread spool">🧵</span>
                                Banarasi Handloom &amp; Textiles
                            </h4>
                            <ul className="list-disc list-inside pl-5 space-y-1 text-gray-900">
                                <li>Banarasi Dupattas &amp; Stoles – Lightweight and elegant with zari borders.</li>
                                <li>Silk Scarves &amp; Dress Materials – Popular for casual wear.</li>
                                <li>Hand-embroidered Kurtas &amp; Fabrics – Especially in Madanpura and Nichibagh.</li>
                            </ul>
                        </div>

                        {/* Spiritual & Devotional Items */}
                        <div>
                            <h4 className="text-lg md:text-xl font-semibold text-yellow-700 flex items-center gap-2 mb-2">
                                <span role="img" aria-label="prayer beads">📿</span>
                                Spiritual &amp; Devotional Items
                            </h4>
                            <ul className="list-disc list-inside pl-5 space-y-1 text-gray-900">
                                <li>Shiva Trishuls, Damaru, and Nandi Idols for home temples.</li>
                                <li>Ashes from Ganga Aarti and Ganga Jal bottles as sacred souvenirs.</li>
                                <li>Handwritten mantras, yantras, and framed verses from Gita or Vedas.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* SHOPPING TIPS & TOP-RATED SHOPS SECTION */}
            <section className="w-full flex flex-col items-center mb-12">
                <div
                    className="
      w-[90%] max-w-5xl bg-white/90 rounded-xl shadow-lg p-6 md:p-10 border
      border-gray-100 text-gray-900 font-normal text-lg leading-relaxed
      backdrop-blur-[2px] animate-fade-in-up
      space-y-8
    "
                >
                    {/* Shopping Tips */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-3 flex items-center gap-2">
                            <span role="img" aria-label="compass">🧭</span>
                            Tips for an Enjoyable Shopping Experience
                        </h3>
                        <ul className="list-disc list-inside pl-5 space-y-1 text-gray-900">
                            <li><span className="font-semibold">Timing:</span> Best time to shop is morning till afternoon (10 AM – 4 PM) before temples and markets get crowded.</li>
                            <li><span className="font-semibold">Language:</span> Most shopkeepers understand basic English and Hindi. Bargaining is okay in local stalls.</li>
                            <li><span className="font-semibold">Payment:</span> Cash is preferred in street stalls. Bigger shops accept UPI &amp; cards.</li>
                            <li><span className="font-semibold">Authenticity:</span> Ask for silk authenticity cards for Banarasi sarees. Reputed shops will provide.</li>
                            <li><span className="font-semibold">Packaging:</span> Shops often pack items for international travel or gift-giving.</li>
                        </ul>
                    </div>

                    {/* Top-Rated Shops Table */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
                            <span role="img" aria-label="trophy">🏆</span>
                            Top-Rated Shops &amp; Emporiums
                        </h3>
                        <div className="overflow-x-auto rounded-lg border border-indigo-200 shadow-sm">
                            <table className="min-w-full divide-y divide-indigo-200">
                                <thead className="bg-indigo-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-indigo-700 uppercase tracking-wide">
                                        Shop Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-indigo-700 uppercase tracking-wide">
                                        Specialty
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-indigo-700 uppercase tracking-wide">
                                        Location
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-indigo-100">
                                <tr className="hover:bg-indigo-50 transition-colors duration-200">
                                    <td className="px-6 py-4 whitespace-nowrap text-indigo-900 font-medium">Banarasi Saree Emporium</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">Premium sarees, stoles</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">Godowlia</td>
                                </tr>
                                <tr className="hover:bg-indigo-50 transition-colors duration-200">
                                    <td className="px-6 py-4 whitespace-nowrap text-indigo-900 font-medium">Shiv Rudraksha Kendra</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">Rudraksha, idols, yantras</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">Vishwanath Gali</td>
                                </tr>
                                <tr className="hover:bg-indigo-50 transition-colors duration-200">
                                    <td className="px-6 py-4 whitespace-nowrap text-indigo-900 font-medium">Gulabi Meenakari House</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">Enamel jewelry, decor</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">Thatheri Bazaar</td>
                                </tr>
                                <tr className="hover:bg-indigo-50 transition-colors duration-200">
                                    <td className="px-6 py-4 whitespace-nowrap text-indigo-900 font-medium">Rajan Silk House</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">Government-recognized seller</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">Lahurabir</td>
                                </tr>
                                <tr className="hover:bg-indigo-50 transition-colors duration-200">
                                    <td className="px-6 py-4 whitespace-nowrap text-indigo-900 font-medium">Kashi Kalakriti</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">Art &amp; souvenirs</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">Assi Ghat</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <TemplesSection/>


        </div>
    );
}

/*
If your Tailwind setup doesn't have the fade-in-up animation yet, you can ask your developer to add this to tailwind.config.js:

theme: {
  extend: {
    keyframes: {
      'fade-in-up': {
        '0%': { opacity: 0, transform: 'translateY(24px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
    },
    animation: {
      'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) both',
    },
  }
}

Otherwise, you can remove 'animate-fade-in-up' if not needed.
*/
