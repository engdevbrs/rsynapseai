/**
 * SYNAPSE.IA - TYPESCRIPT TYPES
 * Definiciones de tipos globales para la aplicación
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  photo?: string;
  credentials?: string[];
  socials?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface ContactInfo {
  phone: string;
  email: string;
  website: string;
  address: string;
}

export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  github?: string;
}

// Animation Props
export interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

// Form Types
export interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ContactFormSubmission {
  name: string;
  email: string;
  phone?: string;
  message: string;
  company?: string;
}

// SEO Types
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogUrl?: string;
  noindex?: boolean;
}
