 "use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Skills", href: "#skills" },
  { name: "Profile", href: "#profile" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between bg-black/30 backdrop-blur-xl border-b border-white/10">

        <a href="#" className="text-xl font-bold tracking-wide">
          Aman<span className="text-purple-400">.</span>
        </a>

        <div className="hidden md:flex gap-10 text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black/80 backdrop-blur-xl border-b border-white/10"
          >
            <div className="flex flex-col items-center gap-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
