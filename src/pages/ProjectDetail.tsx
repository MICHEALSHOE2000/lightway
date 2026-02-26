import { useMemo, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  ArrowUpRight,
  Bed,
  Ruler,
  LayoutGrid,
  Home,
  TreePine,
  CheckCircle2,
  MessageCircle,
  CalendarCheck2,
  Clock3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { getProjectBySlug, getPropertiesByProject } from "@/data/properties";
import NotFound from "@/pages/NotFound";
import FAQ from "@/components/FAQ";
import novaraHero from "@/assets/projects/novara-hero.jpg";

const NOVARA_WHATSAPP =
  "https://wa.me/2348075161213?text=Hello%20Light%20Way%20Homes%2C%20I%20want%20to%20secure%20a%20plot%20at%20Novara%20Courts.";
const BOOK_INSPECTION = "/schedule-viewing";

const NovaraCountdown = () => {
  const targetDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date;
  }, []);

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const interval = window.setInterval(() => {
      const difference = targetDate.getTime() - Date.now();
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-primary">
        <Clock3 className="h-4 w-4" />
        Price review countdown
      </div>
      <div className="grid grid-cols-3 gap-3 text-center">
        {["Days", "Hours", "Minutes"].map((unit, index) => {
          const values = [timeLeft.days, timeLeft.hours, timeLeft.minutes];
          return (
            <div key={unit} className="rounded-lg bg-background p-3 shadow-sm border border-border">
              <p className="text-2xl font-bold text-foreground">{values[index]}</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{unit}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const NovaraLanding = () => {
  const plotOptions = [
    {
      title: "300 SQM Plot",
      description: "Perfect for compact residential homes",
      detail: "Start with ₦200,000 initial deposit. Flexible payment plan up to 24 months.",
    },
    {
      title: "500 SQM Plot",
      description: "Ideal for standard family homes",
      detail: "Start with ₦200,000 initial deposit. Spread balance conveniently.",
    },
    {
      title: "600 SQM Plot",
      description: "For spacious duplex or premium build",
      detail: "Start with ₦200,000 initial deposit. Flexible payment options available.",
    },
  ];

  const benefits = [
    "Secure environment",
    "Motorable road network",
    "Electricity connection",
    "Street lights",
    "Verified documentation",
    "Instant allocation upon full payment",
  ];

  return (
    <Layout showHeader={false}>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <img src={novaraHero} alt="Novara Courts" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/85 to-slate-950" />
        <div className="relative container mx-auto grid gap-10 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
          <div>
            <p className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider">
              Novara Courts, Orilemo, Mowe
            </p>
            <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
              Own a Verified Plot Minutes From RCCG Camp — Start With Just ₦200,000 Today
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Flexible 3–24 Months Payment Plan | Instant Allocation | No Omo-Onile Issues
            </p>
            <p className="mt-6 max-w-2xl text-white/80">
              Novara Courts is your opportunity to secure affordable land in a fast-developing corridor just outside Lagos — without the crazy Lagos prices.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to={BOOK_INSPECTION}>
                  <CalendarCheck2 className="mr-2 h-5 w-5" />
                  Book Free Site Inspection
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="font-semibold">
                <a href={NOVARA_WHATSAPP} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat On WhatsApp Now
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm font-medium text-amber-300">Limited plots available at current price.</p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/95 p-6 text-foreground shadow-2xl">
            <h2 className="mb-2 text-xl font-bold">Book a Free Site Inspection</h2>
            <p className="mb-4 text-sm text-muted-foreground">Fill this quick form and our team will contact you immediately.</p>
            <form className="space-y-3" action={BOOK_INSPECTION} method="get">
              <input className="w-full rounded-lg border border-border bg-background px-3 py-2" type="text" placeholder="Full Name" required />
              <input className="w-full rounded-lg border border-border bg-background px-3 py-2" type="tel" placeholder="Phone Number" required />
              <select className="w-full rounded-lg border border-border bg-background px-3 py-2" defaultValue="">
                <option value="" disabled>
                  Plot Size Interested In
                </option>
                <option>300 SQM</option>
                <option>500 SQM</option>
                <option>600 SQM</option>
              </select>
              <Button type="submit" className="w-full" variant="hero">
                Reserve Inspection Slot
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto space-y-14 px-6">
          <div>
            <h2 className="text-3xl font-bold">Why Smart Buyers Are Moving To Mowe Instead of Mainland Lagos</h2>
            <ul className="mt-6 grid gap-3 text-muted-foreground">
              <li>• Lagos land prices double</li>
              <li>• Rent keeps increasing</li>
              <li>• Land scams are rising</li>
              <li>• Documentation problems destroy investments</li>
            </ul>
            <p className="mt-4 text-lg">And many people wait too long… then regret it.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Welcome To Novara Courts — Orilemo, Mowe</h2>
            <p className="mt-4 text-muted-foreground">
              Strategically located minutes from RCCG Camp, Nestlé, Apple & Pears, and Christopher University.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-2 rounded-xl border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Choose Your Plot Size</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {plotOptions.map((plot) => (
                <div key={plot.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <p className="mb-2 text-xl font-bold text-primary">{plot.title}</p>
                  <p className="font-medium">{plot.description}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{plot.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm font-medium">All plots are residential. Secure yours before price review.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-muted/30 p-6">
              <h2 className="text-2xl font-bold">Your Dream Home Doesn’t Have To Wait</h2>
              <p className="mt-4 text-muted-foreground">
                Start with ₦200,000 today and spread your balance over 3–24 months. No pressure, no rush, no financial stress.
              </p>
            </div>
            <NovaraCountdown />
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-3xl font-bold">Join 100+ Happy Landowners At Novara Courts</h2>
            <p className="mt-3 text-muted-foreground">Real buyers. Real allocation. Real documents.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <blockquote className="rounded-xl bg-muted/40 p-4 text-sm">
                “After my first visit, I was convinced. Documentation was clear and allocation was smooth.” — Mr. Chinedu O.
              </blockquote>
              <blockquote className="rounded-xl bg-muted/40 p-4 text-sm">
                “I secured mine on flexible payment. The process was stress-free.” — Mrs. Onajafe
              </blockquote>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-4 text-sm">
              <p><strong>Where is Novara Courts located?</strong><br />Orilemo, Mowe, Ogun State — minutes from RCCG Camp.</p>
              <p><strong>Who is the developer?</strong><br />Light Way Homes Ltd.</p>
              <p><strong>Are there encumbrances?</strong><br />No known encumbrances. Verified documentation.</p>
              <p><strong>What title does the land have?</strong><br />Registered survey available.</p>
              <p><strong>How long can I spread payment?</strong><br />Between 3 and 24 months.</p>
              <p><strong>What document do I get after deposit?</strong><br />Receipt and payment acknowledgement. Allocation upon full payment.</p>
            </div>
          </div>

          <div className="rounded-2xl bg-primary p-8 text-primary-foreground">
            <h2 className="text-3xl font-extrabold">Don’t Wait Until Prices Increase Again.</h2>
            <p className="mt-3 max-w-3xl text-primary-foreground/90">
              The best time to buy land in Mowe was 3 years ago. The second best time is today. Secure your 300sqm, 500sqm, or 600sqm plot now.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="secondary" size="lg" className="font-semibold">
                <Link to={BOOK_INSPECTION}>Book Free Site Inspection</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <a href={NOVARA_WHATSAPP} target="_blank" rel="noopener noreferrer">
                  Chat On WhatsApp Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState<"All" | "Land" | "Building">("All");

  const project = getProjectBySlug(slug || "");
  const allProperties = getPropertiesByProject(slug || "");

  const filteredProperties = useMemo(() => {
    if (activeTab === "All") return allProperties;
    return allProperties.filter((property) => property.type.includes(activeTab));
  }, [activeTab, allProperties]);

  if (!project) {
    return <NotFound />;
  }

  if (project.slug === "the-novara-courts") {
    return <NovaraLanding />;
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
        breadcrumbs={[
          { label: "Properties", href: "/properties" },
          { label: project.title },
        ]}
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <Link to="/properties" className="mb-8 inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80">
            <ArrowLeft className="h-4 w-4" />
            Back to All Properties
          </Link>

          <h2 className="mb-4 text-2xl font-bold md:text-3xl">About {project.title}</h2>
          <p className="max-w-4xl text-lg text-muted-foreground">{project.description}</p>

          <div className="mb-8 mt-8 border-b border-border pb-4">
            <h3 className="text-xl font-bold md:text-2xl">Available Units</h3>
            {allProperties.some((p) => p.type.includes("Land")) && allProperties.some((p) => p.type.includes("Building")) && (
              <div className="mt-4 flex max-w-md rounded-xl bg-muted p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-1 items-center justify-center gap-1 rounded-lg py-2 text-sm font-semibold ${
                      activeTab === tab.id ? "bg-background text-primary" : "text-muted-foreground"
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property, index) => (
              <AnimatedSection key={property.id} animation="fade-up" delay={index * 100}>
                <Link to={`/properties/${property.slug}`} className="block h-full rounded-xl border border-border bg-card p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <img src={property.image} alt={property.title} className="mb-4 h-48 w-full rounded-lg object-cover" />
                  <div className="mb-2 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {property.location}
                  </div>
                  <h4 className="text-lg font-bold">{property.title}</h4>
                  <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Bed className="h-4 w-4" />{property.type}</span>
                    <span className="inline-flex items-center gap-1"><Ruler className="h-4 w-4" />{property.size}</span>
                  </div>
                  <Button variant="hero" size="md" className="mt-5 w-full">
                    Check Availability
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <FAQ category={project.slug === "the-naples" ? "Naples" : "Novara"} />
    </Layout>
  );
};

export default ProjectDetail;
