import './menuItem.css';
import { useState } from "react";


function MenuItem({index, pizza, decrementPizza, incrementPizza}) {
    const [ pizzaQuantity, setPizzaQuantity ] = useState(0);

    const handleIncrement = (pizza) => {
        incrementPizza(pizza);
        setPizzaQuantity(pizzaQuantity+1);
    } //end handleIncrement

    const handleDecrement = (pizza) => {
        decrementPizza(pizza);
        setPizzaQuantity(pizzaQuantity-1);
    } //end handleDecrement
  
    return (
        <>
            <tr>
                <td>{pizza.name}<img src = {pizza.image_path}></img></td>
                <td>{pizza.description}</td>
                <td>{pizza.price}</td>
                <td>
                  {pizzaQuantity === 0 ?
                  <button onClick={() => handleIncrement(pizza)}>+</button> :
                  <div>
                    <button onClick={() => handleDecrement(pizza)}>-</button>
                        <div>{pizza.quantity}</div>
                    <button onClick={() => handleIncrement(pizza)}>+</button>
                  </div>
                }
                </td>
            </tr>
        </>
            
    );
  }

export default MenuItem;