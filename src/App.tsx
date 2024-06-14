import React from "react";
import "./App.css";
import Counter from "./features/counter/Counter";
import Todo from "./features/todo/Todo";
import UserInfo from "./features/user/UserInfo";

function App() {
  return (
    <div className="App">
      <UserInfo />
      <Counter />
      <Todo />
    </div>
  );
}

export default App;
