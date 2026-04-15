import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Import Link
import Navbar from "../Components/Navbar";

const sections = [
  {
    title: "North India",
    items: [
      { name: "Varanasi", link: "/varanasi" },
      { name: "Chitrakoot Dham", link: "/chitrakoot" },
      { name: "Mathura Vrindavan", link: "/mathura-vrindavan" },
      { name: "Haridwar", link: "/haridwar" },
      { name: "Vaishno Devi", link: "/vaishno-devi" },
      { name: "Kathmandu", link: "/kathmandu" },
      { name: "Gangtok", link: "/gangtok" },
      { name: "Mount Kailash", link: "/mount-kailash" },
    ],
  },
  {
    title: "South India",
    items: [
      { name: "Madurai", link: "/madurai" },
      { name: "Chennai", link: "/chennai" },
      { name: "Kanchipuram", link: "/kanchipuram" },
      { name: "Tirupati", link: "/tirupati" },
      { name: "Kanyakumari", link: "/kanyakumari" },
      { name: "Kollur", link: "/kollur" },
      { name: "Chengannur", link: "/chengannur" },
      { name: "Srisailam", link: "/srisailam" },
    ],
  },
  {
    title: "East India",
    items: [
      { name: "Kolkata", link: "/kolkata" },
      { name: "Guwahati", link: "/guwahati" },
      { name: "Puri", link: "/puri" },
      { name: "Bhubaneswar", link: "/bhubaneswar" },
      { name: "Jaipur", link: "/jaipur" },
      { name: "Imphal", link: "/imphal" },
      { name: "Gangtok", link: "/gangtok" },
    ],
  },
  {
    title: "West India",
    items: [
      { name: "Kolhapur", link: "/kolhapur" },
      { name: "Mumbai", link: "/mumbai" },
      { name: "Pune", link: "/pune" },
      { name: "Ahmedabad", link: "/ahmedabad" },
      { name: "Dwarka", link: "/dwarka" },
      { name: "Mount Abu", link: "/mount-abu" },
      { name: "Udaipur", link: "/udaipur" },
    ],
  },
  {
    title: "Global Northern Regions",
    items: [
      { name: "Kyoto", link: "/kyoto" },
      { name: "Athens", link: "/athens" },
      { name: "Reykjavik", link: "/reykjavik" },
      { name: "Cusco", link: "/cusco" },
    ],
  },
  {
    title: "Global Southern Regions",
    items: [
      { name: "Cusco", link: "/cusco" },
      { name: "Bali", link: "/bali" },
      { name: "Mexico City", link: "/mexico-city" },
      { name: "Cape Town", link: "/cape-town" },
      { name: "Sydney", link: "/sydney" },
    ],
  },
  {
    title: "Global Eastern Regions",
    items: [
      { name: "Kyoto", link: "/kyoto" },
      { name: "Bali", link: "/bali" },
      { name: "Kathmandu", link: "/kathmandu" },
      { name: "Hanoi", link: "/hanoi" },
      { name: "Seoul", link: "/seoul" },
      { name: "Manila", link: "/manila" },
    ],
  },
  {
    title: "Global Western Regions",
    items: [
      { name: "Athens", link: "/athens" },
      { name: "Rome", link: "/rome" },
      { name: "Paris", link: "/paris" },
      { name: "London", link: "/london" },
      { name: "Mexico City", link: "/mexico-city" },
      { name: "Cusco", link: "/cusco" },
    ],
  },
];

export default function Famous() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="relative flex flex-col min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://s7ap1.scene7.com/is/image/incredibleindia/dwarkadish-temple-01-attr-hero?qlt=82&ts=1726734784547')`,
        }}
      ></div>

      <div className="absolute inset-0 bg-black/45 z-0"></div>

      <div className="relative z-10">
        <Navbar />

        <section className="text-yellow-400 pt-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-3xl font-bold">
              Most Visited Places City Wise
            </h1>
          </div>
        </section>

        <section className="text-white flex-1 py-8">
          <div className="max-w-7xl mx-auto px-4">
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
              {sections.map((section, idx) => (
                <div key={idx}>
                  <h2 className="text-3xl font-semibold mb-2">{section.title}</h2>
                  <ul className="space-y-0.5 text-sm">
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <Link
                          to={item.link}
                          className="hover:text-yellow-300 cursor-pointer block"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Mobile Accordion */}
            <div className="md:hidden space-y-2">
              {sections.map((section, idx) => (
                <div key={idx} className="border-b border-white">
                  <button
                    onClick={() => toggleSection(idx)}
                    className="w-full flex justify-between items-center p-3 text-left font-semibold"
                  >
                    {section.title}
                    {openIndex === idx ? <FaMinus /> : <FaPlus />}
                  </button>
                  {openIndex === idx && (
                    <ul className="px-3 pb-2 text-sm space-y-0.5">
                      {section.items.map((item, i) => (
                        <li key={i}>
                          <Link
                            to={item.link}
                            className="hover:text-yellow-300 cursor-pointer block"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
