import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import coalWashery from "@/assets/projects/coal-washery.png";
import smartUtility from "@/assets/projects/smart-utility.png";
import costDeployment from "@/assets/projects/cost-deployment.png";

const products = [
  { image: coalWashery, title: "Object Detection in\nP&ID Diagrams" },
  { image: smartUtility, title: "Application\nDevelopment", label: "Development" },
  { image: costDeployment, title: "Production\nScheduling" },
];

const ProductsSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const prev = () => setActiveIndex((i) => (i === 0 ? products.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === products.length - 1 ? 0 : i + 1));

  return (
    <section className="py-20 bg-section-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Product's</h2>
            <p className="text-muted-foreground text-sm mt-2">
              Deliver quality, reliable products with our advanced, pocket-friendly solutions.
            </p>
          </div>
          <div className="flex gap-2">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </motion.button>
            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-foreground" />
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer transition-shadow duration-300 ${
                i === activeIndex ? "ring-2 ring-primary shadow-lg shadow-primary/10" : ""
              }`}
              onClick={() => setActiveIndex(i)}
            >
              <div className="aspect-[4/3] relative">
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
                <AnimatePresence>
                  {product.label && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold"
                    >
                      {product.label}
                    </motion.span>
                  )}
                </AnimatePresence>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-sm font-semibold whitespace-pre-line leading-tight">
                    {product.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
