import { MessageCircle } from "lucide-react";
import { trackClarityEvent } from "@/utils/clarity";
import { useLocation } from "react-router-dom";
import { getPropertyBySlug } from "@/data/properties";

const WhatsAppButton = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const isPropertyPage = pathParts[1] === 'properties' && pathParts[2];
  const isValentinePage = location.pathname === '/valentine-offer';
  
  let whatsappMessage = "Hello Light Way Homes, I'm interested in your estate. Can I get more info about it?";
  
  if (isPropertyPage) {
    const property = getPropertyBySlug(pathParts[2]);
    if (property && property.whatsappMessage) {
      whatsappMessage = property.whatsappMessage;
    }
  }

  if (isValentinePage) {
    whatsappMessage = "Hello Florence, I want to secure my Valentine slot";
    
    return (
      <a
        href={`https://wa.me/2348075161213?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackClarityEvent("whatsapp_valentine_sticky_click")}
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 group"
        aria-label="Chat on WhatsApp"
      >
        {/* Chat Bubble / Offer Text */}
        <div className="bg-white text-black p-4 rounded-2xl rounded-tr-none shadow-xl border border-red-100 max-w-[250px] animate-in fade-in slide-in-from-bottom-5 duration-500">
            <div className="flex items-center gap-2 mb-1">
                 <MessageCircle className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                 <span className="font-bold text-xs uppercase text-red-600 tracking-wider">Special Valentine Offer</span>
            </div>
            <p className="text-sm font-bold leading-tight mb-1">OFFER CLOSES ON THE 20TH</p>
            <p className="text-xs text-muted-foreground">Chat with Florence</p>
        </div>

        {/* Button */}
        <div className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_4px_12px_rgba(37,211,102,0.4)] hover:bg-[#20BD5A] hover:scale-110 hover:-translate-y-1 transition-all duration-300 relative">
             <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20 group-hover:opacity-40" />
             <MessageCircle className="w-8 h-8 fill-current" />
             <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
             </span>
        </div>
      </a>
    );
  }

  return (
    <a
      href={`https://wa.me/2348075161213?text=${encodeURIComponent(whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackClarityEvent("whatsapp_global_click")}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_12px_rgba(37,211,102,0.4)] hover:bg-[#20BD5A] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20 group-hover:opacity-40" />
      <MessageCircle className="w-8 h-8 fill-current" />
      <span className="absolute right-full mr-3 bg-white text-black px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
