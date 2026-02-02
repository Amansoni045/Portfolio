"use client";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <h2 className="text-4xl font-bold text-center mb-16">
        Skills & Technologies
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 text-center hover:scale-105 hover:border-purple-400 transition"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

