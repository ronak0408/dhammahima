import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const attractions = [
  {
    title: "Har Ki Pauri",
    image: "https://www.hoteldekho.com/storage/img/tourattraction/1651217314capture-1626853005.jpg",
    link: "/temples/har-ki-pauri"
  },
  {
    title: "Kashi Vishwanath Temple",
    image: "https://imgk.timesnownews.com/story/Kashi_Vishwanath_Temple.jpg?tr=w-1200,h-900",
    link: "/temples/kashi"
  },
  {
    title: "Sri Jagannath Temple",
    image: "https://www.thomascook.in/blog/wp-content/uploads/2024/06/jagannath-puri-temple.jpg",
    link: "/temples/jagannath"
  },
  {
    title: "Mata Vaishno Devi",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vaishno_Devi_Temple_arena.jpg",
    link: "/temples/vaishno-devi"
  },
  {
    title: "Somnath Temple",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Somnath_temple.JPG",
    link: "/temples/somnath"
  },
  {
    title: "Kedarnath Temple",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kedarnath_Temple.jpg",
    link: "/temples/kedarnath"
  },
  {
    title: "Badrinath Temple",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Badrinath_temple.jpg",
    link: "/temples/badrinath"
  },
  {
    title: "Golden Temple (Harmandir Sahib)",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/The_Golden_Temple_of_Amritsar.jpg",
    link: "/temples/golden-temple"
  },
  {
    title: "Meenakshi Temple",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Meenakshi_Temple_gopuram.jpg",
    link: "/temples/meenakshi"
  },
  {
    title: "Tirupati Balaji",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tirumala_090615.jpg",
    link: "/temples/tirupati"
  },
  {
    title: "Brihadeeswarar Temple",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Thanjavur_Tamil_Nadu.jpg",
    link: "/temples/brihadeeswarar"
  },
  {
    title: "Dwarkadhish Temple",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Dwarkadhish_Temple.jpg",
    link: "/temples/dwarkadhish"
  },
  {
    title: "Rameshwaram Temple",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Ramanathaswamy_Temple%2C_Rameshwaram.jpg",
    link: "/temples/rameshwaram"
  },
  {
    title: "Shirdi Sai Baba Temple",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Shirdi_Sai_Baba_Temple.jpg",
    link: "/temples/shirdi"
  },
  {
    title: "Akshardham Temple (Delhi)",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Akshardham_Temple_Delhi.jpg",
    link: "/temples/akshardham"
  },
  {
    title: "Lingaraja Temple",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Lingaraj_Temple.jpg",
    link: "/temples/lingaraja"
  },
  {
    title: "Kamakhya Temple",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Kamakhya_temple.jpg",
    link: "/temples/kamakhya"
  },
  {
    title: "Virupaksha Temple",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Virupaksha_Temple.jpg",
    link: "/temples/virupaksha"
  },
  {
    title: "Ranakpur Jain Temple",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Ranakpur_Jain_Temple.jpg",
    link: "/temples/ranakpur"
  },
  {
    title: "Dilwara Temples",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Dilwara_Jain_Temples.jpg",
    link: "/temples/dilwara"
  }
];

export default function Attractions() {
  const [startIndex, setStartIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setStartIndex(
        (prev) => (prev - 1 + attractions.length) % attractions.length
      );
      setFade(true);
    }, 200);
  };

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setStartIndex((prev) => (prev + 1) % attractions.length);
      setFade(true);
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleAttractions = attractions.slice(
    startIndex,
    startIndex + 4
  ).length < 4
    ? [
        ...attractions.slice(startIndex),
        ...attractions.slice(0, 4 - (attractions.length - startIndex)),
      ]
    : attractions.slice(startIndex, startIndex + 4);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          'url("https://www.fabhotels.com/blog/wp-content/uploads/2019/06/Konark-Sun-Temple_600.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 flex flex-col items-center px-4 py-12 transition-opacity duration-700">
        <h1 className="text-8xl font-extrabold text-sky-400">Famous Temples</h1>
        <p className="text-3xl text-sky-400 mt-2 mb-8">
          ---worth a thousand sacred temples---
        </p>

        <div
          key={startIndex}
          className={`transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          } w-full flex justify-center`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
            {visibleAttractions.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden shadow-lg relative group h-96 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 w-full text-center bg-gradient-to-t from-black to-transparent text-white py-4 text-lg font-semibold ">
                  <div className="mb-9">{item.title}</div>
                </div>
                <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href={item.link}
                    className="bg-yellow-500 text-white px-4 py-1 rounded-full shadow-lg transition mb-3"
                  >
                    Explore
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="p-2 border border-gray-300 rounded-full hover:bg-gray-100"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 border border-gray-300 rounded-full hover:bg-gray-100"
          >
            <ArrowRight />
          </button>
        </div>

        <a
          href="/all-temples"
          className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full"
        >
          Discover more
        </a>
      </div>
    </div>
  );
}
