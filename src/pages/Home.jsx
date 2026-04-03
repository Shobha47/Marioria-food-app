import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import MenuSection from "../components/MenuSection";
import WhyChooseSection from "../components/WhyChooseSection";
import StatsSection from "../components/StatsSection";
import GallerySection from "../components/GallerySection";
import ProcessSection from "../components/ProcessSection";
import TestimonialsSection from "../components/TestimonialSection";
import BlogSection from "../components/BlogSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import DishShowcase from "../components/ArticalSection";
import FullPageSections from "../components/SliderSection";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden" style={{ backgroundColor: '#ffffff' }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <WhyChooseSection />
      <StatsSection />
      <GallerySection />
      <DishShowcase />
      <ProcessSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
