import './screenThree.css';
import { useSelector } from "react-redux";
import { useState } from 'react';


function ScreenThree() {
    const pizzaList = useSelector((store) => store.pizzaList);

    return (
        <>
            <section>
                <div>Step 3: Delivery</div>
                <div>Step 3: Delivery</div>
                <div>Step 3: Delivery</div>
                <div>Step 3: Delivery</div>
            </section>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pizzaList.map((pizza, index) => (
                            <tr key={index}>
                                <td>
                                    {pizza.name}
                                </td>
                                <td>
                                    {pizza.price}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <section>
                <h3>
                    Total: {pizzaList.reduce((sum, current) => sum + Number(current.price), 0).toFixed(2)}
                </h3>
            </section>
        </>
    );
  }
  
  export default ScreenThree;