import React from 'react';
import { Sandwich } from '../App';
import { Link } from 'react-router-dom'
import List from './List'

type CheeseProps = {
  cheeseType: (cheese: String) => void,
  sandwich: Sandwich,
}

const Cheese = ({cheeseType, sandwich}: CheeseProps) => {

  const cheese: String[] = ['American Cheese', 'Mozarella Cheese','Mixed Cheddar Cheese']

  return (
    <>
      <div className='cheese container'>
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
