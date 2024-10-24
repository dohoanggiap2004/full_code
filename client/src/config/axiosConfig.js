import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
  timeout: process.env.REACT_APP_TIMEOUT,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response, config } = error;

    if (response.status !== 401) {
      return Promise.reject(error); // Không phải lỗi 401, trả về lỗi bình thường
    }

    // Làm mới token
    try {
      await axios.get("/refresh-token", {
        baseURL: "http://localhost:8000",
        timeout: process.env.REACT_APP_TIMEOUT,
        withCredentials: true,
      });
      return await instance(config);
    } catch {
      console.log(error);
      return await Promise.reject(error);
    }
  }
);

export default instance;
