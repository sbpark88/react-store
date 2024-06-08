import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import DevTools from "./containers/DevTools";
import { BrowserRouter } from "react-router-dom";

const RootDev = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <DevTools />
      </Provider>
    </BrowserRouter>
  );
};

export default RootDev;
