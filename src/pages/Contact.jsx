// src/pages/Contact.jsx

import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const whatsapp = "254797983216";
const email = "sensationmagency@gmail.com";
const phone = "0797 983216";
const phoneLink = "+254797983216";

const Contact = () => {
  return (
    <>
    <Helmet>
  {/* Basic SEO */}
  <title>Contact Sensation Marketing | Digital Marketing Agency in Kenya</title>

  <meta
    name="description"
    content="Contact Sensation Marketing in Kenya for digital marketing, advertising, social media management, website design, real estate marketing and creative services."
  />

  <meta
    name="keywords"
    content="contact digital marketing agency Kenya, marketing agency Nairobi, digital marketing agency Nairobi, advertising agency Kenya, social media marketing Kenya, website design Kenya"
  />

  <meta name="robots" content="index, follow" />

  <link
    rel="canonical"
    href="https://sensationmarketingagency.com/contact"
  />

  {/* Open Graph / Facebook / WhatsApp */}
  <meta
    property="og:title"
    content="Contact Sensation Marketing | Digital Marketing Agency in Kenya"
  />

  <meta
    property="og:description"
    content="Get in touch with Sensation Marketing for strategic marketing, advertising, social media, web design and creative solutions."
  />

  <meta
    property="og:url"
    content="https://sensationmarketingagency.com/contact"
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
    content="Contact Sensation Marketing | Digital Marketing Agency in Kenya"
  />

  <meta
    name="twitter:description"
    content="Contact Sensation Marketing for digital marketing, advertising, social media, web design and creative services in Kenya."
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

      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#9B0A28]/10 blur-3xl dark:bg-[#9B0A28]/20"></div>

      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-[#C6C6C6]/20 blur-3xl dark:bg-[#C6C6C6]/10"></div>


      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl font-black lg:text-6xl">
            Contact{" "}
            <span className="bg-gradient-to-r from-[#9B0A28] via-[#9B0A28] to-black bg-clip-text text-transparent dark:from-[#C6C6C6] dark:via-[#9B0A28] dark:to-[#9B0A28]">
              Us
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-[#C6C6C6]">
            We'd love to hear about your project. Reach out today and let's
            create something that gets your brand noticed.
          </p>
        </motion.div>


        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">


          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-[#9B0A28]/40 hover:shadow-2xl dark:border-[#C6C6C6]/20 dark:bg-white/5 dark:backdrop-blur-xl"
          >

            <h2 className="mb-10 text-3xl font-bold">
              Get In Touch
            </h2>


            <div className="space-y-8">


              {/* Email */}
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-5 text-slate-700 transition hover:text-[#9B0A28] dark:text-[#C6C6C6] dark:hover:text-white"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#9B0A28] text-white shadow-lg shadow-[#9B0A28]/20">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-sm text-slate-500 dark:text-[#C6C6C6]/60">
                    Email
                  </p>

                  <p>{email}</p>
                </div>
              </a>


              {/* Phone */}
              <a
                href={`tel:${phoneLink}`}
                className="flex items-center gap-5 text-slate-700 transition hover:text-[#9B0A28] dark:text-[#C6C6C6] dark:hover:text-white"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#9B0A28] text-white shadow-lg shadow-[#9B0A28]/20">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-sm text-slate-500 dark:text-[#C6C6C6]/60">
                    Phone
                  </p>

                  <p>{phone}</p>
                </div>
              </a>


              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 text-slate-700 transition hover:text-[#9B0A28] dark:text-[#C6C6C6] dark:hover:text-white"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#9B0A28] text-white shadow-lg shadow-[#9B0A28]/20">
                  <FaWhatsapp />
                </div>

                <div>
                  <p className="text-sm text-slate-500 dark:text-[#C6C6C6]/60">
                    WhatsApp
                  </p>

                  <p>Chat With Us</p>
                </div>
              </a>


              {/* Location */}
              <div className="flex items-center gap-5 text-slate-700 dark:text-[#C6C6C6]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#9B0A28] text-white shadow-lg shadow-[#9B0A28]/20">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-sm text-slate-500 dark:text-[#C6C6C6]/60">
                    Location
                  </p>

                  <p>Nairobi, Kenya</p>
                </div>
              </div>


            </div>

          </motion.div>


          {/* Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-[#9B0A28]/40 hover:shadow-2xl dark:border-[#C6C6C6]/20 dark:bg-white/5 dark:backdrop-blur-xl"
          >

            <h2 className="mb-8 text-3xl font-bold">
              Send a Message
            </h2>


            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >

              {/* Web3Forms */}
              <input
                type="hidden"
                name="access_key"
                value="e6f6839b-b2d5-4797-b613-4dca380076fc"
              />

              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
              />

              <input
                type="hidden"
                name="subject"
                value="New Website Inquiry - Sensation Marketing Agency"
              />

              <input
                type="hidden"
                name="from_name"
                value="Sensation Marketing Website"
              />

              <input
                type="hidden"
                name="redirect"
                value="https://sensationmarketingagency.com/thank-you"
              />


              {/* Name, Email, Subject */}
              {[
                ["Name", "Full Name"],
                ["Email", "Email Address"],
                ["Subject", "Subject"],
              ].map(([name, placeholder]) => (
                <input
                  key={name}
                  type={name === "Email" ? "email" : "text"}
                  name={name}
                  placeholder={placeholder}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-100 px-5 py-4 text-slate-900 outline-none transition focus:border-[#9B0A28] focus:ring-1 focus:ring-[#9B0A28] dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder:text-[#C6C6C6]/60"
                />
              ))}


              {/* Message */}
              <textarea
                name="Message"
                rows="6"
                placeholder="Tell us about your project, the services you need, your goals, budget range or any questions you have..."
                required
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-100 px-5 py-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#9B0A28] focus:ring-1 focus:ring-[#9B0A28] dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder:text-[#C6C6C6]/60"
              />


              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-[#9B0A28] py-4 font-semibold text-white shadow-lg shadow-[#9B0A28]/20 transition hover:-translate-y-1 hover:bg-[#7F0821] hover:shadow-xl"
              >
                Send Message
              </button>

            </form>

          </motion.div>


        </div>

      </div>

    </div>
    </>
  );
};

export default Contact;