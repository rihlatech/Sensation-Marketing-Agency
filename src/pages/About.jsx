// src/pages/About.jsx

import { motion } from "motion/react";
import { FaAward, FaLightbulb, FaHandshake, FaRocket } from "react-icons/fa";

const reasons = [
  {
    icon: <FaAward />,
    title: "Professional",
    description:
      "We deliver high-quality marketing solutions tailored to every client's goals.",
  },
  {
    icon: <FaLightbulb />,
    title: "Creative",
    description:
      "Innovative ideas that help brands capture attention and stay memorable.",
  },
  {
    icon: <FaHandshake />,
    title: "Client Focused",
    description:
      "We work closely with every client to understand their vision and objectives.",
  },
  {
    icon: <FaRocket />,
    title: "Growth Driven",
    description:
      "Everything we do is designed to help businesses grow and achieve measurable results.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#050816] px-6 pb-24 pt-36 text-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl font-black lg:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Us
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel mx-auto max-w-4xl rounded-[32px] p-10 lg:p-14"
        >
          <h2 className="mb-6 text-3xl font-bold">
            Helping Businesses Grow Through Creative Marketing
          </h2>

          <p className="mb-6 leading-8 text-gray-300">
            At <span className="font-semibold text-white">Sensation Marketing Agency</span>,
            we help businesses build strong brands through creative marketing,
            professional video production, digital advertising, personal branding and strategic campaigns that deliver real business growth.
          </p>

          <p className="leading-8 text-gray-300">
            Whether you're a startup, entrepreneur or an established company,
            our mission is to create marketing solutions that increase visibility,
            generate quality leads and position your brand ahead of the competition.
          </p>
        </motion.div>

        <div className="mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-4xl font-bold"
          >
            Why Choose Us
          </motion.h2>

          <p className="mx-auto mb-16 mt-4 max-w-2xl text-center text-gray-400">
            Your trusted partner for creative and results-driven marketing.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="glass-panel rounded-[28px] p-8 text-center"
              >
                <div className="flex justify-center text-5xl text-violet-300">{reason.icon}</div>

                <h3 className="mt-8 text-2xl font-semibold">{reason.title}</h3>

                <p className="mt-5 leading-7 text-gray-400">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;