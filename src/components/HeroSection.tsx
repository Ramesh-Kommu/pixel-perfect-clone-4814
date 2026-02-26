import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.png";
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
        <motion.img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-28 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-white/70 text-sm md:text-base mb-4 tracking-widest uppercase"
        >
          Empower Your Business Decisions with
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">AI-Powered </span>
          <span className="text-gradient-purple">Intelligence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          className="text-white/50 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Leverage cutting-edge analytics and AI-powered solutions to unlock the full potential of your data
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(260 70% 55% / 0.4)" }}
          whileTap={{ scale: 0.97 }}
          href="#services"
          className="inline-block px-10 py-3.5 rounded-full btn-gradient text-white font-semibold text-sm tracking-wide transition-all"
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
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -6, backgroundColor: "rgba(255,255,255,0.15)" }}
              className="bg-white/[0.07] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 text-center transition-all duration-300 cursor-pointer group"
            >
              <motion.div
                className="w-11 h-11 mx-auto mb-3 rounded-xl bg-accent/20 flex items-center justify-center"
                whileHover={{ rotate: 6, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <card.icon className="w-5 h-5 text-accent" />
              </motion.div>
              <h3 className="text-white text-xs font-semibold mb-1 leading-tight">{card.title}</h3>
              <p className="text-white/40 text-[10px] leading-tight">{card.desc}</p>
              <div className="flex items-center justify-center gap-1.5 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
