import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { BarChart3, Database, Bot, LineChart, Settings, Shield } from "lucide-react";

const serviceCards = [
  { icon: BarChart3, title: "Predictive Analytics", desc: "Use data to predict and plan for the future" },
  { icon: Database, title: "SAP Business Data Cloud", desc: "Unlock the full potential of SAP data" },
  { icon: Bot, title: "Agentic AI", desc: "AI agents that autonomously deliver results" },
  { icon: LineChart, title: "Microsoft Fabric Analytics", desc: "Unified analytics on Microsoft platform" },
  { icon: Settings, title: "OT Manuf. Excellence", desc: "Drive efficiency in manufacturing ops" },
  { icon: Shield, title: "Splunk IT Infra & Security", desc: "Monitor, analyze, secure your IT" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-28 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/70 text-sm md:text-base mb-4 tracking-wide"
        >
          Empower Your Business Decisions with
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          <span className="text-white">AI-Powered </span>
          <span className="text-gradient-purple">Intelligence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-white/60 text-sm md:text-base max-w-lg mx-auto mb-8"
        >
          Leverage cutting-edge analytics and AI-powered solutions to unlock the full potential of your data
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          href="#services"
          className="inline-block px-8 py-3 rounded-full btn-gradient text-white font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Explore More →
        </motion.a>
      </div>

      {/* Service Cards */}
      <div className="relative z-10 container mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {serviceCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center hover:bg-white/15 transition-colors group cursor-pointer"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-accent/20 flex items-center justify-center">
                <card.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-white text-xs font-semibold mb-1 leading-tight">{card.title}</h3>
              <p className="text-white/50 text-[10px] leading-tight">{card.desc}</p>
              <div className="flex items-center justify-center gap-1 mt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
