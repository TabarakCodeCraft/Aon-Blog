import { create } from "zustand";

export const useStore = create((set) => ({
  favorite: [],
  setFavorite: (favorite) => set({ favorite }),
}));
