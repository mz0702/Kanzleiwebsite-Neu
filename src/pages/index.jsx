import Head from "next/head";
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
      <Head>
        <title>Wegner &amp; Schöbener Rechtsanwälte — Kanzlei in Ochsenfurt</title>
        <meta
          name="description"
          content="Kanzlei für Erbrecht, Familienrecht, Arbeitsrecht, Verkehrsrecht, Betreuungs- und Insolvenzrecht in Ochsenfurt. Persönliche Beratung, Termin innerhalb von 48 Stunden."
        />
        <meta property="og:title" content="Wegner &amp; Schöbener Rechtsanwälte" />
        <meta
          property="og:description"
          content="Kanzlei für Erbrecht, Familienrecht, Arbeitsrecht, Verkehrsrecht, Betreuungs- und Insolvenzrecht in Ochsenfurt."
        />
        <meta property="og:type" content="website" />
      </Head>
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
