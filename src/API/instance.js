import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.1.10:3002",
  headers: {
    "Content-Type": "application/json",
  },
});
export default instance;
