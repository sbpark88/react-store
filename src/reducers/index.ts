import { combineReducers } from "redux";
import counterReducer from "./counter";
import todosReducer from "./todos";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

export default rootReducer;
