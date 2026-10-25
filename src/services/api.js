import axios from 'axios';

// Backend ka base URL
const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Ye interceptor automatic har request ke sath localStorage se token utha kar header mein bhej dega (Protected routes ke liye zaroori hai)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;