import { useState, useEffect } from "react";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

import hero1 from "@/assets/hero/hero-1.jpg";
import hero2 from "@/assets/hero/hero-2.jpg";
import hero3 from "@/assets/hero/hero-3.jpg";

const images = [hero1, hero2, hero3];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 md:pt-36">
      {/* Background Images Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Premium Real Estate ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${
                index === currentImageIndex ? "scale-110" : "scale-100"
              }`}
              style={{ filter: 'brightness(0.65) contrast(1.1)' }}
            />
          </div>
        ))}
        
        {/* Soft, Welcoming Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-slate-950/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Welcoming Badge */}
          <AnimatedSection animation="fade-in" duration={1000}>
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs sm:text-sm text-white font-medium uppercase tracking-wider">
                Welcome to the Future of Home Ownership
              </span>
            </div>
          </AnimatedSection>

          {/* Headline */}
          <AnimatedSection animation="slide-up-reveal" delay={200} duration={1000}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] mb-8 text-white">
              Your Journey to a <br />
              <span className="text-secondary italic">Perfect Home</span> Starts Here
            </h1>
          </AnimatedSection>

          {/* Subheadline */}
          <AnimatedSection animation="fade-up" delay={500} duration={1000}>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mb-12 leading-relaxed">
              Experience extraordinary living with Nigeria's most trusted real estate partner. 
              We make owning your dream home simple, secure, and stress-free.
            </p>
          </AnimatedSection>

          {/* Features Checklist */}
          <AnimatedSection animation="fade-up" delay={700} duration={1000}>
            <div className="flex flex-wrap gap-4 mb-10">
              {["Verified Titles", "Flexible Payment", "Prime Locations"].map((item) => (
                <div key={item} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span className="text-white/90 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Large Welcoming CTAs */}
          <AnimatedSection animation="fade-up" delay={900} duration={1000}>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button 
                size="lg" 
                className="h-16 px-10 bg-secondary hover:bg-secondary/90 text-white font-bold uppercase tracking-widest text-sm rounded-xl transition-all hover:scale-[1.02] shadow-xl hover-lift"
                asChild
              >
                <Link to="/properties">
                  Explore Our Properties
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <a 
                href="tel:+2348038034077" 
                className="h-16 inline-flex items-center justify-center gap-3 px-10 rounded-xl bg-white text-slate-950 hover:bg-slate-100 transition-all font-bold uppercase tracking-widest text-sm shadow-xl hover-lift"
              >
                <Phone className="w-5 h-5" />
                Talk to an Expert
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-4 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-white" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 vertical-text">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;