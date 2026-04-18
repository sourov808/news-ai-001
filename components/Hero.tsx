"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Cpu, Code, Users, Trophy } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 pt-32 overflow-hidden bg-black">
      {/* Structural Accent Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-white/5 hidden lg:block" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-white/5 hidden lg:block" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        {/* Left Column: Heading & Core Messaging */}
        <div className="lg:col-span-8 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 text-white/40 text-xs font-mono tracking-[0.2em] uppercase"
          >
            <span className="w-8 h-px bg-white/20" />
            <span>GLOBAL TECH PULSE // ISSUE 04.26</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-bebas text-[14vw] md:text-[10rem] leading-[0.85] text-white tracking-[-0.02em] uppercase relative"
          >
            Decode <br />
            <span className="text-white/20">The Future</span> <br />
            Stack
            <motion.span
              initial={{ rotate: -5, opacity: 0 }}
              animate={{ rotate: -12, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -top-8 -right-8 md:right-0 font-merienda text-blue-400 text-lg md:text-2xl lowercase tracking-normal normal-case hidden sm:block"
            >
              / built for developers
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-zinc-500 text-xl font-light max-w-xl leading-relaxed"
          >
            The ultimate hub for hackathon schedules, engineering articles, and
            real-time tech trends. Accelerate your career with insights from the
            edge.
          </motion.p>
        </div>

        {/* Right Column: CTA & Technical Highlights */}
        <div className="lg:col-span-4 flex flex-col gap-10 pb-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <Button className="w-full h-16 bg-blue-600 text-white hover:bg-blue-500 text-lg font-bold rounded-none flex items-center justify-between px-8 group transition-all">
              Join Next Hackathon
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="w-full h-16 border-white/10 bg-white/5 text-white hover:bg-white/10 text-lg font-bold rounded-none"
            >
              Explore Articles
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Trophy, label: "Prize Pools", value: "$500k+" },
              { icon: Code, label: "Models", value: "Claude 4.7" },
              { icon: Users, label: "Builders", value: "1.2M+" },
              { icon: Cpu, label: "Tech Shift", value: "AI-Native" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="p-4 border border-white/5 bg-white/[0.02] flex flex-col gap-2"
              >
                <item.icon className="w-4 h-4 text-blue-500" />
                <span className="text-[10px] text-zinc-600 uppercase font-mono">
                  {item.label}
                </span>
                <span className="text-white font-medium">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Visual: Technical Context */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-24 relative w-full aspect-[21/9] border-t border-white/10 bg-white/[0.01]"
      >
        <div className="absolute top-0 left-0 w-24 h-px bg-blue-500" />
        <div className="p-8 h-full flex items-center justify-center">
          <div className="w-full h-full border border-white/5 rounded-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
            <Image
              src="/assets/hero-image.jpg"
              alt="Tech Portal Interface"
              fill
              className="object-cover opacity-65 transition-opacity duration-1000"
              priority
            />

            <div className="absolute top-4 left-4 font-mono text-[10px] text-blue-200/90 uppercase tracking-widest">
              Live Feed // Builder_Activity: High
            </div>
            <div className="absolute bottom-4 right-4 font-mono text-[10px] text-white/80">
              MLH_SYNCED // April_2026_Cycle
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
