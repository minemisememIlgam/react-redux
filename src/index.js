import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(reducer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
