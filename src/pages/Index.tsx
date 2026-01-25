import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import YouTubeFeed from "@/components/YouTubeFeed";
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
        <YouTubeFeed />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
