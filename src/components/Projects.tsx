import { MapPin, ArrowUpRight, Home, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { projects } from "@/data/properties";

// Map projects to display format with price ranges (Naples and Novara only)
const projectDisplayData = [
  {
    ...projects[0], // Naples Estate
    price: "From ₦7.5M",
    type: "Land & Townhouse",
    size: "300-500 SQM",
  },
  {
    ...projects[1], // Novara Courts
    price: "From ₦5M",
    type: "Residential Land",
    size: "300-600 SQM",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-muted relative overflow-hidden">
      <div className="container mx-auto container-padding relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
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
              animation="fade-up"
              delay={index * 150}
            >
              <Link to={`/properties?project=${project.slug}`} className="block h-full">
                <div className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated border border-border h-full transition-all duration-300 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-48 sm:h-52 md:h-60 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate/80 via-slate/30 to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
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
                    <div className="absolute bottom-3 left-3">
                      <span className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">{project.price}</span>
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-3 right-3 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-5">
                    <div className="flex items-center gap-1.5 text-muted-foreground text-xs md:text-sm mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground">
                      {project.title}
                    </h3>
                    
                    {/* Property details */}
                    <div className="flex items-center gap-4 text-xs md:text-sm text-muted-foreground mb-4 pb-4 border-b border-border">
                      <div className="flex items-center gap-1.5">
                        <Home className="w-4 h-4" />
                        <span>{project.type}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Ruler className="w-4 h-4" />
                        <span>{project.size}</span>
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="w-full group/btn">
                      View Details
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* View All CTA */}
        <AnimatedSection className="text-center mt-10 md:mt-12" delay={450}>
          <Link to="/properties">
            <Button variant="hero" size="lg" className="group">
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
