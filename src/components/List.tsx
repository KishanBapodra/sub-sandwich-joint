import React from 'react';
import { Sandwich } from '../App';
import styles from './List.module.css'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion'

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
                <motion.li whileHover={{scale:1.15, originX: 0, color: '#f8e112'}} className={styles.listItem} onClick={() => func(item)}>
                  {active ? <FontAwesomeIcon className={styles.icon} icon={faChevronRight} /> : null}&ensp;<span className={active ? styles.isActive : ''}>{item}</span>
                </motion.li>
          );
      })}
      </ul>
    </div>
  );
}

export default List;
