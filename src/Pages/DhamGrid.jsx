import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function DhamGrid() {
  // Make sure these names match exactly with your JSON file names
  const jyotirlingas = [
    "Somnath", "Mallikarjuna", "Mahakaleshwar", "Omkareshwar",
    "Kedarnath", "Bhimasankar", "KashiVishwanath", "Trimbakeshwar",
    "Baidyanath", "Nageshwar", "Rameshwaram", "Grishneshwar"
  ];

  const shaktiPeethas1 = [
    "JwalaSiddhida", "DakshinaKali", "Kalmadhav", "Khamakya", "DevgrahKankleshwar",
    "Sravani", "ChamudeshwariJayaDurga", "VimlaKritteshwari", "KumariShakti",
    "Bhramri", "ShaktiDakshayani", "GayatriManibandh"
  ];

  const shaktiPeethas2 = [
    "Mahamayi", "Phullara", "Bahula", "Mahishmardini", "AvantiBairavparvatUjjain",
    "Aparna", "GandakiChandi", "Bhramari", "Hinglaj", "Jayanti", "Jeshoreshwari",
    "NagapooshanAmmanTemple", "Mahashira"
  ];

  const shaktiPeethas3 = [
    "UmaMithila", "NandiniNandikeshwari", "SarvashailRakini", "Mahishasuramardini",
    "NarmadaShondesh", "BhramarambaSrisundari", "MahaLakshmi", "Narayani",
    "SugandhaShaktiPeeth", "TripuraSundari", "MangalChand", "Vishalakshi",
    "KapaliniVibhas"
  ];

  const charDham = ["Badrinath", "Dwarka", "Puri", "Rameswaram"];
  const otherSites = ["AmarnathCave", "GoldenTemple", "TirupatiBalaji", "AjmerSharifDargah"];

  const Section = ({ title, items, index, openIndex, setOpenIndex }) => {
    const isOpen = openIndex === index;
    const toggle = () => setOpenIndex(isOpen ? null : index);

    return (
      <div className="border-b sm:border-none">
        <div
          className="flex justify-between items-center py-2 cursor-pointer sm:cursor-default sm:py-0"
          onClick={toggle}
        >
          <h2 className="font-bold text-base sm:text-lg text-white">{title}</h2>
          <span className="sm:hidden text-white text-xl">{isOpen ? "−" : "+"}</span>
        </div>
        <ul
          className={`${isOpen ? "block" : "hidden"} sm:block space-y-1 sm:space-y-2 text-white text-sm pl-4 mt-1 sm:mt-2`}
        >
          {items.map((item, idx) => (
            <li key={idx}>
              <Link
                to={`/temple/${item.toLowerCase()}`}
                className="hover:text-amber-200 cursor-pointer"
              >
                {/* Convert camelCase back to readable format */}
                {item.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="relative min-h-screen">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://s7ap1.scene7.com/is/image/incredibleindia/2-mana-village-badrinath-uttarakhand-attr-hero?qlt=82&ts=1726646481060')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 w-full p-4">
        <h1 className="text-center text-2xl md:text-4xl font-semibold pt-20 pb-10 text-yellow-500 ">
            Visit Most Famous Dhams
          </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-white">
          <Section title="Jyotirlingas (12)" items={jyotirlingas} index={0} openIndex={openIndex} setOpenIndex={setOpenIndex} />
          <Section title="Shakti Peethas (Part 1)" items={shaktiPeethas1} index={1} openIndex={openIndex} setOpenIndex={setOpenIndex} />
          <Section title="Shakti Peethas (Part 2)" items={shaktiPeethas2} index={2} openIndex={openIndex} setOpenIndex={setOpenIndex} />
          <Section title="Shakti Peethas (Part 3)" items={shaktiPeethas3} index={3} openIndex={openIndex} setOpenIndex={setOpenIndex} />
          <div>
            <Section title="Char Dham (4)" items={charDham} index={4} openIndex={openIndex} setOpenIndex={setOpenIndex} />
            <div className="mt-4 sm:mt-6">
              <Section title="Other Notable Sites" items={otherSites} index={5} openIndex={openIndex} setOpenIndex={setOpenIndex} />
            </div>
          </div>
        </div>
        {/* See All Button (Bottom Right) */}
        <div className="absolute bottom-6 right-6">
          <Link to="/sacred-dhams">
            <button className="px-5 py-2 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition">
              See All →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}