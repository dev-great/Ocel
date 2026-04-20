import axios, { type AxiosResponse } from "axios";
import type { PaginatedResponse, Blog, BlogCreate, BlogUpdate, Research, ResearchCreate, ResearchUpdate, Gallery, GalleryCreate, Resource, ResourceCreate, ResourceUpdate, Contact, Testimonial, TestimonialCreate, TestimonialUpdate, BoardOfTrustee, BoardOfTrusteeCreate, SeniorManagement, SeniorManagementCreate, ThematicLead, ThematicLeadCreate, JobPost, JobPostCreate, JobPostUpdate, ContactCreate } from "../types/Types";

// ─── Axios instance ─────────────────────────────────────────────────────────
const BASE_URL = import.meta.env.VITE_API_URL || "https://tlm.pythonanywhere.com";

const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Request interceptor — attach token
api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("tlm_token");
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

// Response interceptor — clear session on 401
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      sessionStorage.removeItem("tlm_token");
      sessionStorage.removeItem("tlm_user");
    }
    return Promise.reject(error);
  },
);

export default api;

// ─── Helper: build FormData for endpoints that accept images/files ──────────
function toFormData(fields: Record<string, string>, file?: { key: string; value: File } | null): FormData {
  const fd = new FormData();
  Object.entries(fields).forEach(([k, v]) => fd.append(k, v));
  if (file?.value) fd.append(file.key, file.value);
  return fd;
}

// ─── Auth endpoints ─────────────────────────────────────────────────────────
export const authLogin = (email: string, password: string) => api.post("/api/auth/login/", { email, password });

export const authProfile = () => api.get("/api/auth/profile/");

export const authUpdateProfile = (data: { first_name: string; last_name: string; phone: string; info: string }, photo?: File | null) => api.put("/api/auth/profile/", toFormData(data, photo ? { key: "photo", value: photo } : null), { headers: { "Content-Type": "multipart/form-data" } });

export const authChangePassword = (current_password: string, new_password: string, confirm_password: string) =>
  api.post("/api/auth/change-password/", {
    current_password,
    new_password,
    confirm_password,
  });
// ─── Blog endpoints ─────────────────────────────────────────────────────────
export const getBlogs = (): Promise<AxiosResponse<PaginatedResponse<Blog>>> => api.get("/api/blogs/");

export const getBlog = (id: number): Promise<AxiosResponse<Blog>> => api.get(`/api/blogs/${id}/`);

export const createBlog = (data: BlogCreate): Promise<AxiosResponse<Blog>> => api.post("/api/blogs/", toFormData({ title: data.title, body: data.content }, data.image ? { key: "image", value: data.image } : null), { headers: { "Content-Type": "multipart/form-data" } });

export const updateBlog = (id: number, data: BlogUpdate): Promise<AxiosResponse<Blog>> => api.put(`/api/blogs/${id}/`, toFormData({ title: data.title, body: data.content }, data.image ? { key: "image", value: data.image } : null), { headers: { "Content-Type": "multipart/form-data" } });

export const deleteBlog = (id: number) => api.delete(`/api/blogs/${id}/`);

// ─── Research endpoints ─────────────────────────────────────────────────────
export const getResearchList = (): Promise<AxiosResponse<PaginatedResponse<Research>>> => api.get("/api/research/");

export const getResearch = (id: number): Promise<AxiosResponse<Research>> => api.get(`/api/research/${id}/`);

export const createResearch = (data: ResearchCreate): Promise<AxiosResponse<Research>> => api.post("/api/research/", toFormData({ title: data.title, body: data.body }, data.image ? { key: "image", value: data.image } : null), { headers: { "Content-Type": "multipart/form-data" } });

export const updateResearch = (id: number, data: ResearchUpdate): Promise<AxiosResponse<Research>> => api.put(`/api/research/${id}/`, toFormData({ title: data.title, body: data.body }, data.image ? { key: "image", value: data.image } : null), { headers: { "Content-Type": "multipart/form-data" } });

export const deleteResearch = (id: number) => api.delete(`/api/research/${id}/`);

// ─── Gallery endpoints ──────────────────────────────────────────────────────
export const getGallery = (): Promise<AxiosResponse<PaginatedResponse<Gallery>>> => api.get("/api/gallery/");

export const createGallery = (data: GalleryCreate): Promise<AxiosResponse<Gallery>> => {
  const fd = new FormData();
  fd.append("title", data.title);
  fd.append("image", data.image);
  return api.post("/api/gallery/", fd, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const deleteGallery = (id: number) => api.delete(`/api/gallery/${id}/`);

// ─── Resource endpoints ─────────────────────────────────────────────────────
export const getResources = (): Promise<AxiosResponse<PaginatedResponse<Resource>>> => api.get("/api/resources/");

export const getResource = (id: number): Promise<AxiosResponse<Resource>> => api.get(`/api/resources/${id}/`);

export const createResource = (data: ResourceCreate): Promise<AxiosResponse<Resource>> => api.post("/api/resources/", toFormData({ title: data.title, description: data.description }, data.file ? { key: "file", value: data.file } : null), { headers: { "Content-Type": "multipart/form-data" } });

export const updateResource = (id: number, data: ResourceUpdate): Promise<AxiosResponse<Resource>> => api.put(`/api/resources/${id}/`, toFormData({ title: data.title, description: data.description }, data.file ? { key: "file", value: data.file } : null), { headers: { "Content-Type": "multipart/form-data" } });

export const deleteResource = (id: number) => api.delete(`/api/resources/${id}/`);

// ─── Contact endpoints (read-only from admin perspective) ───────────────────
export const getContacts = (): Promise<AxiosResponse<PaginatedResponse<Contact>>> => api.get("/api/contacts/");

export const getContact = (id: number): Promise<AxiosResponse<Contact>> => api.get(`/api/contacts/${id}/`);

// Public submission endpoint (no auth required)
export const createContact = (data: ContactCreate): Promise<AxiosResponse<Contact>> => api.post("/api/contacts/submit/", data);

export const deleteContact = (id: number) => api.delete(`/api/contacts/${id}/`);

// ─── Testimonial endpoints ──────────────────────────────────────────────────
export const getTestimonials = (): Promise<AxiosResponse<PaginatedResponse<Testimonial>>> => api.get("/api/testimonials/");

export const getTestimonial = (id: number): Promise<AxiosResponse<Testimonial>> => api.get(`/api/testimonials/${id}/`);

export const createTestimonial = (data: TestimonialCreate): Promise<AxiosResponse<Testimonial>> =>
  api.post(
    "/api/testimonials/",
    toFormData(
      {
        title: data.title,
        subtitle: data.subtitle || "",
        button_link: data.button_link || "",
        message: data.message,
      },
      data.image ? { key: "image", value: data.image } : null,
    ),
    { headers: { "Content-Type": "multipart/form-data" } },
  );

export const updateTestimonial = (id: number, data: TestimonialUpdate): Promise<AxiosResponse<Testimonial>> =>
  api.put(
    `/api/testimonials/${id}/`,
    toFormData(
      {
        title: data.title,
        subtitle: data.subtitle || "",
        button_link: data.button_link || "",
        message: data.message,
      },
      data.image ? { key: "image", value: data.image } : null,
    ),
    { headers: { "Content-Type": "multipart/form-data" } },
  );

export const deleteTestimonial = (id: number) => api.delete(`/api/testimonials/${id}/`);

// ─── Board of Trustees endpoints ────────────────────────────────────────────
export const getBoardOfTrustees = (): Promise<AxiosResponse<PaginatedResponse<BoardOfTrustee>>> => api.get("/api/board-of-trustees/");

export const createBoardOfTrustee = (data: BoardOfTrusteeCreate): Promise<AxiosResponse<BoardOfTrustee>> => api.post("/api/board-of-trustees/", toFormData({ name: data.name, position: data.position }, data.image ? { key: "image", value: data.image } : null), { headers: { "Content-Type": "multipart/form-data" } });

export const deleteBoardOfTrustee = (id: number) => api.delete(`/api/board-of-trustees/${id}/`);

// ─── Senior Management endpoints ────────────────────────────────────────────
export const getSeniorManagement = (): Promise<AxiosResponse<PaginatedResponse<SeniorManagement>>> => api.get("/api/senior-management/");

export const createSeniorManagement = (data: SeniorManagementCreate): Promise<AxiosResponse<SeniorManagement>> => api.post("/api/senior-management/", toFormData({ name: data.name, position: data.position }, data.image ? { key: "image", value: data.image } : null), { headers: { "Content-Type": "multipart/form-data" } });

export const deleteSeniorManagement = (id: number) => api.delete(`/api/senior-management/${id}/`);

// ─── Thematic Lead endpoints ────────────────────────────────────────────────
export const getThematicLeads = (): Promise<AxiosResponse<PaginatedResponse<ThematicLead>>> => api.get("/api/thematic-leads/");

export const createThematicLead = (data: ThematicLeadCreate): Promise<AxiosResponse<ThematicLead>> => api.post("/api/thematic-leads/", toFormData({ name: data.name, position: data.position }, data.image ? { key: "image", value: data.image } : null), { headers: { "Content-Type": "multipart/form-data" } });

export const deleteThematicLead = (id: number) => api.delete(`/api/thematic-leads/${id}/`);
// ─── Job Post endpoints ─────────────────────────────────────────────────────
export const getJobPosts = (): Promise<AxiosResponse<PaginatedResponse<JobPost>>> => api.get("/api/jobs/");

export const getJobPost = (id: number): Promise<AxiosResponse<JobPost>> => api.get(`/api/jobs/${id}/`);

export const createJobPost = (data: JobPostCreate): Promise<AxiosResponse<JobPost>> =>
  api.post(
    "/api/jobs/",
    toFormData(
      {
        title: data.title,
        description: data.description,
        location: data.location,
        job_type: data.job_type,
      },
      data.file ? { key: "file", value: data.file } : null,
    ),
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );

export const updateJobPost = (id: number, data: JobPostUpdate): Promise<AxiosResponse<JobPost>> =>
  api.put(
    `/api/jobs/${id}/`,
    toFormData(
      {
        title: data.title,
        description: data.description,
        location: data.location,
        job_type: data.job_type,
      },
      data.file ? { key: "file", value: data.file } : null,
    ),
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );

export const deleteJobPost = (id: number) => api.delete(`/api/jobs/${id}/`);
