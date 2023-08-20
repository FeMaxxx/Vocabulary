import { create } from "zustand";
import { instance, authInstance } from "@/api/config";
import { Auth } from "@/types/auth";

const setToken = (token: string) => {
  if (token === "") {
    instance.defaults.headers.common.Authorization = "";
  } else {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};

interface State {
  userEmail: string | null;
  isLogedIn: boolean | null;
  loading: boolean;
  siteLoading: boolean;
  registerError: string | null;
  loginError: string | null;
  verifyError: string | null;
  needVerifyEmail: boolean;

  register: (userData: Auth) => void;
  verifyEmail: (verificationCode: string) => void;
  login: (userData: Auth) => void;
  getCurrentUser: () => void;
  logout: () => void;
  clearError: () => void;
}

const globalState = create<State>()(set => ({
  userEmail: null,
  isLogedIn: null,
  loading: false,
  siteLoading: true,
  registerError: null,
  loginError: null,
  verifyError: null,
  needVerifyEmail: false,

  register: async userData => {
    set({ loading: true, registerError: null });
    try {
      await authInstance.post(`auth/register`, userData);

      set({ loading: false, needVerifyEmail: true });
    } catch (error: any) {
      const { message } = JSON.parse(error.request.response);
      set({
        loading: false,
        registerError: message,
      });
    }
  },

  login: async userData => {
    set({ loading: true, loginError: null });
    try {
      const response = await authInstance.post(`auth/login`, userData);

      setToken(response.data.tokens.accessToken);
      localStorage.setItem("accessToken1", response.data.tokens.accessToken);
      localStorage.setItem("refreshToken1", response.data.tokens.refreshToken);

      set({
        loading: false,
        isLogedIn: true,
        userEmail: response.data.user.email,
      });
    } catch (error: any) {
      if (error.code === "ERR_NETWORK") {
        set({
          loading: false,
          isLogedIn: false,
          loginError: "Network error",
        });

        return;
      }

      set({
        loading: false,
        isLogedIn: false,
        loginError:
          error.request.status === 409 ? null : "Email or password invalid",
        needVerifyEmail: error.request.status === 409,
      });
    }
  },

  verifyEmail: async verificationCode => {
    set({ loading: true, verifyError: null });
    try {
      const response = await authInstance.post(
        `auth/verifyEmail/${verificationCode}`
      );

      setToken(response.data.tokens.accessToken);
      localStorage.setItem("accessToken1", response.data.tokens.accessToken);
      localStorage.setItem("refreshToken1", response.data.tokens.refreshToken);

      set({
        loading: false,
        isLogedIn: true,
        needVerifyEmail: false,
        userEmail: response.data.user.email,
      });
    } catch (error: any) {
      if (error.code === "ERR_NETWORK") {
        set({
          loading: false,
          isLogedIn: false,
          verifyError: "Network error",
        });

        return;
      }

      const { message } = JSON.parse(error.request.response);
      set({
        loading: false,
        isLogedIn: false,
        verifyError: message,
      });
    }
  },

  getCurrentUser: async () => {
    set({ siteLoading: true });
    try {
      const response = await instance.get(`auth/current`);

      set({
        isLogedIn: true,
        userEmail: response.data.user.email,
        siteLoading: false,
      });
    } catch {
      set({
        isLogedIn: false,
        siteLoading: false,
      });
    }
  },

  logout: async () => {
    set({
      isLogedIn: false,
      userEmail: null,
      loading: false,
      needVerifyEmail: false,
    });

    localStorage.setItem("accessToken1", "");
    localStorage.setItem("refreshToken1", "");

    try {
      await authInstance.post(`auth/logout`);
    } catch {}

    setToken("");
  },

  clearError: async () => {
    set({
      registerError: null,
      loginError: null,
      verifyError: null,
    });
  },
}));

export const useGlobalState = () => {
  const userEmail = globalState(state => state.userEmail);
  const isLogedIn = globalState(state => state.isLogedIn);
  const loading = globalState(state => state.loading);
  const siteLoading = globalState(state => state.siteLoading);
  const registerError = globalState(state => state.registerError);
  const loginError = globalState(state => state.loginError);
  const verifyError = globalState(state => state.verifyError);
  const needVerifyEmail = globalState(state => state.needVerifyEmail);

  const register = globalState(state => state.register);
  const login = globalState(state => state.login);
  const verifyEmail = globalState(state => state.verifyEmail);
  const getCurrentUser = globalState(state => state.getCurrentUser);
  const logout = globalState(state => state.logout);
  const clearError = globalState(state => state.clearError);

  return {
    userEmail,
    isLogedIn,
    loading,
    siteLoading,
    registerError,
    loginError,
    verifyError,
    needVerifyEmail,

    register,
    login,
    verifyEmail,
    getCurrentUser,
    logout,
    clearError,
  };
};
