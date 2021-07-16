import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

  //GET order list from server - meghan
  const fetchOrderList = () => {
    axios.get('/api/order').then(response => {
      dispatchEvent({type: 'ORDER_LIST', payload: response.data})
    }).catch(err => {
      console.log(err);
      alert('Could not get order list')
    });
  }

  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
