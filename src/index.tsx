import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { OrderContext } from "./context/OrderContext";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") return;

  const { worker } = await import("./mocks/browser");
  return worker.start();
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <OrderContext.Provider value={null}>
        <App />
      </OrderContext.Provider>
    </React.StrictMode>,
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
