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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12"
        >
          Our Technology Partner's
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-10 md:gap-16"
        >
          {partners.map((partner) => (
            <img
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
