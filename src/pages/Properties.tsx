import { Link } from "react-router-dom";
import { MapPin, ArrowUpRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { projects, getPropertiesByProject } from "@/data/properties";

const Properties = () => {
  return (
    <Layout>
      <PageHero
        title="Our Estates"
        subtitle="Premium Developments"
        description="Explore our carefully curated portfolio of premium estates across Nigeria. Each development is designed with excellence, comfort, and lasting value in mind."
        breadcrumbs={[{ label: "Estates" }]}
      />

      {/* Estates Grid */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto container-padding relative z-10">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => {
              const propertyCount = getPropertiesByProject(project.slug).length;
              
              return (
                <AnimatedSection
                  key={project.id}
                  animation="fade-up"
                  delay={index * 150}
                >
                  <Link 
                    to={project.slug === "the-naples" ? "/properties/the-naples-4bed-terrace-townhouse" : `/projects/${project.slug}`} 
                    className="block h-full"
                  >
                    <div className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated border border-border h-full transition-all duration-300 hover:-translate-y-1">
                      {/* Image */}
                      <div className="relative h-64 md:h-72 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                        
                        {/* Status Badge */}
                        <div className="absolute top-4 left-4">
                          <span className={`px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-sm ${
                            project.status === "Now Selling" 
                              ? "bg-secondary/90 text-white" 
                              : project.status === "Coming Soon"
                              ? "bg-slate-700/70 text-white"
                              : "bg-primary/90 text-white"
                          }`}>
                            {project.status}
                          </span>
                        </div>

                        {/* Price Overlay */}
                        <div className="absolute bottom-4 left-4">
                          <span className="text-[10px] md:text-xs font-semibold text-white/90 uppercase tracking-wider block mb-0.5">
                            Initial Deposit
                          </span>
                          <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg leading-none">
                            {project.slug === "the-naples" ? "₦30,000,000" : project.slug === "the-naples-land" ? "₦3M" : "₦200K"}
                          </span>
                        </div>

                        {/* Arrow */}
                        <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110">
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 md:p-6 flex flex-col flex-grow">
                        <div className="mb-4">
                          <div className="flex items-center gap-1.5 text-primary font-semibold text-xs md:text-sm mb-2 uppercase tracking-tight">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{project.location}</span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-2">
                            {project.description}
                          </p>
                        </div>
                        
                        <div className="mt-auto pt-5 border-t border-border flex flex-col gap-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <Home className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-foreground">20 Units Available</span>
                          </div>
                          
                          <Button 
                            variant="hero" 
                            size="lg"
                            className="w-full text-white font-bold group/btn shadow-md hover:shadow-xl transition-all duration-300"
                          >
                            Explore Estate Details
                            <ArrowUpRight className="w-5 h-5 ml-1.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Properties;
