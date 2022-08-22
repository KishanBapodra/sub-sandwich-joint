import React from 'react';
import { Link } from 'react-router-dom';
import { Sandwich } from '../App';
import styles from './Container.module.css'
import { motion } from 'framer-motion';

const Order = ({sandwich}: {sandwich: Sandwich}) => {
  return (
    <div className={styles.order}>
        <h1>Thank you for your order &#128523;</h1>
        <p>You have ordered a Sandwich with {sandwich.fBread} bread as the base and {sandwich.fCheese} with the following veggies: </p>
        <p>{sandwich.fVeggies.map(veg => <>{veg} &ensp;</>)}</p> and the following condiments:
        <p>{sandwich.fCondiments.map(condiment => <>{condiment} &ensp;</>)}</p>
        <Link className={styles.orderBtn} to='/'>
          <motion.button
            whileHover={{scale: 1.2, boxShadow: "0 0 10px #FF4996", textShadow: "0 0 2px #FFF" }}
            className={styles.next}
          >
            Order another
          </motion.button>
        </Link>
    </div>
  );
}

export default Order;