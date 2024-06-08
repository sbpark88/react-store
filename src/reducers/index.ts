import { combineReducers } from "redux";
import counterReducer from "./counter";
import todosReducer from "./todos";
import postsReducer from "./post";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  posts: postsReducer,
});

export default rootReducer;
