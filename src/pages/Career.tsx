import { Briefcase, MapPin, Clock, DollarSign, ChevronRight, Users, Target, TrendingUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const vacancies = [
  {
    id: 1,
    title: "Sales Executive",
    type: "Full-time",
    location: "Lagos, Nigeria",
    salary: "Competitive + Commission",
    description: "We are looking for dynamic and results-driven Sales Executives to join our growing team. You will be responsible for selling our premium real estate properties and providing exceptional customer service.",
    requirements: [
      "Minimum of 2 years sales experience (Real estate experience is a plus)",
      "Excellent communication and interpersonal skills",
      "Ability to work independently and meet sales targets",
      "Valid driver's license and own vehicle preferred",
      "Strong negotiation and closing skills",
      "Proficiency in Microsoft Office and CRM tools",
    ],
    benefits: [
      "Attractive base salary with uncapped commission",
      "Health insurance coverage",
      "Professional training and development",
      "Career growth opportunities",
      "Performance bonuses",
    ],
  },
  {
    id: 2,
    title: "Senior Sales Manager",
    type: "Full-time",
    location: "Lagos, Nigeria",
    salary: "Very Competitive",
    description: "Lead our sales team to achieve ambitious targets while developing strategic partnerships and expanding our market presence in the Nigerian real estate sector.",
    requirements: [
      "5+ years of real estate sales experience with 2+ years in management",
      "Proven track record of exceeding sales targets",
      "Strong leadership and team management skills",
      "Deep understanding of Nigerian real estate market",
      "Excellent presentation and communication skills",
      "Bachelor's degree in Business, Marketing, or related field",
    ],
    benefits: [
      "Highly competitive salary package",
      "Company car and fuel allowance",
      "Comprehensive health and life insurance",
      "Annual performance bonus",
      "Leadership development programs",
    ],
  },
];

const whyJoinUs = [
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Fast-track your career with our structured growth path and leadership development programs.",
  },
  {
    icon: Users,
    title: "Amazing Team Culture",
    description: "Work alongside passionate professionals who support and inspire each other daily.",
  },
  {
    icon: Target,
    title: "Rewarding Compensation",
    description: "Enjoy competitive salaries, uncapped commissions, and performance-based bonuses.",
  },
];

const Career = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-secondary/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto container-padding relative z-10">
          <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Build Your <span className="text-secondary">Career</span> With Us
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              Be part of a dynamic team that's transforming the Nigerian real estate landscape. 
              We're looking for passionate individuals ready to make a difference.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Why Light Way Homes?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Why You'll Love Working Here
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {whyJoinUs.map((item, index) => (
              <AnimatedSection key={item.title} animation="fade-up" delay={index * 100}>
                <div className="bg-card rounded-2xl p-8 border border-border card-hover text-center group">
                  <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Current Vacancies */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto container-padding">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Open Positions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Current Vacancies
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Explore our current job openings and find the perfect role for you.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {vacancies.map((vacancy, index) => (
              <AnimatedSection key={vacancy.id} animation="fade-up" delay={index * 150}>
                <div className="bg-card rounded-2xl border border-border overflow-hidden card-hover">
                  {/* Vacancy Header */}
                  <div className="bg-gradient-brand p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                          {vacancy.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-primary-foreground/80 text-sm">
                          <span className="flex items-center gap-1.5">
                            <Briefcase className="w-4 h-4" />
                            {vacancy.type}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            {vacancy.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <DollarSign className="w-4 h-4" />
                            {vacancy.salary}
                          </span>
                        </div>
                      </div>
                      <Button 
                        variant="secondary" 
                        size="lg"
                        className="bg-white text-primary hover:bg-white/90"
                        onClick={() => window.location.href = 'mailto:careers@lightwayhomesltd.com?subject=Application for ' + vacancy.title}
                      >
                        Apply Now
                        <ChevronRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Vacancy Details */}
                  <div className="p-6 md:p-8">
                    <p className="text-muted-foreground mb-6 text-lg">{vacancy.description}</p>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Requirements */}
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                          <Target className="w-5 h-5 text-secondary" />
                          Requirements
                        </h4>
                        <ul className="space-y-3">
                          {vacancy.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                              <ChevronRight className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-secondary" />
                          Benefits
                        </h4>
                        <ul className="space-y-3">
                          {vacancy.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                              <ChevronRight className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Application CTA */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="mt-12 text-center bg-card rounded-2xl p-8 md:p-12 border border-border">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Don't See a Suitable Role?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your CV and we'll reach out when a matching position opens.
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.location.href = 'mailto:careers@lightwayhomesltd.com?subject=General Application'}
              >
                Submit Your CV
                <ChevronRight className="w-5 h-5" />
              </Button>
              <div className="mt-6">
                <a 
                  href={`https://wa.me/2348075161213?text=${encodeURIComponent("Hello Light Way Homes, I'm interested in joining your team. I'd like to inquire about current or future career opportunities.")}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-[#25D366] font-bold hover:text-[#20BD5A] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat with HR on WhatsApp
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
