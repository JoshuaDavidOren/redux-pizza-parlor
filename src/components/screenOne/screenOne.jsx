import "./screenOne.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import MenuItem from '../menuItem/menuItem';

// Material-UI
import React from 'react';
import Button from '@material-ui/core/Button';

// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';

function ScreenOne() {
  const dispatch = useDispatch();
  const pizzaList = useSelector((store) => store.pizzaList);
  const [currentPizzaList, setCurrentPizzaList] = useState([]);

  const checkIfPizzaInArray = (searchTerm, searchArray) => {
	for (const i in searchArray) {
		if (searchArray[i].id === searchTerm) {
			return i;
		}
	}
	return -1;
  }; //end checkIfPizzaInArray


  const incrementPizza = (pizzaToAdd) => {
		event.preventDefault();
		const pizzaIndex = checkIfPizzaInArray(pizzaToAdd.id, currentPizzaList);
		if (pizzaIndex === -1) {
			pizzaToAdd.quantity = 1;
			currentPizzaList.push(pizzaToAdd);
		} else {
			const updatePizzaList = currentPizzaList;
			updatePizzaList[pizzaIndex].quantity += 1;
			setCurrentPizzaList(updatePizzaList);
		}
  }; //end incrementPizza

  const decrementPizza = (pizzaToDec) => {
	event.preventDefault();
	const pizzaIndex = checkIfPizzaInArray(pizzaToDec.id, currentPizzaList);
	if (pizzaIndex === -1) {
		pizzaToDec.quantity = 0;
		currentPizzaList.push(pizzaToDec);
		console.log("we shouldn't be here");
	} else {
		const updatePizzaList = currentPizzaList;
		if (updatePizzaList[pizzaIndex].quantity > 0) {
			updatePizzaList[pizzaIndex].quantity -= 1;
		}
		setCurrentPizzaList(updatePizzaList);
	}
}; //end incrementPizza

  const dispatchPizzaArrays = () => {
	event.preventDefault();
    dispatch({
      type: "SELECTED_PIZZAS",
      payload: currentPizzaList,
    });
  }; //end dispatchPizzaArrays

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
			  <MenuItem key={index} pizza = {pizza} decrementPizza = {decrementPizza} incrementPizza = {incrementPizza}/>
          ))}
        </tbody>
      </table>
	<Link to="/screentwo">
      <Button variant="contained" color="primary" onClick={() => dispatchPizzaArrays()}>Next</Button>
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


{/* <section>
		{pizzaList.map((pizza, index) => (
		
		<Card m={5} className="card">
		<Typography>
		{pizza.name}
        </Typography>
		<Typography>
		<img src = {pizza.image_path}></img>
        </Typography>
		<Typography>
		{pizza.description}
        </Typography>
		</Card>
		
		))}
		</section> */}