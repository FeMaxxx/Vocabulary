import axios from "axios";

export const authInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_API_URL}`,
});

export const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_API_URL}`,
  withCredentials: true,
});

instance.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await instance.post(`auth/refresh`, {
          withCredentials: true,
        });
        return instance.request(originalRequest);
      } catch (e) {}
    }
    throw error;
  }
);
