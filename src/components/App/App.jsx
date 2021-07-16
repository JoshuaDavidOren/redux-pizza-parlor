import React from "react";
import axios from "axios";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import "./App.css";
import ScreenTwo from "../screenTwo/screenTwo";
import ScreenThree from '../screenThree/screenThree';
import ScreenAdmin from "../screenAdmin/screenAdmin";

// imports - added by Steve
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ScreenOne from "../screenOne/screenOne";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPizzaList();
    fetchOrderList();
  }, []);

  // GET pizza list from server - added by Steve
  const fetchPizzaList = () => {
    axios
      .get("/api/pizza")
      .then((response) => {
        dispatch({ type: "SET_PIZZA_LIST", payload: response.data });
      })
      .catch((err) => {
        console.log(err);
        alert("Could not get pizzas at this time!");
      });
  };

  //GET order list from server - meghan
  const fetchOrderList = () => {
    axios
      .get("/api/order")
      .then((response) => {
        dispatch({ type: "ORDER_LIST", payload: response.data });
      })
      .catch((err) => {
        console.log(err);
        alert("Could not get order list");
      });
  };

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>

      <img src="images/pizza_photo.png" />
      <p>Pizza is great.</p>

      <Route path="/" exact>
      <ScreenOne />
      </Route>

      <Route path="/screentwo" exact>
      <ScreenTwo />
      </Route>

      <Route path="/screenthree" exact>
      <ScreenThree />
      </Route>
      
      <Route path="/screenadmin" exact>
      <ScreenAdmin />
      </Route>

    </div>
    </Router>
  );
}

export default App;
