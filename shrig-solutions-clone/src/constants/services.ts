import { Service } from '@/types';

export const SERVICES: Omit<Service, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    title: "Innovative Solutions Delivery",
    description: "From concept to execution, we create cutting-edge technology solutions that solve complex challenges and drive business growth.",
    icon: "Code",
    color: "blue",
    features: [
      "Custom Software Development",
      "Technology Consulting",
      "Digital Transformation",
      "Innovation Strategy"
    ],
    image: "/images/services/innovation.svg"
  },
  {
    title: "Project Execution & Management",
    description: "With a commitment to excellence, we ensure seamless project execution, delivering results on time and beyond expectations.",
    icon: "Settings",
    color: "green",
    features: [
      "Agile Project Management",
      "Risk Assessment",
      "Quality Assurance",
      "Timeline Management"
    ],
    image: "/images/services/project-execution.svg"
  },
  {
    title: "Technical Expertise & Leadership",
    description: "Our team excels in applying deep technical knowledge and leadership to develop transformative products and solutions.",
    icon: "Users",
    color: "purple",
    features: [
      "Technical Leadership",
      "Architecture Design",
      "Code Review",
      "Mentoring"
    ],
    image: "/images/services/technical-expertise.svg"
  },
  {
    title: "Sustainable Innovation",
    description: "We focus on building future-ready solutions by blending innovation with sustainability to meet the demands of a dynamic world.",
    icon: "Lightbulb",
    color: "orange",
    features: [
      "Green Technology",
      "Sustainable Development",
      "Future-Proof Solutions",
      "Environmental Impact"
    ],
    image: "/images/services/sustainable-innovation.svg"
  }
];

export const SERVICE_COLORS = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  purple: "bg-purple-100 text-purple-600",
  orange: "bg-orange-100 text-orange-600"
} as const;
