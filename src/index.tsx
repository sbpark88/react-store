import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import IndexProd from "./index.prod";
import IndexDev from "./index.dev";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <>
          {process.env.NODE_ENV === "production" ? <IndexProd /> : <IndexDev />}
        </>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
