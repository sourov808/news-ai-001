"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
  className?: string;
}

export const NewsCard = ({ title, excerpt, date, category, readTime, className }: NewsCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "group relative flex flex-col gap-4 p-6 border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-300",
        className
      )}
    >
      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-blue-500">
        <span className="flex items-center gap-1.5"><Tag className="w-3 h-3" /> {category}</span>
        <span className="text-zinc-500">{readTime}</span>
      </div>
      
      <h3 className="text-2xl font-bebas text-white tracking-wide group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3">
        {excerpt}
      </p>

      <div className="flex items-center justify-between pt-4 mt-auto border-t border-white/5">
        <span className="text-[10px] text-zinc-600 font-mono flex items-center gap-1.5">
          <Calendar className="w-3 h-3" /> {date}
        </span>
        <Link href="#" className="p-2 bg-white/5 hover:bg-blue-500 text-white rounded-full transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};

interface HackathonCardProps {
  name: string;
  location: string;
  date: string;
  prizePool: string;
}

export const HackathonCard = ({ name, location, date, prizePool }: HackathonCardProps) => {
  return (
    <div className="flex items-center justify-between p-6 border-b border-white/5 hover:bg-white/[0.01] transition-colors group">
      <div className="flex flex-col gap-1">
        <h4 className="text-xl font-bebas text-white tracking-widest group-hover:translate-x-2 transition-transform duration-300">
          {name}
        </h4>
        <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-500 uppercase tracking-tighter">
          <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> {location}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {date}</span>
        </div>
      </div>
      <div className="text-right">
        <div className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-1">Prize Pool</div>
        <div className="text-white font-bold">{prizePool}</div>
      </div>
    </div>
  );
};

export const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="space-y-4 mb-12">
      <div className="flex items-center gap-4 text-blue-500/50 text-xs font-mono tracking-[0.2em] uppercase">
        <span className="w-8 h-px bg-blue-500/20" />
        <span>{subtitle}</span>
      </div>
      <h2 className="font-bebas text-5xl md:text-7xl text-white uppercase tracking-tight">
        {title}
      </h2>
    </div>
  );
};

import { Globe } from "lucide-react";
