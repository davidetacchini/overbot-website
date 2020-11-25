import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_OVERCORD_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: process.env.VUE_APP_SECRET_ACCESS_TOKEN,
  },
});

export default api;
