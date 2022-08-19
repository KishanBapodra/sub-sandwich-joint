import React from 'react';
import { Link } from 'react-router-dom';
import { Sandwich } from '../App';
import List from './List'

type CondimentProps = {
  addCondiment: (condiment: String) => void,
  sandwich: Sandwich,
}

const Condiment = ({addCondiment, sandwich}: CondimentProps) => {
  
  const condiments: String[] = ['BBQ Sauce','Chipotle Southwest','Caesar Sauce','Honey Mustard','Hot Sauce','Ketchup','Mayonnaise','Ranch','Thousand Islands']
  
  return (
    <>
      <div className='condiment container'>
        <List mapItem={condiments} type="Condiments" sandwich={sandwich} func={addCondiment} />
      </div>
      
        <div className='next'>
            <Link to="/order">
              <button>Order</button>
            </Link>
        </div>
      
    </>
  );
}

export default Condiment;
