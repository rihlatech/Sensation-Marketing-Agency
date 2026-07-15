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
    <div className="min-h-screen bg-[#050816] px-6 pb-24 pt-36 text-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl font-black lg:text-6xl">
            Digital Marketing{" "}
            <span className="bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Training
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Learn Meta Advertising and Digital Marketing from industry professionals through practical sessions.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {packages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="glass-panel rounded-[28px] p-10"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-2xl">
                  <FaGraduationCap />
                </div>

                <div>
                  <p className="font-semibold text-violet-300">{item.package}</p>
                  <h2 className="mt-1 text-3xl font-bold">{item.title}</h2>
                </div>
              </div>

              <h3 className="mt-8 bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-4xl font-black text-transparent">
                {item.price}
              </h3>

              <div className="mt-10 space-y-5">
                {item.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 text-gray-300">
                    <FaCheckCircle className="text-violet-400" />
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
                className="premium-button mt-12 block rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 py-4 text-center font-semibold text-white transition duration-300"
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