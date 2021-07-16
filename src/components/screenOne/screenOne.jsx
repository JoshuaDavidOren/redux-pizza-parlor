import "./screenOne.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

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
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {pizzaList.map((pizza, index) => (
            <tr key={index}>
              <td>{pizza.name}</td>
              <td>{pizza.description}</td>
              <td>{pizza.price}</td>
              <td>
                <button onClick={() => selectPizza(pizza)}>Add</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button>Next</button>
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
