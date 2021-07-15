import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";

// Imports - Added by Steve
import { applyMiddleware, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// Reducers go here

// Store goes here  - Added by Steve
const storeInstance = createStore(
  combineReducers({
    //  Reducers go here
  }),
  applyMiddleware(logger)
);

// Provider added to ReactDOM - Added by Steve
ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
