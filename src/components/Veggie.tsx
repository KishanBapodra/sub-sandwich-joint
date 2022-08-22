import React from 'react';
import { Sandwich } from '../App';
import { Link } from "react-router-dom";
import List from './List'
import { motion } from 'framer-motion'
import styles from './Container.module.css'

type VeggieProp = {
  addVeggie: (veggie: String) => void,
  sandwich: Sandwich,
}

const Veggie = ({addVeggie, sandwich}: VeggieProp) => {
  
  const veggies: String[] = ['Mixed Lettuce','Tomato','Cucumber','Pickles','Green Pepper','Olives','White Onions','Jalapeno'];
  
  return (
    <>
      <div className={styles.container}>
        <List mapItem={veggies} type="Veggies" sandwich={sandwich} func={addVeggie} />
      
        <div className={styles.btn}>
          <Link to="/condiment">
            <motion.button 
                whileHover={{scale: 1.1, boxShadow: "0 0 4px #FF4996", textShadow: "0 0 2px #FFF" }}
                className={sandwich.fVeggies.length !== 0 ? styles.next : styles.hid}
              >
                Next
              </motion.button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Veggie;
