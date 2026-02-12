import {
  Home,
  Building2,
  FileCheck,
  Handshake,
  PiggyBank,
  Ruler,
  ArrowRight,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const services = [
  {
    icon: Home,
    title: "Property Sales",
    description:
      "We offer a diverse portfolio of premium residential properties including duplexes, bungalows, and apartments in strategic locations across Lagos and Ogun State.",
    features: [
      "Premium residential properties",
      "Strategic locations",
      "Modern architectural designs",
      "Competitive pricing",
    ],
  },
  {
    icon: Building2,
    title: "Land Sales",
    description:
      "Acquire dry, government-approved land in fast-developing areas. Our land offerings come with complete documentation and are ready for immediate development.",
    features: [
      "Dry and solid land",
      "Government-approved documentation",
      "Survey and C of O available",
      "Strategic investment locations",
    ],
  },
  {
    icon: FileCheck,
    title: "Property Documentation",
    description:
      "We ensure all our properties come with proper legal documentation including Survey, C of O, Governor's Consent, or Deed of Assignment for your peace of mind.",
    features: [
      "Title verification",
      "Legal documentation processing",
      "Governor's consent",
      "Deed of assignment",
    ],
  },
  {
    icon: Handshake,
    title: "Real Estate Advisory",
    description:
      "Get expert guidance on property investment, market trends, and strategic acquisition. Our experienced team provides personalized consultation for your real estate needs.",
    features: [
      "Investment consultation",
      "Market analysis",
      "Property valuation",
      "Portfolio management",
    ],
  },
  {
    icon: PiggyBank,
    title: "Flexible Payment Plans",
    description:
      "We understand that buying a home is a significant investment. That's why we offer flexible payment plans tailored to suit your financial capacity.",
    features: [
      "6-18 months payment spread",
      "Outright payment discounts",
      "Installment options",
      "Customized plans available",
    ],
  },
  {
    icon: Ruler,
    title: "Property Development",
    description:
      "From conceptualization to completion, we develop premium estates with world-class infrastructure, modern amenities, and sustainable building practices.",
    features: [
      "Estate development",
      "Infrastructure provision",
      "Quality construction",
      "Sustainable practices",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "Schedule a meeting with our team to discuss your property needs, budget, and preferences.",
  },
  {
    step: "02",
    title: "Property Selection",
    description:
      "Browse through our curated collection of properties and select options that match your criteria.",
  },
  {
    step: "03",
    title: "Site Inspection",
    description:
      "Visit the property location with our team to see firsthand what you're investing in.",
  },
  {
    step: "04",
    title: "Documentation",
    description:
      "Complete the necessary paperwork and payment. We handle all documentation for you.",
  },
  {
    step: "05",
    title: "Handover",
    description:
      "Receive your property documents and keys. Welcome to your new home!",
  },
];

const Services = () => {
  return (
    <Layout>
      <PageHero
        title="Our Services"
        subtitle="What We Offer"
        description="Comprehensive real estate solutions tailored to meet your property ownership dreams. From property sales to development, we've got you covered."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Services Grid */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto container-padding relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.title}
                animation="fade-up"
                delay={index * 100}
              >
                <div id={
                  service.title === "Property Sales" ? "sales" : 
                  service.title === "Real Estate Advisory" ? "advisory" : 
                  service.title === "Land Sales" ? "land" :
                  service.title === "Property Documentation" ? "doc" :
                  service.title === "Flexible Payment Plans" ? "payment" :
                  service.title === "Property Development" ? "development" :
                  undefined
                } className="bg-card rounded-2xl p-6 md:p-8 border border-border card-hover group h-full flex flex-col">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-brand rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted overflow-hidden">
        <div className="container mx-auto container-padding">
          <AnimatedSection animation="fade-up" className="text-center mb-10 md:mb-16">
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
              Our Simple Process
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm md:text-base">
              We've streamlined the property acquisition process to make your
              journey to homeownership as smooth as possible.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
            {process.map((item, index) => (
              <AnimatedSection
                key={item.step}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="relative text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-background shadow-lg">
                    <span className="text-xl md:text-2xl font-bold text-primary-foreground">
                      {item.step}
                    </span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[2px] bg-gradient-to-r from-secondary/30 to-transparent" />
                  )}
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground px-4 sm:px-0">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" className="mt-16 text-center">
            <a 
              href={`https://wa.me/2348075161213?text=${encodeURIComponent("Hello Light Way Homes, I'm interested in your real estate services. I'd like to discuss a property acquisition or investment.")}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-bold text-lg hover:bg-[#20BD5A] transition-all shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Speak with a Consultant Now
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimatedSection animation="slide-up-reveal" className="text-center lg:text-left">
              <span className="text-secondary font-semibold uppercase tracking-widest text-sm">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Your Trusted Partner in Real Estate
              </h2>
              <p className="text-muted-foreground mb-6">
                With years of experience in the Nigerian real estate market, we
                have helped hundreds of families achieve their dream of
                homeownership. Our commitment to excellence, transparency, and
                customer satisfaction sets us apart.
              </p>
              <div className="space-y-4">
                {[
                  "100% Government-approved properties",
                  "Transparent and flexible payment plans",
                  "Dedicated customer support team",
                  "Track record of successful deliveries",
                  "Premium locations with high ROI potential",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up-reveal" delay={100}>
              <div className="bg-gradient-brand rounded-2xl p-8 md:p-10 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Take the first step towards owning your dream home. Contact us
                  today for a free consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/properties">
                    <Button
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
                    >
                      View Properties
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
