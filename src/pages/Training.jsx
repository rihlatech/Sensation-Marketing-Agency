// src/pages/Training.jsx

import { motion } from "motion/react";
import { FaGraduationCap, FaCheckCircle } from "react-icons/fa";

const whatsapp = "254797983216";

const packages = [
  {
    package: "Package 1",
    title: "Basic Meta Ads Training",
    price: "KES 10,000",
    features: [
      "Meta Ads Training (Facebook & Instagram)",
      "Digital Marketing Training",
      "Lead Generation Tools",
      "Training Every Tuesday & Friday",
    ],
  },
  {
    package: "Package 2",
    title: "Professional Meta Ads Training",
    price: "KES 20,000",
    features: [
      "Meta Ads Training (Facebook & Instagram)",
      "Advanced Digital Marketing",
      "Lead Generation",
      "Content Creation for One Month",
      "Practical Campaign Management",
    ],
  },
];

const Training = () => {
 return (
  <div className="min-h-screen bg-white px-6 pb-24 pt-36 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

    {/* Background Glow */}
    <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-indigo-200/20 blur-3xl dark:bg-indigo-500/10"></div>
    <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-slate-300/20 blur-3xl dark:bg-slate-500/10"></div>

    <div className="relative mx-auto max-w-7xl">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <h1 className="text-5xl font-black lg:text-6xl text-slate-900 dark:text-white">
          Digital Marketing{" "}
          <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 bg-clip-text text-transparent">
            Training
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Learn Meta Advertising and Digital Marketing from industry professionals through practical, hands-on sessions designed to help you grow your business or career.
        </p>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-2">
        {packages.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group flex flex-col rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-teal-300 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-xl"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 text-2xl text-white shadow-lg shadow-teal-500/30">
                <FaGraduationCap />
              </div>

              <div>
                <p className="font-semibold text-teal-600 dark:text-teal-400">
                  {item.package}
                </p>

                <h2 className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h2>
              </div>
            </div>

            <h3 className="mt-8 bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 bg-clip-text text-4xl font-black text-transparent">
              {item.price}
            </h3>

            <div className="mt-10 space-y-5">              
                {item.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 text-slate-600 dark:text-slate-300"
                >
                  <FaCheckCircle className="text-teal-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                index === 0
                  ? "Hello Sensation Marketing Agency,\nI would like to enroll in the Basic Meta Ads Training package."
                  : "Hello Sensation Marketing Agency,\nI would like to enroll in the Professional Meta Ads Training package."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 block rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 py-4 text-center font-semibold text-white shadow-lg shadow-teal-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/40"
            >
              Inquire Course
            </a>
          </motion.div>
        ))}
      </div>

    </div>
  </div>
);
};

export default Training;