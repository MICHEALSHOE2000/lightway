import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TrustElements from "@/components/TrustElements";
import NeighborhoodPerks from "@/components/NeighborhoodPerks";
import About from "@/components/About";
import YouTubeFeed from "@/components/YouTubeFeed";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageLoader />
      <Header />
      <StickyCTA />
      <main>
        <Hero />
        <Projects />
        <TrustElements />
        <NeighborhoodPerks />
        <About />
        <YouTubeFeed />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
