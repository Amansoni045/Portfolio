"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold">
            Hi, I’m <span className="text-purple-400">Aman</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg">
            Full-Stack Developer • Next.js • TypeScript
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#skills" className="px-6 py-3 bg-purple-500 rounded-lg">
              View Skills
            </a>
            <a href="#contact" className="px-6 py-3 border border-gray-600 rounded-lg">
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-80 h-[420px] mx-auto"
        >
          <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-30 rounded-full"></div>
          <Image
            src="/me.png"
            alt="Aman"
            fill
            className="object-cover rounded-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}
