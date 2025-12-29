import AlertBar from "@/components/AlertBar";
import Logo from "@/components/Logo";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import UrgencySection from "@/components/UrgencySection";
import FAQSection from "@/components/FAQSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed Alert Bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <AlertBar />
      </div>

      {/* Main Content with padding for fixed bar */}
      <main className="pt-[60px] sm:pt-[52px]">
        <Logo />
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <TestimonialsSection />
        <UrgencySection />
        <FAQSection />
        <GuaranteeSection />
        <FinalCTASection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
