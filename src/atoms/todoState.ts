import { atom, selector } from "recoil";

export interface TodoItem {
  id: number;
  text: string;
  isComplete: boolean;
}

export const todoListState = atom<TodoItem[]>({
  key: "todoListState",
  default: [],
});

export const todoListFilters = ["All", "Completed", "Uncompleted"] as const;
export type TodoListFilter = (typeof todoListFilters)[number];

export const todoListFilterState = atom<TodoListFilter>({
  key: "todoListFilterState",
  default: "All",
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);
    return filteredTodoList[filter](list);
  },
});

const filteredTodoList: Record<
  TodoListFilter,
  (list: TodoItem[]) => TodoItem[]
> = {
  All: (list: TodoItem[]) => list,
  Completed: (list: TodoItem[]) => list.filter(pickCompleted),
  Uncompleted: (list: TodoItem[]) => list.filter(pickUncompleted),
};

const pickCompleted = (todo: TodoItem): boolean => todo.isComplete;
const pickUncompleted = (todo: TodoItem): boolean => !todo.isComplete;

export const deleteTodoItem = (list: TodoItem[], id: number): TodoItem[] =>
  list.filter((todo) => todo.id !== id);

export const editTodoItem = (list: TodoItem[], newTodo: TodoItem) =>
  list.map((oldTodo) => (oldTodo.id === newTodo.id ? newTodo : oldTodo));

const nextId = (() => {
  let id = 1;
  return () => id++;
})();

export const newTodo = (text: string) => ({
  id: nextId(),
  text,
  isComplete: false,
});
