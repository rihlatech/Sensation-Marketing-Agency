// src/pages/Contact.jsx

import { motion } from "motion/react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";


const whatsapp = "254797983216";
const email = "sensationmagency@gmail.com";
const phone = "0797 983216";
const phoneLink = "+254797983216";

const Contact = () => {
  return (
  <div className="min-h-screen bg-white px-6 pb-24 pt-36 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

    {/* Background Glow */}
    <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl dark:bg-teal-500/10"></div>
    <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-500/10"></div>


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
          <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 bg-clip-text text-transparent">
            Us
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          We'd love to hear about your project. Reach out today and let's grow
          your business together.
        </p>
      </motion.div>


      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">


        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
           className="group flex flex-col rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-teal-300 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-xl"
        >

          <h2 className="mb-10 text-3xl font-bold">
            Get In Touch
          </h2>


          <div className="space-y-8">


            <a
              href={`mailto:${email}`}
              className="flex items-center gap-5 text-slate-700 transition hover:text-teal-500 dark:text-slate-300 dark:hover:text-teal-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Email
                </p>
                <p>{email}</p>
              </div>
            </a>



            <a
              href={`tel:${phoneLink}`}
              className="flex items-center gap-5 text-slate-700 transition hover:text-teal-500 dark:text-slate-300 dark:hover:text-teal-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
                <FaPhoneAlt />
              </div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Phone
                </p>
                <p>{phone}</p>
              </div>
            </a>



            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 text-slate-700 transition hover:text-teal-500 dark:text-slate-300 dark:hover:text-teal-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
                <FaWhatsapp />
              </div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  WhatsApp
                </p>
                <p>Chat With Us</p>
              </div>
            </a>



            <div className="flex items-center gap-5 text-slate-700 dark:text-slate-300">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Location
                </p>
                <p>Kenya</p>
              </div>
            </div>


          </div>

        </motion.div>




        {/* Message Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="group flex flex-col rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-teal-300 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-xl"
        >

          <h2 className="mb-8 text-3xl font-bold">
            Send a Message
          </h2>


          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6"
          >
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
  value="New Website Inquiry"
/>

<input
  type="hidden"
  name="from_name"
  value="Sensation Marketing Website"
/>

<input
  type="hidden"
  name="redirect"
  value="https://sensationmarketingagency.vercel.app/ContactSuccess"
/>


            {[
              ["Name","Full Name"],
              ["Email","Email Address"],
              ["Subject","Subject"]
            ].map(([name,placeholder]) => (
              <input
                key={name}
                type={name==="Email" ? "email":"text"}
                name={name}
                placeholder={placeholder}
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-100 px-5 py-4 text-slate-900 outline-none transition focus:border-teal-500 dark:border-white/10 dark:bg-white/10 dark:text-white"
              />
            ))}


            <textarea
  name="Message"
  rows="6"
  placeholder="Tell us about your project, the services you need, your goals, budget range or any questions you have..."
  required
  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-100 px-5 py-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder:text-slate-400"
/>


            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
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