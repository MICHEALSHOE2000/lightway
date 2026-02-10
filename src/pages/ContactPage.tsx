import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const socials = [
  {
    icon: Facebook,
    href: "https://facebook.com/lightwayhomes",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/lightway_homes",
    label: "Instagram",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/lightwayhomes",
    label: "Twitter",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/light-way-homes-and-investment/",
    label: "LinkedIn",
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    interestedEstate: "",
    subject: "",
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
          subject: "",
          message: "",
        });
        alert("Thank you! Your message has been sent successfully.");
      } else {
        alert("Oops! There was a problem sending your message.");
      }
    } catch (error) {
      alert("Oops! There was a problem sending your message.");
    }
  };

  return (
    <Layout>
      <PageHero
        title="Contact Us"
        subtitle="Get In Touch"
        description="Take the first step towards property ownership. Contact us today and let our expert team guide you through your real estate journey."
        breadcrumbs={[{ label: "Contact" }]}
      />

      {/* Contact Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto container-padding relative z-10">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info */}
            <AnimatedSection
              animation="slide-right"
              className="lg:col-span-2 space-y-4"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Contact Information
              </h2>

              <a
                href="tel:+2348075161213"
                className="flex items-center gap-4 p-4 bg-card rounded-xl card-hover border border-border group"
              >
                <div className="w-11 h-11 md:w-12 md:h-12 bg-gradient-brand rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">
                    Phone
                  </div>
                  <div className="font-semibold text-sm md:text-base group-hover:text-primary transition-colors">
                    +234 807 516 1213
                  </div>
                </div>
              </a>

              <a
                href="tel:+2348038034077"
                className="flex items-center gap-4 p-4 bg-card rounded-xl card-hover border border-border group"
              >
                <div className="w-11 h-11 md:w-12 md:h-12 bg-gradient-brand rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">
                    Mobile
                  </div>
                  <div className="font-semibold text-sm md:text-base group-hover:text-primary transition-colors">
                    +234 803 803 4077
                  </div>
                </div>
              </a>

              <a
                href="mailto:Info.lightwayhomesltd@gmail.com"
                className="flex items-center gap-4 p-4 bg-card rounded-xl card-hover border border-border group"
              >
                <div className="w-11 h-11 md:w-12 md:h-12 bg-gradient-brand rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">
                    Email
                  </div>
                  <div className="font-semibold text-sm md:text-base group-hover:text-primary transition-colors break-all">
                    Info.lightwayhomesltd@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border group card-hover">
                <div className="w-11 h-11 md:w-12 md:h-12 bg-gradient-brand rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">
                    Office Address
                  </div>
                  <div className="font-semibold text-sm md:text-base leading-relaxed">
                    No. 4, Oyewo close, Clay Busstop, Juli Estate, Off Kudirat
                    Abiola way, Oregun, Ikeja Lagos.
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border group card-hover">
                <div className="w-11 h-11 md:w-12 md:h-12 bg-gradient-brand rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Clock className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">
                    Working Hours
                  </div>
                  <div className="font-semibold text-sm md:text-base">
                    Mon - Sat: 9:00 AM - 5:00 PM
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-muted-foreground text-sm mb-3">
                  Follow us on social media
                </p>
                <div className="flex items-center gap-2">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-secondary hover:bg-muted/80 hover:scale-110 transition-all"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
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
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-[#20BD5A] transition-all hover:scale-[1.02] shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection animation="slide-left" className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-5 sm:p-6 md:p-8 border border-border shadow-card">
                <h3 className="text-xl md:text-2xl font-bold mb-5 md:mb-6 text-foreground">
                  Send Us a Message
                </h3>
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2 font-medium">
                        Full Name
                      </label>
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
                      <label className="block text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2 font-medium">
                        Phone Number
                      </label>
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
                    <label className="block text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2 font-medium">
                      Email Address
                    </label>
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
                    <label className="block text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2 font-medium">
                      Interested Estate
                    </label>
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
                    <label className="block text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2 font-medium">
                      Subject
                    </label>
                    <input
                      required
                      type="text"
                      name="subject"
                      className="w-full px-4 py-2.5 md:py-3 bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground text-sm md:text-base"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2.5 md:py-3 bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-foreground text-sm md:text-base"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full shadow-lg shadow-secondary/20"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section className="py-0 relative">
        <div className="relative h-[500px] md:h-[600px] bg-muted overflow-hidden">
          {/* Map Iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.298284698585!2d3.3592815749767287!3d6.657519193339097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93f9c6d36e2f%3A0x673059d9c227361a!2sOyewo%20Cl%2C%20Oregun%2C%20Lagos%20100271%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1707035728362!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Light Way Homes Office Location"
            className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
          />
          
          {/* Overlay Card - Office Information */}
          <AnimatedSection 
            animation="slide-up-reveal" 
            className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 w-[calc(100%-2rem)] md:w-auto md:max-w-md z-10"
          >
            <div className="bg-card/95 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
                    Visit Our Office
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We're here to help you find your dream property
                  </p>
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground leading-relaxed">
                    No. 4, Oyewo Close, Clay Busstop, Juli Estate, Off Kudirat Abiola Way, Oregun, Ikeja Lagos
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-sm text-foreground">
                    Mon - Sat: 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
              
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=6.657519193339097,3.3592815749767287"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full group shadow-lg"
                >
                  Get Directions
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What documents do I need to purchase a property?",
                answer:
                  "You'll need a valid means of identification (International passport, Driver's license, or National ID), proof of address, and passport photographs. Our team will guide you through the documentation process.",
              },
              {
                question: "Do you offer payment plans?",
                answer:
                  "Yes, we offer flexible payment plans ranging from 6 to 18 months depending on the property. Outright payment also comes with attractive discounts.",
              },
              {
                question: "Are your properties government-approved?",
                answer:
                  "Absolutely! All our properties come with 100% government-approved documentation including Survey, C of O, Governor's Consent, or Deed of Assignment.",
              },
              {
                question: "Can I schedule a site inspection?",
                answer:
                  "Yes, we welcome site inspections. You can schedule a visit by calling us or sending a WhatsApp message. We conduct inspections Monday through Saturday.",
              },
            ].map((faq, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
