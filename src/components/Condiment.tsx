import React from 'react';
import { Link } from 'react-router-dom';
import { Sandwich } from '../App';
import List from './List'
import styles from './Container.module.css'

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
              <button className={styles.next}>Order</button>
            </Link>
        </div>
      </div>
      
    </>
  );
}

export default Condiment;
