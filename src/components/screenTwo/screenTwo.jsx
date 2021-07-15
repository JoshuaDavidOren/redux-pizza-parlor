import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './screenTwo.css';

function screenTwo() {
    const [nameInput, setNameInput] = useState('');
    const [streetAddressInput, setStreetAddressInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [zipInput, setZipInput] = useState('');

    // create dispatch for redux state of customer info
    const dispatch = useDispatch();



// create html form for customer info
    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder='Name'
                value={nameInput}
                pnChange={(evt) => setNameInput(evt.target.value)}
            />
            <input
                placeholder='Street Address'
                value={streetAddressInput}
                pnChange={(evt) => setStreetAddressInput(evt.target.value)}
            />
            <input
                placeholder='City'
                value={cityInput}
                pnChange={(evt) => setCityInput(evt.target.value)}
            />
            <input
                placeholder='Zip'
                value={zipInput}
                pnChange={(evt) => setZipInput(evt.target.value)}
            />
        </form>
    )
}