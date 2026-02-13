import { MessageCircle } from "lucide-react";
import { trackClarityEvent } from "@/utils/clarity";
import { useLocation } from "react-router-dom";
import { getPropertyBySlug } from "@/data/properties";

const WhatsAppButton = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const isPropertyPage = pathParts[1] === 'properties' && pathParts[2];
  
  let whatsappMessage = "Hello Light Way Homes, I'm interested in your estate. Can I get more info about it?";
  
  if (isPropertyPage) {
    const property = getPropertyBySlug(pathParts[2]);
    if (property && property.whatsappMessage) {
      whatsappMessage = property.whatsappMessage;
    }
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
