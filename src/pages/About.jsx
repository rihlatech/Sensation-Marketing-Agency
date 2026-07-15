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
  <div className="min-h-screen bg-white px-6 pb-24 pt-36 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

    {/* Background Glow */}
    <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl dark:bg-teal-500/10"></div>
    <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-500/10"></div>


    <div className="relative mx-auto max-w-7xl">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <h1 className="text-5xl font-black lg:text-6xl">
          About{" "}
          <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 bg-clip-text text-transparent">
            Us
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          We help businesses build powerful brands through creative marketing,
          strategic campaigns and digital solutions.
        </p>
      </motion.div>


      {/* About Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-teal-300 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-xl"
      >

        <h2 className="mb-6 text-3xl font-bold">
          Helping Businesses Grow Through Creative Marketing
        </h2>

        <p className="mb-6 leading-8 text-slate-600 dark:text-slate-300">
          At{" "}
          <span className="font-semibold text-teal-600 dark:text-teal-400">
            Sensation Marketing Agency
          </span>
          , we help businesses build strong brands through creative marketing,
          professional video production, digital advertising, personal branding
          and strategic campaigns that deliver real growth.
        </p>

        <p className="leading-8 text-slate-600 dark:text-slate-300">
          Whether you are a startup, entrepreneur or an established company,
          our mission is to create marketing solutions that increase visibility,
          generate quality leads and position your brand ahead of the competition.
        </p>

      </motion.div>



      {/* Why Choose Us */}
      <div className="mt-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Why Choose Us
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Your trusted partner for creative and results-driven marketing.
          </p>
        </motion.div>



        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {reasons.map((reason, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}

              className="group flex flex-col items-center rounded-[30px] border border-slate-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:border-teal-300 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-xl"
            >

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 via-cyan-500 to-sky-500 text-3xl text-white shadow-lg shadow-teal-500/30 transition duration-300 group-hover:scale-110">
                {reason.icon}
              </div>


              <h3 className="mt-8 text-2xl font-bold">
                {reason.title}
              </h3>


              <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
                {reason.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </div>

  </div>
);
};

export default About;