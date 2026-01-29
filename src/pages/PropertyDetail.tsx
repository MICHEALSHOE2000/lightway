import { useParams, Link, useNavigate } from "react-router-dom";
import {
  MapPin,
  Bed,
  Bath,
  Ruler,
  Check,
  Phone,
  MessageCircle,
  ArrowLeft,
  Calendar,
  Shield,
  Home,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { getPropertyBySlug } from "@/data/properties";
import { useState } from "react";

const PropertyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const property = getPropertyBySlug(slug || "");
  const [activeImage, setActiveImage] = useState(0);

  if (!property) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Property Not Found
            </h1>
            <p className="text-muted-foreground mb-6">
              The property you're looking for doesn't exist.
            </p>
            <Button variant="hero" onClick={() => navigate("/properties")}>
              View All Properties
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Image Section */}
      <section className="relative pt-20 md:pt-24">
        <div className="absolute inset-0 bg-gradient-hero opacity-95 h-48 md:h-64" />

        <div className="container mx-auto container-padding relative z-10">
          {/* Back Button & Breadcrumb */}
          <div className="py-4 md:py-6">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back</span>
            </button>

            <div className="flex flex-wrap items-center gap-2 text-sm text-primary-foreground/70">
              <Link to="/" className="hover:text-secondary transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link
                to="/properties"
                className="hover:text-secondary transition-colors"
              >
                Properties
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary-foreground font-medium">
                {property.title}
              </span>
            </div>
          </div>

          {/* Image Gallery */}
          <AnimatedSection animation="fade-up" className="mb-8">
            <div className="grid lg:grid-cols-3 gap-4">
              {/* Main Image */}
              <div className="lg:col-span-2 relative aspect-[16/10] rounded-2xl overflow-hidden">
                <img
                  src={property.images[activeImage]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${
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
              </div>

              {/* Thumbnails */}
              <div className="flex lg:flex-col gap-4">
                {property.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative aspect-[16/10] lg:aspect-[16/9] rounded-xl overflow-hidden flex-1 transition-all ${
                      activeImage === index
                        ? "ring-2 ring-secondary ring-offset-2"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${property.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Property Details */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title & Location */}
              <AnimatedSection animation="fade-up">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{property.address}</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  {property.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  {property.bedrooms && (
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Bed className="w-5 h-5" />
                      <span>{property.bedrooms} Bedrooms</span>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Bath className="w-5 h-5" />
                      <span>{property.bathrooms} Bathrooms</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Ruler className="w-5 h-5" />
                    <span>{property.size}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Home className="w-5 h-5" />
                    <span>{property.type}</span>
                  </div>
                </div>

              </AnimatedSection>

              {/* Description */}
              <AnimatedSection animation="fade-up" delay={100}>
                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                  <h2 className="text-xl font-bold text-foreground mb-4">
                    About This Property
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {property.description}
                  </p>
                </div>
              </AnimatedSection>

              {/* Features */}
              <AnimatedSection animation="fade-up" delay={150}>
                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                  <h2 className="text-xl font-bold text-foreground mb-6">
                    Property Features
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {property.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Amenities */}
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                  <h2 className="text-xl font-bold text-foreground mb-6">
                    Estate Amenities
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {property.amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Payment Plans */}
              <AnimatedSection animation="fade-up" delay={250}>
                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                  <h2 className="text-xl font-bold text-foreground mb-6">
                    Payment Plans
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {property.paymentPlans.map((plan, index) => (
                      <div
                        key={index}
                        className="bg-muted rounded-xl p-5 text-center card-hover"
                      >
                        <Calendar className="w-8 h-8 text-secondary mx-auto mb-3" />
                        <h3 className="font-bold text-foreground mb-2">
                          {plan.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-1">
                          Duration: {plan.duration}
                        </p>
                        <p className="text-sm text-muted-foreground mb-1">
                          Initial: {plan.initialDeposit}
                        </p>
                        {plan.monthlyPayment && (
                          <p className="text-sm text-muted-foreground">
                            {plan.monthlyPayment}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection animation="slide-left" delay={100}>
                <div className="sticky top-28 space-y-6">
                  {/* Price Card */}
                  <div className="bg-card rounded-2xl p-6 border border-border shadow-card">
                    <div className="text-center mb-6">
                      <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
                        Initial Price
                      </span>
                      <div className="text-3xl md:text-4xl font-bold text-gradient-brand mt-1">
                        {property.price}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button variant="hero" size="lg" className="w-full">
                        <Phone className="w-5 h-5" />
                        Schedule a Visit
                      </Button>
                      <a
                        href={`https://wa.me/2348075161213?text=Hello, I'm interested in ${property.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#20BD5A] transition-all"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Contact Card */}
                  <div className="bg-muted rounded-2xl p-6 border border-border">
                    <h3 className="font-bold text-foreground mb-4">
                      Have Questions?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Our team is ready to assist you with any inquiries about
                      this property.
                    </p>
                    <div className="space-y-3 text-sm">
                      <a
                        href="tel:+2348038034077"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        +234 803 803 4077
                      </a>
                      <a
                        href="tel:+2348075161213"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        +234 807 516 1213
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PropertyDetail;
