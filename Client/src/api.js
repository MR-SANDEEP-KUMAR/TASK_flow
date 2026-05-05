   import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

console.log("API URL:", process.env.REACT_APP_API_URL);

// ✅ ADD TOKEN AUTOMATICALLY IN EVERY REQUEST
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ================= AUTH =================
export const authAPI = {
  signup: (data) => api.post('/api/auth/signup', data),
  login: (data) => api.post('/api/auth/login', data),
  me: () => api.get('/api/auth/me'),
};

// ================= PROJECTS =================
export const projectsAPI = {
  getAll: () => api.get('/projects'),
  getOne: (id) => api.get(`/projects/${id}`),
  create: (data) => api.post('/projects', data),
  update: (id, data) => api.put(`/projects/${id}`, data),
  delete: (id) => api.delete(`/projects/${id}`),
};

// ================= TASKS =================
export const tasksAPI = {
  getAll: (projectId) => api.get(`/api/tasks?project=${projectId}`),
  create: (projectId, data) =>
    api.post('/api/tasks', { ...data, project: projectId }),
  update: (taskId, data) => api.put(`/api/tasks/${taskId}`, data),
  delete: (taskId) => api.delete(`/api/tasks/${taskId}`),
  updateStatus: (taskId, status) =>
    api.patch(`/api/tasks/${taskId}`, { status }),
};

// ================= USERS =================
export const usersAPI = {
  getAll: () => api.get('/api/users'),
};

// ================= DASHBOARD =================
export const dashboardAPI = {
  get: () => api.get('/api/dashboard/stats'),
};

export default api;