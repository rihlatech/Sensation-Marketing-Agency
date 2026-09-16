import { Helmet } from "react-helmet-async";
// import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FaArrowRight, FaCheck, FaWhatsapp } from "react-icons/fa";

const whatsappUrl = `https://wa.me/254797983216?text=${encodeURIComponent(
  "Hi! I'd like early access to The Client Acquisition System.",
)}`;

const modules = [
  {
    number: "01",
    label: "Module 1",
    title: "Foundations of Modern Digital Marketing",
    outcome:
      "Understand what digital marketing actually is, the channels that make it up, and the 3 pillars every business needs to grow online.",
    lessons: [
      "The 10 channels: SMM, SEO, paid ads, content, email, CRM, analytics, LinkedIn, Pinterest, and more",
      "The 3 Pillars: Client Acquisition, Brand Authority, Monetization",
      "Positioning yourself as an authority people trust before they even talk to you",
    ],
    tags: ["Strategy", "Positioning"],
  },
  {
    number: "02",
    label: "Module 2",
    title: "Finding & Landing Clients",
    outcome:
      "Build a repeatable system for finding decision-makers and turning outreach into real conversations — without spamming anyone.",
    lessons: [
      "AI lead tools: Apollo.io, Lusha, ZoomInfo, Hunter.io",
      "Value-first outreach that gets responses, not silence",
      "Strategic partnerships — the growth lever most beginners skip",
    ],
    tags: ["Apollo.io", "Outreach", "Partnerships"],
  },
  {
    number: "03",
    label: "Module 3",
    title: "Social Media Strategy That Converts",
    outcome:
      "Move from posting randomly to a content system that actually moves strangers toward buying.",
    lessons: [
      "The content pillars: Education, Proof, Offer, Entertainment",
      "30-day content planning and short-form video priority",
      "AI content tools plus scheduling with Buffer and Meta Business Suite",
    ],
    tags: ["Content Strategy", "ChatGPT", "Canva"],
  },
  {
    number: "04",
    label: "Module 4",
    title: "Paid Advertising & Campaigns",
    outcome:
      "Set up and publish a real Meta ad — the exact same live, step-by-step walkthrough we use with our own clients.",
    lessons: [
      "Account setup, linking Instagram, choosing the Sales objective",
      "Audience, budget, and creative that hooks in 3 seconds",
      "Reading your results and knowing when to scale",
    ],
    tags: ["Meta Ads Manager", "Live Setup"],
  },
  {
    number: "05",
    label: "Module 5 — Part A & B",
    title: "Building the Offer & Executing the Launch",
    outcome:
      "Package an offer people can't ignore, then run a real launch — whether it's a new business or relaunching an existing one.",
    lessons: [
      "Part A: packaging, positioning, and pricing your offer to feel irresistible",
      "Part B: the full launch framework — warm-up, launch week, and what happens after",
      "Waitlists, anticipation-building, and a structured sales workflow",
    ],
    tags: ["Offer Design", "Launch Strategy"],
  },
  {
    number: "06",
    label: "Module 6",
    title: "AI-Powered Marketing & Productivity",
    outcome:
      "Use AI to move faster than anyone still doing this manually — content, video, and automation.",
    lessons: [
      "AI content, image, and avatar video generation tools",
      "Automating lead generation, follow-ups, and content scheduling",
      "Why strategy plus AI outperforms AI alone, every time",
    ],
    tags: ["HeyGen", "Automation", "Zoho CRM"],
  },
  {
    number: "07",
    label: "Module 7",
    title: "Bonus Tips — Business Psychology",
    outcome:
      "Understand why people actually buy, so your offer, your copy, and your launches all get sharper.",
    lessons: [
      "The 4 elements of a powerful offer",
      "Core psychological triggers: pain over pleasure, urgency, social proof, authority, simplicity",
    ],
    tags: ["Copywriting", "Psychology"],
  },
  {
    number: "08",
    label: "Module 8 — Bonus Module",
    title: "Guide to Creating Digital Products",
    outcome:
      "Turn what you've learned into a second income stream — build, price, and launch your own digital product for extra, passive income.",
    lessons: [
      "What digital products are, and why they scale without inventory",
      "Choosing a profitable product and structuring it into modules, lessons, and steps",
      "Pricing your product and where to sell it: Gumroad, Payhip, Teachable, or straight from social media",
      "Launching it and turning one product into a repeatable system",
    ],
    tags: ["Digital Products", "Passive Income", "Extra Income"],
    bonus: true,
  },
];

const audiences = [
  {
    number: "01",
    title: "Business Owners",
    text: "You have a product or service and need a real system for finding customers — not just more posting.",
  },
  {
    number: "02",
    title: "People Launching Something New",
    text: "A brand, a product, a service — and you want to launch it the right way from day one.",
  },
  {
    number: "03",
    title: "Freelancers & Consultants",
    text: "You have skills but no consistent pipeline of paying clients coming in.",
  },
  {
    number: "04",
    title: "Aspiring Marketers",
    text: "You want to learn digital marketing properly — including how to sell it as a service yourself.",
  },
];

const includes = [
  {
    number: "01",
    title: "8 Video Modules",
    text: "Ready-made lessons covering the full system, watch and implement at your own pace.",
  },
  {
    number: "02",
    title: "Live Meta Ads Walkthrough",
    text: "A full recorded, screen-by-screen guide to publishing your first ad.",
  },
  {
    number: "03",
    title: "Digital Product Blueprint",
    text: "Module 8's full guide to building, pricing, and launching your own product for extra income.",
  },
  {
    number: "04",
    title: "WhatsApp Support",
    text: "Direct line to the Sensation Marketing Agency team while you work through the modules.",
  },
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

const ClientAcquisitionSystem = () => {
  return (
    <>
      <Helmet>
        <title>Client Acquisition System | Sensation Marketing Agency</title>
        <meta
          name="description"
          content="A complete client acquisition system covering positioning, outreach, content, paid ads, launches, AI productivity and digital products."
        />
      </Helmet>

      <main className="min-h-screen overflow-hidden bg-[#070707] font-['Manrope'] text-white">
        {/* Creative return-to-main-site control */}
        {/* <Link
          to="/"
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-[#9b0a28]/60 bg-black/85 px-4 py-3 text-xs font-bold text-white shadow-2xl backdrop-blur-xl transition hover:-translate-y-1 hover:bg-[#9b0a28] sm:bottom-7 sm:right-7"
        >
          <FaArrowLeft />
          Back to Sensation
        </Link> */}

        <section className="relative isolate overflow-hidden border-b border-white/10">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(155,10,40,0.28),transparent_28%),radial-gradient(circle_at_10%_85%,rgba(155,10,40,0.15),transparent_24%)]" />

  <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
    <motion.div {...reveal} className="max-w-4xl">
      <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d8657e]">
        <span className="h-px w-8 bg-[#9b0a28]" />
        Digital Marketing & Social Media Training
      </p>
<h1 className="mt-7 font-['Playfair_Display'] text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
  Become an
  <span className="mt-1 block text-[#b7193d]">
    Influencer Guide
  </span>
</h1>

      <p className="mt-5 max-w-3xl text-base leading-7 text-gray-300 md:text-lg md:leading-8">
        Everything we&apos;ve taught paying clients for{" "}
        <strong className="text-white">4+ years</strong>, packaged into one
        course — how to market a business, or launch one, using the exact
        system we run in-house. You don&apos;t need a huge following.{" "}
        <strong className="text-[#e798a9]">
          300 real followers is enough to start turning people into paying
          clients.
        </strong>
      </p>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-4 text-xs text-gray-400 md:text-sm">
        <span>
          <strong className="text-white">8</strong> Modules
        </span>
        <span>
          <strong className="text-white">4+</strong> Years Teaching This System
        </span>
        <span>
          <strong className="text-white">1</strong> Live Meta Ads Walkthrough
        </span>
        <span>
          <strong className="text-white">300</strong> Followers Is Enough To
          Start
        </span>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-[#9b0a28] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#9b0a28]/30 transition hover:-translate-y-1 hover:bg-[#b7193d]"
        >
          <FaWhatsapp className="text-lg" />
          Get Early Access — KES 500
        </a>

        <a
          href="#modules"
          className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:border-[#9b0a28] hover:bg-[#9b0a28]/15"
        >
          See all 8 modules <FaArrowRight />
        </a>
      </div>
    </motion.div>
  </div>
</section>

        <section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
          <div className="grid overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["4+", "Years Teaching This System"],
              ["300", "Followers Is Enough To Start"],
              ["8", "Modules, Start to Finish"],
              ["90%", "Off Early Access Price"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="border-b border-white/10 bg-white/[0.03] p-6 text-center last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <p className="font-['Playfair_Display'] text-4xl font-bold text-[#c93757]">
                  {number}
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.13em] text-gray-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <motion.div
            {...reveal}
            className="rounded-3xl border border-[#9b0a28]/30 bg-gradient-to-br from-[#1b0b10] via-[#121212] to-black p-8 md:p-14"
          >
            <p className="max-w-4xl font-['Playfair_Display'] text-3xl font-bold leading-tight text-white md:text-5xl">
              <span className="text-[#c93757]">&ldquo;</span>You don&apos;t need
              100,000 followers to get paying clients. You need positioning, a
              system, and the willingness to actually run it.
              <span className="text-[#c93757]">&rdquo;</span>
            </p>
            <p className="mt-7 max-w-3xl leading-8 text-gray-300">
              We&apos;ve spent over four years running this exact system for our
              own agency clients — landing them customers through content,
              partnerships, and paid ads without huge audiences or big budgets.
              This course is that same system, packaged so you can run it
              yourself: whether you&apos;re marketing an existing business or
              launching a brand new one.
            </p>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <motion.div {...reveal}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d8657e]">
              Who This Is For
            </p>
            <h2 className="mt-4 font-['Playfair_Display'] text-4xl font-bold md:text-6xl">
              Built for people ready to{" "}
              <span className="text-[#c93757]">stop guessing.</span>
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience, index) => (
              <motion.article
                key={audience.number}
                {...reveal}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="bg-[#0b0b0b] p-7"
              >
                <p className="text-sm font-bold text-[#c93757]">
                  {audience.number}
                </p>
                <h3 className="mt-5 text-lg font-bold text-white">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {audience.text}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="modules" className="mx-auto max-w-5xl px-6 py-20 md:px-10">
          <motion.div {...reveal}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d8657e]">
              The Curriculum
            </p>
            <h2 className="mt-4 font-['Playfair_Display'] text-4xl font-bold md:text-6xl">
              8 modules.{" "}
              <span className="text-[#c93757]">One complete system.</span>
            </h2>
            <p className="mt-6 max-w-3xl leading-8 text-gray-400">
              Seven core modules covering everything from foundations to a live
              Meta ad, plus a bonus module on turning what you learn into a
              second income stream of your own.
            </p>
          </motion.div>

          <div className="relative mt-14 space-y-7 before:absolute before:bottom-8 before:left-5 before:top-8 before:w-px before:bg-gradient-to-b before:from-[#9b0a28] before:via-[#9b0a28] before:to-white/10 md:before:left-7">
            {modules.map((module, index) => (
              <motion.article
                key={module.number}
                {...reveal}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="relative grid grid-cols-[42px_1fr] gap-5 md:grid-cols-[60px_1fr] md:gap-7"
              >
                <div
                  className={`z-10 flex h-10 w-10 items-center justify-center rounded-full border bg-[#070707] text-xs font-bold md:h-14 md:w-14 ${
                    module.bonus
                      ? "border-dashed border-gray-500 text-gray-300"
                      : "border-[#c93757] text-[#e798a9]"
                  }`}
                >
                  {module.number}
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#111111] p-6 transition hover:border-[#9b0a28]/70 md:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500">
                    {module.label}
                  </p>
                  <h3 className="mt-3 font-['Playfair_Display'] text-2xl font-bold text-white md:text-3xl">
                    {module.title}
                  </h3>
                  <p className="mt-4 leading-7 text-gray-300">{module.outcome}</p>

                  <ul className="mt-6 space-y-3">
                    {module.lessons.map((lesson) => (
                      <li
                        key={lesson}
                        className="flex gap-3 text-sm leading-6 text-gray-400"
                      >
                        <FaCheck className="mt-1 shrink-0 text-[#c93757]" />
                        {lesson}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {module.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#9b0a28]/40 bg-[#9b0a28]/10 px-3 py-1 text-xs font-semibold text-[#e798a9]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {module.bonus && (
                    <div className="mt-6 rounded-xl border border-[#9b0a28]/30 bg-[#9b0a28]/10 p-5 text-sm leading-7 text-gray-300">
                      This module alone is built for anyone who wants an{" "}
                      <strong className="text-white">extra income stream</strong>{" "}
                      beyond client work — package what you know once, sell it
                      on repeat, and let the same launch system from Module 5
                      carry it.
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <motion.div {...reveal}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d8657e]">
              What&apos;s Included
            </p>
            <h2 className="mt-4 font-['Playfair_Display'] text-4xl font-bold md:text-6xl">
              Everything you need to{" "}
              <span className="text-[#c93757]">run it yourself.</span>
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {includes.map((item, index) => (
              <motion.article
                key={item.number}
                {...reveal}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-[#111111] p-7"
              >
                <p className="font-['Playfair_Display'] text-4xl font-bold text-[#c93757]">
                  {item.number}
                </p>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="enroll" className="mx-auto max-w-7xl px-6 pb-24 pt-12 md:px-10">
          <motion.div
            {...reveal}
            className="relative overflow-hidden rounded-3xl border border-[#c93757]/70 bg-gradient-to-br from-[#9b0a28] via-[#74051d] to-black px-7 py-14 text-center shadow-2xl shadow-[#9b0a28]/20 md:px-14 md:py-20"
          >
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <h2 className="font-['Playfair_Display'] text-4xl font-bold md:text-6xl">
                Get in at early access.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/85">
                Everything we&apos;ve taught paying clients for 4+ years — for a
                fraction of what it normally costs, while early access is open.
              </p>

              <div className="mt-9 flex flex-wrap items-end justify-center gap-4">
                <span className="text-xl text-white/65 line-through">
                  KES 5,000
                </span>
                <span className="font-['Playfair_Display'] text-5xl font-bold md:text-6xl">
                  KES 500
                </span>
              </div>

              <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-[#ffd8e1]">
                Early access — 90% off the regular price
              </p>
              <p className="mt-2 text-sm text-white/75">
                One-time payment · Instant access after payment
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-[#9b0a28] transition hover:-translate-y-1 hover:bg-gray-100"
              >
                <FaWhatsapp className="text-lg" />
                Message Us on WhatsApp
              </a>

              <p className="mt-6 text-sm text-white/70">
                +254 797 983 216 — we reply to enrollments personally
              </p>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default ClientAcquisitionSystem;