import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
  Middleware,
  StoreEnhancer,
} from "redux";
import rootReducer from "./reducers";
import DevTools from "./containers/DevTools";

const logger: Middleware = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

const middleware = applyMiddleware(logger);

const enhancer: StoreEnhancer = compose(middleware, DevTools.instrument());

const store = createStore(rootReducer, undefined, enhancer);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
