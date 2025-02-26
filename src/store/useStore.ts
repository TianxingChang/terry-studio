import { create } from "zustand";

interface StoreState {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const useStore =
  create <
  StoreState >
  ((set) => ({
    currentPage: "Home",
    setCurrentPage: (page) => set({ currentPage: page }),
  }));

export default useStore;
