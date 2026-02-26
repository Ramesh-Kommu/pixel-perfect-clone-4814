import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-section-gray" id="contact">
      <div className="container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-primary font-semibold text-sm tracking-widest uppercase mb-4"
        >
          DON'T HESITATE TO CONTACT US
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2"
        >
          Let's talk about how we
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-teal mb-10"
        >
          could work together
        </motion.h2>

        <motion.a
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.06, boxShadow: "0 8px 30px hsl(170 60% 40% / 0.35)" }}
          whileTap={{ scale: 0.96 }}
          href="#"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full btn-gradient-teal text-white font-semibold text-sm transition-shadow"
        >
          Book a Demo <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  );
};

export default CTASection;
