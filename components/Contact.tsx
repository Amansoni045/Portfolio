"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl bg-white/5 backdrop-blur-xl
                   border border-white/10 rounded-2xl p-8"
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          Contact Me
        </h2>

        <p className="text-center text-gray-400 mb-10">
          Have a project, internship, or idea? Let’s talk.
        </p>

        <form
          action="mailto:official.soniaman@gmail.com"
          method="POST"
          encType="text/plain"
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 bg-black/40 border border-white/10
                       rounded-lg outline-none focus:border-purple-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-black/40 border border-white/10
                       rounded-lg outline-none focus:border-purple-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full px-4 py-3 bg-black/40 border border-white/10
                       rounded-lg outline-none focus:border-purple-400"
          />

          <button
            type="submit"
            className="w-full py-3 bg-purple-500 hover:bg-purple-600
                       rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
