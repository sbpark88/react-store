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

export const useTodoStore = create<State & Actions>((set) => ({
  list: [],
  addTodo: (title) =>
    set((state) => ({ list: [...state.list, { id: nextId(), title }] })),
  deleteTodo: ({ id }) =>
    set((state) => ({ list: state.list.filter((todo) => todo.id !== id) })),
}));

const nextId = (() => {
  let id = 1;
  return () => id++;
})();
