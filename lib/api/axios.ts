import axios from "axios";

const axiosInstance = () => {
  const defaultOptions = {
    baseURL: "http://localhost:3000/api/",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let instance = axios.create(defaultOptions);
  return instance;
};

export default axiosInstance();
