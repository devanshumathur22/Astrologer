import Hero from "../Section/Hero";
import Services from "../Section/Services";
import HowItWorks from "../Section/HowItWorks";
import Stats from "../Section/Stats";
import CTAButton from "../../components/CTAButton";

export default function Home() {
  return (
    <main className="pt-24">
      <Hero />
      <Services />
      <HowItWorks />
      <Stats />

      {/* CTA SECTION */}
      <CTAButton
        title="Ready to Know Your"
        highlight="Destiny?"
        description="Get personalized astrology guidance based on your birth chart and planetary positions."
        buttonText="Get Your Kundli"
        buttonLink="/kundli"
      />
    </main>
  );
}
