import './screenThree.css';
import GetStateFromZip from '../getStateFromZip/getStateFromZip';
import { useSelector } from "react-redux";
import { useState } from 'react';
import axios from 'axios';


function ScreenThree() {
    //once we have a filtered pizza list, swap that out here
    const selectedPizzasList = useSelector((store) => store.selectedPizzasList);
    const customerList = useSelector((store) => store.customerList);
    const customerInfo = useSelector((store) => store.customerInfo);

        // create dispatch for redux state of customer info
        // const dispatch = useDispatch();
    const handleSubmit = () => {
        console.log('Clicked checkout');
        event.preventDefault();
        const total = selectedPizzasList.reduce((sum, current) => sum + current.quantity*Number(current.price), 0).toFixed(2);

        axios({
          method: "POST",
          url: "/api/order",
          data: {
            customer_name: customerInfo.nameInput,
            street_address: customerInfo.streetAddressInput,
            city: customerInfo.cityInput,
            zip: customerInfo.zipInput,
            type: customerInfo.deliveryInput,
            total: total,
            pizzas: selectedPizzasList
          },
        })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log("this is a Post error", err);
          });
    } 

    return (
        <>
            <section>
                <div>Step 3: Delivery</div>
                <div>{customerInfo.nameInput}</div>
                <div>{customerInfo.streetAddressInput}</div>
                <div>{customerInfo.cityInput}, {GetStateFromZip(String(customerInfo.zipInput))}</div>
            </section>
            <section>
                <h4>{customerInfo.deliveryInput}</h4>
            </section>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedPizzasList.map((pizza, index) => (
                            <tr key={index}>
                                <td>
                                    {pizza.name}
                                </td>
                                <td>
                                    {pizza.price}
                                </td>
                                <td>
                                    <button>-</button>
                                    {pizza.quantity}
                                    <button>+</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <section>
                <h3>
                    Total: {selectedPizzasList.reduce((sum, current) => sum + current.quantity*Number(current.price), 0).toFixed(2)}
                </h3>
            </section>
            <section>
                {/* don't send to db until user clicks checkout */}
                <button type='submit' value='submit' onClick={()=>handleSubmit()}>CHECKOUT</button>
            </section>
        </>
    );
  }
  
  export default ScreenThree;