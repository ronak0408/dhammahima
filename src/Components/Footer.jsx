import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative text-white w-full overflow-hidden min-h-[600px] bg-black">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://nonprod-media.webdunia.com/public_html/_media/en/img/article/2021-05/24/full/1621850451-679.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">
        {/* Brand + Social */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-wide">Dham Mahima</h2>
          <h3 className="text-xl font-semibold mb-4">Follow us</h3>
          <div className="flex flex-wrap gap-4 text-2xl">
            {[
              ["facebook-f", "Facebook"],
              ["x-twitter", "Twitter"],
              ["instagram", "Instagram"],
              ["youtube", "YouTube"],
              ["linkedin-in", "LinkedIn"],
              ["whatsapp", "WhatsApp"],
            ].map(([icon, label]) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-yellow-400"
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Quick Links</h3>
          <ul className="space-y-2 font-medium">
            <li><Link to="/" className="hover:text-yellow-300 transition">Home</Link></li>
            <li><Link to="/dhams" className="hover:text-yellow-300 transition">Dhams</Link></li>
            <li><Link to="/famous" className="hover:text-yellow-300 transition">Famous</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300 transition">About</Link></li>
            <li><a href="#" className="hover:text-yellow-300 transition">FAQs</a></li>
            <li><Link to="/blogs" className="hover:text-yellow-300 transition">Dham Mahima Blogs</Link></li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Connect With Us</h3>
          <ul className="space-y-2 font-medium">
            <li><a href="#" className="hover:text-yellow-300 transition">Email Us</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Whatsapp Updates</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">YouTube</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Instagram</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Facebook</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Twitter (X)</a></li>
          </ul>
        </div>

        {/* Donations */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Support & Donations</h3>
          <ul className="space-y-2 font-medium">
            <li><a href="#" className="hover:text-yellow-300 transition">Sponsor a Puja</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Offer Flowers to Temples</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Help Preserve Sacred Places</a></li>
          </ul>
        </div>
      </div>

      {/* Shloka */}
      <div className="relative text-center text-yellow-300 text-xl md:text-2xl font-semibold px-6 md:px-20 leading-relaxed z-10">
        <p>
          यत्र यत्र रघुनाथकीर्तनं तत्र तत्र कृतमस्तकांजलिम् ।<br />
          बाष्पवारि परिपूर्ण लोचनं मारुतिं नमत राक्षसांतकम् ।।
        </p>
        <p className="mt-3 text-base italic text-yellow-200">
          (Wherever the praises of Lord Rama are sung, Hanuman is present with bowed head and tear-filled eyes. Salutations to him!)
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/30 text-sm text-center py-6 mt-12 px-4 bg-black/40">
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-2 sm:space-y-0">
          <Link to="/termsOfUse" className="hover:underline hover:text-yellow-300">Terms of Use</Link>
          <span className="hidden sm:inline">|</span>
          <Link to="/privacyPolicy" className="hover:underline hover:text-yellow-300">Privacy Policy</Link>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:underline hover:text-yellow-300">Contact Us</a>
        </div>
        <p className="mt-3 text-xs text-white/70">© Dham Mahima, Vedantra AI</p>
      </div>
    </footer>
  );
}
