import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineMenuAlt3,
  HiX,
  HiSun,
  HiMoon,
} from "react-icons/hi";

import agencyLogo from "../assets/images/logo-agency-1.png";


const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Training", path: "/training" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  // =====================================================
  // THEME
  // =====================================================

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });


  // =====================================================
  // SCROLL DETECTION
  // =====================================================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // =====================================================
  // MOBILE MENU SCROLL LOCK
  // =====================================================

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);


  // =====================================================
  // DARK MODE
  // =====================================================

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);


  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}

      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "border-b border-[#9b0a28]/30 bg-black/95 shadow-[0_5px_30px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
          : "bg-black/75 backdrop-blur-xl"
      }`}
    >

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="flex h-20 items-center justify-between">


          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            className="group flex items-center select-none"
          >

            <img
              src={agencyLogo}
              alt="Sensation Marketing Agency"
              className="h-27 w-auto object-contain transition duration-300 group-hover:scale-105"
            />

          </Link>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="hidden items-center gap-10 lg:flex">

            {navLinks.map((link) => (

              <NavLink
                key={link.path}
                to={link.path}

                className={({ isActive }) =>
                  `relative text-[15px] font-medium transition duration-300 ${
                    isActive
                      ? "text-[#c6c6c6]"
                      : "text-white/90 hover:text-[#9b0a28]"
                  }`
                }
              >

                {({ isActive }) => (
                  <>

                    {link.name}

                    <span
                      className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-[#9b0a28] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />

                  </>
                )}

              </NavLink>

            ))}

          </nav>


          {/* =================================================
              DESKTOP ACTIONS
          ================================================= */}

          <div className="hidden items-center gap-4 lg:flex">


            {/* Theme Toggle */}

            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"

              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c6c6c6]/20 bg-white/10 text-[#c6c6c6] shadow-md backdrop-blur-xl transition duration-300 hover:scale-105 hover:border-[#9b0a28] hover:bg-[#9b0a28]/20"
            >

              {darkMode ? (
                <HiSun size={20} />
              ) : (
                <HiMoon size={20} />
              )}

            </button>


            {/* Book Consultation */}

            <Link
              to="/contact"

              className="rounded-full bg-[#9b0a28] px-6 py-3 font-semibold text-white shadow-lg shadow-[#9b0a28]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#b30d30] hover:shadow-xl hover:shadow-[#9b0a28]/30"
            >
              Book Consultation
            </Link>

          </div>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"

            className="rounded-full border border-[#c6c6c6]/20 bg-white/10 p-3 text-3xl text-white backdrop-blur-lg transition hover:border-[#9b0a28] hover:bg-[#9b0a28]/20 lg:hidden"
          >
            <HiOutlineMenuAlt3 />
          </button>

        </div>

      </div>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}

            className="fixed right-0 top-0 z-[100] h-screen w-full bg-black text-white"
          >


            {/* Mobile Header */}

            <div className="flex h-20 items-center justify-between border-b border-[#c6c6c6]/10 px-6">


              <Link
                to="/"
                onClick={() => setIsOpen(false)}
              >

                <img
                  src={agencyLogo}
                  alt="Sensation Marketing Agency"
                  className="h-12 w-auto object-contain"
                />

              </Link>


              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"

                className="text-4xl text-white transition hover:text-[#9b0a28]"
              >
                <HiX />
              </button>

            </div>


            {/* Mobile Navigation */}

            <div className="flex h-[80vh] flex-col items-center justify-center gap-8">


              {/* Theme Toggle */}

              <button
                onClick={() => setDarkMode(!darkMode)}

                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c6c6c6]/20 bg-white/10 text-[#c6c6c6] transition duration-300 hover:scale-105 hover:border-[#9b0a28] hover:bg-[#9b0a28]/20"
              >

                {darkMode ? (
                  <HiSun size={22} />
                ) : (
                  <HiMoon size={22} />
                )}

              </button>


              {/* Navigation Links */}

              {navLinks.map((link) => (

                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}

                  className={({ isActive }) =>
                    `text-2xl font-semibold transition duration-300 ${
                      isActive
                        ? "text-[#9b0a28]"
                        : "text-white hover:text-[#c6c6c6]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>

              ))}


              {/* CTA */}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}

                className="mt-8 rounded-full bg-[#9b0a28] px-8 py-4 font-semibold text-white shadow-lg shadow-[#9b0a28]/20 transition duration-300 hover:bg-[#b30d30]"
              >
                Book Consultation
              </Link>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.header>
  );
};


export default Header;