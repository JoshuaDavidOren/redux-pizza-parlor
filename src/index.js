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
  if (action.type === "ORDER_LIST") {
    return action.payload;
  }
  return state;
};

// Reducers go here
const selectedPizzasList = (state = [], action) => {
  if (action.type === "SELECTED_PIZZAS") {
    console.log(action.payload);
    return action.payload;
  }
  return state;
};

// pizzaList reducer for screenOne - Added by Steve
const pizzaList = (state = [], action) => {
  // TODO - set pizza list with data from server
  if (action.type === "SET_PIZZA_LIST") {
    return action.payload;
  }
  return state;
};

// Customer info reducer
const customerInfo = (state = [], action) => {
  if (action.type === 'CUSTOMER_INFO') {
    return action.payload;
  }
  return state;
};


// Store goes here  - Added by Steve
const storeInstance = createStore(
  combineReducers({
    //  Reducers go here
    customerInfo,
    customerList,
    pizzaList,
    selectedPizzasList
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
