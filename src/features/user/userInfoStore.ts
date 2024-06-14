import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

type State = {
  userId: number;
};

type Actions = {
  setUserId: (userId: number) => void;
  getCurrentUserName: () => Promise<string>;
  reset: () => void;
};

const initialState: State = {
  userId: 1,
};

export const useUserInfoStore = create<
  State & Actions,
  [["zustand/persist", State & Actions]]
>(
  persist(
    (set, get) => ({
      ...initialState,
      setUserId: (userId: number) => set({ userId }),
      getCurrentUserName: async () => {
        const server = "https://jsonplaceholder.typicode.com/users";
        const userId: number = get().userId;
        const response = await axios.get<User>(`${server}/${userId}`);
        return response.data.name;
      },
      reset: () => set(initialState),
    }),
    {
      name: "current-user-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
