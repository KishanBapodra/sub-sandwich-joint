import React from 'react';
import { Sandwich } from '../App';
import { Link } from 'react-router-dom'
import List from './List'
import styles from './Container.module.css'

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
      
        <div className='next'>
            <Link to="/veg">
              <button>Next</button>
            </Link>
        </div>
      </div>
    </>
  );
}

export default Cheese;
