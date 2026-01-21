import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Compliance APIs
export const complianceAPI = {
  getCompliance: () => apiClient.get("/compliance"),
  markCompleted: (id: number) =>
    apiClient.post("/compliance/mark-completed", { id }),
  updateItem: (id: number, data: any) =>
    apiClient.put(`/compliance/${id}`, data),
  deleteItem: (id: number) => apiClient.delete(`/compliance/${id}`),
};

// Alerts APIs
export const alertsAPI = {
  getAlerts: () => apiClient.get("/alerts"),
  markRead: (id: number) => apiClient.post("/alerts/mark-read", { id }),
  markAllRead: () => apiClient.post("/alerts/mark-all-read"),
  createAlert: (message: string, type: string) =>
    apiClient.post("/alerts", { message, type }),
  deleteAlert: (id: number) => apiClient.delete(`/alerts/${id}`),
};

export default apiClient;
