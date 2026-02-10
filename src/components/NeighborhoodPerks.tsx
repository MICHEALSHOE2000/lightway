import AnimatedSection from "./AnimatedSection";
import { Train, Shield, ShoppingBag, School, Zap, MapPin } from "lucide-react";

const perks = [
  {
    icon: <MapPin className="w-6 h-6 text-primary" />,
    title: "Strategic Locations",
    description: "Our estates are located in fast-developing areas like Arepo and Mowe, offering high ROI."
  },
  {
    icon: <Train className="w-6 h-6 text-primary" />,
    title: "Easy Transport",
    description: "Close to major highways and future rail projects, ensuring a smooth commute to Lagos CBD."
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Secure Environment",
    description: "Gated communities with 24/7 security, perimeter fencing, and CCTV surveillance."
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-primary" />,
    title: "Modern Amenities",
    description: "Proximity to estate malls, gymnasiums, and recreational parks for a balanced lifestyle."
  }
];

const NeighborhoodPerks = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="slide-right">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-semibold uppercase tracking-widest text-xs mb-4 rounded-full">
              Living The Experience
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Why Choose Our <span className="text-secondary">Neighborhoods?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We carefully select our estate locations based on proximity to Lagos, 
              essential infrastructure, and future growth potential. When you buy from 
              Light Way, you're not just buying land; you're investing in a lifestyle.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {perks.map((perk, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-sm">
                    {perk.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{perk.title}</h4>
                    <p className="text-sm text-muted-foreground">{perk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-left" className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://lightwayhomesltd.com/static/media/naples-hero-home.84931261b54080dda499.jpg" 
                alt="Neighborhood Aerial View" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <p className="text-white font-medium italic">
                  "The proximity to the Lagos-Ibadan expressway makes Arepo a prime location for those working in Lagos but seeking a peaceful home environment."
                </p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodPerks;
