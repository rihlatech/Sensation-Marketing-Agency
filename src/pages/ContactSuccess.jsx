import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const ContactSuccess = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl dark:bg-teal-500/10"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-500/10"></div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-xl rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-2xl dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-xl"
      >
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 text-5xl text-white shadow-xl">
          <FaCheckCircle />
        </div>

        <h1 className="mt-8 text-4xl font-black">
          Message Sent!
        </h1>

        <p className="mx-auto mt-5 max-w-md leading-8 text-slate-600 dark:text-slate-300">
          Thank you for contacting <strong>Sensation Marketing Agency</strong>.
          We've received your message and will get back to you as soon as possible.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            Back to Home
          </Link>

          <Link
            to="/services"
            className="rounded-full border border-teal-500 px-8 py-4 font-semibold text-teal-600 transition hover:bg-teal-500 hover:text-white dark:text-teal-300"
          >
            Explore Services
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSuccess;