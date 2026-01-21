import { CheckCircle, ArrowRight, Target, Shield, Users, Zap, Lightbulb, Heart, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountUpNumber from "@/components/CountUpNumber";
import AnimatedSection from "@/components/AnimatedSection";
import funmilayoImg from "@/assets/team/funmilayo-adesanya.jpg";
import olumideImg from "@/assets/team/olumide-olujuyigbe.jpg";
import agboolaImg from "@/assets/team/agboola-osunbanjo.jpg";

const features = [
  "Premium estate developments with modern architecture",
  "Flexible payment plans for every budget",
  "100% government-approved documentation",
  "Strategic locations with high ROI potential",
  "Comprehensive real estate advisory services",
  "Dedicated customer support team",
];

const coreValues = [
  {
    icon: Target,
    title: "Excellence",
    description: "We are practicing and providing competent, quality, and efficient services with a skilled team on board."
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "We embrace a collaborative effort to achieve our ultimate goal which is making our clients' home dreams a reality."
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "We place premium value on customer satisfaction."
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "We make use of cutting-edge, innovative, and modern art in making your dream home."
  },
  {
    icon: Zap,
    title: "Passion",
    description: "We are enthusiastic, fond, and committed to building your ideal homes."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We adhere to uncompromising, undivided, and unbroken honesty in delivering the best services and homes."
  },
];

const teamMembers = [
  {
    name: "Funmilayo Adesanya",
    role: "MD/CEO",
    image: funmilayoImg,
    description: "Leading Light Way Homes with vision and dedication to transform the Nigerian real estate landscape.",
  },
  {
    name: "Olumide Olujuyigbe",
    role: "Chartered Architect",
    image: olumideImg,
    description: "Bringing architectural excellence and innovative designs to every project.",
  },
  {
    name: "Agboola O. Osunbanjo",
    role: "Civil/Structural Engineer",
    image: agboolaImg,
    description: "Ensuring structural integrity and engineering excellence in all our developments.",
  },
];

const testimonials = [
  {
    quote: "Light Way Homes delivered as promised with my Land and ensured my allocation and documentation were done immediately after my final payment. Thank you for helping me find my dream home. I look forward to working with you again in the future.",
    author: "Maryam Abubakar",
  },
  {
    quote: "The team was not only professional but also friendly and approachable. The day I called was the same day I inspected the site. After my due diligence, I paid for my two-bedroom maisonette, and to my surprise, I got my receipt and contract of sale the same day. I would highly recommend their services to anyone in need of a trusted and reliable real estate company.",
    author: "Bukola Falana",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto container-padding relative z-10">
        {/* About Intro */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          <AnimatedSection animation="slide-right">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary font-semibold uppercase tracking-widest text-xs md:text-sm mb-4 rounded-full">
              About Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
              We're a Reputable Real Estate Firm with <span className="text-primary">Uncompromising Integrity</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg mb-6 leading-relaxed">
              Light Way Homes and Investment Limited is a real estate development company committed to bridging 
              the massive housing deficit in Nigeria. We offer a new path to home ownership for Nigerians 
              especially first time homeowners, by making it possible to own a home without stress or strain.
            </p>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg mb-6 leading-relaxed">
              Through a well-crafted concept of developing multiple units within a colony, acquiring affordable, 
              luxurious, sustainable and environmental friendly houses for our affable customers becomes very easy.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-3 mb-6 md:mb-8">
              {features.map((feature, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                  <div className="flex items-start gap-2.5 group p-2 rounded-lg hover:bg-muted transition-colors">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-xs md:text-sm">{feature}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <Button variant="hero" size="lg" className="group">
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </AnimatedSection>

          {/* Mission & Vision */}
          <AnimatedSection animation="slide-left" className="space-y-6">
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card hover:shadow-elevated transition-all duration-300 group">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To blend creativity with professionalism in delivering well-structured, globally acceptable, 
                and top-notch properties to our revered clients.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card hover:shadow-elevated transition-all duration-300 group">
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Lightbulb className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world-class real estate development company, driven by value innovation and optimum service 
                to deliver functional homes.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-semibold uppercase tracking-widest text-sm rounded-full">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">Our Core <span className="text-secondary">Values</span></h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {coreValues.map((value, index) => (
              <AnimatedSection key={value.title} animation="scale" delay={index * 100}>
                <div className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-elevated transition-all duration-300 group h-full">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <value.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Meet Our Team */}
        <div className="mb-20">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary font-semibold uppercase tracking-widest text-sm rounded-full">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">Meet Our <span className="text-primary">Core Team</span></h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.name} animation="fade-up" delay={index * 150}>
                <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-elevated transition-all duration-300 group">
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-secondary font-semibold mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-semibold uppercase tracking-widest text-sm rounded-full">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">What Our <span className="text-secondary">Clients Say</span></h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.author} animation="fade-up" delay={index * 150}>
                <div className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-elevated transition-all duration-300 relative group">
                  <Quote className="w-12 h-12 text-muted absolute top-6 right-6" />
                  <p className="text-muted-foreground italic mb-6 leading-relaxed relative z-10">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.author}</p>
                      <p className="text-muted-foreground text-sm">Satisfied Client</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-10 md:pt-12 border-t border-border">
          {[
            { end: 500, suffix: "+", label: "Happy Homeowners" },
            { end: 5, suffix: "+", label: "Years of Excellence" },
            { end: 10, suffix: "+", label: "Premium Estates" },
            { end: 99, suffix: "%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <AnimatedSection key={stat.label} animation="fade-up" delay={index * 100}>
              <div className="text-center p-4 md:p-6 bg-card rounded-xl border border-border shadow-card hover:shadow-elevated transition-all duration-300 group">
                <CountUpNumber 
                  end={stat.end} 
                  suffix={stat.suffix} 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-1 inline-block" 
                />
                <div className="text-muted-foreground text-xs md:text-sm">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
