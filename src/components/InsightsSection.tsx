import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import insightsBg from "@/assets/insights-bg.jpg";

const insights = [
  {
    title: "Coal Washery Digitalization\nOptimize Costs | Boost Productivity",
    desc: "Transform your coal washery operations with advanced digital solutions for enhanced efficiency and performance",
    links: ["Testimonials", "Client Stories & Insights", "Book a Demo"],
  },
  {
    title: "Smart Utility Monitoring\nReal-time Tracking | Energy Savings",
    desc: "Monitor and optimize utility consumption across your facilities with IoT-powered solutions",
    links: ["Testimonials", "Client Stories & Insights", "Book a Demo"],
  },
  {
    title: "Predictive Maintenance\nReduce Downtime | Extend Asset Life",
    desc: "Leverage AI and sensor data to predict equipment failures before they happen",
    links: ["Testimonials", "Client Stories & Insights", "Book a Demo"],
  },
  {
    title: "Supply Chain Analytics\nVisibility | Optimization",
    desc: "End-to-end supply chain visibility with advanced analytics and AI-driven recommendations",
    links: ["Testimonials", "Client Stories & Insights", "Book a Demo"],
  },
];

const InsightsSection = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? insights.length - 1 : i - 1));
  const next = () => setActive((i) => (i === insights.length - 1 ? 0 : i + 1));

  const current = insights[active];

  return (
    <section className="relative">
      {/* Header */}
      <div className="bg-navy py-4 px-4">
        <div className="container mx-auto">
          <h2 className="text-white text-lg font-semibold italic">Insights</h2>
        </div>
      </div>

      {/* Content */}
      <div className="relative h-[500px] md:h-[550px] overflow-hidden">
        <img
          src={insightsBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/70" />

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          {/* Left Arrow */}
          <button onClick={prev} className="text-white/60 hover:text-white transition-colors mr-6 shrink-0">
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Content */}
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold whitespace-pre-line leading-tight mb-6">
              {current.title}
            </h3>
            <p className="text-white/60 text-sm md:text-base max-w-xl mb-6">
              {current.desc}
            </p>
            <div className="flex flex-wrap gap-3">
              {current.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="px-4 py-2 rounded-full border border-white/30 text-white text-xs font-medium hover:bg-white/10 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Arrow */}
          <button onClick={next} className="text-white/60 hover:text-white transition-colors ml-6 shrink-0">
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-6 left-0 right-0 z-10">
          <div className="container mx-auto px-4 flex items-center justify-between">
            {/* Dots & Progress */}
            <div className="flex items-center gap-2">
              {insights.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === active ? "bg-primary" : "bg-white/30"
                  }`}
                />
              ))}
              <div className="ml-4 w-24 h-1 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-destructive rounded-full transition-all duration-300"
                  style={{ width: `${((active + 1) / insights.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Counter */}
            <div className="text-white text-2xl font-bold">
              0{active + 1}
              <span className="text-white/40 text-lg font-normal"> /0{insights.length}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
