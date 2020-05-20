import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import log from "./middlewares/log";
import App from "./App";
import rootReducer from "./reducers";
import "./index.css";

const store = createStore(rootReducer, applyMiddleware(log, thunk));

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
}

render();
