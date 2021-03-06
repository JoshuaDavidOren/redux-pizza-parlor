import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import "./screenTwo.css";

function ScreenTwo() {
    const history = useHistory();
  const dispatch = useDispatch();
  const selectedPizzasList = useSelector((store) => store.selectedPizzasList);
  const [nameInput, setNameInput] = useState("");
  const [streetAddressInput, setStreetAddressInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [zipInput, setZipInput] = useState("");
  const [deliveryInput, setDeliverInput] = useState(false);

  // Compresses Form info for dispatch
  const customerFormInfo = {
    nameInput,
    streetAddressInput,
    cityInput,
    zipInput,
    deliveryInput,
  };

  const handleSubmit = () => {
    event.preventDefault();

    dispatch({
      type: "CUSTOMER_INFO",
      payload: customerFormInfo,
    });
    history.push('/screenthree');
  };

  // create html form for customer info form
  return (
    <section>
      <div>
        <label>
          Total:
          {selectedPizzasList.reduce((sum, current) => sum + current.quantity*Number(current.price), 0).toFixed(2)}
        </label>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={nameInput}
          onChange={(evt) => setNameInput(evt.target.value)}
        />
        <input
          placeholder="Street Address"
          value={streetAddressInput}
          onChange={(evt) => setStreetAddressInput(evt.target.value)}
        />
        <input
          placeholder="City"
          value={cityInput}
          onChange={(evt) => setCityInput(evt.target.value)}
        />
        <input
          placeholder="Zip"
          value={zipInput}
          onChange={(evt) => setZipInput(evt.target.value)}
        />
        <input
          type="checkbox"
          id="delivery"
          value={!deliveryInput}
          onChange={(evt) => setDeliverInput(evt.target.value)}
        />
        <label>Check for Delivery</label>

        
          <button type="submit" value="submit">
            NEXT
          </button>
        
      </form>
    </section>
  );
}

export default ScreenTwo;

{/* <Link to="/screenthree"></Link>
</Link> */}
