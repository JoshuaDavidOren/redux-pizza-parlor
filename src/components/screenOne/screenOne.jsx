import "./screenOne.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Material-UI
import React from 'react';
import Button from '@material-ui/core/Button';

function ScreenOne() {
  const dispatch = useDispatch();
  const pizzaList = useSelector((store) => store.pizzaList);


  const selectPizza = (pizzaToAdd) => {
    dispatch({
      type: "SELECT_PIZZA",
      payload: pizzaToAdd,
    });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {pizzaList.map((pizza, index) => (
            <tr key={index}>
              <td>{pizza.name}<img src = {pizza.image_path}></img></td>
              <td>{pizza.description}</td>
              <td>{pizza.price}</td>
              <td>
                <Button variant="contained" color="primary" addButton onClick={() => selectPizza(pizza)}>Add</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
	<Link to="/screentwo">
      <Button variant="contained" color="primary">Next</Button>
	  </Link>
    </div>
  );
}

export default ScreenOne;

{
  /* <section>
<h2>Step 1: Select Your Pizza</h2>
<section>
  {pizzaList.map((pizza, index) => (
	<p id="menuCard" key={index}> {pizza.name} </p>
  ))}
</section>
</section> */
}

{
  /* <table>
<tbody>
	<tr>
		<td>Name</td>
		<td>Description</td>
		<td>Price</td>
		<td>Image</td>
		<td> 
			<button>Add</button>
		</td>
	  </tr>
  </tbody>
</table> */
}
