import { useState, useEffect } from "react";
import { Heart, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOfferExpired, setIsOfferExpired] = useState(false);

  useEffect(() => {
    // Current date
    const now = new Date();
    // Expiration date: Feb 16, 2026
    const expiration = new Date("2026-02-17"); // Starts from Feb 17
    
    if (now > expiration) {
      setIsOfferExpired(true);
      setIsVisible(false);
    }
  }, []);

  if (!isVisible || isOfferExpired) return null;

  return (
    <div className="bg-[#cc0000] text-white py-2.5 px-3 sm:px-4 relative z-[100] overflow-hidden">
      {/* Subtle heartbeat background effect */}
      <div className="absolute inset-0 bg-red-600 animate-pulse opacity-50" />
      
      <div className="container mx-auto flex items-center justify-center gap-2 sm:gap-3 relative z-10 pr-8 sm:pr-0">
        <div className="hidden md:flex items-center gap-1.5 px-2 py-0.5 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-wider">
          <Heart className="w-3 h-3 fill-current" />
          Limited Offer
        </div>
        
        <p className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide text-center">
          <span className="hidden xs:inline">Valentine Flash Sale: </span>Save 30% on The Novara Courts! 
          <Link 
            to="/valentine-offer" 
            className="ml-1 sm:ml-2 inline-flex items-center gap-1 underline underline-offset-4 hover:text-white/80 transition-colors"
          >
            Secure Slot <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </Link>
        </p>

        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-0 sm:right-6 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition-colors"
          aria-label="Close banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
