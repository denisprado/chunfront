import axios from "axios";
console.tron.log(process.env)
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export default api;
