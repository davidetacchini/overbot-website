import axios from "axios";

const getBaseUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return "https://overbot-api.vercel.app/api";
  } else {
    return "http://127.0.0.1:5001/api";
  }
};

const api = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
