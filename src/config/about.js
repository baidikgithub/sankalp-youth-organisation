// Import images from assets
import heroImage from '../assets/about/about1.jpg';
import missionImage from '../assets/about/about2.jpeg';
import visionImage from '../assets/about/about3.jpeg';
import impactImage from '../assets/about/about4.jpeg';
import teamImage from '../assets/about/about5.jpeg';
import communityImage from '../assets/about/about6.jpeg';

// Organizational impact data
export const organizationStats = [
  { number: "2018", label: "Year Established", icon: "📅" },
  { number: "15+", label: "Lakh Lives Impacted", icon: "❤️" },
  { number: "1500+", label: "Villages Reached", icon: "🏘️" },
  { number: "200+", label: "Active Projects", icon: "📊" },
  { number: "25+", label: "States Covered", icon: "🗺️" },
  { number: "5000+", label: "Volunteers", icon: "👥" }
];

// Mission and vision data with images
export const missionVision = [
  {
    title: "Our Mission",
    description: "To serve as a catalyst for social change by implementing sustainable development programmes that address the root causes of poverty, inequality, and lack of opportunity in India's most underserved communities.",
    image: missionImage,
    points: [
      "Community-centered approach",
      "Evidence-based interventions", 
      "Sustainable development focus",
      "Grassroots level impact"
    ]
  },
  {
    title: "Our Vision",
    description: "A society where every individual, regardless of their socio-economic background, has access to quality education, healthcare, and opportunities for economic empowerment and personal growth.",
    image: visionImage,
    points: [
      "Equal access to education",
      "Quality healthcare for all",
      "Economic empowerment",
      "Personal growth opportunities"
    ]
  }
];

// Core focus areas with detailed information
export const focusAreas = [
  {
    area: "Education & Child Development",
    description: "Holistic education programmes focusing on learning outcomes, nutrition, and overall child development in rural and urban underserved communities.",
    impact: "50,000+ children benefited",
    details: [
      "Quality education in government schools",
      "Digital literacy programmes", 
      "Nutrition support and health checkups",
      "Learning enhancement through innovative methods",
      "Teacher training and capacity building"
    ],
    icon: "📚"
  },
  {
    area: "Women Empowerment & Gender Equality",
    description: "Comprehensive programmes for women's economic empowerment and leadership development across various sectors.",
    impact: "15,000+ women trained",
    details: [
      "Skill development and vocational training",
      "Self-help group formation and management",
      "Leadership and entrepreneurship development",
      "Awareness on rights and entitlements",
      "Financial literacy and inclusion"
    ],
    icon: "👩‍💼"
  },
  {
    area: "Healthcare & Wellness",
    description: "Community health initiatives ensuring access to quality healthcare services in remote and underserved areas.",
    impact: "2,00,000+ people reached",
    details: [
      "Mobile health clinics in remote areas",
      "Maternal and child health programmes",
      "Health awareness and prevention campaigns",
      "Telemedicine and digital health solutions",
      "Community health worker training"
    ],
    icon: "🏥"
  },
  {
    area: "Livelihood & Economic Development",
    description: "Sustainable livelihood opportunities for youth and marginalized communities through skill development and entrepreneurship.",
    impact: "8,000+ youth trained and placed",
    details: [
      "Skill development aligned with market demands",
      "Entrepreneurship development programmes",
      "Financial literacy and inclusion",
      "Market linkage and placement support",
      "Digital skills and technology training"
    ],
    icon: "💼"
  }
];

// Leadership team
export const leadership = [
  { name: "Dr. Rajesh Kumar", role: "Founder & President", initials: "RK", experience: "15+ years in development sector" },
  { name: "Priya Sharma", role: "Executive Director", initials: "PS", experience: "12+ years in programme management" },
  { name: "Amit Patel", role: "Director - Operations", initials: "AP", experience: "10+ years in field operations" },
  { name: "Sneha Reddy", role: "Director - Partnerships", initials: "SR", experience: "8+ years in stakeholder management" }
];

// Hero section data
export const heroData = {
  image: heroImage,
  title: "Sankalp Youth Organisation",
  subtitle: "Established in 2018, we are a leading development organization committed to sustainable development and social transformation across India.",
  stats: [
    { number: "15+", label: "Lakh Lives Impacted" },
    { number: "1500+", label: "Villages Reached" },
    { number: "25+", label: "States Covered" }
  ]
};

// Community section data
export const communityData = {
  image: communityImage,
  title: "Building Stronger Communities",
  description: "Our approach is community-centered, evidence-based, and sustainable. We partner with like-minded institutions, government agencies, and individuals to implement high-impact programmes that enable access, enhance quality, and bring about long-term behavioral change at the grassroots level.",
  features: [
    {
      title: "Community Participation",
      description: "Engaging local communities in every step of our programmes"
    },
    {
      title: "Evidence-Based Approach",
      description: "Using data and research to guide our interventions"
    },
    {
      title: "Sustainable Solutions",
      description: "Creating lasting change that continues beyond our involvement"
    }
  ]
};

// Animation variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}; 