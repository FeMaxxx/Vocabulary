import axios from "axios";

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_BASE_API_URL}`;

export const authInstance = axios.create({});

export const instance = axios.create({});

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
        const refreshToken = localStorage.getItem("refreshToken1");
        const response = await instance.post(`auth/refresh`, { refreshToken });

        instance.defaults.headers.common.Authorization = `Bearer ${response.data.tokens.accessToken}`;
        localStorage.setItem("accessToken1", response.data.tokens.accessToken);
        localStorage.setItem(
          "refreshToken1",
          response.data.tokens.refreshToken
        );
        originalRequest.headers.Authorization = `Bearer ${response.data.tokens.accessToken}`;

        return instance.request(originalRequest);
      } catch (e) {
        const token = localStorage.getItem("accessToken1");
        if (token) {
          window.location.reload();
          instance.defaults.headers.common.Authorization = ``;
          localStorage.setItem("accessToken1", "");
          localStorage.setItem("refreshToken1", "");
        }
      }
    } else {
      throw error;
    }
  }
);
