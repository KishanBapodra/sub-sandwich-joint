import React from 'react';
import { Sandwich } from '../App';

const Order = ({sandwich}: {sandwich: Sandwich}) => {
  return (
    <div className='order container'>
        <h2>Thank you for your order &#128523;</h2>
        <p>You have ordered a Sandwich with {sandwich.fBread} bread as the base and {sandwich.fCheese} cheese with the following veggies: </p>
        <p>{sandwich.fVeggies.map(veg => <>{veg} &ensp;</>)}</p> and the following condiments:
        <p>{sandwich.fCondiments.map(condiment => <>{condiment} &ensp;</>)}</p>
        
    </div>
  );
}

export default Order;
