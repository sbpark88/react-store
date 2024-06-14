import { create } from "zustand";

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

export const useTodoStore = create<State & Actions>((set, get) => ({
  list: [],
  addTodo: (title) => set({ list: [...get().list, { id: nextId(), title }] }),
  deleteTodo: ({ id }) =>
    set({ list: get().list.filter((todo) => todo.id !== id) }),
}));

const nextId = (() => {
  let id = 1;
  return () => id++;
})();
