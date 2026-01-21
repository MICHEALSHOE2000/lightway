import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowUpRight, Bed, Ruler, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { properties } from "@/data/properties";

const statusOptions = ["All", "Now Selling", "Pre-Order", "Coming Soon"];

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || property.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <Layout>
      <PageHero
        title="Our Properties"
        subtitle="Premium Estates"
        description="Discover our collection of carefully developed estates across Nigeria, designed for comfort, luxury, and lasting value."
        breadcrumbs={[{ label: "Properties" }]}
      />

      {/* Filters Section */}
      <section className="py-6 md:py-8 bg-gradient-to-b from-muted/60 to-background border-b border-border">
        <div className="container mx-auto container-padding">
          <div className="bg-card rounded-xl border border-border shadow-sm p-4 md:p-6">
            <div className="flex flex-col gap-4">
              {/* Search Row */}
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by property name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                />
              </div>

              {/* Filter Row */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Filter className="w-4 h-4" />
                  <span className="font-medium">Filter by status:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {statusOptions.map((status) => (
                    <button
                      key={status}
                      onClick={() => setStatusFilter(status)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        statusFilter === status
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "bg-muted border border-border text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto container-padding relative z-10">
          {filteredProperties.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No properties found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters
              </p>
            </div>
          ) : (
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
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Properties;
