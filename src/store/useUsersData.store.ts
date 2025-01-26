import axios from "axios";
import { create } from "zustand";
import { createSelectors } from "./utils/createSelectors";
import { rowUserT, UserT } from "@utils/User.type";
import specData from "@utils/specData";
import statusData from "@utils/statusData";
import usersData from "../assets/mockData";

type usersDataStoreT = {
  loading: boolean;
  error: boolean;
  storeData: UserT[] | null;

  setData: (data: UserT[]) => void;
  fetchData: () => Promise<void>;
  changeStatus: (userId: string, newStatus: string) => void;
};

const getStoreData = (data: rowUserT[]) =>
  data.map(user => {
    return {
      ...user,
      statusId: statusData[user.statusId].status,
      directionId: specData[user.directionId],
      roleId: `${user.roleId}`,
    };
  });
const storeData = getStoreData(usersData);

const usersDataStore = create<usersDataStoreT>(set => ({
  loading: false,
  error: false,
  storeData: storeData,

  setData: (data: UserT[]) => {
    set(state => ({
      ...state,
      storeData: data,
    }));
  },

  fetchData: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("");
      if (response.status === 200) {
        const data = response.data;
        set(state => ({
          ...state,
          storeData: getStoreData(data),
        }));
      }
    } catch {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  changeStatus: (userId, newStatus) => {
    set(state => {
      return {
        ...state,
        storeData: storeData.map(user => {
          if (user.id === userId) {
            return {
              ...user,
              statusId: newStatus,
            };
          } else {
            return user;
          }
        }),
      };
    });
  },
}));

export const useUsersDataStore = createSelectors(usersDataStore);
