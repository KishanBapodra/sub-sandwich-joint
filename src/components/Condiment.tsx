import React from 'react';
import { Link } from 'react-router-dom';
import { Sandwich } from '../App';
import List from './List'
import styles from './Container.module.css'
import { motion } from 'framer-motion'

type CondimentProps = {
  addCondiment: (condiment: String) => void,
  sandwich: Sandwich,
}

const Condiment = ({addCondiment, sandwich}: CondimentProps) => {
  
  const condiments: String[] = ['BBQ Sauce','Chipotle Southwest','Caesar Sauce','Honey Mustard','Hot Sauce','Ketchup','Mayonnaise','Ranch','Thousand Islands']
  
  return (
    <>
      <div className={styles.container}>
        <List mapItem={condiments} type="Condiments" sandwich={sandwich} func={addCondiment} />
      
        <div className={styles.btn}>
            <Link to="/order">
              <motion.button
                whileHover={{scale: 1.1, boxShadow: "0 0 4px #FF4996", textShadow: "0 0 2px #FFF" }}
                className={styles.next}
              >
                Order
              </motion.button>
            </Link>
        </div>
      </div>
      
    </>
  );
}

export default Condiment;
