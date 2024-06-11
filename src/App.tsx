import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import { StoreContextProvider } from "./store";

function App() {
  return (
    <div className="App">
      <StoreContextProvider>
        <Counter />
      </StoreContextProvider>
    </div>
  );
}

export default App;
