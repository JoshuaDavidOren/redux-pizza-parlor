import "./screenOne.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function ScreenOne() {
  const dispatch = useDispatch();
  const pizzaList = useSelector((store) => store.pizzaList);
  const [currentPizzaList, setCurrentPizzaList] = useState([]);

//   const DisplayQuantity = ({idIn}) => {
// 	console.log('index', idIn);
// 	const pizzaIndex = checkIfPizzaInArray(idIn, currentPizzaList);
// 	if (pizzaIndex === -1) {
// 		return <></>;
// 	} else {
// 		return (
// 			<div>
// 				Quantity: {currentPizzaList[pizzaIndex].quantity}
// 			</div>
// 		)
// 	}
//   } //end DisplayQuantity

  const checkIfPizzaInArray = (searchTerm, searchArray) => {
	for (const i in searchArray) {
		if (searchArray[i].id === searchTerm) {
			return i;
		}
	}
	return -1;
  }; //end checkIfPizzaInArray


  const selectPizza = (pizzaToAdd) => {
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
		
  }; //end selectPizza

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
            <tr key={index}>
              <td>{pizza.name}<img src = {pizza.image_path}></img></td>
              <td>{pizza.description}</td>
              <td>{pizza.price}</td>
              <td>
                <button onClick={() => selectPizza(pizza)}>Add</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => dispatchPizzaArrays()}>Next</button>
	<Link to="/screentwo">
      <button>Next</button>
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
