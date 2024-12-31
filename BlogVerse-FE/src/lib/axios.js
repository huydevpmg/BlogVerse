import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true, // Gửi cookie hoặc thông tin xác thực
});

// Thêm interceptor để tự động gắn token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Lấy token từ localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Gắn token vào header
  }
  return config;
});