import Faq  from "@/components/faqs/Faq";
import Feature from "@/components/features/Feature";
import HomePage  from "@/components/homepage/HomePage";
import Recommendation from "@/components/recommendation/Recommendation";
import Insight  from "@/components/insight/Insight";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HomePage />
      <Insight />
      <Feature />
      <Recommendation />
      <Faq />
    </div>
  );
}
