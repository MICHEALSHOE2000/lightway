import AnimatedSection from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What title do you have over the houses?",
    answer: "Our Houses are covered by a certificate of occupancy and a building approval.",
    category: "Naples",
  },
  {
    question: "Are there other charges apart from the purchase price?",
    answer: "No, the price is all inclusive.",
    category: "Naples",
  },
  {
    question: "Will there be facility management services at our estate?",
    answer:
      "Yes. There will be comprehensive facility management services provided at our estates. An annual service charge will be payable by all subscribers which will be used to pay for sundry services e.g security services, water and waste management, and maintenance of common infrastructure within the estate.",
    category: "Naples",
  },
  {
    question: "How long can I spread my payment for my dream home?",
    answer:
      "You can spread your payment over a maximum period of 12 months. However, you need to deposit a minimum 20% of the purchase.",
    category: "Naples",
  },
  {
    question: "On completion, can you carry out property rental management on my property?",
    answer:
      "Yes. We offer property management service which helps relieve owners of all the stress involved in managing their properties and guarantee them annual rental income.",
    category: "Naples",
  },
  {
    question: "Will my house be fully finished or semi-finished?",
    answer: "Both fully finished and semi-finished options are available depending on your choice.",
    category: "Naples",
  },
  {
    question: "Where is Novara Court located?",
    answer: "Novara Court is situated at Orilemo, Mowe Ofada, by interchange, Obafemi-Owode Local Government Area.",
    category: "Novara",
  },
  {
    question: "Who is the developer of Novara Court?",
    answer: "Light Way Homes and Investment Limited.",
    category: "Novara",
  },
  {
    question: "What title is on Novara Court?",
    answer: "NOVARA COURT is covered by a registered survey (OG/0765/2023/067).",
    category: "Novara",
  },
  {
    question: "Are there any encumbrances on the land?",
    answer: "No, the land is free from every known government acquisition or interest and no adverse claimant on the land.",
    category: "Novara",
  },
  {
    question: "What is the size of the plot?",
    answer: "300sqm, 500sqm and 600sqm respectively.",
    category: "Novara",
  },
  {
    question: "Are there other charges aside the price of the plot?",
    answer: "No, the prices are all inclusive.",
    category: "Novara",
  },
  {
    question: "How long can I spread the payment for my dream plot?",
    answer:
      "You can spread your payment over a maximum period of 24 months. However, you need to deposit a minimum of ₦200k of the purchase price while the balance is to be spread over the number of months you decide to choose.",
    category: "Novara",
  },
  {
    question: "What document will I get after initial deposit?",
    answer: "Offer letter, receipt of payment and contract of sales agreement.",
    category: "Novara",
  },
];

interface FAQProps {
  category?: "Naples" | "Novara" | "All";
}

const FAQ = ({ category = "All" }: FAQProps) => {
  const filteredFaqs = category === "All" 
    ? faqData 
    : faqData.filter(item => item.category === category);

  // If we have no FAQs for a specific category, we can optionally hide the section or show a default
  if (filteredFaqs.length === 0) return null;

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto container-padding relative z-10">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            {category !== "All" ? `${category} ` : "Frequently Asked "} 
            <span className="text-secondary">FAQs</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about {category !== "All" ? category : "our properties"}, payment plans, and services.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {filteredFaqs.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-5 overflow-hidden shadow-sm hover:shadow-card transition-all duration-300 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-sm md:text-base font-semibold py-4 hover:text-primary hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;
