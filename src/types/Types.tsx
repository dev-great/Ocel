/* eslint-disable @typescript-eslint/no-empty-object-type */
import { createContext } from "react";

// ─── Paginated Response ─────────────────────────────────────────────────────
export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// ─── Auth ───────────────────────────────────────────────────────────────────
export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  info: string;
  photo_url: string | null;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ─── Blog ───────────────────────────────────────────────────────────────────
export interface Blog {
  id: number;
  title: string;
  slug: string;
  body: string;
  image: string | null;
  created_at: string;
  updated_at: string;
  // Add these optional fields for filtering
  category?: string;
  priority?: string;
  tags?: string[] | string;
}

export interface BlogCreate {
  title: string;
  content: string;
  image?: File | null;
}

export interface BlogUpdate extends BlogCreate {}

// ─── Research ───────────────────────────────────────────────────────────────
export interface Research {
  id: number;
  title: string;
  slug: string;
  body: string; // Changed from 'content' to 'body'
  image: string | null;
  image_url?: string; // Add this optional field
  created_at: string;
  updated_at: string;
}

export interface ResearchCreate {
  title: string;
  body: string; // Changed from 'content' to 'body'
  image?: File | null;
}

export interface ResearchUpdate extends ResearchCreate {}

// ─── Gallery ────────────────────────────────────────────────────────────────
export interface Gallery {
  id: number;
  title: string;
  image: string;
  created_at: string;
}

export interface GalleryCreate {
  title: string;
  image: File;
}

// ─── Resource ───────────────────────────────────────────────────────────────
export interface Resource {
  id: number;
  title: string;
  description: string;
  file: string | null;
  file_url?: string; // Add this line
  created_at: string;
  updated_at: string;
}
export interface ResourceCreate {
  title: string;
  description: string;
  file?: File | null;
}

export interface ResourceUpdate extends ResourceCreate {}

// ─── Contact ────────────────────────────────────────────────────────────────
export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
}

// ─── Testimonial ────────────────────────────────────────────────────────────
export interface Testimonial {
  id: number;
  title: string;
  subtitle: string;
  button_link: string;
  message: string;
  image: string | null;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

export interface TestimonialCreate {
  title: string;
  subtitle?: string;
  button_link?: string;
  message: string;
  image?: File;
}

export interface TestimonialUpdate extends TestimonialCreate {}
// ── Board of Trustees ──────────────────────────────────────────────────────
export interface BoardOfTrustee {
  id: number;
  name: string;
  position: string;
  image: string | null;
}

export interface BoardOfTrusteeCreate {
  name: string;
  position: string;
  image?: File;
}

// ── Senior Management ──────────────────────────────────────────────────────
export interface SeniorManagement {
  id: number;
  name: string;
  position: string;
  image: string | null;
}

export interface SeniorManagementCreate {
  name: string;
  position: string;
  image?: File;
}

// ── Thematic Leads ─────────────────────────────────────────────────────────
export interface ThematicLead {
  id: number;
  name: string;
  position: string;
  image: string | null;
}

export interface ThematicLeadCreate {
  name: string;
  position: string;
  image?: File;
}

// ─── Job Post ───────────────────────────────────────────────────────────────
export interface JobPost {
  id: number;
  title: string;
  description: string;
  location: string;
  job_type: string;
  file: string | null;
  file_url?: string;
  created_at: string;
  updated_at: string;
}

export interface JobPostCreate {
  title: string;
  description: string;
  location: string;
  job_type: string;
  file?: File | null;
}

export interface JobPostUpdate extends JobPostCreate {}

// ─── Contact ────────────────────────────────────────────────────────────────
export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
}

// Add this:
export interface ContactCreate {
  name: string;
  email: string;
  phone: string;
  message: string;
}
