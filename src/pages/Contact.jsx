// src/pages/Contact.jsx

import { motion } from "motion/react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const whatsapp = "254797983216";
const email = "sensationmagency@gmail.com";
const phone = "0797 983216";
const phoneLink = "+254797983216";

const Contact = () => {
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
            Contact{" "}
            <span className="bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Us
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            We'd love to hear about your project. Reach out today and let's grow your business together.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-[28px] p-10"
          >
            <h2 className="mb-10 text-3xl font-bold">Get In Touch</h2>

            <div className="space-y-8">
              <a href={`mailto:${email}`} className="flex items-center gap-5 text-gray-300 transition hover:text-violet-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p>{email}</p>
                </div>
              </a>

              <a href={`tel:${phoneLink}`} className="flex items-center gap-5 text-gray-300 transition hover:text-violet-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p>{phone}</p>
                </div>
              </a>

              <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 text-gray-300 transition hover:text-violet-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500">
                  <FaWhatsapp />
                </div>

                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p>Chat With Us</p>
                </div>
              </a>

              <div className="flex items-center gap-5 text-gray-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p>Kenya</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-[28px] p-10"
          >
            <h2 className="mb-8 text-3xl font-bold">Send a Message</h2>

            <form action="https://formsubmit.co/YOUR_EMAIL_HERE" method="POST" className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <input
                type="text"
                name="Name"
                placeholder="Full Name"
                required
                className="w-full rounded-xl border border-white/10 bg-white/10 px-5 py-4 outline-none transition focus:border-violet-500"
              />

              <input
                type="email"
                name="Email"
                placeholder="Email Address"
                required
                className="w-full rounded-xl border border-white/10 bg-white/10 px-5 py-4 outline-none transition focus:border-violet-500"
              />

              <input
                type="text"
                name="Subject"
                placeholder="Subject"
                required
                className="w-full rounded-xl border border-white/10 bg-white/10 px-5 py-4 outline-none transition focus:border-violet-500"
              />

              <textarea
                name="Message"
                rows="6"
                placeholder="Tell us about your project..."
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-white/10 px-5 py-4 outline-none transition focus:border-violet-500"
              />

              <button type="submit" className="premium-button w-full rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 py-4 font-semibold text-white transition duration-300">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;