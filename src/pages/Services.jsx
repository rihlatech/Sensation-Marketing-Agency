// src/pages/Services.jsx
import { Helmet } from "react-helmet-async";
import {
  FaVideo,
  FaBullhorn,
  FaGoogle,
  FaFacebook,
  FaShareAlt,
  FaHome,
  FaCamera,
  FaLaptopCode,
  FaChalkboardTeacher,
} from "react-icons/fa";

import { motion } from "motion/react";

const whatsapp = "254797983216";


const services = [
  {
    icon: <FaVideo />,
    title: "Commercial Advertising",
    description:
      "We produce polished commercial ad content for brands, products and campaigns — from concept and storytelling to filming and final edit.",
  },

  {
    icon: <FaBullhorn />,
    title: "Marketing Strategy & Business Consultancy",
    description:
      "We help founders and business owners build the marketing strategy and business roadmap behind their brand, from positioning and growth planning to scalable business systems.",
  },

  {
    icon: <FaGoogle />,
    title: "Paid Meta & Google Ads",
    description:
      "We build, manage and optimize Meta and Google advertising campaigns designed to generate leads, signups and sales while maximizing your return per shilling spent.",
  },

  {
    icon: <FaShareAlt />,
    title: "Social Media Marketing & Management",
    description:
      "We handle content strategy, calendars, posting and community engagement so your brand stays consistent, relevant and focused on measurable business growth.",
  },

  {
    icon: <FaFacebook />,
    title: "Influencer Marketing",
    description:
      "We identify, vet and manage influencer partnerships that connect brands with the right audiences through authentic content and measurable engagement.",
  },

  {
    icon: <FaHome />,
    title: "Real Estate Marketing",
    description:
      "Specialist marketing for property and real estate brands, including listing content, brand positioning and lead-generating campaigns.",
  },

  {
    icon: <FaCamera />,
    title: "Product Photography",
    description:
      "High-quality product photography designed to make your products look premium, credible and ready to sell online, on social media or in advertising campaigns.",
  },

  {
    icon: <FaLaptopCode />,
    title: "Website Design",
    description:
      "We design and build modern brand websites that turn visitors into leads and customers while serving as a 24/7 extension of your brand and sales process.",
  },

  {
    icon: <FaChalkboardTeacher />,
    title: "Digital Marketing & Meta Ads Training",
    description:
      "Hands-on training for founders, marketers and creators who want practical skills in digital marketing, social media growth and high-converting Meta Ads campaigns.",
  },
];


const Services = () => {
  return (
    <>
    <Helmet>
  {/* Basic SEO */}
  <title>Sensation Marketing | Digital Marketing Services in Kenya</title>

  <meta
    name="description"
    content="Explore Sensation Marketing's digital marketing services in Kenya, including advertising, marketing strategy, Meta and Google Ads, social media marketing, influencer marketing, real estate marketing, photography and website design."
  />

  <meta
    name="keywords"
    content="digital marketing services Kenya, marketing services Kenya, advertising agency Kenya, Meta Ads Kenya, Google Ads Kenya, social media marketing Kenya, influencer marketing Kenya, real estate marketing Kenya, website design Kenya, product photography Kenya"
  />

  <meta name="robots" content="index, follow" />

  <link
    rel="canonical"
    href="https://sensationmarketingagency.com/services"
  />

  {/* Open Graph / Facebook / WhatsApp */}
  <meta
    property="og:title"
    content="Sensation Marketing | Digital Marketing Services in Kenya"
  />

  <meta
    property="og:description"
    content="Explore our digital marketing, advertising, social media, web design, real estate marketing and creative services designed to help businesses grow."
  />

  <meta
    property="og:url"
    content="https://sensationmarketingagency.com/services"
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
    content="Sensation Marketing | Digital Marketing Services in Kenya"
  />

  <meta
    name="twitter:description"
    content="Digital marketing, advertising, social media, web design and creative services for businesses in Kenya."
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
{/* ============================================================ */}
    <div className="min-h-screen bg-white px-6 pb-24 pt-36 text-slate-900 transition-colors duration-300 dark:bg-black dark:text-white">

      {/* =====================================================
          HEADER
      ===================================================== */}

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

            <span className="text-[#9b0a28]">
              Services
            </span>

          </h1>


          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-[#c6c6c6]">

            From strategy and storytelling to advertising, content creation
            and business growth, we help brands turn attention into
            engagement, leads and revenue.

          </p>

        </motion.div>



        {/* =====================================================
            SERVICES GRID
        ===================================================== */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (

            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: index * 0.08,
              }}

              viewport={{
                once: true,
              }}

              whileHover={{
                y: -10,
                scale: 1.02,
              }}

              className="
                group
                flex
                flex-col
                rounded-[30px]
                border
                border-slate-200
                bg-white
                p-8
                shadow-lg
                transition-all
                duration-300

                hover:border-[#9b0a28]
                hover:shadow-2xl
                hover:shadow-[#9b0a28]/10

                dark:border-white/10
                dark:bg-white/[0.04]
                dark:backdrop-blur-xl
              "
            >


              {/* ICON */}

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#9b0a28]
                  text-3xl
                  text-white
                  shadow-lg
                  shadow-[#9b0a28]/20
                  transition
                  duration-300
                  group-hover:scale-110
                "
              >
                {service.icon}
              </div>


              {/* ACCENT LINE */}

              <div
                className="
                  my-6
                  h-1
                  w-20
                  rounded-full
                  bg-[#9b0a28]
                "
              />


              {/* TITLE */}

              <h2
                className="
                  text-2xl
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                {service.title}
              </h2>


              {/* DESCRIPTION */}

              <p
                className="
                  mt-5
                  flex-grow
                  leading-7
                  text-slate-600
                  dark:text-[#c6c6c6]
                "
              >
                {service.description}
              </p>


              {/* WHATSAPP BUTTON */}

              <a
                href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                  `Hello Sensation Marketing Agency,\n\nI would like to inquire about your ${service.title} service.`
                )}`}

                target="_blank"
                rel="noopener noreferrer"

                className="
                  mt-8
                  rounded-full
                  bg-[#9b0a28]
                  py-4
                  text-center
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-[#9b0a28]/20
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-[#b30d30]
                  hover:shadow-xl
                  hover:shadow-[#9b0a28]/30
                "
              >
                Inquire Service
              </a>

            </motion.div>

          ))}

        </div>



        {/* =====================================================
            CTA
        ===================================================== */}

        <motion.div

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          className="
            relative
            mt-24
            overflow-hidden
            rounded-[32px]
            bg-[#000000]
            p-12
            text-center
            shadow-2xl

            md:p-16
          "
        >

          {/* Burgundy Glow */}

          <div
            className="
              absolute
              -right-20
              -top-20
              h-64
              w-64
              rounded-full
              bg-[#9b0a28]/30
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-20
              -left-20
              h-64
              w-64
              rounded-full
              bg-[#9b0a28]/20
              blur-3xl
            "
          />


          <div className="relative z-10">

            <h2
              className="
                text-4xl
                font-bold
                text-white
                md:text-5xl
              "
            >
              Ready to Grow Your Business?
            </h2>


            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-lg
                leading-8
                text-[#c6c6c6]
              "
            >
              Let's turn your brand story into attention,
              engagement, leads and revenue.
            </p>


            <a
              href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                "Hello Sensation Marketing Agency, I would like to discuss how you can help grow my business."
              )}`}

              target="_blank"
              rel="noopener noreferrer"

              className="
                mt-8
                inline-block
                rounded-full
                bg-[#9b0a28]
                px-8
                py-4
                font-semibold
                text-white
                shadow-lg
                shadow-[#9b0a28]/20
                transition
                duration-300

                hover:-translate-y-1
                hover:bg-[#b30d30]
                hover:shadow-xl
              "
            >
              Let's Talk
            </a>

          </div>

        </motion.div>

      </div>

    </div>
    </>
  );
};

export default Services;