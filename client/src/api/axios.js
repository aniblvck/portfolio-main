import axios from "axios";

const API = axios.create({
  // TODO: deploy your own backend and put its URL here.
  // Until then, the site runs fully on local data (projects come from
  // src/_mock/mockProjects.js and the contact form falls back to email).
  baseURL: "https://your-backend-url.example.com/api/",
  withCredentials: true, // only if you use cookies or authentication
});

// Optional: Attach JWT token automatically (if using JWT)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
