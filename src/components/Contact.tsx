import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { trackClarityEvent } from "@/utils/clarity";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    interestedEstate: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xlgwdbvz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          interestedEstate: "",
          message: "",
        });
        trackClarityEvent("contact_form_success");
        alert("Thank you! Your message has been sent successfully.");
      } else {
        alert("Oops! There was a problem sending your message.");
      }
    } catch (error) {
      alert("Oops! There was a problem sending your message.");
    }
  };

  return (
    <section id="contact" className="section-padding bg-muted relative overflow-hidden">
      <div className="container mx-auto container-padding relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary font-semibold uppercase tracking-widest text-xs md:text-sm mb-4 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            Ready To Own Your <span className="text-primary">Dream Home?</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Take the first step towards property ownership. Contact us today and let our 
            expert team guide you through your real estate journey.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">
          {/* Contact Info */}
          <AnimatedSection animation="slide-right" className="lg:col-span-2 space-y-4">
            <a 
              href="tel:+2348075161213" 
              className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-elevated border border-border group transition-all duration-300"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-0.5">Phone</div>
                <div className="font-semibold text-sm md:text-base text-foreground">+234 807 516 1213</div>
              </div>
            </a>

            <a 
              href="tel:+2348038034077" 
              className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-elevated border border-border group transition-all duration-300"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-0.5">Mobile</div>
                <div className="font-semibold text-sm md:text-base text-foreground">+234 803 803 4077</div>
              </div>
            </a>

            <a 
              href="mailto:Info.lightwayhomesltd@gmail.com" 
              className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-elevated border border-border group transition-all duration-300"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-0.5">Email</div>
                <div className="font-semibold text-sm md:text-base text-foreground break-all">Info.lightwayhomesltd@gmail.com</div>
              </div>
            </a>

            <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-card group">
              <div className="w-11 h-11 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-0.5">Office Address</div>
                <div className="font-semibold text-sm md:text-base leading-relaxed text-foreground">No. 4, Oyewo close, Clay Busstop, Juli Estate, Off Kudirat Abiola way, Oregun, Ikeja Lagos.</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border shadow-card group">
              <div className="w-11 h-11 md:w-12 md:h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-0.5">Working Hours</div>
                <div className="font-semibold text-sm md:text-base text-foreground">Mon - Sat: 9:00 AM - 5:00 PM</div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a 
              href={`https://wa.me/2348075161213?text=${encodeURIComponent(
                formData.interestedEstate === "the-naples"
                  ? "Hello, I'm interested in the Naples 4 Bedroom Terrace with Bq, can I get more info about it?"
                  : formData.interestedEstate === "novara-court"
                  ? "Hello, I'm interested in The Novara Courts (Mowe), can I get more info about it?"
                  : formData.interestedEstate === "roman-heights"
                  ? "Hello, I'm interested in Roman Heights, can I get more info about it?"
                  : "Hello Light Way, I am interested in your property offerings."
              )}`} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackClarityEvent("whatsapp_chat_click")}
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-[#20BD5A] transition-all hover:scale-[1.02] shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </AnimatedSection>
 
          {/* Contact Form */}
          <AnimatedSection animation="slide-left" className="lg:col-span-3">
            <div className="bg-card rounded-2xl p-5 sm:p-6 md:p-8 border border-border shadow-card">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">Send Us a <span className="text-secondary">Message</span></h3>
              <p className="text-sm text-muted-foreground mb-6">Fill out the form below to get a <span className="text-secondary font-bold">Free Property Investment Guide</span> sent to your email.</p>
              <form 
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2 font-medium">Full Name</label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      className="w-full px-4 py-2.5 md:py-3 bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground text-sm md:text-base"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2 font-medium">Phone Number</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-2.5 md:py-3 bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground text-sm md:text-base"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2 font-medium">Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full px-4 py-2.5 md:py-3 bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground text-sm md:text-base"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2 font-medium">Interested Estate</label>
                  <select 
                    name="interestedEstate"
                    className="w-full px-4 py-2.5 md:py-3 bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground text-sm md:text-base"
                    value={formData.interestedEstate}
                    onChange={(e) => setFormData({ ...formData, interestedEstate: e.target.value })}
                  >
                    <option value="">Select an estate</option>
                    <option value="roman-heights">Roman Heights</option>
                    <option value="the-naples">Naples Arepo</option>
                    <option value="novara-court">The Novara Courts</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2 font-medium">Message</label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2.5 md:py-3 bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-foreground text-sm md:text-base"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
