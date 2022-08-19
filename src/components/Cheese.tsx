import React from 'react';
import { Sandwich } from '../App';
import { Link } from 'react-router-dom'

type CheeseProps = {
  cheeseType: (cheese: String) => void,
  sandwich: Sandwich,
}

const Cheese = ({cheeseType, sandwich}: CheeseProps) => {

  const cheeseT: String[] = ['American', 'Mozarella','Mixed Cheddar']

  return (
    <>
      <div className='cheese container'>
        <ul>
          {cheeseT.map(cheese => {
            let active = sandwich.fCheese === cheese ? 'active' : '';
            return(
              <li onClick={() => cheeseType(cheese)}>
                <span className={active}>{cheese}</span>
              </li>
            )
          })}
        </ul>
      </div>
      
      <div className='next'>
          <Link to="/veg">
            <button>Next</button>
          </Link>
      </div>
    </>
  );
}

export default Cheese;
