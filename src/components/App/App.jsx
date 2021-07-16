import React from 'react';
import axios from 'axios';
import './App.css';
import ScreenTwo from '../screenTwo/screenTwo';
import ScreenThree from '../screenThree/screenThree';


// imports - added by Steve
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ScreenOne from '../screenOne/screenOne';

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPizzaList();
  }, []);

// GET pizza list from server - added by Steve
  const fetchPizzaList = () => {
    axios.get('/api/pizza').then(response => {
      dispatch({type: 'SET_PIZZA_LIST', payload: response.data})
    }).catch(err => {
      console.log(err);
      alert('Could not get pizzas at this time!')
    });
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>

      <ScreenOne />

    <ScreenTwo />

    <ScreenThree />

    </div>
  );
}

export default App;
