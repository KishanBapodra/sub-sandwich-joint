import React from 'react';
import { Sandwich } from '../App';

type ListProps = {
    mapItem: String[],
    type: String,
    sandwich: Sandwich,
    func: (item: String) => void
}

const List = ({mapItem, type, sandwich, func}: ListProps) => {
  return (
    <>
    <h3>Choose your {type}</h3>
    <ul>
      {mapItem.map(item => {
          let active = sandwich.fBread === item || sandwich.fCheese === item || sandwich.fVeggies.includes(item) || sandwich.fCondiments.includes(item) ? 'active' : '';
          return (
              <li onClick={() => func(item)}>
                <span className={active}>{item}</span>
            </li>
        );
    })}
    </ul>
    </>
  );
}

export default List;
