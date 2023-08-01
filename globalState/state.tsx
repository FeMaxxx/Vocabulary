import { create } from "zustand";
import { instance } from "@/api/config";
import { Auth } from "@/types/auth";

interface State {
  userEmail: string | null;
  isLogedIn: boolean | null;
  loading: boolean;
  siteLoading: boolean;
  error: string | null;
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
  error: null,
  needVerifyEmail: false,

  register: async userData => {
    set({ loading: true, error: null });
    try {
      await instance.post(`auth/register`, userData);

      set({ loading: false, needVerifyEmail: true });
    } catch (error: any) {
      const { message } = JSON.parse(error.request.response);
      set({
        loading: false,
        error: message,
      });
    }
  },

  verifyEmail: async verificationCode => {
    set({ loading: true, error: null });
    try {
      const response = await instance.post(
        `auth/verifyEmail/${verificationCode}`
      );

      set({
        loading: false,
        isLogedIn: true,
        needVerifyEmail: false,
        userEmail: response.data.email,
      });
    } catch (error: any) {
      const { message } = JSON.parse(error.request.response);
      set({
        loading: false,
        isLogedIn: false,
        error: message,
      });
    }
  },

  login: async userData => {
    set({ loading: true, error: null });
    try {
      const response = await instance.post(`auth/login`, userData);

      set({ loading: false, isLogedIn: true, userEmail: response.data.email });
    } catch (error: any) {
      const { message } = JSON.parse(error.request.response);
      set({
        loading: false,
        isLogedIn: false,
        error: error.request.status === 409 ? null : message,
        needVerifyEmail: error.request.status === 409,
      });
    }
  },

  getCurrentUser: async () => {
    set({ loading: true, error: null });
    try {
      const response = await instance.get(`auth/current`);

      set({
        loading: false,
        isLogedIn: true,
        userEmail: response.data.email,
        siteLoading: false,
      });
    } catch (error) {
      set({
        loading: false,
        isLogedIn: false,
        siteLoading: false,
      });
    }
  },

  logout: async () => {
    set({
      isLogedIn: false,
      error: null,
      userEmail: null,
      loading: false,
      needVerifyEmail: false,
    });
    await instance.post(`auth/logout`);
  },

  clearError: () => {
    set({ error: null });
  },
}));

export const useGlobalState = () => {
  const userEmail = globalState(state => state.userEmail);
  const isLogedIn = globalState(state => state.isLogedIn);
  const loading = globalState(state => state.loading);
  const siteLoading = globalState(state => state.siteLoading);
  const error = globalState(state => state.error);
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
    error,
    needVerifyEmail,

    register,
    login,
    verifyEmail,
    getCurrentUser,
    logout,
    clearError,
  };
};
