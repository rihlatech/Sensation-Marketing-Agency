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
        className="relative min-h-screen overflow-hidden pt-20 lg:pt-0"
        style={{
          backgroundImage: `url(${heroOffice})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/95 via-[#090e27]/85 to-transparent" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-10">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-black leading-[1.05] md:text-6xl lg:text-7xl"
            >
              Grow Your
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Business Beyond
              </span>
              <br />
              Expectations
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-xl text-lg leading-8 text-gray-300"
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
                className="premium-button rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300"
              >
                Book Consultation
              </Link>

              <Link
                to="/services"
                className="premium-button-secondary rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white/90 backdrop-blur-md transition-all duration-300 hover:bg-white/20"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <h2 className="text-4xl font-bold md:text-5xl">What We Offer</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
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
                whileHover={{ y: -8, scale: 1.01 }}
                className="glass-panel rounded-[28px] p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-4xl text-violet-300">
                  {service.icon}
                </div>

                <div className="my-6 h-[3px] w-20 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />

                <h3 className="text-2xl font-semibold">{service.title}</h3>

                <p className="mt-4 leading-7 text-gray-400">{service.description}</p>

                <Link to="/services" className="mt-8 inline-flex items-center text-violet-300 transition hover:text-white">
                  Learn More <span className="ml-2">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <h2 className="text-4xl font-bold md:text-5xl">Why Choose Us</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              We don't just market businesses. We help them grow.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="glass-panel rounded-[28px] p-8 text-center"
              >
                <div className="flex justify-center text-5xl text-violet-300">{item.icon}</div>

                <h3 className="mt-8 text-2xl font-semibold">{item.title}</h3>

                <p className="mt-5 leading-7 text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-gradient-to-r from-violet-700/20 via-indigo-700/15 to-cyan-700/20 p-14 text-center shadow-[0_20px_60px_rgba(2,6,23,0.45)] backdrop-blur-2xl">
          <h2 className="text-4xl font-bold md:text-5xl">Ready To Grow Your Business?</h2>

          <p className="mt-5 text-lg text-gray-300">
            Let's create marketing that delivers real results.
          </p>

          <Link
            to="/contact"
            className="premium-button mt-10 inline-block rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;