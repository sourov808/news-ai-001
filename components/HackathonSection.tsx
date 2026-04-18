"use client";

import { HackathonCard, SectionHeader } from "@/components/BlogComponents";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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

export default function HackathonSection() {
  return (
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
  );
}