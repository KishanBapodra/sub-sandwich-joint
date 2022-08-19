import React from 'react';
import { Sandwich } from '../App';
import { Link } from "react-router-dom";

type VeggieProp = {
  addVeggie: (veggie: String) => void,
  sandwich: Sandwich,
}

const Veggie = ({addVeggie, sandwich}: VeggieProp) => {
  
  const veggies: String[] = ['Mixed Lettuce','Tomato','Cucumber','Pickles','Green Pepper','Olives','White Onions','Jalapeno'];
  
  return (
    <>
      <div className='veggie container'>
        <ul>
          {veggies.map(veggie => {
            let active = sandwich.fVeggies.includes(veggie) ? 'active': '';
            return(
              <li onClick={() => addVeggie(veggie)}>
                <span className={active}>{veggie}</span>
              </li>
            )
          })}
        </ul>
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
