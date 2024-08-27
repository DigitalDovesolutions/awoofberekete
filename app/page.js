import HeroSection from "@/components/Hero-section";
import TopRecommendedDishes from "@/components/Top-recommended-dishes";
import Image from "next/image";

export default function Home() {
  return (
    <main className="block">
      <HeroSection/>
      <TopRecommendedDishes/>
    </main>
  );
}
