import { createContext, ReducerAction, ReducerState } from "react";
import ProductDto from "../dto/ProductDto";

interface PricePerItem {
  products: number;
  options: number;
}

const pricePerItem = {
  products: 1000,
  options: 500,
} as PricePerItem;

interface OrderCounts {
  products: Map<string, number>;
  options: Map<string, number>;
}

interface Totals {
  products: number;
  options: number;
  total: number;
}

const INITIAL_STATE = {
  orderCounts: {
    products: new Map<string, number>(),
    options: new Map<string, number>(),
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

      return {
        ...state,
        orderCounts: {
          products: 0,
          options: state.orderCounts.options,
        },
      };
    }
    case "update_options":
      {
        return {};
      }

      throw Error("Unknown action: " + action.type);
  }
};

export const OrderContext = createContext(null);
