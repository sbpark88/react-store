import {
  applyMiddleware,
  legacy_createStore as createStore,
  Middleware,
} from "redux";
import rootReducer from "./reducers";

const logger: Middleware = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

const middleware = applyMiddleware(logger);

const store = createStore(rootReducer, undefined, middleware);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
