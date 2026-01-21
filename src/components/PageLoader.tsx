import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after content loads
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Remove loader after animation
      setTimeout(() => setIsLoading(false), 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-40 flex items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo with pulse animation */}
        <div className="relative">
          <img
            src={logo}
            alt="Light Way Homes"
            className="h-16 md:h-20 animate-pulse"
          />
          {/* Glow effect */}
          <div className="absolute inset-0 blur-xl opacity-50 bg-secondary rounded-full animate-ping" />
        </div>
        
        {/* Loading bar */}
        <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-secondary via-primary to-secondary rounded-full animate-loader-bar" />
        </div>
        
        {/* Loading text */}
        <p className="text-sm text-muted-foreground animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default PageLoader;
