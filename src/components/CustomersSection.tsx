import { motion } from "framer-motion";
import adaniLogo from "@/assets/customers/adani.png";
import amaraLogo from "@/assets/customers/amara.png";
import bajajLogo from "@/assets/customers/bajaj.png";
import coromandelLogo from "@/assets/customers/coromandel.png";
import genpactLogo from "@/assets/customers/genpact.png";
import indiaGlyLogo from "@/assets/customers/india-gly.png";
import jacobsLogo from "@/assets/customers/jacobs.png";
import mahindraLogo from "@/assets/customers/mahindra.png";
import oandmLogo from "@/assets/customers/oandm.png";
import reychamLogo from "@/assets/customers/reycham.png";
import stonleyLogo from "@/assets/customers/stonley.png";
import tvsLogo from "@/assets/customers/tvs.png";
import uniliverLogo from "@/assets/customers/uniliver.png";
import worleyLogo from "@/assets/customers/worley.png";

const customerLogos = [
  { name: "Genpact", logo: genpactLogo },
  { name: "Adani", logo: adaniLogo },
  { name: "Worley", logo: worleyLogo },
  { name: "TVS", logo: tvsLogo },
  { name: "Coromandel", logo: coromandelLogo },
  { name: "Jacobs", logo: jacobsLogo },
  { name: "Amara Raja", logo: amaraLogo },
  { name: "Bajaj", logo: bajajLogo },
  { name: "Unilever", logo: uniliverLogo },
  { name: "Mahindra", logo: mahindraLogo },
  { name: "India Glycols", logo: indiaGlyLogo },
  { name: "O&M", logo: oandmLogo },
  { name: "Stonley", logo: stonleyLogo },
  { name: "Reycham", logo: reychamLogo },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.2 } },
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
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6"
        >
          {customerLogos.map((logo, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                scale: 1.08,
                borderColor: "hsl(170 60% 40% / 0.4)",
                boxShadow: "0 4px 20px hsl(170 60% 40% / 0.1)",
                transition: { duration: 0.25 },
              }}
              className="flex items-center justify-center h-20 px-4 rounded-lg border border-border bg-card transition-all cursor-default"
            >
              <img
                src={logo.logo}
                alt={logo.name}
                className="max-h-12 max-w-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomersSection;
