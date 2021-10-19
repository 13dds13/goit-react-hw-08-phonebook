import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "modern-normalize/modern-normalize.css";
import store from "./redux/store";
import App from "./components/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
