import React from 'react';
import { Sandwich } from '../App';
import { Link } from "react-router-dom";
import List from './List'

type VeggieProp = {
  addVeggie: (veggie: String) => void,
  sandwich: Sandwich,
}

const Veggie = ({addVeggie, sandwich}: VeggieProp) => {
  
  const veggies: String[] = ['Mixed Lettuce','Tomato','Cucumber','Pickles','Green Pepper','Olives','White Onions','Jalapeno'];
  
  return (
    <>
      <div className='veggie container'>
        <List mapItem={veggies} type="Veggies" sandwich={sandwich} func={addVeggie} />
      </div>
      
      {sandwich.fVeggies.length && (
        <div className='next'>
          <Link to="/condiment">
            <button>Next</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Veggie;
