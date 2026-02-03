import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://test.api.amadeus.com",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("amadeus_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
