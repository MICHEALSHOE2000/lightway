import { useState, useEffect } from "react";
import { 
  CheckCircle2, 
  ChevronDown, 
  MapPin, 
  Phone, 
  Clock, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Calendar,
  Users,
  Building2,
  TrendingUp,
  AlertTriangle,
  Zap,
  Layout,
  User,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

// Images
import novaraHero from "@/assets/projects/novara-hero.jpg";
import novara1 from "@/assets/projects/novara-1.jpg";
import novara2 from "@/assets/projects/novara-2.jpg";
import novara3 from "@/assets/projects/novara-3.jpg";
import novara300 from "@/assets/properties/novara-300sqm.jpg";
import novara500 from "@/assets/properties/novara-500sqm.jpg";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to 7 days from now for urgency
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center md:justify-start">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hrs", value: timeLeft.hours },
        { label: "Min", value: timeLeft.minutes },
        { label: "Sec", value: timeLeft.seconds }
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-1">
            <span className="text-xl md:text-2xl font-black text-secondary">{item.value.toString().padStart(2, '0')}</span>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

const BookingForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    property: "Novara Courts",
    preferredDate: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xlgwdbvz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          subject: `Site Inspection Request: ${formData.property}`,
          _subject: `New Site Inspection Request for ${formData.property}`
        })
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl text-center space-y-4">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold">Request Sent!</h3>
        <p className="text-white/60">We'll call you shortly to confirm your inspection.</p>
        <Button onClick={() => setStatus("idle")} variant="outline" className="w-full">Book Another</Button>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[2.5rem] shadow-2xl">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Calendar className="text-secondary w-5 h-5" />
        Book Free Site Inspection
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <Input 
            required
            placeholder="Full Name"
            className="bg-white/5 border-white/10 h-12 pl-12 rounded-xl"
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
        </div>
        <div className="relative">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <Input 
            required
            type="tel"
            placeholder="Phone Number"
            className="bg-white/5 border-white/10 h-12 pl-12 rounded-xl"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <div className="relative">
          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input 
            required
            type="date"
            className="w-full h-12 bg-white/5 border border-white/10 pl-12 pr-4 rounded-xl focus:ring-2 focus:ring-secondary outline-none text-sm text-white/60"
            value={formData.preferredDate}
            onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
          />
        </div>
        <Button 
          type="submit" 
          disabled={status === "loading"}
          className="w-full h-12 bg-gradient-to-r from-secondary to-primary text-white font-bold rounded-xl hover:scale-[1.02] transition-all"
        >
          {status === "loading" ? "Processing..." : "SECURE MY SPOT"}
        </Button>
        <p className="text-[10px] text-center text-white/30 italic">No obligation. Just a free tour of your future investment.</p>
      </form>
    </div>
  );
};

const NovaraCourts = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
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
      question: "Where is Novara Courts located?",
      answer: "Orilemo, Mowe, Ogun State — minutes from RCCG Camp."
    },
    {
      question: "Who is the developer?",
      answer: "Light Way Homes Ltd."
    },
    {
      question: "Are there encumbrances?",
      answer: "No known encumbrances. Verified documentation."
    },
    {
      question: "What title does the land have?",
      answer: "Registered survey available."
    },
    {
      question: "Are there extra charges?",
      answer: "Our team will provide full breakdown upfront — no hidden surprises."
    },
    {
      question: "How long can I spread payment?",
      answer: "Between 3 and 24 months."
    },
    {
      question: "What document do I get after deposit?",
      answer: "Receipt and payment acknowledgement. Allocation upon full payment."
    }
  ];

  const timeline = [
    { stage: "Perimeter Fencing", status: "Completed", date: "Q4 2024" },
    { stage: "Gate House Construction", status: "Completed", date: "Q1 2025" },
    { stage: "Road Network & Drainage", status: "In Progress", date: "Current Phase" },
    { stage: "Electrification", status: "Upcoming", date: "Q3 2025" }
  ];

  const gallery = [
    { img: novaraHero, title: "Main Estate Entrance", category: "Concept" },
    { img: novara1, title: "Site Layout Progress", category: "On-Site" },
    { img: novara2, title: "Infrastructure Development", category: "On-Site" },
    { img: novara3, title: "Strategic Positioning", category: "Aerial" },
    { img: novara300, title: "300 SQM Plot Area", category: "Available" },
    { img: novara500, title: "500 SQM Plot Area", category: "Available" }
  ];

  const plots = [
    {
      size: "300 SQM Plot",
      desc: "Perfect for compact residential homes",
      deposit: "₦200,000",
      plan: "Up to 24 months",
      img: novara300,
      color: "from-green-500/20 to-green-500/5"
    },
    {
      size: "500 SQM Plot",
      desc: "Ideal for standard family homes",
      deposit: "₦200,000",
      plan: "Spread balance conveniently",
      img: novara500,
      color: "from-blue-500/20 to-blue-500/5"
    },
    {
      size: "600 SQM Plot",
      desc: "For spacious duplex or premium build",
      deposit: "₦200,000",
      plan: "Flexible options available",
      img: novaraHero,
      color: "from-purple-500/20 to-purple-500/5"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-secondary selection:text-white">
      {/* Minimal Header */}
      <header className="absolute top-0 left-0 right-0 z-[100] p-6 lg:p-10 flex justify-between items-center">
        <Link to="/" className="group">
          <img 
            src={logo} 
            alt="Light Way Homes" 
            className="h-10 md:h-14 w-auto brightness-0 invert opacity-80 group-hover:opacity-100 transition-all"
          />
        </Link>
        <div className="flex gap-4">
           <a 
            href="https://wa.me/2348038034077?text=Hello Light Way Homes, I'm interested in Novara Courts."
            className="flex items-center gap-2 bg-[#25D366] px-4 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform"
           >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
           </a>
        </div>
      </header>

      {/* Sticky CTA */}
      <div className={`fixed bottom-0 left-0 right-0 z-[110] transition-all duration-500 transform ${isScrolled ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/10 p-4 px-6 flex items-center justify-between shadow-2xl">
          <div className="hidden md:block">
            <p className="font-bold text-lg">NOVARA COURTS ORILEMO</p>
            <p className="text-sm text-white/60">Premium Residential Plots in Mowe</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Button 
              onClick={() => {
                const el = document.getElementById('booking');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex-1 md:flex-initial bg-gradient-to-r from-secondary to-primary hover:shadow-[0_0_20px_rgba(218,28,92,0.4)] text-white font-bold uppercase tracking-wider py-6 px-10"
            >
              Book Inspection
            </Button>
            <a 
              href="https://wa.me/2348038034077?text=Hello Light Way Homes, I'm interested in Novara Courts."
              className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
            </a>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={novaraHero} 
            alt="Novara Courts" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-secondary/20 text-secondary border-secondary/30 mb-8 px-4 py-2 text-sm uppercase tracking-[0.2em] backdrop-blur-md">
                Verified Plot Close From RCCG Camp
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.1]">
                Own Your Plot at <span className="text-secondary italic">Novara Courts</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-xl leading-relaxed">
                Start with just <span className="text-secondary font-black">₦200,000</span> today. 
                Flexible 3–24 months payment plan. Instant allocation. No Omo-Onile issues.
              </p>

              <div className="flex flex-col gap-8 mb-12">
                 <div className="space-y-4">
                    <p className="text-sm font-bold uppercase tracking-widest text-white/40">Flash Sale Ends In:</p>
                    <CountdownTimer />
                 </div>
                 <div className="flex flex-wrap gap-4">
                    <Button 
                      onClick={() => document.getElementById('plots')?.scrollIntoView({ behavior: 'smooth' })}
                      size="lg" 
                      className="bg-secondary text-white px-8 py-7 text-lg font-bold rounded-2xl shadow-xl shadow-secondary/20 hover:scale-105 transition-all"
                    >
                      VIEW PLOT SIZES
                    </Button>
                    <a 
                      href="https://wa.me/2348038034077?text=Hello Light Way Homes, I'm interested in Novara Courts."
                      className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all"
                    >
                      CHAT ON WHATSAPP
                    </a>
                 </div>
              </div>

              <div className="flex items-center gap-3 text-white/60 text-lg md:text-xl italic font-semibold">
                 <AlertTriangle className="w-5 h-5 text-secondary" />
                 Limited plots available at current price.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              id="booking"
            >
              <BookingForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 px-4">
             <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">This Is For Everyone.</h2>
             <p className="text-lg text-white/60">Novara Courts is for smart investors who recognize that early entry in the Mowe corridor is the fastest path to wealth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {[
              { title: "First-Time Owners", icon: <User className="w-8 h-8" /> },
              { title: "Smart Investors", icon: <TrendingUp className="w-8 h-8" /> },
              { title: "Lagos Professionals", icon: <Building2 className="w-8 h-8" /> },
              { title: "Pension Planners", icon: <ShieldCheck className="w-8 h-8" /> },
              { title: "Diaspora Buyers", icon: <MapPin className="w-8 h-8" /> }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-sm tracking-widest uppercase">{item.title}</h3>
                <div className="w-8 h-1 bg-secondary/20 mx-auto mt-4 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE PROBLEM */}
      <section className="py-24 relative overflow-hidden bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
             <div className="text-center mb-16 px-4">
                <Badge className="bg-red-500/20 text-red-400 border-red-500/30 mb-6 uppercase tracking-widest">Why Smart Buyers Are Moving</Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Mowe Instead of Mainland Lagos?</h2>
                <p className="text-lg text-white/60">Every year, waiting costs you more than you think.</p>
             </div>

             <div className="grid md:grid-cols-2 gap-8 mb-12">
                {[
                  { title: "Price Surge", desc: "Lagos land prices double every year, pushing ownership out of reach." },
                  { title: "Rent Trap", desc: "Rent keeps increasing while your income stays the same." },
                  { title: "Land Scams", desc: "Unverified land documentation destroys hard-earned investments." },
                  { title: "Omo-Onile Drama", desc: "Documentation problems and hidden issues cause endless stress." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-black/40 border border-white/5 p-8 rounded-3xl group hover:border-red-500/30 transition-all">
                     <AlertTriangle className="w-8 h-8 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
                     <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                     <p className="text-white/50">{item.desc}</p>
                  </div>
                ))}
             </div>

             <div className="bg-gradient-to-br from-secondary/20 to-primary/20 p-10 rounded-[3rem] border border-white/10 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 blur-[50px] rounded-full -ml-16 -mt-16" />
                <p className="text-2xl font-bold italic mb-6 relative z-10">"Novara Courts was created for smart buyers who want to move early — not late."</p>
                <Button 
                  onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-black hover:bg-white/90 font-bold px-8 py-6 rounded-xl relative z-10"
                >
                  DISCOVER THE SOLUTION
                </Button>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — INTRODUCING NOVARA COURTS */}
      <section className="py-24 relative" id="intro">
         <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-4">
                        <img src={novara1} alt="Novara Site" className="rounded-3xl h-64 w-full object-cover" />
                        <img src={novara2} alt="Novara Layout" className="rounded-3xl h-80 w-full object-cover" />
                     </div>
                     <div className="space-y-4 pt-12">
                        <img src={novara3} alt="Novara Development" className="rounded-3xl h-80 w-full object-cover" />
                        <div className="bg-secondary p-8 rounded-3xl text-center">
                           <Zap className="w-10 h-10 text-white mx-auto mb-4" />
                           <p className="font-bold">Instant Allocation</p>
                        </div>
                     </div>
                  </div>
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -left-6 bg-white text-black p-6 rounded-3xl shadow-2xl">
                     <p className="text-3xl font-black">100%</p>
                     <p className="text-xs font-bold uppercase tracking-widest opacity-60">Secure Investment</p>
                  </div>
               </div>

               <div>
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30 mb-6">WELCOME TO NOVARA COURTS</Badge>
                  <h2 className="text-4xl md:text-6xl font-black mb-8 italic">Orilemo, Mowe</h2>
                  <p className="text-xl text-white/60 mb-10 leading-relaxed">
                    Strategically located in a corridor that is growing fast. Early investors in Mowe always win.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 mb-10">
                     {[
                        "RCCG Camp", "Nestlé", "Apple & Pears", "Christopher University", "International Brewies"
                     ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                           <MapPin className="text-secondary w-5 h-5" />
                           <span className="font-bold">{item}</span>
                        </div>
                     ))}
                  </div>

                  <div className="space-y-4">
                     {[
                        "Secure environment", "Motorable road network", "Electricity connection", 
                        "Street lights", "Verified documentation", "Instant allocation upon full payment"
                     ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                           <CheckCircle2 className="text-green-500 w-5 h-5 shrink-0" />
                           <span className="text-white/80">{item}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-square">
                <img src={novaraHero} alt="Novara Lifestyle" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10">
                   <p className="text-lg italic font-medium leading-relaxed">"You wake up in a quiet, organized estate. Your children play safely within the compound, surrounded by the growth of a new city..."</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="bg-secondary/20 text-secondary border-secondary/30 mb-6 px-4 py-2">THE LIFESTYLE</Badge>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight italic">Imagine This:</h2>
              <ul className="space-y-6">
                {[
                  "Host your family in a secure, gated environment.",
                  "Build your dream home without Omo-Onile stress.",
                  "Enjoy organic property appreciation as Mowe expands.",
                  "Be neighbors with global brands like Nestlé and Olam."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start text-xl text-white/80">
                    <div className="mt-1.5 w-6 h-6 rounded-full border border-secondary flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-12 p-10 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-[2.5rem] border border-white/10">
                <p className="text-3xl font-black italic text-gradient-brand">"That’s Novara Courts."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — AVAILABLE PLOTS */}
      <section className="py-24 bg-[#0a0a0f]" id="plots">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 px-4">
            <Badge className="bg-secondary/20 text-secondary border-secondary/30 mb-6 px-4 py-2">PLOT CATEGORIES</Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-6 italic text-gradient-brand">Choose Your Plot Size</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">All plots are residential and strategically positioned for high appreciation. Secure yours before the next price review.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plots.map((plot, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -10 }}
                className="bg-black border border-white/5 rounded-[3rem] overflow-hidden group hover:border-secondary/50 transition-all shadow-2xl"
              >
                <div className="h-64 relative overflow-hidden">
                  <img src={plot.img} alt={plot.size} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-8">
                    <Badge className="bg-secondary px-4 py-1.5 font-bold uppercase tracking-tighter">{plot.size}</Badge>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold mb-4">{plot.size}</h3>
                  <p className="text-white/40 mb-8 leading-relaxed h-12 line-clamp-2">{plot.desc}</p>
                  <div className="space-y-4 mb-10">
                     <div className="flex justify-between items-center pb-4 border-b border-white/5">
                        <span className="text-white/40 font-medium">Initial Deposit</span>
                        <span className="font-black text-secondary text-lg">{plot.deposit}</span>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-white/40 font-medium">Payment Plan</span>
                        <span className="font-bold text-white/80">{plot.plan}</span>
                     </div>
                  </div>
                  <Button 
                    variant="outline"
                    className="w-full h-16 border-white/10 hover:bg-secondary hover:border-secondary transition-all font-bold rounded-2xl group/btn"
                    onClick={() => {
                        const el = document.getElementById('booking');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    CHECK AVAILABILITY
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — PAYMENT FLEXIBILITY */}
      <section className="py-24 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-black/40 backdrop-blur-3xl p-10 md:p-20 rounded-[4rem] border border-white/10 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full -mr-32 -mt-32" />
             
             <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                   <Badge className="bg-primary/20 text-primary border-primary/30 mb-6 px-4 py-2">NO MILLIONS SITTING IN ACCOUNT? NO PROBLEM.</Badge>
                   <h2 className="text-4xl md:text-7xl font-black mb-8 italic leading-[1] tracking-tighter">Your Dream Home Doesn’t Have To Wait</h2>
                   <p className="text-2xl text-white/50 mb-10 leading-relaxed font-light">
                     Wealth is built by regular investors, not just billionaires. At Novara Courts, we've broken the barrier to land ownership.
                   </p>
                   
                   <div className="space-y-6">
                      {[
                        "Zero Interest on selected plans", 
                        "Spread balance for up to 2 years", 
                        "No hidden maintenance fees", 
                        "Instant documentation acknowledgment"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                           <div className="w-7 h-7 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shadow-[0_0_15px_rgba(218,28,92,0.3)]">
                              <CheckCircle2 className="w-4 h-4" />
                           </div>
                           <span className="text-xl font-bold italic">{item}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] text-center backdrop-blur-3xl shadow-2xl">
                   <p className="text-xs uppercase tracking-[0.4em] text-white/30 mb-6 font-black font-display">Entry Point</p>
                   <p className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter italic">₦200K</p>
                   <p className="text-xl text-white/40 mb-10 italic">Spread your balance over <span className="text-white font-bold underline decoration-secondary">3–24 months</span>.</p>
                   <Button 
                     onClick={() => {
                        const el = document.getElementById('booking');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                     }}
                     className="w-full bg-white text-black hover:bg-white/90 text-2xl font-black py-10 rounded-3xl shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:scale-[1.03] transition-all"
                   >
                     RESERVE MY PLOT
                   </Button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — SOCIAL PROOF */}
      <section className="py-24 border-y border-white/5">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-black mb-6 italic">Join 100+ Happy Landowners</h2>
               <p className="text-white/60">Real buyers. Real allocation. Real documents.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               {[
                 {
                   name: "Mr. Chinedu O.",
                   text: "After my first visit, I was convinced. Documentation was clear and allocation was smooth.",
                   rating: 5
                 },
                 {
                   name: "Mrs. Onajafe",
                   text: "I secured mine on flexible payment. The process was stress-free.",
                   rating: 5
                 }
               ].map((item, idx) => (
                  <div key={idx} className="bg-[#0a0a0f] border border-white/10 p-10 rounded-[3rem] relative">
                     <div className="absolute top-10 right-10 flex gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                           <div key={i} className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        ))}
                     </div>
                     <p className="text-xl italic text-white/80 mb-8 leading-relaxed">"{item.text}"</p>
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-xl font-bold">
                           {item.name.charAt(4)}
                        </div>
                        <p className="font-bold text-lg">{item.name}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 7 — URGENCY */}
      <section className="py-24 bg-red-600/5 relative overflow-hidden text-center">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 blur-[150px] rounded-full" />
         <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic">Only Limited Plots Remaining!</h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto italic">Waiting costs more than acting. Price review may happen soon.</p>
            
            <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
               {[
                 { label: "Prices", action: "Increase", icon: <TrendingUp /> },
                 { label: "Demand", action: "Rises", icon: <Users /> },
                 { label: "Availability", action: "Reduces", icon: <AlertTriangle /> }
               ].map((item, idx) => (
                  <div key={idx} className="bg-black/60 border border-white/10 p-8 rounded-3xl">
                     <div className="text-secondary mb-4 flex justify-center">{item.icon}</div>
                     <p className="text-sm font-bold opacity-40 uppercase tracking-widest mb-1">{item.label}</p>
                     <p className="text-2xl font-bold">{item.action}</p>
                  </div>
               ))}
            </div>
            
            <Button 
               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
               className="bg-secondary text-white font-black px-12 py-8 text-xl rounded-2xl shadow-xl hover:scale-105 transition-all animate-pulse"
            >
               BOOK INSPECTION NOW
            </Button>
         </div>
      </section>

      {/* Property Gallery Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 px-4">
            <Badge className="bg-secondary/20 text-secondary border-secondary/30 mb-6 px-4 py-2 uppercase tracking-widest font-black">PROJECT GALLERY</Badge>
            <h2 className="text-4xl md:text-7xl font-black mb-6 italic leading-tight">Seeing Is Believing</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-xl leading-relaxed font-light">
              We don't sell paper. We sell physical, verifiable land. 
              Take a virtual tour through our current site activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl h-[450px]"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <Badge className="bg-secondary mb-4 px-3 py-1 text-[10px] font-black">{item.category}</Badge>
                  <h3 className="text-2xl font-black italic">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Progress */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 px-4">
             <h2 className="text-4xl md:text-6xl font-black mb-6 italic text-gradient-brand">On-Site Progress</h2>
             <p className="text-white/40 text-xl">Transparency is why our clients trust us. Follow the development of Novara Courts.</p>
          </div>

          <div className="max-w-5xl mx-auto relative px-4">
            {/* Connection Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-secondary/50 via-white/10 to-transparent -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-16">
              {timeline.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 hidden md:block" />
                  <div className="absolute left-8 md:relative md:left-0 z-10 w-5 h-5 rounded-full bg-secondary shadow-[0_0_20px_rgba(218,28,92,1)] border-4 border-black shrink-0" />
                  <div className="flex-1 bg-white/[0.03] border border-white/5 p-8 md:p-10 rounded-[2.5rem] hover:bg-white/[0.05] transition-all ml-16 md:ml-0 group hover:border-secondary/20">
                    <div className="flex justify-between items-start mb-4">
                        <Badge className={`${item.status === 'Completed' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-primary/10 text-primary border-primary/20'} px-4 py-1`}>
                        {item.status}
                        </Badge>
                        <span className="text-white/30 text-xs font-black font-display">{item.date}</span>
                    </div>
                    <h3 className="text-2xl font-black mb-2 italic group-hover:text-secondary transition-colors">{item.stage}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 relative">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-16 italic">Why Buy From Light Way Homes?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { title: "Proven Delivery", desc: "Track record of delivered projects across Nigeria." },
                 { title: "Verified Documents", desc: "Every plot comes with clean, verified paperwork." },
                 { title: "Physical Presence", desc: "Our offices are open and our team is on the ground." },
                 { title: "Transparency", desc: "No hidden fees. No stories. Just property ownership." }
               ].map((item, idx) => (
                  <div key={idx} className="p-8 pb-12 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-secondary/50 transition-all">
                     <div className="bg-secondary/20 w-16 h-16 rounded-2xl flex items-center justify-center text-secondary mx-auto mb-6">
                        <ShieldCheck className="w-8 h-8" />
                     </div>
                     <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
                     <p className="text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 8 — FAQs */}
      <section className="py-24 bg-[#0a0a0f]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16 px-4">
             <h2 className="text-4xl md:text-5xl font-black mb-6 italic">Frequently Asked Questions</h2>
             <p className="text-white/60">Handling objections upfront. Transparency is our core value.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-white/5 rounded-3xl overflow-hidden shadow-2xl"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-8 text-left flex justify-between items-center bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="font-bold text-lg">{faq.question}</span>
                  <ChevronDown className={`transition-transform duration-500 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-white/[0.02]"
                    >
                      <div className="p-8 text-white/60 border-t border-white/5 leading-relaxed text-lg">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <p className="text-white/40 mb-6 italic">Still have questions?</p>
             <a 
               href="https://wa.me/2348038034077?text=Hello Light Way Homes, I have some questions about Novara Courts."
               className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all text-lg"
             >
               <MessageCircle className="text-[#25D366] w-6 h-6" />
               CHAT WITH OUR SUPPORT TEAM
             </a>
          </div>
        </div>
      </section>

      {/* FINAL CLOSE */}
      <section className="py-32 relative text-center overflow-hidden">
         <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-secondary/20 via-transparent to-transparent pointer-events-none" />
         <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-7xl font-black mb-8 italic tracking-tighter leading-tight">
               Don’t Wait Until Prices <br className="hidden md:block" /> Increase Again.
            </h2>
            <p className="text-2xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
               The best time to buy land in Mowe was 3 years ago. <span className="text-white font-bold underline decoration-secondary">The second best time is today.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
               <Button 
                 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                 className="w-full sm:w-auto bg-secondary text-white font-black px-12 py-9 text-2xl rounded-2xl shadow-2xl hover:scale-105 transition-all"
               >
                  SECURE MY PLOT NOW
               </Button>
               <a 
                 href="https://wa.me/2348038034077?text=Hello Light Way Homes, I want to book an inspection for Novara Courts."
                 className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-12 py-6 rounded-2xl font-black text-xl hover:bg-white/10 transition-all"
               >
                  <Calendar className="w-6 h-6 text-secondary" />
                  BOOK FREE INSPECTION
               </a>
            </div>
            
            <div className="mt-20 pt-20 border-t border-white/5">
               <img 
                 src={logo} 
                 alt="Light Way Homes" 
                 className="h-12 mx-auto mb-8 opacity-40"
               />
               <p className="text-white/20 text-sm italic">
                  &copy; {new Date().getFullYear()} Light Way Homes & Investment Limited. All Rights Reserved.
               </p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default NovaraCourts;
