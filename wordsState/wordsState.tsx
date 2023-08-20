import { create } from "zustand";
import { instance } from "@/api/config";
import { WordsI, MoveWordI, DeleteWordI } from "@/types/words";
import { useGlobalState } from "@/globalState";
import { use } from "react";

interface State {
  words: WordsI | null;
  loading: boolean;
  moveLoading: boolean;
  error: null | string;

  moveWord: (moveData: MoveWordI) => void;
  getWords: () => void;
  deleteWord: (deleteData: DeleteWordI) => void;
  setWords: (words: WordsI) => void;
  updateRandomWordStats: (successes: boolean) => void;
}

const wordsState = create<State>()(set => ({
  words: null,
  loading: true,
  moveLoading: false,
  error: null,

  moveWord: async moveData => {
    set({ error: null, moveLoading: true });
    try {
      await instance.post(`words/move`, moveData);
      const response = await instance.get(`words`);

      set({ words: response.data[0], moveLoading: false });
    } catch (error: any) {
      set({
        error: "Move word failed",
        moveLoading: false,
      });
    }
  },

  getWords: async () => {
    set({ error: null });
    try {
      const response = await instance.get(`words`);

      set({ words: response.data[0], loading: false });
    } catch (error: any) {
      set({
        error: "Get words failed",
        loading: false,
      });
    }
  },

  deleteWord: async deleteData => {
    set({ error: null, moveLoading: true });
    try {
      await instance.post(`words/delete`, deleteData);
      const response = await instance.get(`words`);

      set({ words: response.data[0], moveLoading: false });
    } catch (error: any) {
      set({
        error: "Deletion failed",
        moveLoading: false,
      });
    }
  },

  setWords: async words => {
    set({ words, loading: false });
  },

  updateRandomWordStats: async successes => {
    set({ error: null });
    try {
      await instance.patch(`stats/randomVord`, { successes });
    } catch (error: any) {}
  },
}));

export const useWordsState = () => {
  const words = wordsState(state => state.words);
  const loading = wordsState(state => state.loading);
  const moveLoading = wordsState(state => state.moveLoading);
  const error = wordsState(state => state.error);

  const moveWord = wordsState(state => state.moveWord);
  const getWords = wordsState(state => state.getWords);
  const deleteWord = wordsState(state => state.deleteWord);
  const setWords = wordsState(state => state.setWords);
  const updateRandomWordStats = wordsState(
    state => state.updateRandomWordStats
  );

  return {
    words,
    loading,
    moveLoading,
    error,

    moveWord,
    getWords,
    deleteWord,
    setWords,
    updateRandomWordStats,
  };
};
