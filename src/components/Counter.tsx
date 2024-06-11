import React from "react";
import "./Counter.css";
import { observer } from "mobx-react-lite";
import { useCounterStore } from "../store";

const Counter: React.FC = () => {
  const store = useCounterStore();

  return (
    <div className="counter-container">
      Clicked: {store.value} time
      <button onClick={() => store.increment()}>+</button>
      <button onClick={() => store.decrement()}>-</button>
      <p>Value is {store.isEven ? "even" : "odd"} number</p>
    </div>
  );
};

export default observer(Counter);