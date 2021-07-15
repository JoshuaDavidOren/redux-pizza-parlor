import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './screenTwo.css';

function ScreenTwo() {
    const [nameInput, setNameInput] = useState('');
    const [streetAddressInput, setStreetAddressInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [zipInput, setZipInput] = useState('');
    const [deliveryInput, setDeliverInput] = useState(false);

    // create dispatch for redux state of customer info
    const dispatch = useDispatch();



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