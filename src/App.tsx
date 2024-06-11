import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import { StoreContextProvider } from "./store";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <StoreContextProvider>
        <Counter />
        <Todo />
      </StoreContextProvider>
    </div>
  );
}

export default App;
