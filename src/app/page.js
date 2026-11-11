import CtaSection from "@/component/CtaSection";
import FeaturesSection from "@/component/FeaturesSection";
import Hero from "@/component/Hero";
import Navber from "@/component/Navber";
import PricingSection from "@/component/PricingSection";
import SmartJobDiscovery from "@/component/SmartJobDiscovery";
import StatsSection from "@/component/StatsSection";

export default function Home() {
  return (
    <div className="text-3xl font-bold underline bg-amber-50 text-center">
      <main className="bg-[#0a0a0a] bg-[radial-gradient(ellipse_900px_520px_at_50%_0%,#3b3b3b_0%,#161616_55%,#0a0a0a_100%)] bg-no-repeat">
        <Hero />
        <StatsSection />
      </main>
      <SmartJobDiscovery />
      <FeaturesSection />
      <PricingSection />
      <CtaSection/>
    </div>
  );
}
