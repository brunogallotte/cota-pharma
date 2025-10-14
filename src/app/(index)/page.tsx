import { Benefits } from "./_pageResources/sections/Benefits";
import { CTA } from "./_pageResources/sections/CTA";
import { Hero } from "./_pageResources/sections/Hero";
import { HowItWorks } from "./_pageResources/sections/HowItWorks";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <HowItWorks />
      <CTA />
    </>
  );
}
