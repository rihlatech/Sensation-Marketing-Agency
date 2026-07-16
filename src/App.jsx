// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Training from "./pages/Training";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ContactSuccess from "./pages/ContactSuccess";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.14),transparent_35%)]" />
        <div className="pointer-events-none absolute left-[-10rem] top-24 h-72 w-72 rounded-full bg-violet-500/15 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-20 right-[-8rem] h-80 w-80 rounded-full bg-cyan-400/15 blur-[140px]" />

        <Header />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/training" element={<Training />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ContactSuccess" element={<ContactSuccess />} />
          </Routes>
        </main>

        <Footer />

        <a
          href="https://wa.me/254797983216?text=Hello%20Sensation%20Marketing%20Agency,%20I%20would%20like%20to%20make%20an%20inquiry."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full border border-green-700/20 bg-[#25D366] text-white shadow-[0_20px_40px_rgba(37,211,102,0.18)] transition-all duration-300 hover:-translate-y-1 hover:scale-105"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;