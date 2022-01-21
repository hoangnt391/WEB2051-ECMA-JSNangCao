import axios from "axios";

const instance = axios.create({
  baseUrl: "http://192.168.1.10:3002",
  headers: {
    "Content-Type": "application/json",
  },
});
export default instance;
