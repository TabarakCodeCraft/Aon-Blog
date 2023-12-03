import { create } from "zustand";
export const useSore = create((set) => (
    {
        favorite: [],
        setFavorite: (favorite) => set({ favorite }),
    }
));