import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:5555/api/v1/",
  withCredentials: true,
});

// instance.interceptors.response.use(
//   response => response,
//   async error => {
//     if (error.response.status === 401) {
//       try {
//         const refreshToken = localStorage.getItem("refreshToken1");
//         const { data } = await instance.post("/auth/refresh", {
//           refreshToken,
//         });
//         instance.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
//         localStorage.setItem("refreshToken1", data.refreshToken);
//         localStorage.setItem("accessToken1", data.accessToken);
//         window.location.reload();
//         return Promise.reject(error);
//       } catch (error) {
//         return Promise.reject(error);
//       }
//     } else if (error.response.status === 403) {
//       localStorage.setItem("refreshToken1", "");
//       localStorage.setItem("accessToken1", "");
//       instance.defaults.headers.common.Authorization = "";
//     }
//   }
// );
