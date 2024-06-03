import React, { createContext, useReducer } from "react";
import { ChildrenComponent } from "../types";

interface PricePerItem {
  products: number;
  options: number;
}

const pricePerItem = {
  products: 1000,
  options: 500,
} as PricePerItem;

export interface OrderCounts {
  products: { [key: string]: number };
  options: { [key: string]: number };
}

export interface Totals {
  products: number;
  options: number;
  total: number;
}

const INITIAL_STATE = {
  orderCounts: {
    products: {},
    options: {},
  } as OrderCounts,
  totals: {
    products: 0,
    options: 0,
    total: 0,
  } as Totals,
};

interface State {
  orderCounts: OrderCounts;
  totals: Totals;
}

interface Action {
  type: "update_products" | "update_options";
  payload: { name: string; count: number };
}

const orderReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "update_products": {
      const { name, count } = action.payload;
      const newProducts = {
        ...state.orderCounts.products,
        [name]: count,
      };
      console.log(state.orderCounts.products);

      const newProductsTotal = totalCount(newProducts) * pricePerItem.products;

      return {
        orderCounts: {
          ...state.orderCounts,
          products: newProducts,
        },
        totals: {
          ...state.totals,
          products: newProductsTotal,
          total: state.totals.options + newProductsTotal,
        },
      };
    }
    case "update_options": {
      const { name, count } = action.payload;
      const newOptions = {
        ...state.orderCounts.options,
        [name]: count,
      };

      const newOptionsTotal = totalCount(newOptions) * pricePerItem.options;

      return {
        orderCounts: {
          ...state.orderCounts,
          options: newOptions,
        },
        totals: {
          ...state.totals,
          options: newOptionsTotal,
          total: state.totals.products + newOptionsTotal,
        },
      };
    }
    default:
      return state;
  }

  function totalCount(obj: { [key: string]: number }): number {
    return Object.values(obj).reduce((acc, cur) => acc + cur, 0);
  }
};

interface OrderContextValue extends State {
  handleUpdateProducts: (name: string, count: number) => void;
  handleUpdateOptions: (name: string, count: number) => void;
}

export const OrderContext = createContext<OrderContextValue>({
  ...INITIAL_STATE,
  handleUpdateProducts() {},
  handleUpdateOptions() {},
});

interface Props extends ChildrenComponent {}

export const OrderContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, INITIAL_STATE);

  const handleUpdateProducts = (name: string, count: number) =>
    dispatch({ type: "update_products", payload: { name, count } });

  const handleUpdateOptions = (name: string, count: number) =>
    dispatch({ type: "update_options", payload: { name, count } });

  return (
    <OrderContext.Provider
      value={{ ...state, handleUpdateProducts, handleUpdateOptions }}
    >
      {children}
    </OrderContext.Provider>
  );
};
