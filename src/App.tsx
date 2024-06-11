import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Counter store={store.counterStore} />
    </div>
  );
}

export default App;
