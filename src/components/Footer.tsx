import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Estates", href: "/properties" },
    { name: "Services", href: "/services" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ];

  const projects = [
    { name: "Roman Heights", href: "/properties/roman-heights" },
    { name: "The Naples", href: "/properties/the-naples" },
    { name: "Novara Court", href: "/properties/novara-court" },
    { name: "View All", href: "/properties" },
  ];

  const socials = [
    { icon: Facebook, href: "https://facebook.com/lightwayhomes", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/lightwayhomes", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/lightwayhomes", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/lightwayhomes", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@LightWay_Homes", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-[#0c0c12] text-white overflow-hidden pt-1 top-accent-border">
      {/* Dynamic Gradient Overlays for Brightness */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      {/* Mesh Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />

      <div className="container mx-auto container-padding py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand & Mission */}
          <AnimatedSection animation="fade-up" className="md:col-span-4 lg:col-span-5">
            <Link to="/" className="inline-block mb-8 group relative">
              <div className="absolute -inset-4 bg-white/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src="https://lightwayhomesltd.com/static/media/logo-colured.5a5b52f6a137a4d7ba12.png" 
                alt="Light Way Homes" 
                className="h-14 md:h-18 w-auto brightness-[1.2] contrast-[1.1] group-hover:scale-105 transition-all duration-500 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              />
            </Link>
            <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed max-w-md">
              Elevating the standard of living through visionary real estate development. Your journey to a <span className="text-secondary font-semibold italic">perfect home</span> starts here.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/50 hover:text-white hover:bg-secondary/20 hover:border-secondary/30 hover:-translate-y-1 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Navigation Columns */}
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quick Links */}
            <AnimatedSection animation="fade-up" delay={100}>
              <h4 className="font-display font-bold text-white mb-6 text-sm uppercase tracking-widest flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Explore
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-white/60 hover:text-white transition-colors flex items-center group text-sm md:text-base"
                    >
                      <span className="w-0 group-hover:w-3 h-[1px] bg-secondary mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* Projects */}
            <AnimatedSection animation="fade-up" delay={200}>
              <h4 className="font-display font-bold text-white mb-6 text-sm uppercase tracking-widest flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Estates
              </h4>
              <ul className="space-y-4">
                {projects.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-white/60 hover:text-white transition-colors flex items-center group text-sm md:text-base"
                    >
                      <span className="w-0 group-hover:w-3 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection animation="fade-up" delay={300} className="col-span-2 lg:col-span-1">
              <h4 className="font-display font-bold text-white mb-6 text-sm uppercase tracking-widest flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Reach Out
              </h4>
              <div className="space-y-5">
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-secondary border border-white/5 group-hover:bg-secondary/10 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <a href="tel:+2348038034077" className="text-white/80 hover:text-white transition-colors block text-sm font-medium">+234 803 803 4077</a>
                    <a href="tel:+2348075161213" className="text-white/80 hover:text-white transition-colors block text-sm font-medium">+234 807 516 1213</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-secondary border border-white/5 group-hover:bg-secondary/10 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href="mailto:info@lightwayhomesltd.com" className="text-white/80 hover:text-white transition-colors text-sm font-medium break-all">
                    info@lightwayhomesltd.com
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-white/40 tracking-widest uppercase">
                    IESV Member
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-white/40 tracking-widest uppercase">
                    ESVARBON
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="relative z-10 border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto container-padding py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/40 text-sm font-medium tracking-wide">
              © {currentYear} Light Way Homes Ltd. <span className="hidden sm:inline">Crafting Extraordinary Living Spaces.</span>
            </p>
            <div className="flex items-center gap-8">
              <Link to="/privacy" className="text-white/40 hover:text-white transition-colors text-xs font-semibold uppercase tracking-widest">Privacy Policy</Link>
              <Link to="/terms" className="text-white/40 hover:text-white transition-colors text-xs font-semibold uppercase tracking-widest">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
