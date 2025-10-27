import FeatureSection from "@/components/pages/landing/FeatureSection";
import Footer from "@/components/pages/landing/Footer";
import Header from "@/components/pages/landing/Header";
import HeroSection from "@/components/pages/landing/HeroSection";

export default function Home() {
  return (
    <article className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark antialiased">
      <section className="max-w-[1440px] mx-auto overflow-x-hidden">
        <Header />
        <HeroSection />
        <FeatureSection />
        <Footer />
      </section>
    </article>
  );
}
