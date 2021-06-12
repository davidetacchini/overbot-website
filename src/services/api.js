import axios from "axios";

const api = axios.create({
  baseURL: "https://overbot-api.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
