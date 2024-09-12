import axios from "axios";

// Buat instance axios dengan konfigurasi dasar
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://upload-image-be.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

// Tambahkan interceptor jika perlu
axiosInstance.interceptors.request.use(
  (config) => {
    // Logika tambahan untuk URL
    if (config.url.startsWith("/api/v1")) {
      config.url = `https://alfandhiuploadimage.netlify.app${config.url}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
