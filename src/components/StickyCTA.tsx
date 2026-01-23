import { Phone, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-[100] flex flex-col gap-4 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="https://wa.me/2348038034077"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-3 py-1.5 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
          WhatsApp Us
        </span>
      </a>
      <a
        href="tel:+2348038034077"
        className="flex items-center justify-center w-14 h-14 bg-secondary text-white rounded-full shadow-2xl hover:bg-secondary/90 transition-all hover:scale-110 active:scale-95 group"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-3 py-1.5 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
          Call Experts
        </span>
      </a>
    </div>
  );
};

export default StickyCTA;
