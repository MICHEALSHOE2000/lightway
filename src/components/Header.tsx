import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Phone, ChevronDown, ArrowRight, Mail, Youtube, MapPin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SubLink {
  name: string;
  href: string;
  description?: string;
}

interface NavItem {
  name: string;
  href: string;
  isRoute: boolean;
  icon?: any;
  subLinks?: SubLink[];
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Keep header content visible immediately; some mobile browsers can delay/skip
  // the initial animation timeout, making the navbar appear empty.
  const [isVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideNav, setHideNav] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const closeDropdownTimerRef = useRef<number | null>(null);
  const location = useLocation();

  // (Removed initial load opacity/translate animation to guarantee navbar visibility on mobile.)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 30);

      // Keep navbar always visible on mobile/tablet to avoid it feeling "missing"
      // due to small scroll gestures.
      if (window.innerWidth < 1024) {
        setHideNav(false);
        setLastScrollY(currentScrollY);
        return;
      }
      
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle hash navigation
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setMobileSubmenu(null);
  }, [location.pathname]);

  // Moving highlight effect
  const moveHighlight = (index: number) => {
    const navItems = navRef.current?.querySelectorAll('.nav-item');
    const highlight = highlightRef.current;

    if (navItems && highlight && navItems[index]) {
      const item = navItems[index] as HTMLElement;
      const rect = item.getBoundingClientRect();
      const navRect = navRef.current!.getBoundingClientRect();

      highlight.style.width = `${rect.width}px`;
      highlight.style.left = `${rect.left - navRect.left}px`;
      highlight.style.opacity = '1';
    }
  };

  const resetHighlight = () => {
    if (highlightRef.current) {
      highlightRef.current.style.opacity = '0';
    }
  };

  const openDropdown = (name: string) => {
    if (closeDropdownTimerRef.current) {
      window.clearTimeout(closeDropdownTimerRef.current);
      closeDropdownTimerRef.current = null;
    }
    setActiveDropdown(name);
  };

  const closeDropdown = (delayMs = 260) => {
    if (closeDropdownTimerRef.current) window.clearTimeout(closeDropdownTimerRef.current);
    closeDropdownTimerRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
      resetHighlight();
    }, delayMs);
  };

  const navLinks: NavItem[] = [
    { name: "Home", href: "/", isRoute: true, icon: <MapPin className="w-4 h-4" /> },
    { 
      name: "Our Estates", 
      href: "/properties", 
      isRoute: true, 
      icon: <ArrowRight className="w-4 h-4" />,
      subLinks: [
        { name: "Naples Arepo", href: "/properties/the-naples-4bed-terrace-townhouse", description: "Premium Land & Townhouses" },
        { name: "The Novara Courts", href: "/projects/the-novara-courts", description: "Affordable Residential Land" },
        { name: "View All Properties", href: "/properties", description: "Explore our full portfolio" },
      ]
    },
    { 
      name: "Services", 
      href: "/services", 
      isRoute: true,
      icon: <Phone className="w-4 h-4" />,
      subLinks: [
        { name: "Property Sales", href: "/services#sales", description: "Find your dream home" },
        { name: "Land Sales", href: "/services#land", description: "Secure land investments" },
        { name: "Real Estate Advisory", href: "/services#advisory", description: "Professional guidance" },
        { name: "Documentation", href: "/services#doc", description: "Hassle-free title processing" },
      ]
    },
    { 
      name: "About Us", 
      href: "/about", 
      isRoute: true,
      icon: <ChevronDown className="w-4 h-4" />,
      subLinks: [
        { name: "Who We Are", href: "/about", description: "Our story and mission" },
        { name: "Our Team", href: "/about#team", description: "Meet our experts" },
        { name: "Careers", href: "/career", description: "Join our team" },
        { name: "Blog", href: "/blog", description: "Latest insights" },
      ]
    },
    { name: "Contact", href: "/contact", isRoute: true, icon: <Mail className="w-4 h-4" /> },
  ];

  const handleNavClick = (href: string, isRoute: boolean) => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    
    if (!isRoute && href.startsWith('/#') && location.pathname === '/') {
      const hash = href.replace('/', '');
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActiveRoute = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header 
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-700 ease-out px-4 sm:px-6 lg:px-8 ${
        hideNav ? '-translate-y-[120%]' : 'translate-y-0'
      } opacity-100`}
    >
      {/* Premium glass island navbar container */}
      <div className={`mx-auto max-w-7xl transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-[#0a0a0f]/90 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/10 rounded-2xl' 
          : 'bg-black/60 md:bg-black/40 backdrop-blur-xl border border-white/5 rounded-[2rem]'
      }`}>
        {/* Top accent line - subtle and matched to island width */}
        <div className="absolute top-0 left-10 right-10 h-[1.5px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-80" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <Link 
              to="/" 
              className="flex items-center group transition-all duration-700 relative z-50"
            >
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                <img 
                  src={logo} 
                  alt="Light Way Homes" 
                  className={`transition-all duration-700 object-contain [filter:brightness(0)_invert(1)_drop-shadow(0_0_8px_rgba(255,255,255,0.3))] group-hover:filter-none group-hover:brightness-100 group-hover:invert-0 group-hover:sepia group-hover:hue-rotate-[240deg] group-hover:saturate-[3] ${
                    isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-24'
                  }`}
                />
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl bg-secondary/20 -z-10" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav 
              className="hidden lg:flex items-center relative" 
              ref={navRef}
              onMouseLeave={resetHighlight}
            >
              {/* Moving highlight background */}
              <div 
                ref={highlightRef}
                className="absolute top-1/2 -translate-y-1/2 h-10 bg-white/[0.08] rounded-lg transition-all duration-300 ease-out opacity-0 pointer-events-none"
                style={{ transform: 'translateY(-50%)' }}
              />
              
              <div className="flex items-center" ref={dropdownRef}>
                {navLinks.map((link, index) => (
                  <div 
                    key={link.name}
                    className="relative nav-item"
                    onMouseEnter={() => {
                      moveHighlight(index);
                      setActiveIndex(index);
                      if (link.subLinks) openDropdown(link.name);
                    }}
                    onMouseLeave={() => {
                      if (link.subLinks) closeDropdown();
                      else resetHighlight();
                    }}
                  >
                    {link.subLinks ? (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            activeDropdown === link.name ? closeDropdown(0) : openDropdown(link.name)
                          }
                          aria-expanded={activeDropdown === link.name}
                          className={`relative px-5 py-3 text-[13px] font-medium tracking-wide uppercase transition-all duration-300 flex items-center gap-1.5 cursor-pointer select-none touch-manipulation ${
                            isActiveRoute(link.href) 
                              ? 'text-secondary' 
                              : 'text-white/80 hover:text-white'
                          } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                          style={{ transitionDelay: `${(index + 1) * 60}ms` }}
                        >
                          <span className="relative z-10">{link.name}</span>
                          <ChevronDown 
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${
                              activeDropdown === link.name ? 'rotate-180' : ''
                            }`} 
                          />
                          {/* Active indicator dot */}
                          {isActiveRoute(link.href) && (
                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-secondary" />
                          )}
                        </button>
                        
                        {/* Premium Dropdown Menu */}
                        <div 
                          onMouseEnter={() => openDropdown(link.name)}
                          onMouseLeave={() => closeDropdown()}
                          className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 transition-all duration-300 ease-out ${
                            activeDropdown === link.name 
                              ? 'opacity-100 visible' 
                              : 'opacity-0 invisible'
                          }`}
                        >
                          {/* Dropdown arrow */}
                          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#12121a] border-l border-t border-white/10" />
                          
                          <div className={`relative bg-[#12121a] rounded-xl shadow-2xl border border-white/10 overflow-hidden w-64 transition-transform duration-300 ease-out ${
                            activeDropdown === link.name ? 'translate-y-0' : '-translate-y-2'
                          }`}>
                            {/* Top gradient accent */}
                            <div className="h-0.5 bg-gradient-to-r from-secondary via-primary to-secondary" />
                            
                            <div className="p-2">
                              {link.subLinks.map((subLink, subIndex) => (
                                <Link
                                  key={subLink.name}
                                  to={subLink.href}
                                  onClick={() => handleNavClick(subLink.href, true)}
                                  className="group flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center flex-shrink-0 group-hover:from-secondary/30 group-hover:to-primary/30 transition-all duration-200 border border-white/5">
                                    <ArrowRight className="w-3.5 h-3.5 text-secondary transition-transform duration-200 group-hover:translate-x-0.5" />
                                  </div>
                                  <div className="flex-1">
                                    <span className="block text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                                      {subLink.name}
                                    </span>
                                    {subLink.description && (
                                      <span className="text-xs text-white/40 leading-tight">
                                        {subLink.description}
                                      </span>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={() => handleNavClick(link.href, link.isRoute)}
                        className={`relative px-5 py-3 text-[13px] font-medium tracking-wide uppercase transition-all duration-300 block ${
                          isActiveRoute(link.href) 
                            ? 'text-secondary' 
                            : 'text-white/80 hover:text-white'
                        } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                        style={{ transitionDelay: `${(index + 1) * 60}ms` }}
                      >
                        <span className="relative z-10">{link.name}</span>
                        {/* Active indicator dot */}
                        {isActiveRoute(link.href) && (
                          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-secondary" />
                        )}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* CTA & Phone */}
            <div 
              className="hidden lg:flex items-center gap-5 transition-all duration-700 opacity-100 translate-x-0"
              style={{ transitionDelay: '400ms' }}
            >
              <a 
                href="tel:+2348038034077" 
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center group-hover:bg-secondary/20 group-hover:scale-105 transition-all duration-300 border border-white/[0.08]">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                <span className="hidden xl:inline font-medium tracking-wide">+234 803 803 4077</span>
              </a>
              
              <Button 
                variant="default" 
                size="default" 
                className="relative overflow-hidden bg-gradient-to-r from-secondary via-secondary to-primary hover:from-primary hover:via-secondary hover:to-secondary border-0 shadow-[0_0_20px_rgba(218,28,92,0.3)] hover:shadow-[0_0_30px_rgba(218,28,92,0.5)] transition-all duration-500 px-6 font-semibold tracking-wide text-[13px] uppercase"
                asChild
              >
                <Link to="/contact">
                  <span className="relative z-10">Request Property Info</span>
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] hover:translate-x-[200%] transition-transform duration-700" />
                  </div>
                </Link>
              </Button>
            </div>

            {/* Tablet CTA - Show on md screens */}
            <div className="hidden md:flex lg:hidden items-center gap-3">
              <a 
                href="tel:+2348038034077" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.08] text-secondary hover:bg-secondary/20 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 sm:p-3 rounded-xl transition-all duration-300 text-white opacity-100 hover:bg-white/[0.06] active:scale-95 touch-manipulation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-5">
                <span className={`absolute left-0 w-6 h-[2px] bg-current rounded-full transition-all duration-300 ease-out ${
                  isMenuOpen ? 'top-2.5 rotate-45 bg-secondary' : 'top-0'
                }`} />
                <span className={`absolute left-0 top-2.5 w-6 h-[2px] bg-current rounded-full transition-all duration-200 ${
                  isMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                }`} />
                <span className={`absolute left-0 w-6 h-[2px] bg-current rounded-full transition-all duration-300 ease-out ${
                  isMenuOpen ? 'top-2.5 -rotate-45 bg-secondary' : 'top-5'
                }`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 w-screen h-screen bg-[#0a0a0f] z-[10000] transition-all duration-500 ease-in-out flex flex-col ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        {/* Mobile Header (Logo & Close) */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-white/[0.05] bg-[#0a0a0f] shrink-0">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img 
              src={logo} 
              alt="Light Way Homes" 
              className="h-14 w-auto object-contain [filter:brightness(1.2)_contrast(1.1)]"
            />
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-secondary transition-all duration-300"
            aria-label="Close menu"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span className="absolute w-6 h-[2.5px] bg-current rounded-full rotate-45" />
              <span className="absolute w-6 h-[2.5px] bg-current rounded-full -rotate-45" />
            </div>
          </button>
        </div>

        {/* Navigation Links (Scrollable area) */}
        <nav className="flex-1 overflow-y-auto overscroll-contain px-6 py-6 scrollbar-hide">
          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <div 
                key={link.name}
                className={`transition-all duration-500 ${
                  isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: isMenuOpen ? `${index * 75}ms` : '0ms' }}
              >
                {link.subLinks ? (
                  <div className="flex flex-col border-b border-white/5">
                    <div className="flex items-center justify-between py-5">
                      <Link
                        to={link.href}
                        onClick={() => handleNavClick(link.href, link.isRoute)}
                        className={`text-lg font-bold tracking-[0.05em] uppercase transition-colors ${
                          isActiveRoute(link.href) ? 'text-secondary' : 'text-white'
                        }`}
                      >
                        {link.name}
                      </Link>
                      <button
                        onClick={() => setMobileSubmenu(mobileSubmenu === link.name ? null : link.name)}
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5"
                      >
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                          mobileSubmenu === link.name ? 'rotate-180 text-secondary' : 'text-white/40'
                        }`} />
                      </button>
                    </div>
                    
                    <div className={`grid transition-all duration-300 ease-out ${
                      mobileSubmenu === link.name ? 'grid-rows-[1fr] opacity-100 mb-4' : 'grid-rows-[0fr] opacity-0'
                    }`}>
                      <div className="overflow-hidden">
                        <div className="pl-4 border-l-2 border-secondary/30 flex flex-col space-y-5 py-2">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.name}
                              to={subLink.href}
                              onClick={() => handleNavClick(subLink.href, true)}
                              className="text-sm font-semibold text-white/50 hover:text-white transition-colors"
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => handleNavClick(link.href, link.isRoute)}
                    className={`block py-5 text-lg font-bold tracking-[0.05em] uppercase border-b border-white/5 transition-colors ${
                      isActiveRoute(link.href) ? 'text-secondary' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>
        
        {/* Bottom Contact Section */}
        <div className="mt-auto p-6 bg-[#0c0c12] border-t border-white/[0.05] shrink-0">
          <div className="flex flex-col space-y-6">
            <a 
              href="tel:+2349037497790" 
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-0.5">Contact Us</span>
                <span className="text-lg font-bold tracking-tight text-white">09037497790</span>
              </div>
            </a>

            <div className="flex items-center gap-4 py-2">
              {[
                { icon: Youtube, href: "https://www.youtube.com/@LightWay_Homes", label: "YouTube" },
                { icon: Facebook, href: "https://facebook.com/lightwayhomes", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/lightway_homes", label: "Instagram" },
                { icon: MapPin, href: "/contact", label: "Office" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 active:bg-secondary active:text-white transition-all shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <Button 
              className="w-full h-14 bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase tracking-widest text-xs rounded-xl shadow-xl active:scale-95 transition-all"
              asChild
            >
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Request Property Info
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
