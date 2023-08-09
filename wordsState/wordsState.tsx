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
  loading: false,
  error: null,

  moveWord: async moveData => {
    set({ loading: true, error: null });
    try {
      await instance.post(`words/move`, moveData);
      const response = await instance.get(`words`);

      set({ loading: false, words: response.data[0] });
    } catch (error: any) {
      const { message } = JSON.parse(error.request.response);
      set({
        loading: false,
        error: message,
      });
    }
  },

  getWords: async () => {
    try {
      const response = await instance.get(`words`);

      set({ words: response.data[0] });
    } catch (error: any) {
      const { message } = JSON.parse(error.request.response);
      set({
        error: message,
      });
    }
  },

  deleteWord: async deleteData => {
    set({ loading: true, error: null });

    try {
      await instance.post(`words/delete`, deleteData);
      const response = await instance.get(`words`);

      set({ loading: false, words: response.data[0] });
    } catch (error: any) {
      const { message } = JSON.parse(error.request.response);
      set({
        error: message,
        loading: false,
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
