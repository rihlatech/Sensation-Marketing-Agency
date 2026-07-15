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
    <div className="min-h-screen bg-[#050816] px-6 pb-24 pt-36 text-white">
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
            <span className="bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Creative marketing solutions designed to help your business attract,
            engage and convert more customers.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="glass-panel flex flex-col rounded-[28px] p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-4xl text-violet-300">
                {service.icon}
              </div>

              <div className="my-6 h-[3px] w-20 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />

              <h2 className="text-2xl font-semibold">{service.title}</h2>

              <p className="mt-5 flex-grow leading-7 text-gray-400">{service.description}</p>

              <a
                href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                  `Hello Sensation Marketing Agency,\nI would like to inquire about your ${service.title} service.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button mt-8 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 py-4 text-center font-semibold text-white transition duration-300"
              >
                Inquire Service
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;