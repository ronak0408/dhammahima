import { FaHome, FaLandmark, FaTheaterMasks, FaHistory, FaPlay } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* HERO */}
      <section className="relative h-[35vh] min-h-[400px] w-full">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/7d/4e/42/birla-temple-from-outside.jpg?w=900&h=500&s=1"
          alt="Safdarjung Tomb"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-semibold text-white">About Us</h1>
            <nav className="mt-4 flex items-center justify-center gap-2 text-white/90 text-sm">
              <FaHome className="inline-block" />
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/about">About Dham Mahima</Link>
            </nav>
          </div>
        </div>
      </section>

      {/* ABOUT DELHI (text + image) */}
      <section className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6">About Dham Mahima</h2>
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            {/* text */}
            <div className="md:col-span-8 space-y-4 text-slate-600 leading-7">
              <p>
             Welcome to Dham Mahima, your ultimate destination to explore the spiritual, historical, and cultural significance of temples across India and around the world. Our mission is to bring devotees, travelers, and spiritual seekers closer to the divine energy and rich heritage that these sacred places hold.

India, known as the "Land of Temples", is home to thousands of ancient shrines, each with its own legend, architectural beauty, and spiritual essence. From the majestic Jyotirlingas of Shiva, the Char Dhams (Badrinath, Kedarnath, Gangotri, Yamunotri), and the iconic Golden Temple of Amritsar, to the intricate carvings of Khajuraho and the grandeur of Somnath, we cover them all.

At Dham Mahima, we aim to:

Share the untold stories, myths, and legends behind each temple.

Provide detailed guides and travel information to help you plan your spiritual journey.

Showcase temple architecture, festivals, and rituals, connecting the past to the present.

Include famous international temples, ensuring a global perspective on spirituality and culture.

Our platform is designed not only for devotees but also for those who wish to explore history, culture, and the divine aura of these sacred spaces. Whether you are planning a pilgrimage, seeking knowledge, or simply admiring architectural marvels, Dham Mahima will be your trusted guide.
              </p>
              <p>
                A symbol of the country's rich past and thriving present, Delhi is a city where ancient and modern blend
                seamlessly together. It is a place that not only touches your pulse but even fastens it to a frenetic
                speed. Home to millions of dreams, the city takes on unprecedented responsibilities of realizing dreams
                bringing people closer and inspiring their thoughts.
              </p>
              <p>
                Just a century ago, the British moved the seat of their empire from Kolkata to Delhi. And it has been the
                Capital of India ever since. Now a thriving, cosmopolitan metro, the city has much to celebrate as it has
                already reached the milestone of completing 100 years as a Capital.
              </p>
            </div>

            {/* image */}
            <div className="md:col-span-4 relative">
              <img
                src="https://treeofliferesorts.com/wp-content/uploads/2022/10/naveen-naidu-XFTPmRwr9wE-unsplash-scaled-e1666249525777-1024x683.jpg"
                alt="Qutub Minar"
                className="w-full rounded shadow-lg h-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 CARDS */}
      {/* <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="grid gap-6 md:grid-cols-3">
            <InfoCard
              icon={<FaLandmark />}
              title="Delhi Today"
              text="Modern Delhi, popularly known as Lutyens’ Delhi, bears a striking contrast to Old Delhi with respect to architecture, building materials and layout."
              linkLabel="Read More"
            />
            <InfoCard
              icon={<FaHistory />}
              title="History of Delhi"
              text="Delhi, the capital of India has a strong historical background. It was ruled by some of the most powerful emperors in Indian history."
              linkLabel="Read More"
            />
            <InfoCard
              icon={<FaTheaterMasks />}
              title="Culture Of Delhi"
              text="Delhi is the traditional and present day capital of India. It is the cultural hub with influences from across the country."
              linkLabel="Read More"
            />
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <Footer />
    </main>
  );
}

function InfoCard({ icon, title, text, linkLabel }) {
  return (
    <div className="rounded-md bg-white p-6 shadow-md transition hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500 text-xl">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-slate-800">{title}</h3>
      <p className="text-sm text-slate-600 leading-6">{text}</p>
      <a href="#" className="mt-4 inline-block text-sm font-medium hover:underline">
        {linkLabel} →
      </a>
    </div>
  );
}
