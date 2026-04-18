"use client";

import { NewsCard, SectionHeader } from "@/components/BlogComponents";

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

export default function ArticlesSection() {
  return (
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
  );
}