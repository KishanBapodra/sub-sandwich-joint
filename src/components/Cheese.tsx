import React from 'react';
import { Sandwich } from '../App';
import { Link } from 'react-router-dom'
import List from './List'
import styles from './Container.module.css'
import { motion } from 'framer-motion' 

type CheeseProps = {
  cheeseType: (cheese: String) => void,
  sandwich: Sandwich,
}

const Cheese = ({cheeseType, sandwich}: CheeseProps) => {

  const cheese: String[] = ['American Cheese', 'Mozarella Cheese','Mixed Cheddar Cheese']

  return (
    <>
      <div className={styles.container}>
        <List mapItem={cheese} type="Cheese" sandwich={sandwich} func={cheeseType} />
      
        <div className={styles.btn}>
            <Link to="/veg">
              <motion.button 
                whileHover={{scale: 1.1, boxShadow: "0 0 4px #FF4996", textShadow: "0 0 2px #FFF" }}
                className={styles.next}
              >
                Next
              </motion.button>
            </Link>
        </div>
      </div>
    </>
  );
}

export default Cheese;
