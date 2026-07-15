// src/pages/Home.jsx

import { Link } from "react-router-dom";
import { motion } from "motion/react";
import heroOffice from "../assets/images/hero-office.jpg";
import {
  FaVideo,
  FaBullhorn,
  FaUserTie,
  FaHome,
  FaChartLine,
  FaShareAlt,
  FaAward,
  FaLightbulb,
  FaHandshake,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    icon: <FaVideo />,
    title: "Video Production",
    description: "Professional videos that tell your brand story.",
  },
  {
    icon: <FaBullhorn />,
    title: "Marketing Strategy",
    description: "Smart strategies that drive measurable growth.",
  },
  {
    icon: <FaUserTie />,
    title: "Personal Branding",
    description: "Build a memorable and trusted personal brand.",
  },
  {
    icon: <FaHome />,
    title: "Real Estate Marketing",
    description: "Creative marketing that helps properties sell faster.",
  },
  {
    icon: <FaChartLine />,
    title: "Digital Marketing",
    description: "Reach the right audience with powerful campaigns.",
  },
  {
    icon: <FaShareAlt />,
    title: "Social Media Marketing",
    description: "Grow your online presence across social platforms.",
  },
];

const whyChooseUs = [
  {
    icon: <FaAward />,
    title: "Professional",
    description: "Committed to quality in every project we deliver.",
  },
  {
    icon: <FaLightbulb />,
    title: "Creative",
    description: "Fresh ideas that help brands stand out.",
  },
  {
    icon: <FaHandshake />,
    title: "Reliable",
    description: "We build lasting relationships with our clients.",
  },
  {
    icon: <FaRocket />,
    title: "Results Driven",
    description: "Focused on helping businesses grow consistently.",
  },
];

const Home = () => {
  return (
    <div className="text-white">
      <section
       className="relative min-h-[90vh] lg:min-h-screen overflow-hidden pt-24 lg:pt-0"
        style={{
          backgroundImage: `url(${heroOffice})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      
       <div className="absolute inset-0 bg-gradient-to-r from-[#07181A]/95 via-[#0B2326]/80 to-[#07181A]/35" />

          <div className="relative mx-auto flex max-w-7xl items-center px-6 py-16 lg:min-h-screen lg:px-10">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-black leading-[1.05] md:text-6xl lg:text-7xl"
            >
              Grow Your
              <br />
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
                
                Business Beyond
              </span>
              <br />
              Expectations
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-xl text-lg leading-8 text-slate-200"
            >
              Helping businesses grow through creative marketing, powerful branding,
              professional video production and high-converting digital campaigns.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-5"
            >
              <Link
                to="/contact"
                className="rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 px-8 py-4 font-semibold text-white shadow-lg shadow-teal-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/40"
              >
                Book Consultation
              </Link>

              <Link
                to="/services"
               className="rounded-full border border-teal-400/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-teal-400 hover:bg-teal-500/10"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    <section className="relative overflow-hidden bg-gradient-to-br from-[#ECFEFF] via-white to-[#F8FAFC] dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-6 py-24 lg:px-10">
       <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-indigo-200/20 blur-3xl dark:bg-indigo-500/10"></div>
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-slate-300/20 blur-3xl dark:bg-slate-500/10"></div>

  <div className="relative mx-auto max-w-7xl">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mb-14 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
        What We Offer
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
        Helping businesses grow through creative solutions.
      </p>
    </motion.div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ delay: index * 0.08, duration: 0.5 }}
          whileHover={{ y: -10, scale: 1.02 }}
          className="group rounded-[30px] border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 p-8 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-teal-400 hover:shadow-2xl"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 via-cyan-500 to-sky-500 text-3xl text-white shadow-lg shadow-teal-500/30 transition duration-300 group-hover:scale-110">
            {service.icon}
          </div>

          <div className="my-6 h-1 w-20 rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500"></div>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {service.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
            {service.description}
          </p>

          <Link
            to="/services"
            className="mt-8 inline-flex items-center font-semibold text-teal-600 dark:text-teal-400 transition-all duration-300 hover:translate-x-2 hover:text-cyan-600 dark:hover:text-cyan-300"
          >
            Learn More
            <span className="ml-2">→</span>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</section>

<section className="relative overflow-hidden bg-gradient-to-br from-[#ECFEFF] via-white to-[#F8FAFC] dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-6 py-24 lg:px-10">
  <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-teal-200/20 blur-3xl dark:bg-teal-500/10"></div>
  <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl dark:bg-cyan-500/10"></div>

  <div className="relative mx-auto max-w-7xl">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white md:text-5xl">
        Why Choose Us
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
        We combine creativity, strategy and innovation to help businesses
        build stronger brands and achieve measurable growth.
      </p>
    </motion.div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {whyChooseUs.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.08, duration: 0.5 }}
          whileHover={{ y: -10, scale: 1.02 }}
          className="group rounded-[30px] border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 p-8 text-center backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-teal-400 hover:shadow-2xl"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 via-cyan-500 to-sky-500 text-3xl text-white shadow-lg shadow-teal-500/30 transition duration-300 group-hover:scale-110">
            {item.icon}
          </div>

          <div className="mx-auto my-6 h-1 w-16 rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500"></div>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {item.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

   <section className="relative overflow-hidden bg-gradient-to-br from-[#FAFAFA] via-white to-[#F8FAFC] dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-6 py-24">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-teal-100/20 blur-3xl dark:bg-teal-500/10"></div>
  <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-100/20 blur-3xl dark:bg-cyan-500/10"></div>

  <div className="relative mx-auto max-w-5xl rounded-[36px] bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 p-12 md:p-16 text-center shadow-2xl">

    <motion.h2
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-extrabold text-white"
    >
      Ready to Grow Your Business?
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90"
    >
      Let's transform your ideas into impactful marketing campaigns that
      attract customers, strengthen your brand and accelerate business growth.
    </motion.p>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="mt-10 flex flex-col sm:flex-row justify-center gap-5"
    >
      <Link
        to="/contact"
        className="rounded-full bg-white px-8 py-4 font-semibold text-teal-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        Book Consultation
      </Link>

      <Link
        to="/services"
        className="rounded-full border border-white/40 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
      >
        Explore Services
      </Link>
    </motion.div>

  </div>

</section>
    </div>
  );
};

export default Home;