// src/pages/Training.jsx

import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaCheckCircle,
  FaCalendarAlt,
  FaLaptop,
  FaUsers,
  FaChartLine,
  FaTag,
} from "react-icons/fa";

const whatsapp = "254797983216";

const topics = [
  "Building a content and social media strategy from scratch",
  "Running and optimizing Meta Ads campaigns",
  "Growing engagement and community on Instagram, TikTok and Facebook",
  "Turning followers into paying customers with a real sales process",
  "Analytics: reading the numbers that actually matter",
];

const format = [
  {
    icon: <FaCalendarAlt />,
    title: "Once Every Month",
    description:
      "A practical masterclass held once every month for entrepreneurs, marketers and creators.",
  },
  {
    icon: <FaLaptop />,
    title: "Physical & Online",
    description:
      "Join us physically or participate remotely from wherever you are.",
  },
  {
    icon: <FaUsers />,
    title: "Small-Group & Hands-On",
    description:
      "Interactive sessions designed to give every participant practical experience.",
  },
  {
    icon: <FaChartLine />,
    title: "Real Campaigns",
    description:
      "Learn using real campaigns, real budgets and strategies focused on business results.",
  },
];

const Training = () => {
  return (
    <>
    <Helmet>
  {/* Basic SEO */}
  <title>Sensation Masterclasses | Digital Marketing Training in Kenya</title>

  <meta
    name="description"
    content="Join Sensation Marketing's practical digital marketing training in Kenya. Learn social media marketing, Meta Ads, content strategy, analytics and how to turn online attention into business results."
  />

  <meta
    name="keywords"
    content="digital marketing training Kenya, digital marketing courses Kenya, digital marketing masterclass Kenya, Meta Ads training Kenya, social media marketing training Kenya, Facebook Ads training Kenya, Instagram marketing training Kenya, marketing training Nairobi"
  />

  <meta name="robots" content="index, follow" />

  <link
    rel="canonical"
    href="https://sensationmarketingagency.com/training"
  />

  {/* Open Graph / Facebook / WhatsApp */}
  <meta
    property="og:title"
    content="Sensation Masterclasses | Digital Marketing Training in Kenya"
  />

  <meta
    property="og:description"
    content="Practical digital marketing training covering social media growth, Meta Ads, content strategy, analytics and real business campaigns."
  />

  <meta
    property="og:url"
    content="https://sensationmarketingagency.com/training"
  />

  <meta
    property="og:image"
    content="https://sensationmarketingagency.com/SMA-logo.png"
  />

  <meta
    property="og:image:alt"
    content="Sensation Marketing logo"
  />

  <meta property="og:type" content="website" />

  <meta
    property="og:site_name"
    content="Sensation Marketing"
  />

  <meta property="og:locale" content="en_KE" />

  {/* X / Twitter */}
  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content="Sensation Masterclasses | Digital Marketing Training in Kenya"
  />

  <meta
    name="twitter:description"
    content="Learn practical digital marketing, social media growth, Meta Ads and analytics through real campaigns and business-focused training."
  />

  <meta
    name="twitter:image"
    content="https://sensationmarketingagency.com/SMA-logo.png"
  />

  <meta
    name="twitter:image:alt"
    content="Sensation Marketing logo"
  />
</Helmet>
    <div className="min-h-screen bg-white px-6 pb-24 pt-36 text-slate-900 transition-colors duration-300 dark:bg-black dark:text-white">

      {/* Background Glows */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#9b0a28]/10 blur-3xl dark:bg-[#9b0a28]/20" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gray-300/30 blur-3xl dark:bg-[#9b0a28]/10" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#9b0a28] text-2xl text-white shadow-lg shadow-[#9b0a28]/30">
            <FaGraduationCap />
          </div>

          <h1 className="text-5xl font-black lg:text-6xl">
            Sensation{" "}
            <span className="bg-gradient-to-r from-[#9b0a28] via-[#b7193d] to-[#777777] bg-clip-text text-transparent">
              Masterclasses
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-gray-300">
            Practical, revenue-focused training in digital marketing, social
            media growth and Meta Ads — built from real campaigns, not theory.
          </p>
        </motion.div>

                {/* Client Acquisition System Offer */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mb-24 max-w-5xl overflow-hidden rounded-2xl border border-[#9b0a28]/40 bg-black/95 p-6 shadow-2xl shadow-[#9b0a28]/10 md:p-8"
        >
          {/* Burgundy glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#9b0a28]/20 blur-3xl" />

          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

            {/* Offer Content */}
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#9b0a28]/50 bg-[#9b0a28]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#e5a0af]">
                <FaTag className="text-[10px]" />
                Early Offer
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c6c6c6]">
                Client Acquisition System
              </p>

              <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                Turn Your Marketing Into a Client Acquisition Machine
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-300">
                Get early access to the Client Acquisition System and take
                your client acquisition training beyond the classroom.
              </p>
            </div>

            {/* Price + CTA */}
            <div className="shrink-0">
              <div className="flex items-baseline gap-3">
                <span className="text-sm text-gray-500 line-through">
                  KES 5,000
                </span>

                <span className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  KES 500
                </span>
              </div>

            <Link
  to="/client-acquisition-system"
  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#9b0a28] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b30d30] md:w-auto"
>
  Get Early Access
  <span className="ml-2">→</span>
</Link>
            </div>

          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-xl md:p-12"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            Learn Marketing That{" "}
            <span className="text-[#9b0a28]">
              Actually Moves Business
            </span>
          </h2>

          <p className="mt-6 leading-8 text-slate-600 dark:text-gray-300">
            Once every month, Sensation Marketing Agency brings together
            entrepreneurs, startup founders, marketers, students and creators
            for a hands-on masterclass focused on practical digital marketing
            skills.
          </p>

          <p className="mt-5 leading-8 text-slate-600 dark:text-gray-300">
            We don't teach marketing as theory. We focus on what happens in
            the real world — building campaigns, understanding audiences,
            managing budgets, reading performance data and turning attention
            into customers.
          </p>
        </motion.div>


        {/* What You'll Learn */}
        <section className="mt-24">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <h2 className="text-4xl font-black md:text-5xl">
              What You'll{" "}
              <span className="text-[#9b0a28]">
                Learn
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-gray-400">
              Everything you need to build a stronger online presence and turn
              digital attention into real business results.
            </p>
          </motion.div>


          <div className="grid gap-6 md:grid-cols-2">

            {topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="group flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:border-[#9b0a28]/50 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >

                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#9b0a28] text-white shadow-lg shadow-[#9b0a28]/20">
                  <FaCheckCircle />
                </div>

                <p className="text-lg leading-7 text-slate-700 dark:text-gray-300">
                  {topic}
                </p>

              </motion.div>
            ))}

          </div>

        </section>


        {/* Format */}
        <section className="mt-24">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <h2 className="text-4xl font-black md:text-5xl">
              How The{" "}
              <span className="text-[#9b0a28]">
                Masterclass Works
              </span>
            </h2>
          </motion.div>


          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {format.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:border-[#9b0a28]/50 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-xl"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#9b0a28] to-[#b7193d] text-2xl text-white shadow-lg shadow-[#9b0a28]/30 transition duration-300 group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="mt-7 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-gray-400">
                  {item.description}
                </p>

              </motion.div>
            ))}

          </div>

        </section>


        {/* Who It's For */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="rounded-[32px] bg-black p-10 text-center shadow-2xl dark:border dark:border-white/10 md:p-16">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#b7193d]">
              Who It's For
            </p>

            <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
              Built For People Who Want{" "}
              <span className="text-[#b7193d]">
                Results
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              Whether you're building a startup, running an established
              business, managing a brand, studying marketing or creating
              content, the Sensation Masterclass gives you practical skills
              you can apply immediately.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              {[
                "Business Owners",
                "Startup Founders",
                "Marketers",
                "Students",
                "Creators",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </motion.section>


        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="rounded-[32px] bg-gradient-to-r from-[#9b0a28] via-[#b7193d] to-[#7b7b7b] p-10 text-center shadow-2xl md:p-16">

            <h2 className="text-4xl font-black text-white md:text-5xl">
              Ready to Learn What Actually Works?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
              Reserve your spot in the next Sensation Masterclass and learn
              practical digital marketing skills built around real campaigns,
              real budgets and real business goals.
            </p>

            <a
              href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                "Hello Sensation Marketing Agency,\n\nI would like to know more about the next Sensation Masterclass."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full bg-white px-9 py-4 font-bold text-[#9b0a28] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Reserve Your Spot
            </a>

          </div>

        </motion.section>

      </div>
    </div>
    </>
  );
};

export default Training;