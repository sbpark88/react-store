import { makeAutoObservable } from "mobx";

export interface TodoItem {
  id: number;
  title: string;
}

export default class TodoStore {
  list: TodoItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(title: string) {
    this.list = [...this.list, { id: nextId(), title }];
  }

  deleteTodo({ id, title }: TodoItem) {
    this.list = this.list.filter((todo) => todo.id !== id);
  }
}

const nextId = (() => {
  let id = 1;
  return () => id++;
})();
