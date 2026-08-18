// src/pages/About.jsx

import { motion } from "motion/react";
import {
  FaBullseye,
  FaChartLine,
  FaLightbulb,
  FaLayerGroup,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaBullseye />,
    title: "Storytelling First",
    description:
      "We create compelling brand moments instead of generic marketing content. Every campaign starts with a story and a clear purpose.",
  },
  {
    icon: <FaChartLine />,
    title: "Market Smart",
    description:
      "Our strategies are built around real campaigns, real budgets and the realities of the Kenyan market.",
  },
  {
    icon: <FaLightbulb />,
    title: "Creative Under One Roof",
    description:
      "From filming and editing to copy, design and marketing strategy, we bring the creative process together under one roof.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Full-Funnel Thinking",
    description:
      "We look beyond content — connecting strategy, content, advertising, sales processes and analytics to drive real business outcomes.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white px-6 pb-24 pt-36 text-slate-900 transition-colors duration-300 dark:bg-black dark:text-white">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#9B0A28]/10 blur-3xl dark:bg-[#9B0A28]/20"></div>

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#C6C6C6]/20 blur-3xl dark:bg-[#C6C6C6]/10"></div>


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
            <span className="bg-gradient-to-r from-[#9B0A28] via-[#9B0A28] to-black bg-clip-text text-transparent dark:from-[#C6C6C6] dark:via-[#9B0A28] dark:to-[#9B0A28]">
              Sensation
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-[#C6C6C6]">
            We create attention-grabbing brand moments that turn storytelling
            into engagement, leads and revenue.
          </p>
        </motion.div>


        {/* About Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-[#9B0A28]/40 hover:shadow-2xl dark:border-[#C6C6C6]/20 dark:bg-white/5 dark:backdrop-blur-xl"
        >

          <h2 className="mb-6 text-3xl font-bold">
            Turning Brands Into Stories
          </h2>

          <p className="mb-6 leading-8 text-slate-600 dark:text-[#C6C6C6]">
            At{" "}
            <span className="font-semibold text-[#9B0A28] dark:text-[#C6C6C6]">
              Sensation Marketing Agency
            </span>
            , we believe great marketing starts with a story worth paying
            attention to.
          </p>

          <p className="mb-6 leading-8 text-slate-600 dark:text-[#C6C6C6]">
            Based in Nairobi, Kenya, we help startups, SMEs, brands and
            established businesses strengthen their online presence through
            strategic storytelling and innovative marketing strategies.
          </p>

          <p className="mb-6 leading-8 text-slate-600 dark:text-[#C6C6C6]">
            We transform businesses, products and ideas into compelling
            narratives designed to capture attention, create emotional
            connection and drive action.
          </p>

          <p className="leading-8 text-slate-600 dark:text-[#C6C6C6]">
            From content creation and social media to advertising, strategy and
            business consultancy, we connect creativity with measurable
            business outcomes.
          </p>

        </motion.div>


        {/* Why Sensation */}
        <div className="mt-24">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-extrabold md:text-5xl">
              Why{" "}
              <span className="text-[#9B0A28]">
                Sensation?
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-[#C6C6C6]">
              We combine creativity, strategy and market understanding to
              create marketing that actually moves the business forward.
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

                className="group flex flex-col items-center rounded-[30px] border border-slate-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:border-[#9B0A28]/40 hover:shadow-2xl dark:border-[#C6C6C6]/20 dark:bg-white/5 dark:backdrop-blur-xl"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#9B0A28] text-3xl text-white shadow-lg shadow-[#9B0A28]/20 transition duration-300 group-hover:scale-110">
                  {reason.icon}
                </div>


                <h3 className="mt-8 text-2xl font-bold">
                  {reason.title}
                </h3>


                <p className="mt-5 leading-7 text-slate-600 dark:text-[#C6C6C6]">
                  {reason.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>


        {/* Who We Serve */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 rounded-[32px] border border-slate-200 bg-slate-50 p-10 text-center shadow-lg dark:border-[#C6C6C6]/20 dark:bg-white/5"
        >

          <h2 className="text-4xl font-extrabold md:text-5xl">
            Built For Businesses{" "}
            <span className="text-[#9B0A28]">
              Ready To Grow
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-[#C6C6C6]">
            We work with businesses across Nairobi and Kenya that want to
            build an online presence that does more than look good — it
            converts.
          </p>


          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-4">

            {[
              "Startups",
              "SMEs",
              "Brands",
              "Established Businesses",
              "E-commerce",
              "Real Estate",
              "Lifestyle",
              "Luxury",
              "Travel & Safari",
            ].map((item) => (

              <span
                key={item}
                className="rounded-full border border-[#9B0A28]/20 bg-white px-5 py-3 text-sm font-semibold text-[#9B0A28] shadow-sm dark:border-[#9B0A28]/40 dark:bg-black dark:text-[#C6C6C6]"
              >
                {item}
              </span>

            ))}

          </div>

        </motion.div>


        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-24 max-w-5xl rounded-[36px] bg-black p-12 text-center shadow-2xl dark:border dark:border-[#9B0A28]/30 md:p-16"
        >

          <h2 className="text-4xl font-extrabold text-white md:text-5xl">
            Your Brand Has A Story.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#C6C6C6]">
            We make it impossible to ignore.
          </p>

          <p className="mt-8 text-2xl font-black uppercase tracking-[0.15em] text-[#9B0A28]">
            Cause We Gatchu
          </p>

        </motion.div>

      </div>

    </div>
  );
};

export default About;