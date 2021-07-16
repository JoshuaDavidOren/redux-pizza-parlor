import axios from 'axios';
import { useState } from 'react';
// import { useDispatch } from 'react-redux'; for the data needed at total & pizzas
import './screenTwo.css';

function ScreenTwo() {
    const [nameInput, setNameInput] = useState('');
    const [streetAddressInput, setStreetAddressInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [zipInput, setZipInput] = useState('');
    const [deliveryInput, setDeliverInput] = useState(false);

    
    // create dispatch for redux state of customer info
    // const dispatch = useDispatch();
const handleSubmit = (event) => {
    event.preventDefault();

    axios({
        method: 'POST',
        url: '/api/order',
        data: { 
            customer_name: nameInput,
            street_address: streetAddressInput,
            city: cityInput,
            zip: zipInput,
            type: deliveryInput,
            total: 1.99,
            pizzas: [{id: '1', quantity: 1},{id: '1', quantity: 1}]
        }
    }).then((response) => {
        console.log(response);
        // history.push('/theNextPage')
    }).catch((err) => {
        console.log('this is a Post error',err);
    });
 }

// create html form for customer info
    return (
        <section>
            <div>
                <label>Total:
                     {/* priceOfOrder */}
                </label>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Name'
                    value={nameInput}
                    onChange={(evt) => setNameInput(evt.target.value)}
                />
                <input
                    placeholder='Street Address'
                    value={streetAddressInput}
                    onChange={(evt) => setStreetAddressInput(evt.target.value)}
                />
                <input
                    placeholder='City'
                    value={cityInput}
                    onChange={(evt) => setCityInput(evt.target.value)}
                />
                <input
                    placeholder='Zip'
                    value={zipInput}
                    onChange={(evt) => setZipInput(evt.target.value)}
                />
                <input
                type='checkbox'
                id='delivery'
                value={!deliveryInput}
                onChange={(evt) => setDeliverInput(evt.target.value)}/>
                    <label>Check for Delivery</label>
                <button type='submit' value='submit'>NEXT</button>
            </form>
        </section>


    )
}

export default ScreenTwo;