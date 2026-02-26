import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import coalWashery from "@/assets/projects/coal-washery.png";
import smartUtility from "@/assets/projects/smart-utility.png";
import costDeployment from "@/assets/projects/cost-deployment.png";

const products = [
  {
    image: coalWashery,
    title: "Object Detection in\nP&ID Diagrams",
  },
  {
    image: smartUtility,
    title: "Application\nDevelopment",
    label: "Development",
  },
  {
    image: costDeployment,
    title: "Production\nScheduling",
  },
];

const ProductsSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const prev = () => setActiveIndex((i) => (i === 0 ? products.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === products.length - 1 ? 0 : i + 1));

  return (
    <section className="py-20 bg-section-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Product's</h2>
            <p className="text-muted-foreground text-sm mt-2">
              Deliver quality, reliable products with our advanced, pocket-friendly solutions.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                i === activeIndex ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setActiveIndex(i)}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
                {product.label && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    {product.label}
                  </span>
                )}
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
