import CounterStore from "./CounterStore";
import React, { createContext, useContext } from "react";
import { ChildrenComponent } from "../interfaces/CommonProps";

class RootStore {
  counterStore: CounterStore;

  constructor() {
    this.counterStore = new CounterStore();
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
