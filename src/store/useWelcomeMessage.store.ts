import axios from "axios";
import { create } from "zustand";
import { createSelectors } from "./utils/createSelectors";

type welcomeMessageStoreT = {
  loading: boolean;
  error: boolean;
  welcomeMessage: string | undefined;

  sendWelcomeMessage: (message: string) => Promise<void>;
  setWelcomeMessage: (message: string) => void;
};

const welcomeMessageStore = create<welcomeMessageStoreT>(set => ({
  loading: false,
  error: false,
  welcomeMessage: undefined,

  setWelcomeMessage: (message: string) => {
    set(state => {
      localStorage.setItem("welcomeMessage", message);
      return {
        ...state,
        welcomeMessage: message,
      };
    });
  },

  sendWelcomeMessage: async (message: string) => {
    set({ loading: true });
    try {
      const response = await axios.post("", {
        message: message,
      });
      if (response.status === 200) {
        localStorage.setItem("welcomeMessage", message);
        set(state => {
          return {
            ...state,
            welcomeMessage: message,
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

export const useWelcomeMessageStore = createSelectors(welcomeMessageStore);
