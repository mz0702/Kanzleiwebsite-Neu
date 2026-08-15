import HeroSection from "@/components/home/HeroSection";
import PracticeAreasSection from "@/components/home/PracticeAreasSection";
import ValueSection from "@/components/home/ValueSection";
import SustainableSection from "@/components/home/SustainableSection";
import AboutSection from "@/components/home/AboutSection";
import StackedCardsSection from "@/components/home/StackedCardsSection";
import WorkProcessSection from "@/components/home/WorkProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PracticeAreasSection />
      <ValueSection />
      <StackedCardsSection />
      <AboutSection />
      <SustainableSection />
      <TestimonialsSection />
      <WorkProcessSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
