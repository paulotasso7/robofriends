import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reportWebVitals from "./reportWebVitals";
import "tachyons";

import { searchRobots, requestRobots } from "./redux/reducers";
import "./index.css";
import App from "./containers/App";

const logger = createLogger();

const rootReducers = combineReducers({ searchRobots, requestRobots });

const store = configureStore(
  { reducer: rootReducers },
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
reportWebVitals();
