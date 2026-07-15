// src/pages/Services.jsx

import { FaVideo, FaBullhorn, FaUserTie, FaHome, FaChartLine, FaShareAlt } from "react-icons/fa";
import { motion } from "motion/react";

const whatsapp = "254797983216";

const services = [
  {
    icon: <FaVideo />,
    title: "Video Production",
    description:
      "Corporate videos, commercials, event coverage, social media content and promotional videos.",
  },
  {
    icon: <FaBullhorn />,
    title: "Marketing Strategy",
    description:
      "Business growth strategies, campaign planning, market positioning and brand development.",
  },
  {
    icon: <FaUserTie />,
    title: "Personal Branding",
    description:
      "Helping professionals and businesses build strong and memorable personal brands.",
  },
  {
    icon: <FaHome />,
    title: "Real Estate Marketing",
    description:
      "Professional property marketing through photography, videography and digital campaigns.",
  },
  {
    icon: <FaChartLine />,
    title: "Digital Marketing",
    description:
      "Meta Ads, Google Ads, SEO, email marketing and performance-driven campaigns.",
  },
  {
    icon: <FaShareAlt />,
    title: "Social Media Marketing",
    description:
      "Content creation, page management, audience growth and social media advertising.",
  },
];

const Services = () => {
 return (
  <div className="min-h-screen bg-white px-6 pb-24 pt-36 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
    <div className="mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <h1 className="text-5xl font-black lg:text-6xl">
          Our{" "}
          <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 bg-clip-text text-transparent">
            Services
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Creative marketing solutions designed to help your business attract,
          engage and convert more customers through innovative strategies and
          professional execution.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group flex flex-col rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-teal-300 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-xl"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 text-3xl text-white shadow-lg shadow-teal-500/30 transition duration-300 group-hover:scale-110">
              {service.icon}
            </div>

            <div className="my-6 h-1 w-20 rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500"></div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {service.title}
            </h2>

            <p className="mt-5 flex-grow leading-7 text-slate-600 dark:text-slate-300">
              {service.description}
            </p>

            <a
              href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                `Hello Sensation Marketing Agency,\n\nI would like to inquire about your ${service.title} service.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 py-4 text-center font-semibold text-white shadow-lg shadow-teal-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/40"
            >
              Inquire Service
            </a>
          </motion.div>
        ))}
      </div>
      <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mt-24 rounded-[32px] bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 p-12 text-center"
>
  <h2 className="text-4xl font-bold text-white">
    Ready to Grow Your Business?
  </h2>

  <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
    Let's create marketing strategies that help your business stand out and reach more customers.
  </p>

  <a
    href={`https://wa.me/${whatsapp}`}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-teal-700 transition hover:scale-105"
  >
    Contact Us Today
  </a>
</motion.div>
    </div>
  </div>
);
};

export default Services;