import axios from "axios";

const API_URL = import.meta.env.VITE_STRAPI_URI;

export const api = axios.create({
  baseURL: `${API_URL}`,
});