import { create } from "zustand";

type State = {
  count: number;
};

type Actions = {
  increment: () => void;
  decrement: () => void;
};

export const useCounterStore = create<State & Actions>((set, get) => ({
  count: 0,
  increment: () => set({ count: get().count + 1 }),
  decrement: () => set({ count: get().count - 1 }),
}));
