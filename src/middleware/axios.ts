import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8002/", // Cambia esto por la URL base de tu API
  timeout: 10000, // Tiempo de espera para la solicitud
  headers: {
    "Content-Type": "application/json",
  },
});

// Puedes agregar interceptores si es necesario
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    alert(error);
  }
);

export default instance;
