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
}

// Main Projects (Naples and Novara only)
export const projects: Project[] = [
  {
    id: "project-1",
    slug: "the-naples",
    title: "Naples Arepo",
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
    description: "The Naples Estate is located in Arepo, an emerging satellite town off the Lagos-Ibadan Expressway. Surrounded by top estates such as Journalist Estate 1 & 2, Voera Estate, Shalom Estate, Palms Estate, and Praise Hill Estate. Notable nearby organizations include Punch Place, Channels TV, and Mikano.",
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
    description: "The Novara Courts is situated at Orilemo, Mowe Ofada by interchange. The land is covered with Registered Survey and is free from government acquisition. Landmarks include RCCG Camp, Nestle, Olam Group, International Breweries, Christopher University, and Apple and Pears Ltd.",
    amenities: [
      "Security",
      "Motorable Road Network",
      "Electricity Connection",
      "Portable Water",
      "Effective Drainage System",
      "Perimeter Fencing",
      "Street Lights",
    ],
    coordinates: { lat: 6.7274, lng: 3.4616 },
  },
];

// All Properties (Naples: Land + 4bed BQ | Novara: Land only)
export const properties: Property[] = [
  // Naples Arepo Properties
  {
    id: "naples-townhouse",
    slug: "the-naples-4bed-terrace-townhouse",
    title: "4 Bedroom + BQ",
    location: "Naples Arepo, Arepo, Ogun State",
    address: "Naples Arepo, Arepo, Ogun State",
    image: naplesArepo,
    images: [naplesArepo, naplesBack, naplesBedroom1, naplesBedroom2],
    status: "Now Selling",
    price: "₦150,000,000",
    priceRange: { min: 150000000, max: 150000000 },
    type: "Residential Building",
    size: "4-Bedroom Terrace + BQ",
    bedrooms: 4,
    bathrooms: 5,
    description: "Luxurious 4-bedroom terrace townhouse with boys' quarters at Naples Arepo, Arepo. Delivered fully finished with C of O and building approval. All rooms are en-suite. Features contemporary architecture and premium finishes.",
    features: [
      "Fully finished delivery",
      "C of O & Building Approval",
      "All rooms en-suite",
      "Spacious living and dining areas",
      "Modern fitted kitchen",
      "Boys' quarters (BQ)",
      "Private parking space",
      "Glazed balconies",
    ],
    amenities: [
      "24/7 Security and Power",
      "Parking Space",
      "Glazed Balconies",
      "Children's Playground",
      "Greenery and Landscaping",
      "Gated Community",
    ],
    paymentPlans: [
      {
        name: "Interest Free",
        duration: "0-3 months",
        initialDeposit: "Contact for details",
      },
      {
        name: "Short Term (5% Interest)",
        duration: "6 months",
        initialDeposit: "Contact for details",
      },
      {
        name: "Long Term (10% Interest)",
        duration: "12 months",
        initialDeposit: "Contact for details",
      },
    ],
    coordinates: { lat: 6.7074, lng: 3.4416 },
    projectSlug: "the-naples",
  },
  {
    id: "naples-500sqm",
    slug: "the-naples-500sqm-serviced-plot",
    title: "500 SQM Serviced Plot",
    location: "Naples Arepo, Arepo, Ogun State",
    address: "Naples Arepo, Arepo, Ogun State",
    image: naplesLand1,
    images: [naplesLand1, naplesLand2, naplesLand3, naplesLand4],
    price: "₦30,000,000",
    priceRange: { min: 30000000, max: 30000000 },
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
      "Perimeter Fencing",
      "Green Spaces",
    ],
    paymentPlans: [
      {
        name: "Interest Free",
        duration: "0-3 months",
        initialDeposit: "Contact for details",
      },
      {
        name: "Spread balance up to 12 months",
        duration: "12 months",
        initialDeposit: "Contact for details",
      },
    ],
    coordinates: { lat: 6.7074, lng: 3.4416 },
    projectSlug: "the-naples",
  },
  {
    id: "naples-300sqm",
    slug: "the-naples-300sqm-serviced-plot",
    title: "300 SQM Serviced Plot",
    location: "Naples Arepo, Arepo, Ogun State",
    address: "Naples Arepo, Arepo, Ogun State",
    image: naplesLand2,
    images: [naplesLand2, naplesLand1, naplesLand3, naplesLand4],
    price: "₦25,000,000",
    priceRange: { min: 25000000, max: 25000000 },
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
        initialDeposit: "Contact for details",
      },
      {
        name: "Spread balance up to 12 months",
        duration: "12 months",
        initialDeposit: "Contact for details",
      },
    ],
    coordinates: { lat: 6.7074, lng: 3.4416 },
    projectSlug: "the-naples",
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
    price: "₦4,500,000",
    priceRange: { min: 4500000, max: 5000000 },
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
        name: "Outright Payment",
        duration: "Immediate",
        initialDeposit: "₦4,500,000 (5% discount)",
      },
      {
        name: "Flexible Payment",
        duration: "Up to 24 months",
        initialDeposit: "₦100,000",
        monthlyPayment: "Spread payment up to 24 months",
      },
    ],
    coordinates: { lat: 6.7274, lng: 3.4616 },
    projectSlug: "the-novara-courts",
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
    price: "₦6,500,000",
    priceRange: { min: 6500000, max: 7000000 },
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
        name: "Outright Payment",
        duration: "Immediate",
        initialDeposit: "₦6,500,000 (5% discount)",
      },
      {
        name: "Flexible Payment",
        duration: "Up to 24 months",
        initialDeposit: "₦100,000",
        monthlyPayment: "Spread payment up to 24 months",
      },
    ],
    coordinates: { lat: 6.7274, lng: 3.4616 },
    projectSlug: "the-novara-courts",
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
    price: "₦7,500,000",
    priceRange: { min: 7500000, max: 8000000 },
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
        name: "Outright Payment",
        duration: "Immediate",
        initialDeposit: "₦7,500,000 (5% discount)",
      },
      {
        name: "Flexible Payment",
        duration: "Up to 24 months",
        initialDeposit: "₦100,000",
        monthlyPayment: "Spread payment up to 24 months",
      },
    ],
    coordinates: { lat: 6.7274, lng: 3.4616 },
    projectSlug: "the-novara-courts",
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
