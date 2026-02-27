import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  CheckCircle2, 
  ChevronDown, 
  MapPin, 
  Phone, 
  Clock, 
  ArrowRight, 
  MessageCircle, 
  FileText, 
  Play, 
  Award, 
  TrendingUp, 
  ShieldCheck, 
  Calendar,
  Layers,
  Home,
  Users,
  Building2,
  Car,
  Maximize2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { trackClarityEvent } from "@/utils/clarity";
import naplesImg from "@/assets/naples .jpeg";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

// Property Images for Gallery
import naples4BedBq from "@/assets/properties/naples-4bed-bq.png";
import naplesBedroom1 from "@/assets/projects/naples-bedroom-1.jpg";
import naplesBedroom2 from "@/assets/projects/naples-bedroom-2.jpg";

const NaplesArepo = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const unitsAvailable = 4;
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const faqs = [
    {
      question: "Is the property fully finished?",
      answer: "Yes. Delivered fully finished with premium tiling, sanitary wares, kitchen cabinets, and high-quality electrical fittings as advertised."
    },
    {
      question: "What title does the property have?",
      answer: "Certificate of Occupancy (C of O) and approved building plans."
    },
    {
      question: "Are there additional charges?",
      answer: "Our team provides a complete transparent breakdown of documentation and service charges during your private briefing."
    },
    {
      question: "Can I inspect physically?",
      answer: "Yes. Private inspections are available daily from Monday to Saturday. Sunday inspections are strictly by appointment."
    },
    {
      question: "Is installment payment allowed?",
      answer: "Yes. We offer a flexible structured payment plan after the initial ₦30,000,000 deposit. Speak with our sales advisor for a tailored breakdown."
    }
  ];

  const features = [
    { icon: <ShieldCheck className="w-6 h-6" />, text: "Certificate of Occupancy (C of O)" },
    { icon: <Layers className="w-6 h-6" />, text: "Fully Finished Delivery" },
    { icon: <CheckCircle2 className="w-6 h-6" />, text: "All Rooms Ensuite" },
    { icon: <Home className="w-6 h-6" />, text: "BQ Included" },
    { icon: <Car className="w-6 h-6" />, text: "2 Dedicated Parking Spaces" },
    { icon: <Maximize2 className="w-6 h-6" />, text: "40sqm Grand Living Area" }
  ];

  const timeline = [
    { stage: "Site Clearing & Piling", status: "Completed", date: "Q3 2025" },
    { stage: "Foundation & Ground Floor", status: "Completed", date: "Q1 2026" },
    { stage: "Roofing & External Finishing", status: "Completed", date: "Q2 2026" },
    { stage: "Internal Finishing & Delivery", status: "In Progress", date: "Current Phase" }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-secondary selection:text-white">
      {/* Minimal Header */}
      <header className="absolute top-0 left-0 right-0 z-[100] p-6 lg:p-10 flex justify-between items-center">
        <Link to="/" className="group">
          <img 
            src={logo} 
            alt="Light Way Homes" 
            className="h-12 md:h-16 w-auto brightness-0 invert opacity-80 group-hover:opacity-100 transition-all"
          />
        </Link>
        <div className="hidden md:flex gap-6">
           <a href="tel:+2348038034077" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-secondary" />
              <span className="font-bold">+234 803 803 4077</span>
           </a>
        </div>
      </header>

      {/* Sticky CTA */}
      <div className={`fixed bottom-0 left-0 right-0 z-[100] transition-all duration-500 transform ${isScrolled ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="bg-[#0a0a0f]/90 backdrop-blur-xl border-t border-white/10 p-4 px-6 flex items-center justify-between shadow-2xl">
          <div className="hidden md:block">
            <p className="font-bold text-lg">THE NAPLES AREPO</p>
            <p className="text-sm text-white/60">4-Bedroom Luxury Terrace + BQ</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Button 
              onClick={() => navigate("/schedule-viewing")}
              className="flex-1 md:flex-initial bg-gradient-to-r from-secondary to-primary hover:shadow-[0_0_20px_rgba(218,28,92,0.4)] text-white font-bold uppercase tracking-wider py-6"
            >
              Schedule Viewing
            </Button>
            <a 
              href="https://wa.me/2348038034077?text=Hello Light Way Homes, I'm interested in The Naples Arepo."
              className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-black">
        {/* Luxury Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#050505]" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full translate-y-1/3 -translate-x-1/4" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-center" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-secondary/20 text-secondary border-secondary/30 mb-8 px-4 py-2 text-sm uppercase tracking-[0.2em] backdrop-blur-md">
                Naples Arepo
              </Badge>
              <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tight leading-[1.02] md:leading-[1] pr-1">
                THE <span className="text-gradient-brand">NAPLES</span> AREPO
              </h1>
              <p className="text-2xl md:text-3xl font-light text-white/60 mb-12 max-w-xl leading-relaxed">
                4-Bedroom Luxury Terrace + BQ. 
                <span className="block mt-4 text-white font-medium">Where Lagos Professionals Choose Peace Over Chaos.</span>
              </p>

              <div className="flex">
                <Button 
                  onClick={() => navigate("/schedule-viewing")}
                  size="lg" 
                  className="bg-gradient-to-r from-secondary to-primary text-white px-12 py-10 text-xl font-bold rounded-2xl shadow-[0_20px_50px_rgba(218,28,92,0.3)] hover:scale-105 transition-all group"
                >
                  SCHEDULE VIEWING
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                <div>
                   <p className="text-4xl font-black text-white">10 MINS</p>
                   <p className="text-sm text-white/40 uppercase tracking-widest mt-1">From Lagos</p>
                </div>
                <div>
                   <p className="text-4xl font-black text-white">C OF O</p>
                   <p className="text-sm text-white/40 uppercase tracking-widest mt-1">Verified Title</p>
                </div>
              </div>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 max-w-md">
                <p className="text-secondary font-bold text-sm tracking-widest uppercase mb-2">Starting Price: <span className="text-white">₦120,000,000</span></p>
                <p className="text-sm text-white/80 mt-2">Fully Finished Unit: <span className="font-semibold text-white">₦150,000,000</span></p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              {/* Premium Image Frame */}
              <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] aspect-[4/5] lg:aspect-[3/4]">
                <img 
                  src={naplesImg} 
                  alt="The Naples Arepo Architecture" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Floating Specs */}
                <div className="absolute bottom-2 left-10 right-10 grid grid-cols-2 gap-4">
                   <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-4 rounded-2xl">
                      <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Living Area</p>
                      <p className="text-lg font-bold">40 SQM</p>
                   </div>
                   <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-4 rounded-2xl">
                      <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Status</p>
                      <p className="text-lg font-bold">Fully Finished</p>
                   </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-secondary/30 rounded-tr-[4rem]" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b-2 border-l-2 border-primary/30 rounded-bl-[4rem]" />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-1/4 z-20 bg-secondary px-6 py-8 rounded-full shadow-2xl flex flex-col items-center text-center"
              >
                 <span className="text-xs font-bold uppercase tracking-tighter leading-none">Limited</span>
                 <span className="text-3xl font-black leading-none my-1">Units</span>
                 <span className="text-xs font-bold uppercase tracking-tighter leading-none">Left</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden lg:block">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 px-4">
             <h2 className="text-3xl md:text-5xl font-bold mb-6">This Is Not For Everyone.</h2>
             <p className="text-lg text-white/60">If you are looking for "cheap housing", this is not it. If you want ownership, prestige, and long-term value — keep reading.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Corporate Executives", icon: <Building2 /> },
              { title: "Business Owners", icon: <TrendingUp /> },
              { title: "Diaspora Nigerians", icon: <MapPin /> },
              { title: "Family Upgraders", icon: <Users /> },
              { title: "Smart Investors", icon: <ShieldCheck /> }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all hover:-translate-y-2 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <div className="w-10 h-0.5 bg-secondary/30 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl">
                <p className="text-xl md:text-2xl italic font-medium text-white/90 leading-relaxed">"You wake up in a quiet, organized estate. Your children play safely within the compound..."</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="bg-secondary/20 text-secondary border-secondary/30 mb-6">THE LIFESTYLE</Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Imagine This:</h2>
              <ul className="space-y-6">
                {[
                  "Host guests in your 40sqm grand living area.",
                  "Park two cars comfortably in your private space.",
                  "Minutes from Lagos — but free from its chaos.",
                  "High-end security and premium estate finishing."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start text-lg text-white/80">
                    <div className="mt-1.5 w-5 h-5 rounded-full border border-secondary flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-12 p-8 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-3xl border border-white/5">
                <p className="text-2xl font-bold italic text-gradient-brand">"That’s Naples."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scarcity Section */}
      <section className="py-20 relative bg-secondary/5 border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center gap-8">
             <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Limited Availability</h2>
                <p className="text-white/60 mb-8 max-w-xl mx-auto">This is a boutique development. Once this phase sells out, prices will appreciate significantly.</p>
             </div>
             
             <div className="flex flex-wrap justify-center gap-6">
                <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-3xl min-w-[200px]">
                   <p className="text-sm text-white/40 uppercase tracking-widest mb-2 font-bold">Units Available</p>
                   <p className="text-6xl font-black text-secondary">{unitsAvailable}</p>
                </div>
                <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-3xl min-w-[200px]">
                   <p className="text-sm text-white/40 uppercase tracking-widest mb-2 font-bold">Status</p>
                   <p className="text-3xl font-bold mt-2">SELLING FAST</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Property Features */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What You Get</h2>
            <p className="text-white/60">This is not a shell property. This is move-in ready luxury.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-6 p-8 bg-[#0a0a0f] border border-white/5 rounded-3xl hover:border-secondary/30 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                  {feature.icon}
                </div>
                <p className="text-lg font-bold">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 relative overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="bg-gradient-to-br from-[#0a0a0f] to-black p-10 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden">
               {/* Decorative Background */}
               <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                  <div className="absolute inset-0 bg-dot-pattern" />
                  <div className="absolute inset-0 bg-gradient-to-l from-secondary/20 to-transparent" />
               </div>
               
               <div className="relative z-10 max-w-2xl">
                  <Badge className="bg-primary/20 text-primary border-primary/30 mb-6">LOCATION ADVANTAGE</Badge>
                  <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Strategically Located In Arepo</h2>
                  <p className="text-lg text-white/70 mb-10">Arepo is one of the fastest-growing residential hubs along the Lagos-Ibadan Expressway. Proximity to Lagos + Organic growth makes it the top choice for smart buyers.</p>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                     {[
                        { title: '10 Mins to Lagos Mainland', desc: 'Stress-free commute for professionals.' },
                        { title: 'Developed Road Network', desc: 'Smooth access to the expressway.' },
                        { title: 'Rising Property Value', desc: 'Guaranteed ROI in Arepo corridor.' },
                        { title: 'High Rental Demand', desc: 'Ideal for corporate tenants.' }
                     ].map((item, idx) => (
                        <div key={idx} className="flex flex-col gap-2">
                           <div className="flex items-center gap-3 text-white font-bold">
                              <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                              </div>
                              {item.title}
                           </div>
                           <p className="text-sm text-white/40 ml-9">{item.desc}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-[#0a0a0f]" id="video">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Watch Property Tour</h2>
            <p className="text-white/60">High-ticket buyers want to visualize before visiting. Experience Naples.</p>
          </div>

          <div className="max-w-4xl mx-auto rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            <div className="aspect-video relative group cursor-pointer">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/PwLaHgAbHOc?autoplay=0" 
                title="Naples Arepo Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Construction Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 px-4">
             <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Construction Progress</h2>
             <p className="text-white/60">Transparency is our hallmark. Follow our journey.</p>
          </div>

          <div className="max-w-4xl mx-auto relative px-4">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 hidden sm:block" />
            
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className={`relative flex items-center gap-8 ${idx % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                  <div className="flex-1 hidden sm:block" />
                  <div className="absolute left-8 md:relative md:left-0 z-10 w-4 h-4 rounded-full bg-secondary shadow-[0_0_15px_rgba(218,28,92,0.8)] border-4 border-black" />
                  <div className="flex-1 bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl hover:bg-white/10 transition-all ml-16 sm:ml-0">
                    <Badge className={item.status === 'Completed' ? 'bg-green-500/20 text-green-400 mb-2' : 'bg-secondary/20 text-secondary mb-2'}>
                      {item.status}
                    </Badge>
                    <h3 className="text-xl font-bold mb-1">{item.stage}</h3>
                    <p className="text-white/40 text-sm">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Angle */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0f] to-black">
         <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
               <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">Smart Investors Know This</h2>
                    <div className="space-y-8">
                       {[
                         { title: "Immediate Equity Growth", desc: "Buying during development stage often gives immediate equity as prices rise." },
                         { title: "Rental Potential", desc: "Arepo's demand ensures high rental yields for premium terraces." },
                         { title: "Capital Appreciation", desc: "Naples is positioned in a corridor that continues expanding every year." }
                       ].map((item, idx) => (
                          <div key={idx} className="flex gap-4">
                             <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                                <TrendingUp className="w-6 h-6" />
                             </div>
                             <div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-white/60 leading-relaxed">{item.desc}</p>
                             </div>
                          </div>
                       ))}
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] text-center">
                     <p className="text-sm uppercase tracking-widest text-white/40 mb-4">Initial Deposit</p>
                     <p className="text-5xl sm:text-7xl font-black text-white mb-6 tracking-tighter">₦30,000,000</p>
                     <p className="text-white/60 mb-8 italic">Structured payment plans available. Transparent pricing. No hidden charges.</p>
                     <Button 
                       onClick={() => navigate("/schedule-viewing")}
                       className="w-full bg-white text-black hover:bg-white/90 text-lg font-bold py-8 rounded-2xl"
                     >
                       REQUEST PAYMENT PLAN
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Property Gallery Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-secondary/20 text-secondary border-secondary/30 mb-6 px-4 py-2">PROJECT GALLERY</Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-6 italic">See What You are Getting</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
              Every corner of The Naples is crafted for those who refuse to compromise on quality and space. 
              This is not a shell — this is delivered luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: naples4BedBq, title: "4-Bedroom Terrace + BQ", category: "Available Unit" },
              { img: naplesBedroom1, title: "4-Bedroom Terrace + BQ (Living Space)", category: "Floor Plan" },
              { img: naplesBedroom2, title: "4-Bedroom Terrace + BQ (Bedroom Style)", category: "Floor Plan" },
              { img: naples4BedBq, title: "Detailed Exterior View", category: "Finishing" },
              { img: naplesBedroom2, title: "4-Bedroom Terrace + BQ (Interior Style)", category: "Interior" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl h-[400px]"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <Badge className="bg-secondary mb-3">{item.category}</Badge>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 flex flex-col md:flex-row items-center justify-between p-12 bg-gradient-to-br from-[#0a0a0f] to-black rounded-[3rem] border border-white/10">
             <div className="mb-8 md:mb-0">
                <p className="text-secondary font-bold tracking-widest uppercase mb-2">Ready to see it in person?</p>
                <p className="text-3xl font-black">Private Site Tours Daily</p>
             </div>
             <Button 
               onClick={() => navigate("/schedule-viewing")}
               className="bg-white text-black hover:bg-white/90 px-12 py-8 text-xl font-bold rounded-2xl"
             >
                BOOK INSPECTION NOW
             </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-16">Why Buy From Light Way Homes?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { title: "Proven Delivery", desc: "Track record of delivered projects." },
                 { title: "Verified Documents", desc: "Proper legal verification." },
                 { title: "Physical Presence", desc: "Our offices are open for visits." },
                 { title: "Transparent Process", desc: "No hidden fees or stories." }
               ].map((item, idx) => (
                  <div key={idx} className="p-8 pb-12 border-b-2 border-transparent hover:border-secondary transition-all">
                     <Award className="w-12 h-12 text-secondary mx-auto mb-6" />
                     <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                     <p className="text-white/40">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#0a0a0f]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 text-center italic">Inside Naples FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-white/10 rounded-2xl overflow-hidden"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="font-bold">{faq.question}</span>
                  <ChevronDown className={`transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 text-white/60 border-t border-white/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Close */}
      <section className="py-32 relative overflow-hidden text-center bg-black">
         <div className="absolute inset-0 bg-secondary/10 blur-[150px] rotate-45 translate-y-1/2" />
         <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight italic">
              Luxury Living In Arepo Is No Longer A Dream — It’s Available Now.
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Early buyers benefit from current prices. Secure your 4-bedroom terrace + BQ today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate("/schedule-viewing")}
                size="lg" 
                className="bg-secondary text-white px-10 py-8 text-xl font-bold rounded-2xl"
              >
                SCHEDULE PRIVATE VIEWING
              </Button>
              <a 
                href="https://wa.me/2348038034077?text=Hello Light Way Homes, I'm interested in The Naples Arepo."
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition-transform"
              >
                <MessageCircle className="fill-current" />
                CHAT ON WHATSAPP
              </a>
            </div>
         </div>
      </section>

      <footer className="py-12 border-t border-white/5 bg-black text-center text-white/20 text-sm">
        <p>&copy; {new Date().getFullYear()} Light Way Homes & Investment Limited. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default NaplesArepo;
