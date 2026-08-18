// src/pages/Home.jsx

import { Link } from "react-router-dom";
import { motion } from "motion/react";
import heroOffice from "../assets/images/hero-office.jpg";

import {
  FaVideo,
  FaBullhorn,
  FaGoogle,
  FaShareAlt,
  FaHome,
  // FaCamera,
  FaGlobe,
  // FaGraduationCap,
  FaAward,
  FaLightbulb,
  FaHandshake,
  FaRocket,
} from "react-icons/fa";


// ======================================================
// SERVICES
// ======================================================

const services = [
  {
    icon: <FaVideo />,
    title: "Commercial Advertising",
    description:
      "Polished commercial content designed to capture attention, tell your brand story and drive action.",
  },

  {
    icon: <FaBullhorn />,
    title: "Marketing Strategy",
    description:
      "Strategic marketing and business consultancy built around positioning, growth and sustainable results.",
  },

  {
    icon: <FaGoogle />,
    title: "Paid Meta & Google Ads",
    description:
      "Data-driven advertising campaigns designed to generate leads, signups and sales.",
  },

  {
    icon: <FaShareAlt />,
    title: "Social Media Marketing",
    description:
      "Strategic content, consistent management and community engagement that supports real business growth.",
  },

  {
    icon: <FaHome />,
    title: "Real Estate Marketing",
    description:
      "Specialist marketing for property brands, listings and campaigns designed to generate qualified leads.",
  },

  {
    icon: <FaGlobe />,
    title: "Website Design",
    description:
      "Modern, conversion-focused websites that work as a 24/7 extension of your brand and sales process.",
  },
];


// ======================================================
// WHY CHOOSE US
// ======================================================

const whyChooseUs = [
  {
    icon: <FaAward />,
    title: "Storytelling First",
    description:
      "We create attention-grabbing brand moments instead of generic marketing content.",
  },

  {
    icon: <FaLightbulb />,
    title: "Market Focused",
    description:
      "Our strategies are built around real audiences, real budgets and the Kenyan market.",
  },

  {
    icon: <FaHandshake />,
    title: "Full-Funnel Thinking",
    description:
      "We connect strategy, content, advertising, sales and analytics into one system.",
  },

  {
    icon: <FaRocket />,
    title: "Results Driven",
    description:
      "We focus on outcomes that matter — engagement, leads, signups and revenue.",
  },
];


// ======================================================
// HOME PAGE
// ======================================================

const Home = () => {
  return (
    <div className="text-black dark:text-white">

      {/* ==================================================
          HERO SECTION
      ================================================== */}

      <section
        className="relative min-h-[90vh] overflow-hidden pt-24 lg:min-h-screen lg:pt-0"
        style={{
          backgroundImage: `url(${heroOffice})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Hero Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40" />

        {/* Burgundy Glow */}

        <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-[#9b0a28]/20 blur-[120px]" />

        <div className="absolute bottom-10 right-[-5rem] h-80 w-80 rounded-full bg-[#9b0a28]/20 blur-[140px]" />


        <div className="relative mx-auto flex max-w-7xl items-center px-6 py-16 lg:min-h-screen lg:px-10">

          <div className="max-w-2xl">

            <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-5xl font-black leading-[1.05] text-white md:text-6xl lg:text-7xl"
>
  {/* 
    HERO TEXT
    --------------------------------
    The CEO will provide the final wording.
  */}

  Grow Your
  <br />

  <span className="bg-gradient-to-r from-[#9b0a28] via-[#b7193d] to-[#c6c6c6] bg-clip-text text-transparent">
    Business Beyond
  </span>

  <br />

  Expectations
</motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-xl text-lg leading-8 text-gray-200"
            >
              Helping businesses turn powerful storytelling into engagement,
              leads and revenue through strategic marketing and creative
              solutions.
            </motion.p>


            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-5"
            >

              {/* Primary CTA */}

              <Link
                to="/contact"
                className="rounded-full bg-[#9b0a28] px-8 py-4 font-semibold text-white shadow-lg shadow-[#9b0a28]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#b30d30] hover:shadow-xl hover:shadow-[#9b0a28]/40"
              >
                Book Consultation
              </Link>


              {/* Secondary CTA */}

              <Link
                to="/services"
                className="rounded-full border border-[#c6c6c6]/40 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-[#9b0a28] hover:bg-[#9b0a28]/20"
              >
                Explore Services
              </Link>

            </motion.div>

          </div>

        </div>

      </section>


      {/* ==================================================
          WHAT WE OFFER
      ================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#f5f5f5] via-white to-[#eeeeee] px-6 py-24 dark:from-black dark:via-[#090909] dark:to-[#111111] lg:px-10">

        {/* Background Burgundy Glow */}

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#9b0a28]/10 blur-3xl dark:bg-[#9b0a28]/10" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#c6c6c6]/20 blur-3xl dark:bg-[#c6c6c6]/5" />


        <div className="relative mx-auto max-w-7xl">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >

            <h2 className="text-4xl font-extrabold text-black dark:text-white md:text-5xl">
              What We Offer
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Creative marketing solutions built to turn attention into
              meaningful business results.
            </p>

          </motion.div>


          {/* Service Cards */}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group rounded-[30px] border border-gray-200 bg-white/80 p-8 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-[#9b0a28] hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
              >

                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#9b0a28] text-3xl text-white shadow-lg shadow-[#9b0a28]/20 transition duration-300 group-hover:scale-110">
                  {service.icon}
                </div>


                {/* Divider */}

                <div className="my-6 h-1 w-20 rounded-full bg-[#9b0a28]" />


                {/* Title */}

                <h3 className="text-2xl font-bold text-black dark:text-white">
                  {service.title}
                </h3>


                {/* Description */}

                <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>


                {/* Link */}

                <Link
                  to="/services"
                  className="mt-8 inline-flex items-center font-semibold text-[#9b0a28] transition-all duration-300 hover:translate-x-2 hover:text-[#b30d30]"
                >
                  Learn More

                  <span className="ml-2">
                    →
                  </span>

                </Link>

              </motion.div>

            ))}

          </div>


          {/* View All Services */}

          <div className="mt-14 text-center">

            <Link
              to="/services"
              className="inline-flex items-center rounded-full border-2 border-[#9b0a28] px-8 py-3 font-semibold text-[#9b0a28] transition-all duration-300 hover:bg-[#9b0a28] hover:text-white"
            >
              View All Services
              <span className="ml-2">
                →
              </span>
            </Link>

          </div>

        </div>

      </section>


      {/* ==================================================
          WHY CHOOSE US
      ================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#f7f7f7] via-white to-[#eeeeee] px-6 py-24 dark:from-black dark:via-[#090909] dark:to-[#111111] lg:px-10">

        {/* Background Glows */}

        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#9b0a28]/10 blur-3xl dark:bg-[#9b0a28]/10" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#c6c6c6]/20 blur-3xl dark:bg-[#c6c6c6]/5" />


        <div className="relative mx-auto max-w-7xl">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >

            <h2 className="text-4xl font-extrabold text-black dark:text-white md:text-5xl">
              Why Choose Us
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              We combine storytelling, strategy and creativity to create
              marketing that delivers real business outcomes.
            </p>

          </motion.div>


          {/* Why Choose Us Cards */}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {whyChooseUs.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group rounded-[30px] border border-gray-200 bg-white/80 p-8 text-center shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-[#9b0a28] hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
              >

                {/* Icon */}

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#9b0a28] text-3xl text-white shadow-lg shadow-[#9b0a28]/20 transition duration-300 group-hover:scale-110">
                  {item.icon}
                </div>


                {/* Divider */}

                <div className="mx-auto my-6 h-1 w-16 rounded-full bg-[#9b0a28]" />


                {/* Title */}

                <h3 className="text-2xl font-bold text-black dark:text-white">
                  {item.title}
                </h3>


                {/* Description */}

                <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#f5f5f5] via-white to-[#eeeeee] px-6 py-24 dark:from-black dark:via-[#080808] dark:to-[#111111]">

        {/* Background Glows */}

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#9b0a28]/10 blur-3xl dark:bg-[#9b0a28]/10" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#c6c6c6]/20 blur-3xl dark:bg-[#c6c6c6]/5" />


        <div className="relative mx-auto max-w-5xl">

          <div className="rounded-[36px] bg-[#9b0a28] p-12 text-center shadow-2xl shadow-[#9b0a28]/20 md:p-16">

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold text-white md:text-5xl"
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
              Let's turn your story into attention, engagement, leads and
              revenue.
            </motion.p>


            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-col justify-center gap-5 sm:flex-row"
            >

              <Link
                to="/contact"
                className="rounded-full bg-white px-8 py-4 font-semibold text-[#9b0a28] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Book Consultation
              </Link>


              <Link
                to="/services"
                className="rounded-full border border-white/50 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
              >
                Explore Services
              </Link>

            </motion.div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;