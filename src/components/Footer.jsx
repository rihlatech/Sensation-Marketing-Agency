import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-[#9b0a28]/30 bg-[#000000]">
      
      {/* Burgundy Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(155,10,40,0.20),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#9b0a28]">
              SENSATION
            </h2>

            <p className="mt-2 text-xs uppercase tracking-[0.35em] text-[#c6c6c6]">
              Marketing Agency
            </p>

            <p className="mt-6 max-w-md leading-7 text-[#c6c6c6]/75">
              Storytelling that drives engagement, leads and revenue.
              We create attention-grabbing brand moments that help
              businesses stand out and grow.
            </p>

            <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-[#9b0a28]">
              Cause We Gatchu
            </p>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-[#c6c6c6]/75">

              <Link
                to="/"
                className="transition hover:text-[#9b0a28]"
              >
                Home
              </Link>

              <Link
                to="/services"
                className="transition hover:text-[#9b0a28]"
              >
                Services
              </Link>

              <Link
                to="/training"
                className="transition hover:text-[#9b0a28]"
              >
                Masterclasses
              </Link>

              <Link
                to="/about"
                className="transition hover:text-[#9b0a28]"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-[#9b0a28]"
              >
                Contact
              </Link>

            </div>
          </div>


          {/* Social Media */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Connect With Us
            </h3>

            <div className="flex flex-col gap-5">

              <a
                href="https://www.instagram.com/_sensation_marketing?igsh=bmZhcDAxNHplaTcx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#c6c6c6]/75 transition hover:text-[#9b0a28]"
              >
                <FaInstagram className="text-xl" />
                Instagram
              </a>


              <a
                href="#"
                className="flex items-center gap-4 text-[#c6c6c6]/75 transition hover:text-[#9b0a28]"
              >
                <FaFacebookF className="text-xl" />
                Facebook
              </a>


              <a
                href="#"
                className="flex items-center gap-4 text-[#c6c6c6]/75 transition hover:text-[#9b0a28]"
              >
                <FaTiktok className="text-xl" />
                TikTok
              </a>


              <a
                href="https://wa.me/254797983216"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#c6c6c6]/75 transition hover:text-[#9b0a28]"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </a>

            </div>
          </div>

        </div>


        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#c6c6c6]/10 pt-8 text-sm text-[#c6c6c6]/50 md:flex-row">

          <p>
            © 2026 Sensation Marketing Agency. All Rights Reserved.
          </p>

          <p>
            Designed & Developed by{" "}
            <span className="font-semibold text-[#9b0a28]">
              RihlaTech
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;