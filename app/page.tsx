"use client";

import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navber";
import ArticlesSection from "@/components/ArticlesSection";
import HackathonSection from "@/components/HackathonSection";
import NewsletterSection from "@/components/NewsletterSection";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";

export default function Home() {
  return (
    <StarsBackground className="min-h-screen">
      <Navbar />
      <div className="flex flex-col min-h-screen bg-black">
        <HeroSection />
        <ArticlesSection />
        <HackathonSection />
        <NewsletterSection />
        <footer className="px-6 md:px-12 py-12 border-t border-white/5 text-center bg-black">
          <p className="text-zinc-700 text-[10px] font-mono uppercase tracking-[0.3em]">
            &copy; 2026 INFO-NET PROTOCOL // All rights reserved
          </p>
        </footer>
      </div>
    </StarsBackground>
  );
}