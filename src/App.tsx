import React from "react";
import "./App.css";
import TodoList from "./pages/TodoList";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <div className="App">
      <UserInfo />
      <TodoList />
    </div>
  );
}

export default App;
