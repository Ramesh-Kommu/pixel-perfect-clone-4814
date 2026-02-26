import { motion } from "framer-motion";

// Customer logos - using text-based for ones we don't have images for
const customerLogos = [
  { name: "Genpact", type: "text" },
  { name: "BOSCH", type: "text" },
  { name: "FERTIS", type: "text" },
  { name: "Adani", type: "text" },
  { name: "Worley", type: "text" },
  { name: "Dole", type: "text" },
  { name: "TVS", type: "text" },
  { name: "Coromandel", type: "text" },
  { name: "JACOBS", type: "text" },
  { name: "RVS Tyres", type: "text" },
  { name: "Wockhardt", type: "text" },
  { name: "SUDHAKAR", type: "text" },
  { name: "KENSING", type: "text" },
  { name: "Cohance", type: "text" },
  { name: "Natural", type: "text" },
  { name: "Continental", type: "text" },
  { name: "Eagle Diesel", type: "text" },
  { name: "Venture Global", type: "text" },
  { name: "LIFEPharma", type: "text" },
  { name: "Aramco", type: "text" },
  { name: "Meil", type: "text" },
  { name: "SCHOTT", type: "text" },
  { name: "DIMSC", type: "text" },
  { name: "DRILLMEC", type: "text" },
];

const CustomersSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4"
        >
          {customerLogos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-16 px-3 rounded-lg border border-border hover:border-primary/30 hover:shadow-sm transition-all"
            >
              <span className="text-xs md:text-sm font-bold text-muted-foreground text-center leading-tight">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomersSection;
