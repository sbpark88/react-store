import React from "react";
import "./App.css";
import Counter from "./features/counter/Counter";
import Todo from "./features/todo/Todo";

function App() {
  return (
    <div className="App">
      <Counter />
      <Todo />
    </div>
  );
}

export default App;
