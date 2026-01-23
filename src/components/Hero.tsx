import { useState, useEffect } from "react";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const heroImages = [
  "https://lightwayhomesltd.com/static/media/roman-height-home-hero.e25a3979b37f2bf5a8df.jpg",
  "https://lightwayhomesltd.com/static/media/lifestyle-hero-home.edd2d0348ed0fd5ce4f9.jpeg",
  "https://lightwayhomesltd.com/static/media/dream-hero-home.6974bea0dad75785db35.jpeg",
  "https://lightwayhomesltd.com/static/media/naples-hero-home.84931261b54080dda499.jpg",
  "https://lightwayhomesltd.com/static/media/novara-hero-home.5745192a9c1a3cbceb42.jpg",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <img
              src={image}
              alt="Luxury Real Estate"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.65) contrast(1.1)' }}
            />
          </div>
        ))}
        
        {/* Soft, Welcoming Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-slate-950/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Welcoming Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs sm:text-sm text-white font-medium uppercase tracking-wider">
              Welcome to the Future of Home Ownership
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] mb-8 text-white animate-fade-up">
            Your Journey to a <br />
            <span className="text-secondary italic">Perfect Home</span> Starts Here
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Experience extraordinary living with Nigeria's most trusted real estate partner. 
            We make owning your dream home simple, secure, and stress-free.
          </p>

          {/* Features Checklist */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {["Verified Titles", "Flexible Payment", "Prime Locations"].map((item) => (
              <div key={item} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span className="text-white/90 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* Large Welcoming CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="h-16 px-10 bg-secondary hover:bg-secondary/90 text-white font-bold uppercase tracking-widest text-sm rounded-xl transition-all hover:scale-[1.02] shadow-xl"
              asChild
            >
              <Link to="/properties">
                Explore Our Properties
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <a 
              href="tel:+2348038034077" 
              className="h-16 inline-flex items-center justify-center gap-3 px-10 rounded-xl bg-white text-slate-950 hover:bg-slate-100 transition-all font-bold uppercase tracking-widest text-sm shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentImage ? "w-12 bg-secondary" : "w-3 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
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