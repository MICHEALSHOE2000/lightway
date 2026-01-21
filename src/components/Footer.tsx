import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Properties", href: "/properties" },
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
    <footer className="bg-purple-dark text-primary-foreground relative overflow-hidden">
      {/* Enhanced Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-secondary/10 rounded-full blur-[200px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="container mx-auto container-padding py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <AnimatedSection animation="fade-up" className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4 md:mb-6 group">
              <img 
                src={logo} 
                alt="Light Way Homes" 
                className="h-12 md:h-14 w-auto brightness-0 invert group-hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-primary-foreground/70 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
              Your trusted partner in premium real estate development across Nigeria.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-vibrant rounded-lg flex items-center justify-center text-primary-foreground/70 hover:text-secondary hover:scale-110 hover:shadow-glow transition-all animate-border-glow"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Quick Links */}
          <AnimatedSection animation="fade-up" delay={100}>
            <h4 className="font-semibold text-primary-foreground mb-4 text-sm md:text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-secondary" />
              Quick Links
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/70 hover:text-secondary hover:translate-x-2 transition-all inline-block text-xs md:text-sm underline-vibrant"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Projects */}
          <AnimatedSection animation="fade-up" delay={200}>
            <h4 className="font-semibold text-primary-foreground mb-4 text-sm md:text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-secondary" />
              Our Projects
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {projects.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/70 hover:text-secondary hover:translate-x-2 transition-all inline-block text-xs md:text-sm underline-vibrant"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Contact */}
          <AnimatedSection animation="fade-up" delay={300} className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-primary-foreground mb-4 text-sm md:text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-secondary" />
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs md:text-sm">
              <li className="flex items-start gap-2 group">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                <div className="text-primary-foreground/70">
                  <a href="tel:+2348038034077" className="hover:text-secondary transition-colors block underline-vibrant">+234 803 803 4077</a>
                  <a href="tel:+2348075161213" className="hover:text-secondary transition-colors block underline-vibrant">+234 807 516 1213</a>
                </div>
              </li>
              <li className="flex items-start gap-2 group">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                <a href="mailto:info@lightwayhomesltd.com" className="text-primary-foreground/70 hover:text-secondary transition-colors break-all underline-vibrant">
                  info@lightwayhomesltd.com
                </a>
              </li>
              <li className="flex items-start gap-2 group">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                <span className="text-primary-foreground/70 leading-relaxed">
                  No. 4, Oyewo close, Clay Busstop, Juli Estate, Oregun, Ikeja Lagos.
                </span>
              </li>
            </ul>
          </AnimatedSection>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 section-divider">
        <div className="container mx-auto container-padding py-4 md:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs md:text-sm text-primary-foreground/60">
            <p>© {currentYear} Light Way Homes Ltd. All rights reserved.</p>
            <div className="flex items-center gap-4 md:gap-6">
              <a href="#" className="hover:text-secondary transition-colors underline-vibrant">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors underline-vibrant">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
