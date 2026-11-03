import FeaturesSection from "@/component/FeaturesSection";
import Navber from "@/component/Navber";
import PricingSection from "@/component/PricingSection";
import StatsSection from "@/component/StatsSection";

export default function Home() {
  return (
   <div className="text-3xl font-bold underline bg-amber-50 text-center">
    <StatsSection/>
    <FeaturesSection/>
    <PricingSection/>
   </div>
  );
}
