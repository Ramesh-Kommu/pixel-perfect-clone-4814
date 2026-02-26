import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CustomersSection from "@/components/CustomersSection";
import ProductsSection from "@/components/ProductsSection";
import InsightsSection from "@/components/InsightsSection";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CustomersSection />
      <ProductsSection />
      <InsightsSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
