import {
  CheckCircle,
  Target,
  Shield,
  Users,
  Zap,
  Lightbulb,
  Heart,
  Quote,
  Award,
  Building,
  Calendar,
} from "lucide-react";
import CountUpNumber from "@/components/CountUpNumber";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
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
    description:
      "We are practicing and providing competent, quality, and efficient services with a skilled team on board.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "We embrace a collaborative effort to achieve our ultimate goal which is making our clients' home dreams a reality.",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "We place premium value on customer satisfaction.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description:
      "We make use of cutting-edge, innovative, and modern art in making your dream home.",
  },
  {
    icon: Zap,
    title: "Passion",
    description:
      "We are enthusiastic, fond, and committed to building your ideal homes.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We adhere to uncompromising, undivided, and unbroken honesty in delivering the best services and homes.",
  },
];

const teamMembers = [
  {
    name: "Funmilayo Adesanya",
    role: "MD/CEO",
    image: "https://lightwayhomesltd.com/images/funmi3.jpg",
    description:
      "Leading Light Way Homes with vision and dedication to transform the Nigerian real estate landscape.",
  },
  {
    name: "Olumide Olujuyigbe",
    role: "Chartered Architect",
    image: "https://lightwayhomesltd.com/images/olumide2.jpg",
    description:
      "Bringing architectural excellence and innovative designs to every project.",
  },
  {
    name: "Agboola O. Osunbanjo",
    role: "Civil/Structural Engineer",
    image: "https://lightwayhomesltd.com/images/Engr-Biyi2.jpg",
    description:
      "Ensuring structural integrity and engineering excellence in all our developments.",
  },
];

const testimonials = [
  {
    quote:
      "Light Way Homes delivered as promised with my Land and ensured my allocation and documentation were done immediately after my final payment. Thank you for helping me find my dream home. I look forward to working with you again in the future.",
    author: "Maryam Abubakar",
  },
  {
    quote:
      "The team was not only professional but also friendly and approachable. The day I called was the same day I inspected the site. After my due diligence, I paid for my two-bedroom maisonette, and to my surprise, I got my receipt and contract of sale the same day. I would highly recommend their services to anyone in need of a trusted and reliable real estate company.",
    author: "Bukola Falana",
  },
];

const milestones = [
  {
    year: "2018",
    title: "Company Founded",
    description: "Light Way Homes was established with a vision to transform Nigerian real estate.",
  },
  {
    year: "2019",
    title: "First Project Launch",
    description: "Successfully launched our first estate development project.",
  },
  {
    year: "2021",
    title: "500+ Happy Homeowners",
    description: "Reached the milestone of helping over 500 families own their dream homes.",
  },
  {
    year: "2023",
    title: "Expansion",
    description: "Expanded operations with multiple premium estate projects across Lagos and Ogun State.",
  },
];

const AboutPage = () => {
  return (
    <Layout>
      <PageHero
        title="About Light Way Homes"
        subtitle="Who We Are"
        description="A reputable real estate firm committed to bridging the massive housing deficit in Nigeria with uncompromising integrity."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* About Intro */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto container-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimatedSection animation="slide-right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-foreground">
                We're a Reputable Real Estate Firm with{" "}
                <span className="text-gradient-brand">
                  Uncompromising Integrity
                </span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base lg:text-lg mb-6 leading-relaxed">
                Light Way Homes and Investment Limited is a real estate
                development company committed to bridging the massive housing
                deficit in Nigeria. We offer a new path to home ownership for
                Nigerians especially first time homeowners, by making it
                possible to own a home without stress or strain.
              </p>
              <p className="text-muted-foreground text-sm md:text-base lg:text-lg mb-6 leading-relaxed">
                Through a well-crafted concept of developing multiple units
                within a colony, acquiring affordable, luxurious, sustainable
                and environmental friendly houses for our affable customers
                becomes very easy.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <AnimatedSection
                    key={index}
                    animation="fade-up"
                    delay={index * 50}
                  >
                    <div className="flex items-start gap-2.5 group">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-foreground/80 text-xs md:text-sm">
                        {feature}
                      </span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            {/* Mission & Vision */}
            <AnimatedSection animation="slide-left" className="space-y-6">
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border card-hover">
                <div className="w-14 h-14 bg-gradient-brand rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To blend creativity with professionalism in delivering
                  well-structured, globally acceptable, and top-notch properties
                  to our revered clients.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border card-hover">
                <div className="w-14 h-14 bg-gradient-brand rounded-xl flex items-center justify-center mb-4">
                  <Lightbulb className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A world-class real estate development company, driven by value
                  innovation and optimum service to deliver functional homes.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto container-padding">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Milestones & Achievements
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <AnimatedSection
                  key={milestone.year}
                  animation={index % 2 === 0 ? "slide-right" : "slide-left"}
                  delay={index * 100}
                >
                  <div
                    className={`flex flex-col md:flex-row items-center gap-6 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      <div className="bg-card rounded-2xl p-6 border border-border card-hover">
                        <div className="flex items-center gap-3 mb-3">
                          <Calendar className="w-5 h-5 text-secondary" />
                          <span className="text-secondary font-bold">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-secondary rounded-full flex-shrink-0 hidden md:block" />
                    <div className="flex-1" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Our Core Values
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {coreValues.map((value, index) => (
              <AnimatedSection
                key={value.title}
                animation="scale"
                delay={index * 100}
              >
                <div className="bg-card rounded-xl p-6 border border-border card-hover group h-full">
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto container-padding">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Meet Our Core Team
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection
                key={member.name}
                animation="fade-up"
                delay={index * 150}
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border card-hover group">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-secondary font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {member.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              What Our Clients Say
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={testimonial.author}
                animation="fade-up"
                delay={index * 150}
              >
                <div className="bg-card rounded-2xl p-8 border border-border card-hover relative">
                  <Quote className="w-10 h-10 text-secondary/30 absolute top-6 right-6" />
                  <p className="text-muted-foreground italic mb-6 leading-relaxed relative z-10">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Satisfied Client
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { end: 500, suffix: "+", label: "Happy Homeowners" },
              { end: 5, suffix: "+", label: "Years of Excellence" },
              { end: 10, suffix: "+", label: "Premium Estates" },
              { end: 99, suffix: "%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <AnimatedSection
                key={stat.label}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="text-center p-4 md:p-6 bg-card rounded-xl border border-border card-hover group">
                  <CountUpNumber
                    end={stat.end}
                    suffix={stat.suffix}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-brand mb-1 group-hover:scale-105 transition-transform inline-block"
                  />
                  <div className="text-muted-foreground text-xs md:text-sm">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
