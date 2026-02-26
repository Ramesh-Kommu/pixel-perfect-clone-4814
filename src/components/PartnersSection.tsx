import { motion } from "framer-motion";
import sapLogo from "@/assets/partners/sap.png";
import microsoftLogo from "@/assets/partners/microsoft.png";
import splunkLogo from "@/assets/partners/splunk.png";
import kepwareLogo from "@/assets/partners/kepware.png";

const partners = [
  { name: "SAP", logo: sapLogo },
  { name: "Microsoft", logo: microsoftLogo },
  { name: "Splunk", logo: splunkLogo },
  { name: "Kepware", logo: kepwareLogo },
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12"
        >
          Our Technology Partner's
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-10 md:gap-16"
        >
          {partners.map((partner, i) => (
            <motion.img
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ opacity: 1, scale: 1.08, filter: "grayscale(0)" }}
              className="h-8 md:h-10 object-contain grayscale transition-all cursor-pointer"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
