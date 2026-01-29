import AnimatedSection from "@/components/AnimatedSection";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
}

const PageHero = ({ title, subtitle, description, breadcrumbs }: PageHeroProps) => {
  return (
    <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
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
        {breadcrumbs && breadcrumbs.length > 0 && (
          <AnimatedSection animation="fade-up" className="mb-6">
            <Breadcrumb>
              <BreadcrumbList className="justify-center">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {breadcrumbs.map((crumb, index) => (
                  <span key={index} className="contents">
                    <BreadcrumbSeparator className="text-primary-foreground/50" />
                    <BreadcrumbItem>
                      {crumb.href ? (
                        <BreadcrumbLink asChild>
                          <Link to={crumb.href} className="text-primary-foreground/70 hover:text-secondary transition-colors">
                            {crumb.label}
                          </Link>
                        </BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage className="text-primary-foreground font-medium">
                          {crumb.label}
                        </BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                  </span>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </AnimatedSection>
        )}

        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto">
          {subtitle && (
            <span className="inline-block text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              {subtitle}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 md:mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-primary-foreground/80 text-base md:text-lg lg:text-xl leading-relaxed">
              {description}
            </p>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PageHero;
