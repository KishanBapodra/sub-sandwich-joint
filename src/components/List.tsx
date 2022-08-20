import React from 'react';
import { Sandwich } from '../App';
import styles from './List.module.css'

type ListProps = {
    mapItem: String[],
    type: String,
    sandwich: Sandwich,
    func: (item: String) => void
}

const List = ({mapItem, type, sandwich, func}: ListProps) => {
  return (
    <div>
      <h3 className={styles.pageTitle}>Step 1: Choose your {type}</h3>
      <ul className={styles.list}>
        {mapItem.map(item => {
            let active = sandwich.fBread === item || sandwich.fCheese === item || sandwich.fVeggies.includes(item) || sandwich.fCondiments.includes(item) ? true : false;
            return (
                <li className={styles.listItem} onClick={() => func(item)}>
                  <span className={active ? styles.isActive : ''}>{item}</span>
              </li>
          );
      })}
      </ul>
    </div>
  );
}

export default List;
