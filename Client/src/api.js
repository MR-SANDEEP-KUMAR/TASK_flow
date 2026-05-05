import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

console.log("API URL:", process.env.REACT_APP_API_URL);

// AUTH
export const authAPI = {
    signup: (data) => api.post('/auth/signup', data),
    login: (data) => api.post('/auth/login', data),
    me: () => api.get('/api/auth/me'),
};

// PROJECTS
export const projectsAPI = {
  getAll: () => api.get('/projects'),
  getOne: (id) => api.get(`/projects/${id}`),
  create: (data) => api.post('/projects', data),
  update: (id, data) => api.put(`/projects/${id}`, data),
  delete: (id) => api.delete(`/projects/${id}`),
};

// TASKS
export const tasksAPI = {
  getAll: (projectId) => api.get(`/projects/${projectId}/tasks`),
  create: (projectId, data) => api.post(`/projects/${projectId}/tasks`, data),
};

// USERS
export const usersAPI = {
  getAll: () => api.get('/users'),
};

// DASHBOARD
export const dashboardAPI = {
  get: () => api.get('/dashboard/stats'),
};