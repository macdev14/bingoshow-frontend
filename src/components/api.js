import axios from "axios";

const api = axios.create({
    baseURL: "https://bingoshow.fly.dev",
    headers: { "Content-Type": "application/json" },
  });
  
  export default api;