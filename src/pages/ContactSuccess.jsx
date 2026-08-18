// src/pages/ContactSuccess.jsx

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const ContactSuccess = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 text-slate-900 transition-colors duration-300 dark:bg-black dark:text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#9b0a28]/10 blur-3xl dark:bg-[#9b0a28]/20" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gray-300/30 blur-3xl dark:bg-gray-700/20" />


      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-xl rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-2xl dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-xl"
      >

        {/* Success Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#9b0a28] text-5xl text-white shadow-xl shadow-[#9b0a28]/30">
          <FaCheckCircle />
        </div>


        {/* Heading */}
        <h1 className="mt-8 text-4xl font-black md:text-5xl">
          Message{" "}
          <span className="bg-gradient-to-r from-[#9b0a28] via-[#b7193d] to-[#777777] bg-clip-text text-transparent">
            Sent!
          </span>
        </h1>


        {/* Message */}
        <p className="mx-auto mt-5 max-w-md leading-8 text-slate-600 dark:text-slate-300">
          Thank you for contacting{" "}
          <strong>Sensation Marketing Agency</strong>.
          We've received your message and will get back to you as soon as
          possible.
        </p>


        {/* Divider */}
        <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-[#9b0a28]" />


        {/* Actions */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            to="/"
            className="rounded-full bg-[#9b0a28] px-8 py-4 font-semibold text-white shadow-lg shadow-[#9b0a28]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#b30d30] hover:shadow-xl"
          >
            Back to Home
          </Link>


          <Link
            to="/services"
            className="rounded-full border border-[#9b0a28] px-8 py-4 font-semibold text-[#9b0a28] transition-all duration-300 hover:bg-[#9b0a28] hover:text-white dark:text-[#d45a75] dark:hover:text-white"
          >
            Explore Services
          </Link>

        </div>

      </motion.div>

    </div>
  );
};

export default ContactSuccess;