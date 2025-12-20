import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TreatmentSection from "@/components/sections/TreatmentSection";
import BotoxSection from "@/components/sections/BotoxSection";
import GoldPeelingSection from "@/components/sections/GoldPeelingSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import StepsSection from "@/components/sections/StepsSection";
import CareSection from "@/components/sections/CareSection";
import PricingSection from "@/components/sections/PricingSection";
import OfferSection from "@/components/sections/OfferSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PostPurchaseSection from "@/components/sections/PostPurchaseSection";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>BOTOX + Peeling de Ouro | Solar Derma - Rejuvenescimento Natural</title>
        <meta 
          name="description" 
          content="Tratamento exclusivo de BOTOX + Peeling de Ouro para rejuvenescimento natural. Linhas suavizadas, pele iluminada e resultados visíveis. Agende na Solar Derma." 
        />
        <meta name="keywords" content="botox, peeling de ouro, rejuvenescimento, estética facial, solar derma, tratamento facial" />
        <link rel="canonical" href="https://solarderma.com.br" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <TreatmentSection />
          <BotoxSection />
          <GoldPeelingSection />
          <BenefitsSection />
          <StepsSection />
          <CareSection />
          <PricingSection />
          <OfferSection />
          <AboutSection />
          <TestimonialsSection />
          <PostPurchaseSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
