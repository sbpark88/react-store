import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./store";
import Root from "./Root";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const render = () =>
  root.render(
    <React.Fragment>
      <Root />
    </React.Fragment>,
  );

render();

store.subscribe(render);
