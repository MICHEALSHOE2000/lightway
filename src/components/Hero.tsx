import { useState, useEffect, useRef } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CountUpNumber from "@/components/CountUpNumber";

const videos = [
  "/videos/hero-1.mp4",
  "/videos/hero-2.mp4",
  "/videos/hero-3.mp4",
  "/videos/hero-4.mp4",
];

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextVideo();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentVideo]);

  const handleNextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const handlePrevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToVideo = (index: number) => {
    if (index !== currentVideo) {
      setCurrentVideo(index);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {videos.map((video, index) => (
          <video
            key={video}
            ref={(el) => (videoRefs.current[index] = el)}
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
              index === currentVideo ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{ 
              filter: 'brightness(0.8) contrast(1.1)',
              visibility: index === currentVideo || isTransitioning ? 'visible' : 'hidden'
            }}
          />
        ))}
        
        {/* Multi-layer Professional Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30" />
      </div>


      {/* Video Indicators */}
      <div className="absolute bottom-24 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToVideo(index)}
            className={`group relative h-1.5 transition-all duration-500 rounded-full bg-white/20 hover:bg-white/40 overflow-hidden ${
              index === currentVideo ? "w-16" : "w-4"
            }`}
          >
            {index === currentVideo && (
              <div 
                className="absolute inset-0 bg-secondary animate-[progress_8s_linear]"
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto container-padding relative z-10 pt-20">
        <div className="max-w-2xl lg:max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 mb-8 animate-fade-in opacity-0 fill-mode-forwards" style={{ animationDelay: '0.1s' }}>
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-secondary animate-ping" />
            </div>
            <span className="text-xs sm:text-sm text-white/90 font-bold uppercase tracking-widest">
              Nigeria's No. 1 Real Estate Partners
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-8 animate-fade-in opacity-0 fill-mode-forwards" style={{ animationDelay: '0.3s' }}>
            <span className="text-white drop-shadow-2xl">Your Perfect Home</span>
            <br />
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Wait for You</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mb-12 leading-relaxed animate-fade-in opacity-0 fill-mode-forwards" style={{ animationDelay: '0.5s' }}>
            Transforming dreams into addresses with excellence and integrity across Nigeria.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in opacity-0 fill-mode-forwards" style={{ animationDelay: '0.7s' }}>
            <Button 
              variant="hero" 
              size="lg" 
              className="h-16 px-10 group bg-gradient-to-r from-secondary to-primary hover:scale-[1.02] transition-all border-0 shadow-2xl shadow-secondary/20 font-bold uppercase tracking-widest text-sm"
              asChild
            >
              <Link to="/properties">
                Explore Properties
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </Button>
            <a href="tel:+2348038034077" className="h-16 inline-flex items-center justify-center gap-3 px-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all font-bold uppercase tracking-widest text-sm">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 mt-12 pt-10 border-t border-white/10 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center sm:text-left group">
              <CountUpNumber end={5} suffix="+" className="text-3xl sm:text-4xl font-display font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block" />
              <div className="text-xs sm:text-sm text-white/50 mt-1 font-medium">Years Experience</div>
            </div>
            <div className="text-center sm:text-left group">
              <CountUpNumber end={500} suffix="+" className="text-3xl sm:text-4xl font-display font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block" />
              <div className="text-xs sm:text-sm text-white/50 mt-1 font-medium">Happy Clients</div>
            </div>
            <div className="text-center sm:text-left group">
              <CountUpNumber end={10} suffix="+" className="text-3xl sm:text-4xl font-display font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block" />
              <div className="text-xs sm:text-sm text-white/50 mt-1 font-medium">Estate Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-10">
        <span className="text-xs text-white/40 uppercase tracking-[0.2em] font-medium">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gradient-to-b from-secondary to-primary rounded-full animate-bounce" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;