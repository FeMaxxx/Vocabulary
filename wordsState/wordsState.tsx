import { create } from "zustand";
import { instance } from "@/api/config";
import { WordsI, MoveWordI, DeleteWordI } from "@/types/words";

interface State {
  words: WordsI | null;
  loading: boolean;
  error: null | string;

  moveWord: (moveData: MoveWordI) => void;
  getWords: () => void;
  deleteWord: (deleteData: DeleteWordI) => void;
  setWords: (words: WordsI) => void;
}

const wordsState = create<State>()(set => ({
  words: null,
  loading: true,
  error: null,

  moveWord: async moveData => {
    set({ error: null });
    try {
      await instance.post(`words/move`, moveData);
      const response = await instance.get(`words`);

      set({ words: response.data[0] });
    } catch (error: any) {
      const { message } = JSON.parse(error.request.response);
      set({
        error: message,
      });
    }
  },

  getWords: async () => {
    set({ error: null });
    try {
      const response = await instance.get(`words`);

      set({ words: response.data[0], loading: false });
    } catch (error: any) {
      const { message } = JSON.parse(error.request.response);
      set({
        error: message,
        loading: false,
      });
    }
  },

  deleteWord: async deleteData => {
    set({ error: null });
    try {
      await instance.post(`words/delete`, deleteData);
      const response = await instance.get(`words`);

      set({ words: response.data[0] });
    } catch (error: any) {
      const { message } = JSON.parse(error.request.response);
      set({
        error: message,
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
  const error = wordsState(state => state.error);

  const moveWord = wordsState(state => state.moveWord);
  const getWords = wordsState(state => state.getWords);
  const deleteWord = wordsState(state => state.deleteWord);
  const setWords = wordsState(state => state.setWords);

  return {
    words,
    loading,
    error,

    moveWord,
    getWords,
    deleteWord,
    setWords,
  };
};
