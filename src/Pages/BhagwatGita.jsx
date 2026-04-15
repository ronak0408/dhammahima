import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

export default function BhagwatGita() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-600 via-yellow-500 to-amber-400 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Bhagavad Gita
        </h1>
        <p className="mt-3 text-lg text-yellow-100 max-w-3xl mx-auto">
          The **Bhagavad Gita** is a 700-verse Hindu scripture that is part of 
          the Indian epic Mahabharata. It is a dialogue between Lord Krishna 
          and Arjuna that explains the philosophy of life, dharma, karma, and 
          devotion.
        </p>
      </section>

      {/* Book Card */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 md:flex items-center gap-8 hover:scale-[1.02] transition duration-300">
          <div className="flex-1">
            <img
              src="https://m.media-amazon.com/images/I/81o1xSxKCRL._SY425_.jpg"
              alt="Bhagavad Gita"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="flex-1 mt-6 md:mt-0">
            <h2 className="text-2xl font-bold text-yellow-200 mb-2">
              Bhagavad Gita – Summary
            </h2>
            <p className="text-sm text-yellow-100 mb-4">
              The Gita teaches the path of selfless action, devotion, and 
              knowledge. It covers topics like the nature of the soul, the 
              universe, and the ultimate purpose of life.
            </p>
            <p className="text-lg font-semibold text-yellow-300">Price: ₹299</p>
            <a
              href="https://www.amazon.in/s?k=Bhagavad+Gita"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-yellow-300 text-black px-5 py-2 rounded-lg font-semibold shadow hover:bg-yellow-400 transition"
            >
              Buy Now
            </a>
          </div>
        </div>
      </section>

      {/* Back to Store */}
      <div className="text-center pb-8">
        <Link
          to="/books-store"
          className="px-6 py-3 bg-white/20 rounded-lg text-yellow-100 font-semibold hover:bg-white/30 transition"
        >
          ← Back to Store
        </Link>
      </div>
    </main>
  );
}
