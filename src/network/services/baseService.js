import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});

export const baseService = {
  get: async (endpoint, config = {}) => {
    try {
      const response = await axiosInstance.get(endpoint, config);
      return response;
    } catch (error) {
      console.error(`GET${endpoint} error: ${error}`);
      throw error;
    }
  },
  post: async (endpoint, data, config = {}) => {
    try {
      const response = await axiosInstance.post(endpoint, data, config);
      return response;
    } catch (error) {
      console.error(`POST ${endpoint} error: ${error}`);
      throw error;
    }
  },
  delete: async (endpoint, config = {}) => {
    try {
      const response = await axiosInstance.delete(endpoint, config);
      return response;
    } catch (error) {
      console.error(`DELETE ${endpoint} error: ${error}`);
    }
  },
};
