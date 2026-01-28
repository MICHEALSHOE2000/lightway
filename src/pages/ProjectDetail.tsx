import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, ArrowUpRight, Bed, Ruler, LayoutGrid, Home, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { getProjectBySlug, getPropertiesByProject, projects } from "@/data/properties";
import NotFound from "@/pages/NotFound";
import FAQ from "@/components/FAQ";
import { useState, useMemo } from "react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState<"All" | "Land" | "Building">("All");
  
  const project = getProjectBySlug(slug || "");
  const allProperties = getPropertiesByProject(slug || "");

  const filteredProperties = useMemo(() => {
    if (activeTab === "All") return allProperties;
    return allProperties.filter(p => p.type.includes(activeTab));
  }, [activeTab, allProperties]);

  if (!project) {
    return <NotFound />;
  }

  const tabs = [
    { id: "All", label: "All Units", icon: LayoutGrid },
    { id: "Land", label: "Land Plots", icon: TreePine },
    { id: "Building", label: "Houses/Buildings", icon: Home },
  ] as const;

  return (
    <Layout>
      <PageHero
        title={project.title}
        subtitle="Estate Details"
        description={project.description}
        breadcrumbs={[
          { label: "Properties", href: "/properties" },
          { label: project.title },
        ]}
      />

      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container mx-auto container-padding relative z-10">
          <Link to="/properties" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to All Properties
          </Link>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">About {project.title}</h2>
            <p className="text-muted-foreground leading-relaxed max-w-4xl text-lg">
              {project.description}
            </p>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.amenities?.map((amenity, index) => (
                <div key={index} className="bg-muted/50 p-3 rounded-lg text-sm text-foreground/80 font-medium border border-border/50">
                  {amenity}
                </div>
              ))}
            </div>
          </div>

          {allProperties.some(p => p.type.includes("Land")) && allProperties.some(p => p.type.includes("Building")) ? (
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-border pb-6">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">Available Units</h3>
              
              {/* Category Slider/Segmented Control - Only shown if both types exist */}
              <div className="relative p-1 bg-muted rounded-xl flex items-center w-full max-w-md">
                <div 
                  className="absolute h-[calc(100%-8px)] bg-white shadow-sm rounded-lg transition-all duration-300 ease-in-out z-0"
                  style={{
                    width: `${100 / tabs.length}%`,
                    left: `${(tabs.findIndex(t => t.id === activeTab) * 100) / tabs.length + (4 / (tabs.length * 2))}%`,
                    transform: 'translateX(-2px)'
                  }}
                />
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold transition-colors duration-200 ${
                      activeTab === tab.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.id}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="mb-8 border-b border-border pb-4">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">Available Units</h3>
            </div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {filteredProperties.map((property, index) => (
              <AnimatedSection
                key={property.id}
                animation="fade-up"
                delay={index * 100}
              >
                <Link to={`/properties/${property.slug}`}>
                  <div className="group bg-card rounded-xl overflow-hidden shadow-card card-hover border border-border h-full">
                    {/* Image */}
                    <div className="relative h-48 sm:h-52 md:h-60 overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover img-zoom"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />

                      {/* Status Badge */}
                      <div className="absolute top-3 left-3">
                        <span
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${
                            property.status === "Now Selling"
                              ? "bg-secondary/90 text-secondary-foreground"
                              : property.status === "Coming Soon"
                              ? "bg-foreground/70 text-background"
                              : "bg-primary/90 text-primary-foreground"
                          }`}
                        >
                          {property.status}
                        </span>
                      </div>

                      {/* Price overlay */}
                      <div className="absolute bottom-3 left-3">
                        <span className="text-xl md:text-2xl font-bold text-primary-foreground drop-shadow-lg">
                          {property.price}
                        </span>
                      </div>

                      {/* Arrow */}
                      <div className="absolute top-3 right-3 w-9 h-9 bg-primary-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-secondary group-hover:scale-110">
                        <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-5">
                      <div className="flex items-center gap-1.5 text-muted-foreground text-xs md:text-sm mb-2">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{property.location}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground">
                        {property.title}
                      </h3>

                      {/* Property details */}
                      <div className="flex items-center gap-4 text-xs md:text-sm text-muted-foreground mb-4 pb-4 border-b border-border">
                        <div className="flex items-center gap-1.5">
                          <Bed className="w-4 h-4" />
                          <span>{property.type}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Ruler className="w-4 h-4" />
                          <span>{property.size}</span>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group/btn"
                      >
                        View Details
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <FAQ category={project.slug === "the-naples" ? "Naples" : "Novara"} />

      {/* Other Estates Section */}
      <section className="section-padding bg-muted/30 border-t border-border">
        <div className="container mx-auto container-padding">
          <h2 className="text-2xl font-bold mb-8 text-foreground">Explore Other Estates</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.slug !== slug)
              .map((otherProject) => (
                <Link key={otherProject.id} to={`/projects/${otherProject.slug}`} className="group block">
                  <div className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={otherProject.image} 
                        alt={otherProject.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {otherProject.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {otherProject.description}
                      </p>
                      <div className="mt-4 flex items-center text-primary font-medium text-sm">
                        View Estate <ArrowUpRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
