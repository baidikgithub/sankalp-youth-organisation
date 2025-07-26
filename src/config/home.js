// Import images from assets
import home1 from '../assets/home/home1.jpg';
import home2 from '../assets/home/home2.jpg';
import home3 from '../assets/home/home3.jpg';
import home4 from '../assets/home/home4.jpg';
import home5 from '../assets/home/home5.jpg';
import home6 from '../assets/home/home6.jpg';
import home8 from '../assets/home/home8.jpg';
import home10 from '../assets/home/home10.jpg';
// Add new community hero image (once you have the image file)
// import communityHero from '../assets/home/community-hero.jpg';

// Hero images for slider
export const heroImages = [
  home1, 
  home2, 
  home3, 
  home4, 
  home5, 
  home6, 
  home8, 
  home10
  // Add the new community hero image to the rotation once available
  // communityHero
];

// Impact metrics inspired by Smile Foundation
export const impactMetrics = [
  { number: "15", suffix: "LAC+", label: "children and their families impacted every year" },
  { number: "1500", suffix: "+", label: "villages and communities reached across the country" },
  { number: "200", suffix: "+", label: "projects focused on education, healthcare, and empowerment" },
  { number: "25", suffix: "+", label: "states covered including remotest areas" }
];

// Programme areas aligned with social development
export const programmes = [
  {
    title: "EDUCATION",
    subtitle: "Education, nutrition and holistic development of children",
    description: "Ensuring quality education and holistic development for underprivileged children through innovative learning methods and community engagement.",
    icon: "📚",
    color: "#007BFF"
  },
  {
    title: "WOMEN EMPOWERMENT",
    subtitle: "Empowering adolescent girls & women through community engagement",
    description: "Skill development, leadership training, and economic empowerment programmes for women and adolescent girls.",
    icon: "👩",
    color: "#e91e63"
  },
  {
    title: "HEALTHCARE",
    subtitle: "Taking healthcare services to doorsteps of hard to reach communities",
    description: "Mobile health clinics, awareness campaigns, and medical camps to ensure healthcare access for all.",
    icon: "🏥",
    color: "#4caf50"
  },
  {
    title: "LIVELIHOOD",
    subtitle: "Skill training and placement support for underprivileged youth",
    description: "Vocational training, entrepreneurship development, and job placement assistance for sustainable livelihoods.",
    icon: "💼",
    color: "#ff9800"
  },
  {
    title: "DISASTER RESPONSE",
    subtitle: "Reach out and respond to the needs of disaster-affected people",
    description: "Emergency relief, rehabilitation, and community resilience building in disaster-affected areas.",
    icon: "🆘",
    color: "#f44336"
  },
  {
    title: "EMPOWERING GRASSROOTS",
    subtitle: "Helping community-based organizations become locally sustainable",
    description: "Capacity building and support for local organizations to create sustainable community development models.",
    icon: "🤝",
    color: "#9c27b0"
  }
];

// SDG Goals that align with our work
export const sdgGoals = [
  { number: "1", title: "No Poverty", color: "#e5243b" },
  { number: "3", title: "Good Health", color: "#4c9f38" },
  { number: "4", title: "Quality Education", color: "#c5192d" },
  { number: "5", title: "Gender Equality", color: "#ff3a21" },
  { number: "8", title: "Decent Work", color: "#a21942" },
  { number: "10", title: "Reduced Inequalities", color: "#dd1367" }
];

// YouTube videos for visual appeal
export const featuredVideos = [
  {
    id: "dQw4w9WgXcQ", // Replace with actual organizational videos
    title: "Our Education Programme Impact",
    description: "See how we're transforming lives through education"
  },
  {
    id: "J7GY1Xg6X20", // Replace with actual organizational videos  
    title: "Women Empowerment Success Stories",
    description: "Inspiring stories of women breaking barriers"
  }
];

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