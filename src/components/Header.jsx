import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineMenuAlt3,
  HiX,
  HiSun,
  HiMoon,
} from "react-icons/hi";

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

  const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    return savedTheme === "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

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
     className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
  isScrolled
    ? "border-b border-white/10 bg-[#07181A]/85 shadow-[0_8px_25px_rgba(2,6,23,0.25)] backdrop-blur-2xl"
    : "bg-[#07181A]/70 backdrop-blur-xl"
}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="select-none">
            <h1 className="bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 bg-clip-text text-3xl font-black uppercase text-transparent">
              SENSATION
            </h1>

            <p className="-mt-1 text-[11px] uppercase tracking-[0.35em] text-gray-300">
              Marketing Agency
            </p>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-[15px] font-medium transition duration-300 ${
                    isActive
                      ? "text-cyan-300"
                      : "text-white/90 hover:text-violet-300"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>
<div className="hidden items-center gap-4 lg:flex">
  <button
    onClick={() => setDarkMode(!darkMode)}
    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-md transition-all hover:scale-105 dark:border-slate-700 dark:bg-slate-900 dark:text-yellow-400"
  >
    {darkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
  </button>

  <Link
    to="/contact"
    className="rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    Book Consultation
  </Link>
</div>

          <button
            onClick={() => setIsOpen(true)}
            className="rounded-full border border-white/10 bg-white/10 p-3 text-3xl text-white backdrop-blur-lg lg:hidden"
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed top-0 right-0 z-[100] h-screen w-full bg-[#050816]"
          >
            <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
              <div>
                <h1 className="bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 bg-clip-text text-3xl font-black uppercase text-transparent">
                  SENSATION
                </h1>

                <p className="text-[11px] uppercase tracking-[0.35em] text-gray-300">
                  Marketing Agency
                </p>
              </div>

              <button onClick={() => setIsOpen(false)} className="text-4xl text-white">
                <HiX />
              </button>
            </div>

            <div className="flex h-[80vh] flex-col items-center justify-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-2xl font-semibold transition ${
                      isActive
                        ? "text-cyan-300"
                        : "text-white hover:text-violet-300"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="premium-button mt-8 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 px-8 py-4 font-semibold text-white"
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