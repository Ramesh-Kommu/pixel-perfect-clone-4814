import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.png";
import { BarChart3, Database, Bot, LineChart, Settings, Shield } from "lucide-react";

const serviceCards = [
  { icon: BarChart3, title: "Predictive Analytics", desc: "Use data to predict and plan for the future", detail: "Harness ML models to forecast demand, reduce risk, and optimize operations in real-time." },
  { icon: Database, title: "SAP Business Data Cloud", desc: "Unlock the full potential of SAP data", detail: "Seamlessly integrate SAP ecosystems with cloud-native analytics for unified business insights." },
  { icon: Bot, title: "Agentic AI", desc: "AI agents that autonomously deliver results", detail: "Deploy intelligent agents that learn, adapt, and execute complex workflows without human intervention." },
  { icon: LineChart, title: "Microsoft Fabric Analytics", desc: "Unified analytics on Microsoft platform", detail: "End-to-end analytics from data lake to Power BI, all within the Microsoft ecosystem." },
  { icon: Settings, title: "OT Manuf. Excellence", desc: "Drive efficiency in manufacturing ops", detail: "Bridge IT and OT with smart sensors, real-time monitoring, and predictive maintenance." },
  { icon: Shield, title: "Splunk IT Infra & Security", desc: "Monitor, analyze, secure your IT", detail: "Detect threats instantly, automate incident response, and ensure 360° infrastructure visibility." },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 1.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const pulseGlow = {
  animate: {
    boxShadow: [
      "0 0 0px hsl(260 70% 55% / 0)",
      "0 0 18px hsl(260 70% 55% / 0.2)",
      "0 0 0px hsl(260 70% 55% / 0)",
    ],
    transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const iconFloat = {
  animate: {
    y: [0, -3, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const ServiceCard = ({ card, index }: { card: typeof serviceCards[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariant}
      {...pulseGlow}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="bg-white/[0.07] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 text-center cursor-pointer group relative overflow-hidden"
    >
      {/* Shimmer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" as const, delay: index * 0.8 }}
      />

      <motion.div
        className="relative w-11 h-11 mx-auto mb-3 rounded-xl bg-accent/20 flex items-center justify-center"
        {...iconFloat}
      >
        <card.icon className="w-5 h-5 text-accent" />
      </motion.div>

      <h3 className="relative text-white text-xs font-semibold mb-1 leading-tight">{card.title}</h3>
      <p className="relative text-white/40 text-[10px] leading-tight">{card.desc}</p>

      {/* Hover reveal content */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, height: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, height: "auto", filter: "blur(0px)" }}
            exit={{ opacity: 0, height: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden"
          >
            <div className="mt-3 pt-3 border-t border-white/[0.08]">
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -5, opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="text-white/60 text-[10px] leading-relaxed"
              >
                {card.detail}
              </motion.p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-2 h-[2px] bg-gradient-to-r from-accent/60 via-primary/40 to-transparent origin-left rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-28 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/70 text-sm md:text-base mb-4 tracking-widest uppercase"
        >
          Empower Your Business Decisions with
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50, filter: "blur(16px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">AI-Powered </span>
          <span className="text-gradient-purple">Intelligence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/50 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Leverage cutting-edge analytics and AI-powered solutions to unlock the full potential of your data
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.06, boxShadow: "0 0 40px hsl(260 70% 55% / 0.5)" }}
          whileTap={{ scale: 0.96 }}
          href="#services"
          className="inline-block px-10 py-3.5 rounded-full btn-gradient text-white font-semibold text-sm tracking-wide transition-shadow"
        >
          Explore More →
        </motion.a>
      </div>

      {/* Service Cards */}
      <motion.div
        className="relative z-10 container mx-auto px-4 pb-16"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {serviceCards.map((card, i) => (
            <ServiceCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
