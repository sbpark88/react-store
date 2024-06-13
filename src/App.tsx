import React, { Suspense } from "react";
import "./App.css";
import TodoList from "./pages/TodoList";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div className="user-info">Loading...</div>}>
        <UserInfo />
      </Suspense>
      <TodoList />
    </div>
  );
}

export default App;
