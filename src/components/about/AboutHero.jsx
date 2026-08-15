import PageHero from "@/components/shared/PageHero";
import { basePath } from "@/lib/basePath";

export default function AboutHero() {
  return (
    <PageHero
      label="About Greenova"
      title="Building a greener tomorrow, one watt at a time"
      description="We're a modern clean-energy company helping homes and businesses transition to reliable, affordable, and sustainable power. Rooted in biology, driven by technology."
      image={`${basePath}/images/photo-1466611653911-95081537e5b7.webp`}
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "About Us" },
      ]}
    />
  );
}
