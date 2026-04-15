import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const sections = [
  {
    title: "North India",
    items: [
      { name: "Himachal Pradesh", link: "/himachal-pradesh" },
      { name: "Uttarakhand", link: "/uttarakhand" },
      { name: "Jammu & Kashmir", link: "/jammu-kashmir" },
      { name: "Rajasthan", link: "/rajasthan" },
      { name: "Punjab", link: "/punjab" },
      { name: "Uttar Pradesh", link: "/uttar-pradesh" },
      { name: "Delhi", link: "/delhi" },
    ],
  },
  {
    title: "South India",
    items: [
      { name: "Kerala", link: "/kerala" },
      { name: "Karnataka", link: "/karnataka" },
      { name: "Tamil Nadu", link: "/tamil-nadu" },
      { name: "Andhra Pradesh", link: "/andhra-pradesh" },
      { name: "Telangana", link: "/telangana" },
      { name: "Puducherry (Pondicherry)", link: "/puducherry" },
    ],
  },
  {
    title: "East India",
    items: [
      { name: "West Bengal", link: "/west-bengal" },
      { name: "Odisha", link: "/odisha" },
      { name: "Jharkhand", link: "/jharkhand" },
      { name: "Bihar", link: "/bihar" },
      { name: "Sikkim", link: "/sikkim" },
      { name: "Andaman and Nicobar Islands", link: "/andaman-nicobar" },
    ],
  },
  {
    title: "West India",
    items: [
      { name: "Maharashtra", link: "/maharashtra" },
      { name: "Goa", link: "/goa" },
      { name: "Gujarat", link: "/gujarat" },
      { name: "Rajasthan (Western Region)", link: "/rajasthan-west" },
      { name: "Madhya Pradesh (Western Region)", link: "/mp-west" },
    ],
  },
];

export default function Trekking() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="relative flex flex-col min-h-screen bg-[url('https://pragyata.com/wp-content/uploads/2018/03/Somnath-Temple-Rising-Phoenix.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        {/* HERO SECTION */}
        <section className="text-yellow-300 pt-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-3xl font-bold">
              Most Visited Places City Wise
            </h1>
          </div>
        </section>

        {/* CONTENT */}
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
                          className="text-2xl hover:underline hover:text-yellow-400 transition-colors duration-200"
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
            <div className="md:hidden space-y-2 mt-6">
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
                    <ul className="px-3 pb-2 text-sm space-y-1">
                      {section.items.map((item, i) => (
                        <li key={i}>
                          <Link
                            to={item.link}
                            className="hover:underline hover:text-yellow-400 transition-colors duration-200"
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
