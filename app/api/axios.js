import axios from "axios";

const URL = "http://localhost:4000" || "https://house-backend-393e.onrender.com";
export default axios.create({
  baseURL: URL,
});
