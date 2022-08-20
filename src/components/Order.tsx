import React from 'react';
import { Link } from 'react-router-dom';
import { Sandwich } from '../App';
import styles from './Container.module.css'

const Order = ({sandwich}: {sandwich: Sandwich}) => {
  return (
    <div className={styles.order}>
        <h1>Thank you for your order &#128523;</h1>
        <p>You have ordered a Sandwich with {sandwich.fBread} bread as the base and {sandwich.fCheese} with the following veggies: </p>
        <p>{sandwich.fVeggies.map(veg => <>{veg} &ensp;</>)}</p> and the following condiments:
        <p>{sandwich.fCondiments.map(condiment => <>{condiment} &ensp;</>)}</p>
        <button>
          <Link to='/'>Order another</Link>
        </button>
    </div>
  );
}

export default Order;