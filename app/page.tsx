"use client";

import HeroSection from "@/components/Hero";
import { NewsCard, HackathonCard, SectionHeader } from "@/components/BlogComponents";
import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";

export default function Home() {
  const articles = [
    {
      title: "Claude 4.7 Released: Coding Standards Redefined",
      excerpt: "Anthropic's latest release is shattering benchmarks in autonomous coding and architectural reasoning. Is this the end of simple CRUD boilerplate?",
      date: "April 15, 2026",
      category: "Artificial Intelligence",
      readTime: "6 min read"
    },
    {
      title: "The $650B Bet: Big Tech's Infrastructure War",
      excerpt: "Microsoft, Amazon, and Meta are collectively spending half a trillion dollars this year. We break down where the money is going and what it means for startups.",
      date: "April 14, 2026",
      category: "Industry News",
      readTime: "8 min read"
    },
    {
      title: "Digital Sovereignty: France's Strategic Shift",
      excerpt: "The French government has announced a bold transition away from U.S.-based SaaS products to strengthen Europe's tech independence.",
      date: "April 12, 2026",
      category: "Policy & Politics",
      readTime: "5 min read"
    }
  ];

  const hackathons = [
    {
      name: "LA Hacks 2026",
      location: "UCLA // Pauley Pavilion",
      date: "April 24-26",
      prizePool: "$60,000"
    },
    {
      name: "MLH AI Hackfest",
      location: "Digital // Global",
      date: "April 17-19",
      prizePool: "$15,000"
    },
    {
      name: "Agentic AI Bootcamp",
      location: "NERSC // Hybrid",
      date: "April 23-24",
      prizePool: "Grant Funding"
    },
    {
      name: "Kiefer AI Open",
      location: "Hybrid // Europe",
      date: "April 27-30",
      prizePool: "€25,000"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <HeroSection />

      {/* Latest Articles Section */}
      <section className="px-6 md:px-12 py-32 max-w-7xl mx-auto w-full bg-black">
        <SectionHeader 
          subtitle="Insight Stream" 
          title="Engineering Intelligence" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <NewsCard key={i} {...article} />
          ))}
        </div>
      </section>

      {/* Hackathon Calendar Section */}
      <section className="px-6 md:px-12 py-32 bg-black border-y border-white/5 relative">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <SectionHeader 
              subtitle="The Arena" 
              title="Upcoming Hackathons" 
            />
            <p className="text-zinc-500 text-lg leading-relaxed mb-8">
              Compete with the best. We track 500+ student and professional hackathons 
              worldwide to bring you only the most impactful challenges.
            </p>
            <Button className="h-14 px-8 bg-blue-600 hover:bg-blue-500 text-white rounded-none font-bold flex items-center gap-2">
              View Full Calendar
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          <div className="lg:col-span-7 border border-white/10 bg-black/40 backdrop-blur-sm self-start">
            {hackathons.map((hackathon, i) => (
              <HackathonCard key={i} {...hackathon} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA Section */}
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

      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 border-t border-white/5 text-center bg-black">
        <p className="text-zinc-700 text-[10px] font-mono uppercase tracking-[0.3em]">
          &copy; 2026 INFO-NET PROTOCOL // All rights reserved
        </p>
      </footer>
    </div>
  );
}
