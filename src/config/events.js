// Import images from assets
import home1 from '../assets/home/home1.jpg';
import home2 from '../assets/home/home2.jpg';
import home3 from '../assets/home/home3.jpg';
import home4 from '../assets/home/home4.jpg';
import home5 from '../assets/home/home5.jpg';
import home6 from '../assets/home/home6.jpg';
import home8 from '../assets/home/home8.jpg';
import home10 from '../assets/home/home10.jpg';

// Event categories aligned with our programmes
export const eventCategories = [
  { id: 'all', label: 'All Events', icon: '📅' },
  { id: 'education', label: 'Education', icon: '📚' },
  { id: 'health', label: 'Healthcare', icon: '🏥' },
  { id: 'women', label: 'Women Empowerment', icon: '👩' },
  { id: 'youth', label: 'Youth Development', icon: '🎯' },
  { id: 'community', label: 'Community Outreach', icon: '🤝' }
];

// Upcoming events
export const upcomingEvents = [
  {
    id: 1,
    title: "Digital Literacy Drive - Rural Schools",
    description: "Comprehensive digital literacy programme for students in 50 rural schools across Rajasthan and Madhya Pradesh. Training teachers and students on basic computer skills and internet usage.",
    date: "2024-02-15",
    time: "10:00 AM",
    location: "Multiple Locations - Rajasthan & MP",
    category: "education",
    type: "Programme Launch",
    participants: "2000+ students, 200+ teachers",
    duration: "6 months",
    objectives: [
      "Bridge digital divide in rural education",
      "Train teachers on digital tools",
      "Provide computer access to students",
      "Create digital learning resources"
    ]
  },
  {
    id: 2,
    title: "Women Entrepreneurs Summit 2024",
    description: "Annual summit bringing together women entrepreneurs, mentors, and investors to foster business development and create networking opportunities for women-led enterprises.",
    date: "2024-03-08",
    time: "9:00 AM",
    location: "Delhi Convention Center",
    category: "women",
    type: "Summit",
    participants: "500+ women entrepreneurs",
    duration: "2 days",
    objectives: [
      "Networking and mentorship opportunities",
      "Business skill development workshops",
      "Access to funding and markets",
      "Policy advocacy for women entrepreneurs"
    ]
  },
  {
    id: 3,
    title: "Mobile Health Clinic Campaign",
    description: "Free health checkups, vaccination drives, and health awareness programmes in underserved tribal communities across Central India.",
    date: "2024-03-20",
    time: "8:00 AM",
    location: "Tribal Areas - Chhattisgarh",
    category: "health",
    type: "Health Camp",
    participants: "5000+ community members",
    duration: "1 month",
    objectives: [
      "Provide basic healthcare services",
      "Vaccination and immunization",
      "Health awareness and education",
      "Maternal and child health support"
    ]
  },
  {
    id: 4,
    title: "Youth Leadership Conclave",
    description: "Platform for young changemakers to discuss social issues, share solutions, and build leadership skills for community development.",
    date: "2024-04-10",
    time: "11:00 AM",
    location: "Mumbai Youth Center",
    category: "youth",
    type: "Conference",
    participants: "300+ young leaders",
    duration: "3 days",
    objectives: [
      "Leadership skill development",
      "Social innovation workshops",
      "Peer learning and networking",
      "Action planning for community projects"
    ]
  }
];

// Past events with success stories
export const pastEvents = [
  {
    id: 5,
    title: "Project Udaan - Education Initiative",
    description: "Successfully completed holistic education programme benefiting 10,000 children across 100 government schools with improved learning outcomes and infrastructure development.",
    date: "2023-12-15",
    location: "Uttar Pradesh & Bihar",
    category: "education",
    type: "Programme Completion",
    impact: "10,000+ children impacted",
    achievements: [
      "80% improvement in learning outcomes",
      "200+ teachers trained",
      "50 schools received infrastructure upgrade",
      "100% enrollment of out-of-school children"
    ],
    videoId: "dQw4w9WgXcQ" // Replace with actual video
  },
  {
    id: 6,
    title: "Swasthya Seva - Community Health Programme",
    description: "Comprehensive healthcare initiative reaching 50,000 people in remote villages with mobile clinics, telemedicine, and health awareness campaigns.",
    date: "2023-11-20",
    location: "Odisha & Jharkhand",
    category: "health",
    type: "Health Campaign",
    impact: "50,000+ people reached",
    achievements: [
      "25,000+ health checkups conducted",
      "5,000+ children vaccinated",
      "500+ pregnant women received care",
      "100+ health volunteers trained"
    ],
    videoId: "J7GY1Xg6X20" // Replace with actual video
  },
  {
    id: 7,
    title: "Shakti - Women Empowerment Programme",
    description: "Successful completion of skill development and entrepreneurship programme for 2,000 women across rural Karnataka, resulting in sustainable livelihoods.",
    date: "2023-10-08",
    location: "Rural Karnataka",
    category: "women",
    type: "Skill Development",
    impact: "2,000+ women empowered",
    achievements: [
      "80% participants started income generation",
      "500+ self-help groups formed",
      "200+ micro-enterprises established",
      "100% financial literacy achieved"
    ],
    videoId: "9bZkp7q19f0" // Replace with actual video
  },
  {
    id: 8,
    title: "Disaster Relief - Kerala Floods Response",
    description: "Emergency response and rehabilitation programme during Kerala floods, providing immediate relief and long-term recovery support to affected communities.",
    date: "2023-08-25",
    location: "Kerala",
    category: "community",
    type: "Disaster Response",
    impact: "15,000+ people assisted",
    achievements: [
      "Emergency relief to 5,000 families",
      "Temporary shelters for 1,000 families",
      "Medical aid to 10,000+ people",
      "School reconstruction in 20 villages"
    ],
    videoId: "6n3pFFPSlW4" // Replace with actual video
  }
];

// Featured event videos
export const eventVideos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Project Udaan - Transforming Rural Education",
    description: "See how we're changing lives through quality education in government schools"
  },
  {
    id: "J7GY1Xg6X20",
    title: "Healthcare Reaches Every Door",
    description: "Our mobile health clinics bringing healthcare to remote communities"
  },
  {
    id: "9bZkp7q19f0",
    title: "Women Leading Change",
    description: "Stories of women entrepreneurs creating sustainable livelihoods"
  }
];

// Gallery images for events page
export const eventGalleryImages = [
  { src: home1, alt: "Event 1" },
  { src: home2, alt: "Event 2" },
  { src: home3, alt: "Event 3" },
  { src: home4, alt: "Event 4" },
  { src: home5, alt: "Event 5" },
  { src: home6, alt: "Event 6" },
  { src: home8, alt: "Event 7" },
  { src: home10, alt: "Event 8" }
]; 