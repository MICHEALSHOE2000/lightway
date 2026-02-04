import { MapPin, ArrowUpRight, Home, Ruler, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { projects } from "@/data/properties";

// Map projects to display format with price ranges (Naples and Novara only)
const projectDisplayData = [
  {
    ...projects[0], // Naples 4-Bed BQ
    price: "₦30,000,000 (Deposit)",
    type: "Premium Townhouse",
    size: "4 Bedroom + BQ",
    paymentPlan: "Move in immediately",
    verification: "C of O / Built Approval",
  },
  {
    ...projects[1], // Naples Land
    price: "From ₦3M",
    type: "Serviced Plots",
    size: "300-500 SQM",
    paymentPlan: "Spread balance up to 12 months",
    verification: "Registered Survey",
  },
  {
    ...projects[2], // Novara Courts
    price: "From ₦200K",
    type: "Residential Land",
    size: "300-600 SQM",
    paymentPlan: "Flexible Payment Options",
    verification: "Approved Survey & Title",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-muted relative overflow-hidden">
      <div className="container mx-auto container-padding relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="slide-up-reveal" className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-semibold uppercase tracking-widest text-xs md:text-sm mb-4 rounded-full">
            Our Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            Premium <span className="text-secondary">Estates</span> For You
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Discover our collection of carefully developed estates across Nigeria, 
            designed for comfort, luxury, and lasting value.
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {projectDisplayData.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="slide-up-reveal"
              delay={index * 150}
            >
              <Link 
                to={index === 0 ? `/properties/the-naples-4bed-terrace-townhouse` : `/projects/${project.slug}`} 
                className="block h-full cursor-pointer"
              >
                <div className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated border border-border h-full transition-all duration-500 ease-premium hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-48 sm:h-52 md:h-60 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-premium group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 left-3 transform group-hover:scale-110 transition-transform">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                        project.status === "Now Selling" 
                          ? "bg-secondary text-white" 
                          : project.status === "Coming Soon"
                          ? "bg-slate text-white"
                          : "bg-primary text-white"
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Price overlay */}
                    <div className="absolute bottom-3 left-3 transform group-hover:translate-x-1 transition-transform text-left">
                      <span className="text-[10px] md:text-xs font-semibold text-white/90 uppercase tracking-wider block mb-0.5">
                        Initial Deposit
                      </span>
                      <span className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">{project.price}</span>
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-3 right-3 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-5 flex flex-col flex-grow">
                    <div className="mb-4">
                      <div className="flex items-center gap-1.5 text-muted-foreground text-xs md:text-sm mb-2">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{project.location}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    
                    {/* Property details */}
                    <div className="mt-auto">
                      <div className="flex flex-col gap-2 text-xs md:text-sm text-muted-foreground mb-4 pb-4 border-b border-border">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1.5 font-medium text-foreground/80">
                            <Home className="w-4 h-4 text-secondary" />
                            <span>{project.type}</span>
                          </div>
                          <div className="flex items-center gap-1.5 font-medium text-foreground/80">
                            <Ruler className="w-4 h-4 text-secondary" />
                            <span>{project.size}</span>
                          </div>
                        </div>
                      </div>

                      <Button variant="hero" size="md" className="w-full group/btn hover-magnetic text-white font-bold transition-all duration-300 shadow-md hover:shadow-lg">
                        Explore This Property
                        <ArrowUpRight className="w-5 h-5 ml-1.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* View All CTA */}
        <AnimatedSection className="text-center mt-10 md:mt-12" animation="fade-up" delay={450}>
          <Link to="/properties">
            <Button variant="hero" size="lg" className="group hover-lift shadow-brand">
              View All Properties
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
