// Core domain types following Domain-Driven Design principles

export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// Navigation domain
export interface NavigationItem {
  name: string;
  href: string;
  isActive?: boolean;
  children?: NavigationItem[];
}

export interface NavigationState {
  isOpen: boolean;
  activeItem: string;
}

// Team domain
export interface TeamMember extends BaseEntity {
  name: string;
  role: string;
  team: string;
  image: string;
  linkedin: string;
  github: string;
  skills: string[];
  bio?: string;
}

// Services domain
export interface Service extends BaseEntity {
  title: string;
  description: string;
  icon: string;
  color: ServiceColor;
  features: string[];
  image: string;
}

export type ServiceColor = "blue" | "green" | "purple" | "orange";

// Case Studies domain
export interface CaseStudy extends BaseEntity {
  title: string;
  description: string;
  category: string;
  rating: number;
  image: string;
  technologies: string[];
  client: string;
  duration: string;
  results: string[];
}

// Contact domain
export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
  phone?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  socialMedia: SocialMediaLinks;
}

export interface SocialMediaLinks {
  linkedin: string;
  github: string;
  facebook: string;
  instagram: string;
}

// Car/Automotive domain
export interface CarFeature {
  icon: string;
  title: string;
  description: string;
}

export interface CarModel {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
  category: "electric" | "autonomous" | "connected" | "hybrid";
}

// Animation and UI types
export interface GSAPAnimationConfig {
  duration?: number;
  ease?: string;
  delay?: number;
  stagger?: number;
  repeat?: number;
  yoyo?: boolean;
}

export interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form validation types
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: unknown) => boolean;
}

export interface ValidationError {
  field: string;
  message: string;
}

// Component props interfaces
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SectionProps extends BaseComponentProps {
  id: string;
  title: string;
  subtitle?: string;
  background?: "light" | "dark" | "gradient";
}

// Event types
export interface ScrollEvent {
  target: HTMLElement;
  scrollTop: number;
  scrollHeight: number;
  clientHeight: number;
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
