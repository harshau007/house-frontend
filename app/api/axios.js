import axios from "axios";

const URL = "https://house-backend-393e.onrender.com";
export default axios.create({
  baseURL: URL,
});
