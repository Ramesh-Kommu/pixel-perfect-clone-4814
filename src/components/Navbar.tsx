import { useState } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "About Us", href: "#" },
  { label: "Services", href: "#", hasDropdown: true },
  { label: "Insights & Events", href: "#" },
  { label: "Products", href: "#", hasDropdown: true },
  { label: "Careers", href: "#" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="CarbyneTech" className="h-8 lg:h-10" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-white/70 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10 px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-white/80 hover:text-white font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-block px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
