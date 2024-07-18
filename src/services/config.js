import axios from "axios";

const api = axios.create({ baseURL: "https://fakestoreapi.com" });

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (Error) => Promise.reject(Error)
);

export default api;
