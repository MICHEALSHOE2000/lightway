import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Facebook, href: "https://www.facebook.com/lightwayhomes", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/lightwayhomesltd/", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/lightwayhomes", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/lightwayhomes/", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@LightWay_Homes", label: "YouTube" },
  ];

  return (
    <footer className="bg-[#0c0c12] text-white py-12 border-t border-white/5">
      <div className="container mx-auto container-padding">
        <AnimatedSection animation="fade-up">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
             {/* Logo & Contact */}
             <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                <Link to="/" className="inline-block">
                  <img 
                    src="https://lightwayhomesltd.com/static/media/logo-colured.5a5b52f6a137a4d7ba12.png" 
                    alt="Light Way Homes" 
                    className="h-10 w-auto brightness-[1.2] contrast-[1.1] object-contain"
                  />
                </Link>
                <div className="flex flex-col gap-1 text-sm text-white/60">
                  <a href="tel:+2348038034077" className="hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2">
                    <Phone className="w-3 h-3" /> +234 803 803 4077
                  </a>
                  <a href="mailto:info@lightwayhomesltd.com" className="hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2">
                    <Mail className="w-3 h-3" /> info@lightwayhomesltd.com
                  </a>
                </div>
             </div>

             {/* Links */}
             <div className="flex gap-6 text-sm font-medium text-white/80">
                <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
                <Link to="/about" className="hover:text-secondary transition-colors">About Us</Link>
                <Link to="/services" className="hover:text-secondary transition-colors">Services</Link>
                <Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link>
             </div>

             {/* Socials */}
             <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-secondary/20 hover:border-secondary/30 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <p>© {currentYear} Light Way Homes Ltd. All rights reserved.</p>
            <div className="flex gap-4">
               <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
               <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;
