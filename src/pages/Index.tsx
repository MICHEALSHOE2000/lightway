import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import YouTubeFeed from "@/components/YouTubeFeed";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageLoader />
      <Header />
      <main>
        <Hero />
        <Projects />
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
