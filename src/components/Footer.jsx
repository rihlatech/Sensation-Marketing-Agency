// src/components/Footer.jsx

import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-[#050816]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(109,40,217,0.25),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h2 className="bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 bg-clip-text text-3xl font-black uppercase text-transparent">
              SENSATION
            </h2>

            <p className="mt-2 text-xs uppercase tracking-[0.35em] text-gray-400">
              Marketing Agency
            </p>

            <p className="mt-6 leading-7 text-gray-400">
              Helping businesses grow through creative marketing, branding,
              digital strategy and impactful content.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Quick Links</h3>

            <div className="flex flex-col gap-4 text-gray-400">
              <Link to="/" className="transition hover:text-violet-400">
                Home
              </Link>

              <Link to="/services" className="transition hover:text-violet-400">
                Services
              </Link>

              <Link to="/training" className="transition hover:text-violet-400">
                Training
              </Link>

              <Link to="/about" className="transition hover:text-violet-400">
                About
              </Link>

              <Link to="/contact" className="transition hover:text-violet-400">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Social Media</h3>

            <div className="flex flex-col gap-5">
              <a
                href="https://www.instagram.com/_sensation_marketing?igsh=bmZhcDAxNHplaTcx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-400 transition hover:text-violet-400"
              >
                <FaInstagram className="text-xl" />
                Instagram
              </a>

              <a href="#" className="flex items-center gap-4 text-gray-400 transition hover:text-violet-400">
                <FaFacebookF className="text-xl" />
                Facebook
              </a>

              <a href="#" className="flex items-center gap-4 text-gray-400 transition hover:text-violet-400">
                <FaTiktok className="text-xl" />
                TikTok
              </a>

              <a href="https://wa.me/254797983216" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-400 transition hover:text-violet-400">
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
          <p>© 2026 Sensation Marketing Agency. All Rights Reserved.</p>

          <p>
            Designed & Developed by{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text font-semibold text-transparent">
              RihlaTech
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;