import axios from "axios";

// Ambil URL API dari environment variable atau default ke localhost jika tidak ada
const API_URL = process.env.REACT_APP_API_URL || "https://upload-image-be.vercel.app";

// Buat instance axios dengan konfigurasi dasar
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
