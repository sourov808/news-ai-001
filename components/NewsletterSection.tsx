"use client";

import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NewsletterSection() {
  return (
    <section className="px-6 md:px-12 py-40 max-w-5xl mx-auto w-full text-center space-y-12 bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="inline-flex p-4 rounded-full bg-blue-500/10 text-blue-400"
      >
        <Mail className="w-8 h-8" />
      </motion.div>
      
      <h2 className="font-bebas text-6xl md:text-8xl text-white uppercase tracking-tight leading-none">
        Stay Ahead <span className="text-zinc-700">Of The</span> Curve
      </h2>
      
      <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
        <input 
          type="email" 
          placeholder="your-terminal@email.com" 
          className="flex-1 h-16 bg-white/5 border border-white/10 px-6 text-white outline-none focus:border-blue-500 transition-colors font-mono"
        />
        <Button className="h-16 px-10 bg-blue-600 text-white font-bold uppercase tracking-widest hover:bg-blue-500 rounded-none">
          Subscribe
        </Button>
      </div>
      
      <p className="text-zinc-600 text-sm font-mono uppercase tracking-widest">
        Join 80,000+ developers receiving weekly protocols
      </p>
    </section>
  );
}