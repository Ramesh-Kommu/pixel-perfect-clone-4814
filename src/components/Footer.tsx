import { motion } from "framer-motion";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy text-white/70">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto px-4 py-14"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="CarbyneTech" className="h-8 mb-4" />
            <p className="text-xs leading-relaxed text-white/50">
              Empowering enterprises with cutting-edge AI,
              Data Engineering and Digital Transformation
              solutions.
            </p>
            <div className="flex gap-3 mt-5">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.15, backgroundColor: "hsl(170 60% 40%)" }}
                  whileTap={{ scale: 0.92 }}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              {["About Us", "Services", "Products", "Insights", "Careers"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition-colors duration-200">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5 text-xs">
              {["AI Transformation", "Data Engineering", "Digital Services", "IoT Solutions", "Analytics"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition-colors duration-200">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <div className="text-xs space-y-2.5 text-white/50">
              <p>CarbyneTech India Private Ltd, 5th Floor,</p>
              <p>Wing 1, Block A, T-Hub 2.0, Raidurg,</p>
              <p>Hyderabad, India Pin code: 500081</p>
              <p className="text-white/70 mt-3">services@carbynetech.com</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">Copyright © 2026. All Rights Reserved.</p>
          <div className="flex gap-6 text-xs text-white/40">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a key={l} href="#" className="hover:text-white/70 transition-colors duration-200">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
