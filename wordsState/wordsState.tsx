import { create } from "zustand";
import { instance } from "@/api/config";
import { WordsI, MoveWordI, DeleteWordI } from "@/types/words";

interface State {
  words: WordsI | null;
  loading: boolean;
  moveLoading: boolean;
  error: null | string;

  moveWord: (moveData: MoveWordI) => void;
  getWords: () => void;
  deleteWord: (deleteData: DeleteWordI) => void;
  setWords: (words: WordsI) => void;
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

  return {
    words,
    loading,
    moveLoading,
    error,

    moveWord,
    getWords,
    deleteWord,
    setWords,
  };
};
