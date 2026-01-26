export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

// To add a new blog post, simply add a new object to this array
// The most recent posts should be at the top
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "why-invest-in-lagos-real-estate-2024",
    title: "Why Invest in Lagos Real Estate in 2024",
    excerpt: "Discover why Lagos remains the top destination for property investment in Nigeria and how you can maximize your returns.",
    content: `
      <p>Lagos, Nigeria's economic hub, continues to present lucrative opportunities for real estate investors. With a growing population of over 20 million people and an ever-increasing demand for housing, the market shows no signs of slowing down.</p>
      
      <h2>Growing Demand for Housing</h2>
      <p>The housing deficit in Lagos is estimated at over 3 million units, creating a persistent demand that drives property values upward. This shortage presents a golden opportunity for investors looking to build wealth through real estate.</p>
      
      <h2>Strategic Locations Matter</h2>
      <p>Properties in emerging areas like Mowe-Ofada, Ibeju-Lekki, and Epe are experiencing rapid appreciation. These areas benefit from government infrastructure projects and offer entry points at prices significantly lower than established neighborhoods.</p>
      
      <h2>Flexible Payment Plans</h2>
      <p>Many developers, including Light Way Homes, now offer flexible payment plans that make property ownership more accessible. You can spread payments over 12-24 months, making it easier to acquire your dream property.</p>
      
      <h2>Our Recommendation</h2>
      <p>Consider investing in our Naples Arepo or Novara Court estates, which offer land plots starting from 300sqm with guaranteed titles and comprehensive facility management services.</p>
    `,
    author: "Agboola Osunbanjo",
    date: "2024-01-15",
    category: "Investment",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
    readTime: "5 min read",
  },
  {
    id: "2",
    slug: "understanding-land-titles-in-nigeria",
    title: "Understanding Land Titles in Nigeria: C of O vs Registered Survey",
    excerpt: "Learn the difference between Certificate of Occupancy and Registered Survey, and why they matter for your property investment.",
    content: `
      <p>When purchasing property in Nigeria, understanding land documentation is crucial to protecting your investment. Let's break down the most common land titles you'll encounter.</p>
      
      <h2>Certificate of Occupancy (C of O)</h2>
      <p>A Certificate of Occupancy is issued by the State Governor and is considered the highest form of land title in Nigeria. It grants the holder rights to occupy and use the land for a specified period, typically 99 years.</p>
      
      <h2>Registered Survey</h2>
      <p>A Registered Survey is a document that shows the exact location, size, and boundaries of a piece of land. It's registered with the Surveyor General's office and serves as proof that the land has been properly surveyed and documented.</p>
      
      <h2>Why Documentation Matters</h2>
      <p>Proper land documentation protects you from:</p>
      <ul>
        <li>Land disputes and litigation</li>
        <li>Government acquisition without compensation</li>
        <li>Multiple sales of the same property</li>
        <li>Boundary disputes with neighbors</li>
      </ul>
      
      <h2>Light Way Homes Guarantee</h2>
      <p>All our properties come with proper documentation. The Naples Arepo is covered by a Certificate of Occupancy, while Novara Court is covered by a registered survey (OG/0765/2023/067), ensuring your investment is secure.</p>
    `,
    author: "Funmilayo Adesanya",
    date: "2024-01-08",
    category: "Education",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&auto=format&fit=crop",
    readTime: "4 min read",
  },
  {
    id: "3",
    slug: "benefits-of-estate-living-in-nigeria",
    title: "5 Benefits of Living in a Managed Estate in Nigeria",
    excerpt: "From security to infrastructure, discover why more Nigerians are choosing estate living for their families.",
    content: `
      <p>Estate living has become increasingly popular among Nigerian families seeking security, community, and modern amenities. Here are five key benefits of choosing a managed estate for your next home.</p>
      
      <h2>1. Enhanced Security</h2>
      <p>Managed estates typically feature 24/7 security personnel, CCTV surveillance, and controlled access points. This provides peace of mind for residents, especially families with children.</p>
      
      <h2>2. Quality Infrastructure</h2>
      <p>Estates invest in proper road networks, drainage systems, and street lighting. You won't have to worry about the infrastructure challenges that plague many neighborhoods.</p>
      
      <h2>3. Consistent Power and Water Supply</h2>
      <p>Many estates provide alternative power solutions and water treatment facilities, ensuring residents have access to essential utilities.</p>
      
      <h2>4. Community and Networking</h2>
      <p>Living in an estate creates opportunities to connect with like-minded individuals and families, building a supportive community environment.</p>
      
      <h2>5. Property Value Appreciation</h2>
      <p>Well-managed estates tend to maintain and increase property values over time due to consistent maintenance and development of common areas.</p>
      
      <h2>Experience Estate Living with Light Way Homes</h2>
      <p>Our estates at Naples Arepo and Novara Court are designed with all these benefits in mind, providing you with a premium living experience at affordable prices.</p>
    `,
    author: "Olumide Olujuyigbe",
    date: "2024-01-02",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
    readTime: "4 min read",
  },
  {
    id: "4",
    slug: "first-time-homebuyer-guide-nigeria",
    title: "A First-Time Homebuyer's Guide to Property Purchase in Nigeria",
    excerpt: "Everything you need to know about buying your first property in Nigeria, from budgeting to documentation.",
    content: `
      <p>Purchasing your first property is an exciting milestone. This guide will walk you through the essential steps to make your homeownership dream a reality.</p>
      
      <h2>Step 1: Determine Your Budget</h2>
      <p>Calculate how much you can afford by considering your savings, income, and any financing options available. Many developers offer payment plans that can spread your payments over 12-24 months.</p>
      
      <h2>Step 2: Research Locations</h2>
      <p>Consider factors like proximity to work, schools, markets, and future development plans for the area. Emerging areas often offer better value for money.</p>
      
      <h2>Step 3: Verify Documentation</h2>
      <p>Always verify the seller's ownership documents before making any payments. Look for C of O, Registered Survey, or Governor's Consent as applicable.</p>
      
      <h2>Step 4: Inspect the Property</h2>
      <p>Visit the property location, check the land for any encumbrances, and verify boundaries with a licensed surveyor if necessary.</p>
      
      <h2>Step 5: Engage Professionals</h2>
      <p>Consider hiring a lawyer to review contracts and a surveyor to verify land measurements. This small investment can save you from major problems later.</p>
      
      <h2>Start Your Journey with Light Way Homes</h2>
      <p>We make the homebuying process seamless with transparent pricing, proper documentation, and flexible payment plans. Contact us today to explore our available properties.</p>
    `,
    author: "Agboola Osunbanjo",
    date: "2023-12-20",
    category: "Guide",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&auto=format&fit=crop",
    readTime: "6 min read",
  },
];

export const categories = ["All", "Investment", "Education", "Lifestyle", "Guide"];
