import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  count: number;
};

type Actions = {
  increment: () => void;
  decrement: () => void;
};

export const useCounterStore = create<
  State & Actions,
  [["zustand/persist", State & Actions]]
>(
  persist(
    (set, get) => ({
      count: 0,
      increment: () => set({ count: get().count + 1 }),
      decrement: () => set({ count: get().count - 1 }),
    }),
    {
      name: "counter-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
