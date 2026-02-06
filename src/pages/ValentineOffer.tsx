import { useState } from "react";
import { 
  Heart, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  Calendar,
  ShieldCheck,
  TrendingUp,
  Tag
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

const ValentineOffer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    plotSize: "500sqm",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Valentine Slot Secured:", formData);
    toast.success("Success! Your Valentine offer slot has been secured. We will contact you shortly.");
    setFormData({ fullName: "", phone: "", plotSize: "500sqm" });
  };

  const promoPrices = [
    { size: "300SQM", actual: "₦4.5 Million", promo: "₦3.15 Million" },
    { size: "500SQM", actual: "₦6.5 Million", promo: "₦4.55 Million" },
    { size: "600SQM", actual: "₦7.5 Million", promo: "₦5.25 Million" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Valentine Background */}
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/20 via-transparent to-transparent opacity-60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Floating Hearts Animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute text-red-500/20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                fontSize: `${20 + Math.random() * 30}px`,
              }}
            >
              <Heart fill="currentColor" />
            </div>
          ))}
        </div>

        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 text-red-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-6 rounded-full">
                <Heart className="w-4 h-4 fill-current animate-pulse" />
                Special Valentine's Flash Offer
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
                Secure Love. Secure Land. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
                  Secure the Future.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                This Valentine season, Light Way Homes is giving you a rare opportunity to own land at 
                <span className="text-white font-semibold"> Novara Court, Orilemo–Mowe</span> at a 
                <span className="text-red-500 font-bold"> massive 30% discount</span> — but only for a short time.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-xl">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span className="text-white/90 font-medium">Offer Closes Feb 16th, 2026</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-xl">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span className="text-white/90 font-medium">Orilemo–Mowe, Ogun State</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto container-padding">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Valentine Promo Prices
            </h2>
            <p className="text-muted-foreground">Outright Purchase Discounts — Only until Feb 16</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {promoPrices.map((price, index) => (
              <AnimatedSection 
                key={price.size} 
                animation="fade-up" 
                delay={index * 100}
                className="relative group"
              >
                <div className="bg-card border border-border rounded-2xl p-8 hover:border-red-500/30 transition-all duration-300 shadow-card hover:shadow-elevated">
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
                    Save 30%
                  </div>
                  <Tag className="w-10 h-10 text-red-500 mb-6" />
                  <h3 className="text-2xl font-bold mb-2">{price.size}</h3>
                  <div className="space-y-4 mb-8">
                    <div>
                      <span className="text-sm text-muted-foreground line-through">Actual Price: {price.actual}</span>
                    </div>
                    <div>
                      <span className="text-xs text-red-500 uppercase font-bold tracking-wider">Promo Price:</span>
                      <div className="text-3xl font-bold text-foreground">{price.promo}</div>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Registered Survey
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Instant Allocation
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center" animation="fade-up">
            <p className="text-red-600 font-bold text-lg animate-pulse">
              🚨 Prices return to normal after February 16!
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why This Offer Section */}
      <section className="py-20 bg-muted relative overflow-hidden">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What Makes This Offer <span className="text-red-500">Different?</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Unlike other promos that rush you to pay… we believe in confidence.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Inspect First", desc: "See your property physically", icon: ShieldCheck },
                  { title: "Pay After", desc: "No payment until you're satisfied", icon: Calendar },
                  { title: "No Pressure", desc: "Total transparency always", icon: CheckCircle2 },
                  { title: "Secure Slot", desc: "Lock in discount today", icon: MessageCircle },
                ].map((item, i) => (
                  <div key={i} className="bg-card p-5 rounded-xl border border-border shadow-sm">
                    <item.icon className="w-8 h-8 text-red-500 mb-3" />
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 space-y-3">
                <p className="flex items-center gap-3 text-foreground font-semibold">
                  <ArrowRight className="w-5 h-5 text-red-500" /> You don’t lose the discount
                </p>
                <p className="flex items-center gap-3 text-foreground font-semibold">
                  <ArrowRight className="w-5 h-5 text-red-500" /> You don’t miss the opportunity
                </p>
                <p className="flex items-center gap-3 text-foreground font-semibold">
                  <ArrowRight className="w-5 h-5 text-red-500" /> You decide with confidence
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left">
              <div className="bg-card rounded-2xl p-8 border border-border shadow-elevated">
                <h3 className="text-2xl font-bold mb-6 text-foreground border-b border-border pb-4">
                  About Novara Court
                </h3>
                <div className="space-y-6">
                  {[
                    { title: "Strategic Location", desc: "Fast-growing Orilemo, Mowe Interchange", icon: MapPin },
                    { title: "High Appreciation", desc: "Ideal for residential & investment purposes", icon: TrendingUp },
                    { title: "Secure Estate", desc: "Gated layout within a developing industrial hub", icon: ShieldCheck },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-red-600/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm md:text-base">{item.title}</h4>
                        <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm italic text-muted-foreground">
                      Developed by Light Way Homes — Trusted & Reliable.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final Countdown/Urgency Section */}
      <section className="py-20 bg-[#0a0a0f] text-white">
        <div className="container mx-auto container-padding text-center max-w-3xl">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">
              "Flowers fade. Chocolate finishes. <br />
              <span className="text-red-500">Land appreciates.</span>"
            </h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              This Valentine, don’t just celebrate love — build a legacy with Novara Court. 
              The discount <span className="text-red-500 font-bold uppercase tracking-widest">Ends February 16</span>.
              Only secured slots enjoy the discounted price.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form Section */}
      <section id="secure-slot" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-xl mx-auto">
            <AnimatedSection className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">SECURE YOUR SLOT NOW</h2>
              <p className="text-muted-foreground">Fill the form below to reserve your Valentine offer discount</p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up">
              <form onSubmit={handleSubmit} className="bg-card border border-border p-6 md:p-8 rounded-2xl shadow-card">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition-all"
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground">Phone Number (WhatsApp preferred)</label>
                    <input
                      required
                      type="tel"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition-all"
                      placeholder="e.g. +234..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground">Preferred Plot Size</label>
                    <select 
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition-all"
                      value={formData.plotSize}
                      onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                    >
                      <option value="300sqm">300 SQM Plot (₦3.15M)</option>
                      <option value="500sqm">500 SQM Plot (₦4.55M)</option>
                      <option value="600sqm">600 SQM Plot (₦5.25M)</option>
                    </select>
                  </div>

                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    🔒 Securing a slot guarantees your discounted price even if your physical inspection 
                    happens after the promo ends.
                  </p>

                  <Button type="submit" variant="hero" size="lg" className="w-full bg-red-600 hover:bg-red-700 border-none shadow-lg shadow-red-600/20 py-6 text-lg">
                    Lock In My Discount
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </form>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="tel:+2348075161213" className="flex items-center gap-3 text-muted-foreground hover:text-red-500 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-semibold">+234 807 516 1213</span>
                </a>
                <a 
                  href="https://wa.me/2348075161213?text=Hello%20Lightway%20I%20want%20to%20secure%20my%20Valentine%20slot" 
                  target="_blank" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-green-500 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="font-semibold">WhatsApp Chat</span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ValentineOffer;
