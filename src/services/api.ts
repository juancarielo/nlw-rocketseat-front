import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333', // tip: check the hostname
});
export default api;
