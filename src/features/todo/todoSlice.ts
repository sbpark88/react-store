import { createAppSlice } from "../../app/createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";

export interface TodoSliceState {
  list: TodoItem[];
}

export interface TodoItem {
  id: number;
  title: string;
}

const initialState: TodoSliceState = { list: [] };

export const todoSlice = createAppSlice({
  name: "todo",
  initialState,
  reducers: (create) => ({
    addTodo: create.reducer((state, action: PayloadAction<string>) => {
      state.list = [...state.list, { id: nextId(), title: action.payload }];
    }),
    deleteTodo: create.reducer((state, action: PayloadAction<TodoItem>) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload.id);
    }),
  }),
  selectors: {
    selectTodo: (todo) => todo.list,
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export const { selectTodo } = todoSlice.selectors;

const nextId = (() => {
  let id = 1;
  return () => id++;
})();
