import { create } from "zustand";
import { instance } from "@/api/config";
import { WordsI, WordI } from "@/types/words";

interface State {
  words: WordsI | null;
  loading: boolean;
  error: null | string;

  addWord: (wordData: WordI) => void;
  setWords: (words: WordsI) => void;
}

const wordsState = create<State>()(set => ({
  words: null,
  loading: false,
  error: null,

  addWord: async wordData => {
    set({ loading: true });
    try {
      await instance.post(`words`, wordData);

      set({ loading: false });
    } catch (error: any) {
      const { message } = JSON.parse(error.request.response);
      set({
        loading: false,
        error: message,
      });
    }
  },

  setWords: async words => {
    set({ words });
  },
}));

export const useWordsState = () => {
  const words = wordsState(state => state.words);
  const loading = wordsState(state => state.loading);
  const error = wordsState(state => state.error);

  const addWord = wordsState(state => state.addWord);
  const setWords = wordsState(state => state.setWords);

  return {
    words,
    loading,
    error,

    addWord,
    setWords,
  };
};
