import { motion } from "framer-motion";

const customerLogos = [
  { name: "Genpact" }, { name: "BOSCH" }, { name: "FERTIS" }, { name: "Adani" },
  { name: "Worley" }, { name: "Dole" }, { name: "TVS" }, { name: "Coromandel" },
  { name: "JACOBS" }, { name: "RVS Tyres" }, { name: "Wockhardt" }, { name: "SUDHAKAR" },
  { name: "KENSING" }, { name: "Cohance" }, { name: "Natural" }, { name: "Continental" },
  { name: "Eagle Diesel" }, { name: "Venture Global" }, { name: "LIFEPharma" }, { name: "Aramco" },
  { name: "Meil" }, { name: "SCHOTT" }, { name: "DIMSC" }, { name: "DRILLMEC" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.85, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const CustomersSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            CUSTOMERS
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Trusted by the Largest Enterprises{" "}
            <span className="text-gradient-teal">on the South Asia</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4"
        >
          {customerLogos.map((logo, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                scale: 1.06,
                borderColor: "hsl(170 60% 40% / 0.4)",
                boxShadow: "0 4px 20px hsl(170 60% 40% / 0.1)",
                transition: { duration: 0.25 },
              }}
              className="flex items-center justify-center h-16 px-3 rounded-lg border border-border transition-all cursor-default"
            >
              <span className="text-xs md:text-sm font-bold text-muted-foreground text-center leading-tight">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomersSection;
