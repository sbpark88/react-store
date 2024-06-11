import CounterStore from "./CounterStore";
import React, { createContext, useContext } from "react";
import { ChildrenComponent } from "../interfaces/CommonProps";
import TodoStore from "./TodoStore";

class RootStore {
  counterStore: CounterStore;
  todoStore: TodoStore;

  constructor() {
    this.counterStore = new CounterStore();
    this.todoStore = new TodoStore();
  }
}

export const StoreContext = createContext<RootStore>(new RootStore());

export const StoreContextProvider: React.FC<ChildrenComponent> = ({
  children,
}) => {
  return (
    <StoreContext.Provider value={new RootStore()}>
      {children}
    </StoreContext.Provider>
  );
};

export const useCounterStore = () => {
  const { counterStore: store } = useContext(StoreContext);
  return store;
};

export const useTodoStore = () => {
  const { todoStore: store } = useContext(StoreContext);
  return store;
};
