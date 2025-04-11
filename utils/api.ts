import axios from "axios";

const api = axios.create({
  baseURL: "https://your-api-url.com", // Replace with thetracksensei server API base URL
});

export const setApiKey = (key: string) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${key}`;
};

export default api;
