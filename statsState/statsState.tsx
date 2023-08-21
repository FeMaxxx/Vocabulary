import { create } from "zustand";
import { instance } from "@/api/config";
import { StatsI } from "@/types/stats";

interface State {
  stats: StatsI | null;
  loading: boolean;
  error: null | string;

  getStats: () => void;
  updateRandomWordStats: (successes: boolean) => void;
  setStats: (words: StatsI) => void;
}

const statsState = create<State>()(set => ({
  stats: null,
  loading: true,
  error: null,

  getStats: async () => {
    set({ error: null });
    try {
      const response = await instance.get(`stats`);
      set({ stats: response.data[0], loading: false });
    } catch (error: any) {
      set({
        error: "Get stats failed",
        loading: false,
      });
    }
  },

  updateRandomWordStats: async successes => {
    try {
      await instance.patch(`stats/randomVord`, { successes });
    } catch (error: any) {}
  },

  setStats: async stats => {
    set({ stats, loading: false });
  },
}));

export const useStatsState = () => {
  const stats = statsState(state => state.stats);
  const loading = statsState(state => state.loading);
  const error = statsState(state => state.error);

  const getStats = statsState(state => state.getStats);
  const updateRandomWordStats = statsState(
    state => state.updateRandomWordStats
  );
  const setStats = statsState(state => state.setStats);

  return {
    stats,
    loading,
    error,

    getStats,
    updateRandomWordStats,
    setStats,
  };
};
