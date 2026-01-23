import AnimatedSection from "./AnimatedSection";
import { CheckCircle2, ShieldCheck, Award, Building2 } from "lucide-react";

const trustBadges = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-secondary" />,
    title: "Registered Survey",
    description: "All our properties come with verified titles and registered surveys."
  },
  {
    icon: <Building2 className="w-8 h-8 text-secondary" />,
    title: "NIESV Member",
    description: "Proud member of the Nigerian Institution of Estate Surveyors and Valuers."
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-secondary" />,
    title: "100% Secure",
    description: "Safe and transparent transactions with full legal documentation."
  },
  {
    icon: <Award className="w-8 h-8 text-secondary" />,
    title: "Award Winning",
    description: "Recognized for excellence in real estate development in Nigeria."
  }
];

const TrustElements = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Thousands <span className="text-secondary">Trust</span> Lightway
          </h2>
          <p className="text-slate-600">
            We don't just sell land; we build futures. Our commitment to transparency and 
            quality has made us a leader in Lagos real estate.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustBadges.map((badge, index) => (
            <AnimatedSection 
              key={index} 
              delay={index * 100}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-6">{badge.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{badge.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{badge.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustElements;
