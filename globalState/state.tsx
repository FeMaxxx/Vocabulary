import { FC } from "react";
import { create } from "zustand";
import { instance } from "@/api/config";
import { Auth } from "@/types/auth";

interface State {
  userEmail: string | null;
  isLogedIn: boolean;
  loading: boolean;
  error: string | null;
  needVerifyEmail: boolean;

  register: (userData: Auth) => void;
  verifyEmail: (verificationCode: string) => void;
  login: (userData: Auth) => void;
  getCurrentUser: () => void;
}

const globalState = create<State>()(set => ({
  userEmail: null,
  isLogedIn: false,
  loading: false,
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
        error: message,
      });
    }
  },

  getCurrentUser: async () => {
    set({ loading: true, error: null });
    try {
      const response = await instance.get(`auth/current`);

      set({ loading: false, isLogedIn: true, userEmail: response.data.email });
    } catch (error) {
      set({
        loading: false,
        isLogedIn: false,
        error: (error as Error).message,
      });
    }
  },
}));

export const useGlobalState = () => {
  const userEmail = globalState(state => state.userEmail);
  const isLogedIn = globalState(state => state.isLogedIn);
  const loading = globalState(state => state.loading);
  const error = globalState(state => state.error);
  const needVerifyEmail = globalState(state => state.needVerifyEmail);

  const register = globalState(state => state.register);
  const login = globalState(state => state.login);
  const verifyEmail = globalState(state => state.verifyEmail);
  const getCurrentUser = globalState(state => state.getCurrentUser);

  return {
    userEmail,
    isLogedIn,
    loading,
    error,
    needVerifyEmail,

    register,
    login,
    verifyEmail,
    getCurrentUser,
  };
};
