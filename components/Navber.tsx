"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const LINKS = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "Documentation", href: "/docs" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-7xl bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-full px-6 py-2.5 flex items-center justify-between shadow-2xl"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-linear-to-tr from-blue-600 to-blue-400 rounded-lg flex items-center justify-center font-bold text-white group-hover:rotate-6 transition-transform">
            N
          </div>

          <span className="text-white font-bold tracking-tight text-lg">INFO-NET</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-zinc-400 px-4 py-2 text-sm font-medium hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors px-4">
            Sign In
          </Link>
          <Button className="bg-white text-black hover:bg-zinc-200 rounded-full px-6 text-sm font-bold flex items-center gap-1.5 transition-all">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-20 left-4 right-4 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 flex flex-col gap-6 md:hidden shadow-3xl z-40"
        >
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium text-zinc-300 hover:text-white px-2"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="h-px bg-white/10 w-full" />
          <div className="flex flex-col gap-3">
            <Button variant="outline" className="w-full h-12 border-white/10 text-white rounded-xl">
              Sign In
            </Button>
            <Button className="w-full h-12 bg-white text-black rounded-xl font-bold">
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;