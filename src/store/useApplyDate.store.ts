import axios from "axios";
import { create } from "zustand";
import { createSelectors } from "./utils/createSelectors";
type applyDateStoreT = {
  loading: boolean;
  error: boolean;
  startDate: string | undefined;
  finishDate: string | undefined;

  sendDates: (start: string, finish: string) => Promise<void>;
  setDates: (start: string, finish: string) => void;
};

const applyDateStore = create<applyDateStoreT>(set => ({
  loading: false,
  error: false,
  startDate: undefined,
  finishDate: undefined,

  setDates: (start: string, finish: string) => {
    set(state => {
      localStorage.setItem("startApplyDate", start);
      localStorage.setItem("finishApplyDate", finish);
      return {
        ...state,
        startDate: start,
        finishDate: finish,
      };
    });
  },

  sendDates: async (start: string, finish: string) => {
    set({ loading: true });
    try {
      const response = await axios.post("", {
        startDate: start,
        endDate: finish,
      });
      if (response.status === 200) {
        localStorage.setItem("startApplyDate", start);
        localStorage.setItem("finishApplyDate", finish);
        set(state => {
          return {
            ...state,
            startDate: start,
            finishDate: finish,
          };
        });
      }
    } catch {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));

export const useApplyDateStore = createSelectors(applyDateStore);
