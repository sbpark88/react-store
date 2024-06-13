import React, { Suspense } from "react";
import "./App.css";
import TodoList from "./pages/TodoList";
import UserInfo from "./components/UserInfo";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary
        fallback={<div className="user-info">Something wrong...</div>}
      >
        <Suspense fallback={<div className="user-info">Loading...</div>}>
          <UserInfo />
        </Suspense>
      </ErrorBoundary>
      <TodoList />
    </div>
  );
}

export default App;
