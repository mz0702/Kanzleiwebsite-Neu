import Seo from "@/components/shared/Seo";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import PracticeAreasSection from "@/components/home/PracticeAreasSection";
import WorkProcessSection from "@/components/home/WorkProcessSection";
import TeamSection from "@/components/home/TeamSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaBanner from "@/components/shared/CtaBanner";

export default function Home() {
  return (
    <>
      <Seo
        title="Rechtsanwälte in Ochsenfurt & Würzburg — Wegner & Schöbener"
        description="Kanzlei in Ochsenfurt & Würzburg für Erbrecht, Familienrecht, Arbeitsrecht, Verkehrsrecht, Betreuungs- und Insolvenzrecht. Termin innerhalb von 48 Stunden."
        path="/"
      />
      <HeroSection />
      <IntroSection />
      <PracticeAreasSection />
      <WorkProcessSection />
      <TeamSection />
      <ServicesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
