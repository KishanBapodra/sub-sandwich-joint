import React from 'react';
import { Sandwich } from '../App';
import { Link } from 'react-router-dom'
import List from './List'
import styles from './Container.module.css'

type BreadProps = {
  breadType: (bread: String) => void,
  sandwich: Sandwich,
}

const Bread = ({breadType, sandwich}: BreadProps) => {

  const breads: String[] = ['Italian','Wheat','Parmesan Oregano','Honey Oat']

  return (
    <>
      <div className={styles.container}>
        <List mapItem={breads} type="Bread" sandwich={sandwich} func={breadType} />
        
      {sandwich.fBread && (
        <div className='next'>
          <Link to="/cheese">
            <button>Next</button>
          </Link>
        </div>
      )}
      </div>
    </>
  )
}

export default Bread;
