import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";

// Imports - Added by Steve
import { applyMiddleware, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// Reducers go here
const customerList = (state = [], action) => {
  if(action.type === 'ORDER_LIST'){
    return action.payload
  }
  return state
}

// Store goes here  - Added by Steve
const storeInstance = createStore(
  combineReducers({
    //  Reducers go here
    customerList
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
