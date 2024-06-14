import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  list: TodoItem[];
};

type Actions = {
  addTodo: (title: TodoItem["title"]) => void;
  deleteTodo: ({ id, title }: TodoItem) => void;
};

export interface TodoItem {
  id: number;
  title: string;
}

export const useTodoStore = create<
  State & Actions,
  [["zustand/persist", State & Actions]]
>(
  persist(
    (set, get) => ({
      list: [],
      addTodo: (title) =>
        set({ list: [...get().list, { id: nextId(), title }] }),
      deleteTodo: ({ id }) =>
        set({ list: get().list.filter((todo) => todo.id !== id) }),
    }),
    {
      name: "todo-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

const nextId = (() => {
  let id = 1;
  return () => id++;
})();
