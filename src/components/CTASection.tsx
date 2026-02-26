import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-section-gray" id="contact">
      <div className="container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-semibold text-sm tracking-widest uppercase mb-4"
        >
          DON'T HESITATE TO CONTACT US
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2"
        >
          Let's talk about how we
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-teal mb-10"
        >
          could work together
        </motion.h2>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          href="#"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full btn-gradient-teal text-white font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Book a Demo <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  );
};

export default CTASection;
