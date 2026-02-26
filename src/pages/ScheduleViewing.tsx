import { useState } from "react";
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2,
  Building2,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const ScheduleViewing = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    property: "Naples Arepo",
    preferredDate: "",
    preferredTime: "",
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
          subject: `Viewing Request: ${formData.property}`,
          _subject: `New Viewing Request for ${formData.property}`
        })
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          property: "Naples Arepo",
          preferredDate: "",
          preferredTime: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-secondary selection:text-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Content Side */}
              <AnimatedSection animation="fade-up" className="space-y-8">
                <div>
                  <span className="inline-block text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4">
                    VIP Experience
                  </span>
                  <h1 className="text-5xl md:text-7xl font-black mb-8 italic tracking-tighter leading-tight">
                    Schedule Your <span className="text-gradient-brand">Private Viewing</span>
                  </h1>
                  <p className="text-xl text-white/60 leading-relaxed max-w-xl">
                    Experience luxury in person. Book a dedicated time with our lifestyle consultants 
                    to tour the Naples Arepo and see the craftsmanship first-hand.
                  </p>
                </div>

                <div className="space-y-6 pt-8">
                  <div className="flex gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl group hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Personalized Tour</h3>
                      <p className="text-white/40">A dedicated consultant for your entire visit.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl group hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Architectural Brief</h3>
                      <p className="text-white/40">Detailed breakdown of materials, design, and ROI.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl group hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Neighborhod Insights</h3>
                      <p className="text-white/40">Explore the Arepo corridor and its future potential.</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Form Side */}
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="bg-card/30 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
                  {/* Decorative Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 blur-[60px] rounded-full" />
                  
                  {status === "success" ? (
                    <div className="text-center py-10 space-y-6">
                      <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mx-auto">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h2 className="text-3xl font-bold">Request Received!</h2>
                      <p className="text-white/60 text-lg">
                        Thank you for your interest. One of our senior consultants will contact you 
                        within 24 hours to confirm your viewing schedule.
                      </p>
                      <Button 
                        onClick={() => window.location.href = "/"}
                        variant="outline" 
                        className="w-full h-14 border-white/20"
                      >
                        Return Home
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold italic mb-8">Tell us about your visit</h3>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/40 ml-1">Full Name</label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                            <Input 
                              required
                              placeholder="Your full name"
                              className="bg-white/5 border-white/10 h-14 pl-12 rounded-xl focus:ring-secondary"
                              innerClassName="placeholder:text-white/20"
                              value={formData.fullName}
                              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-white/40 ml-1">Email Address</label>
                            <div className="relative">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                              <Input 
                                required
                                type="email"
                                placeholder="name@email.com"
                                className="bg-white/5 border-white/10 h-14 pl-12 rounded-xl focus:ring-secondary"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-white/40 ml-1">Phone Number</label>
                            <div className="relative">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                              <Input 
                                required
                                type="tel"
                                placeholder="+234 ..."
                                className="bg-white/5 border-white/10 h-14 pl-12 rounded-xl focus:ring-secondary"
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/40 ml-1">Select Property</label>
                          <select 
                            className="w-full h-14 bg-white/5 border border-white/10 px-4 rounded-xl focus:ring-2 focus:ring-secondary outline-none appearance-none"
                            value={formData.property}
                            onChange={(e) => setFormData({...formData, property: e.target.value})}
                          >
                            <option value="Naples Arepo" className="bg-[#0a0a0f]">Naples Arepo</option>
                            <option value="Novara Court" className="bg-[#0a0a0f]">Novara Court</option>
                            <option value="Roman Heights" className="bg-[#0a0a0f]">Roman Heights</option>
                            <option value="General Inquiry" className="bg-[#0a0a0f]">General Inquiry</option>
                          </select>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-white/40 ml-1">Preferred Date</label>
                            <div className="relative">
                              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 pointer-events-none" />
                              <input 
                                required
                                type="date"
                                className="w-full h-14 bg-white/5 border border-white/10 pl-12 pr-4 rounded-xl focus:ring-2 focus:ring-secondary outline-none"
                                value={formData.preferredDate}
                                onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-white/40 ml-1">Preferred Time</label>
                            <div className="relative">
                              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 pointer-events-none" />
                              <select 
                                required
                                className="w-full h-14 bg-white/5 border border-white/10 pl-12 pr-4 rounded-xl focus:ring-2 focus:ring-secondary outline-none appearance-none"
                                value={formData.preferredTime}
                                onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                              >
                                <option value="" className="bg-[#0a0a0f]">Select Time</option>
                                <option value="Morning (9AM - 12PM)" className="bg-[#0a0a0f]">Morning (9AM - 12PM)</option>
                                <option value="Afternoon (12PM - 4PM)" className="bg-[#0a0a0f]">Afternoon (12PM - 4PM)</option>
                                <option value="Late Afternoon (4PM - 6PM)" className="bg-[#0a0a0f]">Late Afternoon (4PM - 6PM)</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/40 ml-1">Special Requirements</label>
                          <textarea 
                            rows={3}
                            placeholder="Tell us about any specific unit or feature you'd like to see..."
                            className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:ring-2 focus:ring-secondary outline-none resize-none"
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                          />
                        </div>

                        {status === "error" && (
                          <p className="text-red-400 text-sm text-center">
                            Something went wrong. Please try again or contact us via WhatsApp.
                          </p>
                        )}

                        <Button 
                          type="submit" 
                          disabled={status === "loading"}
                          className="w-full h-16 bg-gradient-to-r from-secondary to-primary text-white font-bold text-lg rounded-2xl shadow-xl shadow-secondary/20 hover:scale-[1.02] transition-all"
                        >
                          {status === "loading" ? "SUBMITTING..." : "CONFIRM VIEWING REQUEST"}
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </AnimatedSection>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ScheduleViewing;
