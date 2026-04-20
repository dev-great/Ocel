import Hero from "../../components/Home/Hero";
import HeroTestimonials from "../../components/Home/Testimonials";
import ServicesSection from "../../components/Home/ServicesPreview";
import CallbackSection from "../../components/Home/Callbacksection";
import ContactSection from "../../components/Home/ContactSection";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-foreground overflow-x-hidden">
      {/* Content grows */}
      <main className="grow">
        <Hero />
        <ServicesSection />
        <HeroTestimonials />
        <CallbackSection />
        <ContactSection />
      </main>

      {/* Footer comes from Layout */}
    </div>
  );
};

export default Home;
