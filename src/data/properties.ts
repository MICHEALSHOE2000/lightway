// Project Images
import naplesHero from "@/assets/projects/naples-hero.jpg";
import naplesLand1 from "@/assets/projects/naples-land-1.jpg";
import naplesLand2 from "@/assets/projects/naples-land-2.jpg";
import naplesLand3 from "@/assets/projects/naples-land-3.jpg";
import naplesLand4 from "@/assets/projects/naples-land-4.jpg";
import naplesBedroom1 from "@/assets/projects/naples-bedroom-1.jpg";
import naplesBedroom2 from "@/assets/projects/naples-bedroom-2.jpg";
import naplesArepo from "@/assets/properties/naples-arepo.jpg";
import naplesBack from "@/assets/projects/naples-back.jpg";

// Property Images
import naples4BedBq from "@/assets/properties/naples-4bed-bq.png";
import naples500sqm from "@/assets/properties/naples-500sqm.jpg";
import naples300sqm from "@/assets/properties/naples-300sqm.jpg";
import novara1 from "@/assets/projects/novara-1.jpg";
import novara2 from "@/assets/projects/novara-2.jpg";
import novara3 from "@/assets/projects/novara-3.jpg";

export interface Property {
  id: string;
  slug: string;
  title: string;
  location: string;
  address: string;
  image: string;
  images: string[];
  status: "Now Selling" | "Pre-Order" | "Coming Soon" | "Sold Out";
  price: string;
  priceRange: { min: number; max: number };
  type: string;
  size: string;
  bedrooms?: number;
  bathrooms?: number;
  description: string;
  features: string[];
  amenities: string[];
  paymentPlans: {
    name: string;
    duration: string;
    initialDeposit: string;
    monthlyPayment?: string;
  }[];
  coordinates?: { lat: number; lng: number };
  projectSlug?: string;
  videoUrl?: string;
  whatsappMessage?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  address: string;
  image: string;
  images: string[];
  status: "Now Selling" | "Pre-Order" | "Coming Soon" | "Sold Out";
  description: string;
  amenities: string[];
  coordinates?: { lat: number; lng: number };
  videoUrl?: string;
  whatsappMessage?: string;
}

// Main Projects (Naples and Novara only)
export const projects: Project[] = [
  {
    id: "project-1",
    slug: "the-naples",
    title: "The Naples Arepo- 4 Bedroom Terrace + BQ",
    location: "Arepo, Ogun State",
    address: "Naples Arepo, Arepo, Ogun State",
    image: naplesArepo,
    images: [
      naplesArepo,
      naplesBack,
      naplesLand1,
      naplesLand2,
      naplesLand3,
      naplesLand4,
      "https://i.ytimg.com/vi/9uws_QMkQUQ/hqdefault.jpg",
      "https://lightwayhomesltd.com/static/media/welcome.52b0be5b484bbca1a15c.png"
    ],
    status: "Now Selling",
    description: "The Naples estate is situated in Arepo which is the satellite town of the Lagos/Ibadan expressway in the Obafemi Owode Local Government Area. It is a well developed and pleasant place to live in with good road access. Arepo has proximity to Lagos. It is a perfect location for citizens who want to live close to the Lagos capital thus making commuting stress-free. Asides from proximity, Arepo offers serenity and fresh air. Schedule a visit +234 807 516 1213",
    amenities: [
      "Recreational Centre",
      "24/7 Security",
      "Paved Roads",
      "Electricity & Electrification",
      "Street Lights",
      "Drainage System",
      "Green Areas",
      "Building Approval & C of O",
    ],
    coordinates: { lat: 6.7074, lng: 3.4416 },
    videoUrl: "https://youtube.com/shorts/PwLaHgAbHOc?si=eUjCJ4zNRxjVIV9B",
    whatsappMessage: "Hello, I'm interested in the Naples 4 Bedroom Terrace with Bq, can I get more info about it?"
  },
  {
    id: "project-naples-land",
    slug: "the-naples-land",
    title: "The Naples Land",
    location: "Arepo, Ogun State",
    address: "Naples Arepo, Arepo, Ogun State",
    image: naplesLand1,
    images: [
      naplesLand1,
      naplesLand2,
      naplesLand3,
      naplesLand4,
    ],
    status: "Now Selling",
    description: "Premium serviced plots at Naples Arepo, Arepo. Comes with a registered survey. Perfect for building your dream home in a serene environment with fresh air and proximity to Lagos.",
    amenities: [
      "24/7 Security",
      "Paved Roads",
      "Electricity & Electrification",
      "Street Lights",
      "Drainage System",
      "Green Areas",
      "Building Approval & C of O",
    ],
    coordinates: { lat: 6.7074, lng: 3.4416 },
    whatsappMessage: "Hello, I'm interested in the Naples Land (Arepo), can I get more info about it?"
  },
  {
    id: "project-2",
    slug: "the-novara-courts",
    title: "The Novara Courts",
    location: "Orilemo, Mowe, Ogun State",
    address: "Orilemo, Near Nestlé & Olam Group, Mowe, Ogun State",
    image: novara1,
    images: [
      novara1,
      novara2,
      novara3,
    ],
    status: "Now Selling",
    description: "The Novara Courts is situated at Orilemo, Mowe Ofada by interchange. The land is covered with Registered Survey and is free from government acquisition.",
    amenities: [
      "Security",
      "Motorable Road Network",
      "Electricity Connection",
      "Street Lights",
    ],
    coordinates: { lat: 6.7274, lng: 3.4616 },
    whatsappMessage: "Hello, I'm interested in The Novara Courts (Mowe), can I get more info about it?"
  },
];

// All Properties (Naples: Land + 4bed BQ | Novara: Land only)
export const properties: Property[] = [
  // Naples Arepo Properties
  {
    id: "naples-townhouse",
    slug: "the-naples-4bed-terrace-townhouse",
    title: "The Naples Arepo- 4 Bedroom Terrace + BQ",
    location: "Naples Arepo, Arepo, Ogun State",
    address: "Naples Arepo, Arepo, Ogun State",
    image: naplesArepo,
    images: [naplesArepo, naplesHero, naplesBack, naplesBedroom1, naplesBedroom2],
    status: "Now Selling",
    price: "₦30,000,000",
    priceRange: { min: 150000000, max: 165000000 },
    type: "Residential Building",
    size: "4-Bedroom Terrace + BQ",
    bedrooms: 4,
    bathrooms: 5,
    videoUrl: "https://youtube.com/shorts/PwLaHgAbHOc?si=eUjCJ4zNRxjVIV9B",
    description: "The Naples estate is situated in Arepo which is the satellite town of the Lagos/Ibadan expressway in the Obafemi Owode Local Government Area. It is a well developed and pleasant place to live in with good road access.\n\nArepo has proximity to Lagos. It is a perfect location for citizens who want to live close to the Lagos capital thus making commuting stress-free.\n\nAsides from proximity, Arepo offers serenity and fresh air.\n\nSchedule a visit +234 807 516 1213\n\nThis Is Not Just a House. It’s Peace of Mind in Brick and Concrete.\n\nMost luxury homes in Lagos come with hidden charges and endless delays. The Naples is different.\n\n✔ C of O & Building Approval secured\n✔ Fully finished — inside and outside\n✔ Exactly what you see is what you get\n✔ No hidden fees. No surprises.\n\nStep Inside… And Feel the Difference. ✨ Living Room: 40sqm of Freedom. Big enough to entertain guests comfortably and host family gatherings.\n\nDesigned for Comfort. Finished for Pride.\n• 4 Spacious Bedrooms — All Ensuite\n• BQ Included\n• Exquisite Interior Finishes\n• Fully Finished Exterior\n• Dedicated Car Park (2 Cars)",
    features: [
      "C of O & Building Approval",
      "Fully finished delivery",
      "4 Spacious Bedrooms — All Ensuite",
      "BQ Included",
      "40sqm Living Room",
      "Exquisite Interior Finishes",
      "Dedicated Car Park (2 Cars)",
    ],
    amenities: [
      "24/7 Security and Power",
      "Parking Space",
      "Children's Playground",
      "Gated Community",
    ],
    paymentPlans: [
      {
        name: "0–3 Months (Interest-Free)",
        duration: "0-3 months",
        initialDeposit: "₦30,000,000",
        monthlyPayment: "Total: ₦150,000,000",
      },
      {
        name: "6 Months Plan (5% Interest)",
        duration: "6 months",
        initialDeposit: "₦30,000,000",
        monthlyPayment: "Total: ₦157,500,000",
      },
      {
        name: "12 Months Plan (10% Interest)",
        duration: "12 months",
        initialDeposit: "₦30,000,000",
        monthlyPayment: "Total: ₦165,000,000",
      },
    ],
    coordinates: { lat: 6.7074, lng: 3.4416 },
    projectSlug: "the-naples",
    whatsappMessage: "Hello, I'm interested in the Naples 4 Bedroom Terrace with Bq, can I get more info about it?"
  },
  {
    id: "naples-500sqm",
    slug: "the-naples-500sqm-serviced-plot",
    title: "500 SQM Serviced Plot",
    location: "Naples Arepo, Arepo, Ogun State",
    address: "Naples Arepo, Arepo, Ogun State",
    image: naplesLand1,
    images: [naplesLand1, naplesLand2, naplesLand3, naplesLand4],
    price: "₦6,000,000",
    priceRange: { min: 6000000, max: 33000000 },
    type: "Land",
    size: "500 SQM",
    description: "Premium 500 square meter serviced plot at Naples Arepo, Arepo. Comes with a registered survey. Prices are all-inclusive with no hidden charges. Perfect for building your dream home.",
    features: [
      "Registered Survey",
      "All-inclusive pricing",
      "No hidden charges",
      "Dry and solid land",
      "Government-approved layout",
      "Ready for immediate development",
    ],
    amenities: [
      "24/7 Security and Power",
      "Gated Community",
      "Motorable Roads",
      "Street Lights",
    ],
    paymentPlans: [
      {
        name: "Interest Free",
        duration: "0-3 months",
        initialDeposit: "₦6,000,000",
      },
      {
        name: "6 Months Plan (5% Interest)",
        duration: "6 months",
        initialDeposit: "₦31,500,000",
      },
      {
        name: "12 Months Plan (10% Interest)",
        duration: "12 months",
        initialDeposit: "₦33,000,000",
      },
    ],
    coordinates: { lat: 6.7074, lng: 3.4416 },
    projectSlug: "the-naples-land",
    whatsappMessage: "Hello, I'm interested in the 500 SQM Serviced Plot at Naples Arepo, can I get more info about it?"
  },
  {
    id: "naples-300sqm",
    slug: "the-naples-300sqm-serviced-plot",
    title: "300 SQM Serviced Plot",
    location: "Naples Arepo, Arepo, Ogun State",
    address: "Naples Arepo, Arepo, Ogun State",
    image: naplesLand2,
    images: [naplesLand2, naplesLand1, naplesLand3, naplesLand4],
    price: "₦3,000,000",
    priceRange: { min: 3000000, max: 27500000 },
    type: "Land",
    size: "300 SQM",
    description: "Affordable 300 square meter serviced plot at Naples Arepo, Arepo. Comes with a registered survey. Prices are all-inclusive with no hidden charges. Ideal for compact home designs.",
    features: [
      "Registered Survey",
      "All-inclusive pricing",
      "No hidden charges",
      "Dry and solid land",
      "Government-approved layout",
      "Ready for immediate development",
    ],
    amenities: [
      "24/7 Security and Power",
      "Gated Community",
      "Motorable Roads",
      "Street Lights",
      "Perimeter Fencing",
      "Green Spaces",
    ],
    paymentPlans: [
      {
        name: "Interest Free",
        duration: "0-3 months",
        initialDeposit: "₦3,000,000",
      },
      {
        name: "6 Months Plan (5% Interest)",
        duration: "6 months",
        initialDeposit: "₦26,250,000",
      },
      {
        name: "12 Months Plan (10% Interest)",
        duration: "12 months",
        initialDeposit: "₦27,500,000",
      },
    ],
    coordinates: { lat: 6.7074, lng: 3.4416 },
    projectSlug: "the-naples-land",
    whatsappMessage: "Hello, I'm interested in the 300 SQM Serviced Plot at Naples Arepo, can I get more info about it?"
  },

  // Novara Courts Properties (Land Only - 300sqm, 500sqm, 600sqm)
  {
    id: "novara-300sqm",
    slug: "the-novara-courts-300sqm-plot",
    title: "300 SQM Plot",
    location: "Orilemo, Mowe, Ogun State",
    address: "Orilemo, Near Nestlé & Olam Group, Mowe, Ogun State",
    image: novara1,
    images: [novara1, novara2, novara3],
    status: "Now Selling",
    price: "₦200,000",
    priceRange: { min: 200000, max: 5400000 },
    type: "Residential Land",
    size: "300 SQM",
    description: "Affordable 300 square meter plot at The Novara Courts, Orilemo Mowe. Near major industrial hubs including Nestlé, Olam Group, International Breweries, Apple and Pears Ltd, Christopher University, and RCCG Camp. 45 minutes to Lagos International Airport.",
    features: [
      "Dry and solid land",
      "Survey and title documents available",
      "Government-approved layout",
      "Excellent topography",
      "Ready for immediate development",
      "300 square meters",
      "5% discount on outright payment",
      "Prices all inclusive",
    ],
    amenities: [
      "Estate Mall",
      "Gymnasium",
      "Recreational Areas",
      "Street Lights",
      "Motorable Roads",
      "Perimeter Fencing",
      "24/7 Security",
    ],
    paymentPlans: [
      {
        name: "0-3 Months (5% Discount)",
        duration: "0-3 months",
        initialDeposit: "₦200,000",
      },
      {
        name: "6 Months (Interest Free)",
        duration: "6 months",
        initialDeposit: "₦4,500,000",
      },
      {
        name: "12 Months (10% Interest)",
        duration: "12 months",
        initialDeposit: "₦4,950,000",
      },
      {
        name: "24 Months (20% Interest)",
        duration: "24 months",
        initialDeposit: "₦5,400,000",
      },
    ],
    coordinates: { lat: 6.7274, lng: 3.4616 },
    projectSlug: "the-novara-courts",
    whatsappMessage: "Hello, I'm interested in the 300 SQM Plot at The Novara Courts, can I get more info about it?"
  },
  {
    id: "novara-500sqm",
    slug: "the-novara-courts-500sqm-plot",
    title: "500 SQM Plot",
    location: "Orilemo, Mowe, Ogun State",
    address: "Orilemo, Near Nestlé & Olam Group, Mowe, Ogun State",
    image: novara2,
    images: [novara1, novara2, novara3],
    status: "Now Selling",
    price: "₦200,000",
    priceRange: { min: 200000, max: 7800000 },
    type: "Residential Land",
    size: "500 SQM",
    description: "Well-sized 500 square meter plot at The Novara Courts, Orilemo Mowe. Strategic location near major industrial hubs. 45 minutes to Lagos International Airport.",
    features: [
      "Dry and solid land",
      "Survey and title documents available",
      "Government-approved layout",
      "Excellent topography",
      "Ready for immediate development",
      "500 square meters",
      "5% discount on outright payment",
      "Prices all inclusive",
    ],
    amenities: [
      "Estate Mall",
      "Gymnasium",
      "Recreational Areas",
      "Street Lights",
      "Motorable Roads",
      "Perimeter Fencing",
      "24/7 Security",
    ],
    paymentPlans: [
      {
        name: "0-3 Months (5% Discount)",
        duration: "0-3 months",
        initialDeposit: "₦200,000",
      },
      {
        name: "6 Months (Interest Free)",
        duration: "6 months",
        initialDeposit: "₦6,500,000",
      },
      {
        name: "12 Months (10% Interest)",
        duration: "12 months",
        initialDeposit: "₦7,150,000",
      },
      {
        name: "24 Months (20% Interest)",
        duration: "24 months",
        initialDeposit: "₦7,800,000",
      },
    ],
    coordinates: { lat: 6.7274, lng: 3.4616 },
    projectSlug: "the-novara-courts",
    whatsappMessage: "Hello, I'm interested in the 500 SQM Plot at The Novara Courts, can I get more info about it?"
  },
  {
    id: "novara-600sqm",
    slug: "the-novara-courts-600sqm-plot",
    title: "600 SQM Plot",
    location: "Orilemo, Mowe, Ogun State",
    address: "Orilemo, Near Nestlé & Olam Group, Mowe, Ogun State",
    image: novara3,
    images: [novara1, novara2, novara3],
    status: "Now Selling",
    price: "₦200,000",
    priceRange: { min: 200000, max: 9000000 },
    type: "Residential Land",
    size: "600 SQM",
    description: "Spacious 600 square meter plot at The Novara Courts, Orilemo Mowe. Perfect for larger family homes. Near major industrial hubs and 45 minutes to Lagos International Airport.",
    features: [
      "Dry and solid land",
      "Survey and title documents available",
      "Government-approved layout",
      "Excellent topography",
      "Ready for immediate development",
      "600 square meters",
      "5% discount on outright payment",
      "Prices all inclusive",
    ],
    amenities: [
      "Estate Mall",
      "Gymnasium",
      "Recreational Areas",
      "Street Lights",
      "Motorable Roads",
      "Perimeter Fencing",
      "24/7 Security",
    ],
    paymentPlans: [
      {
        name: "0-3 Months (5% Discount)",
        duration: "0-3 months",
        initialDeposit: "₦200,000",
      },
      {
        name: "6 Months (Interest Free)",
        duration: "6 months",
        initialDeposit: "₦7,500,000",
      },
      {
        name: "12 Months (10% Interest)",
        duration: "12 months",
        initialDeposit: "₦8,250,000",
      },
      {
        name: "24 Months (20% Interest)",
        duration: "24 months",
        initialDeposit: "₦9,000,000",
      },
    ],
    coordinates: { lat: 6.7274, lng: 3.4616 },
    projectSlug: "the-novara-courts",
    whatsappMessage: "Hello, I'm interested in the 600 SQM Plot at The Novara Courts, can I get more info about it?"
  },
];

export const getPropertyBySlug = (slug: string): Property | undefined => {
  return properties.find((p) => p.slug === slug);
};

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find((p) => p.id === id);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getPropertiesByProject = (projectSlug: string): Property[] => {
  return properties.filter((p) => p.projectSlug === projectSlug);
};
