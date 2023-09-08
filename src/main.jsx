import React from "react";
import { createRoot } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/store/index.js";

const root = document.getElementById("root");
const rootInstance = createRoot(root);

rootInstance.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
