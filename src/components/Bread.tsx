import React from 'react';
import { Sandwich } from '../App';
import { Link } from 'react-router-dom'

type BreadProps = {
  breadType: (bread: String) => void,
  sandwich: Sandwich,
}

const Bread = ({breadType, sandwich}: BreadProps) => {

  const breads: String[] = ['Italian','Wheat','Parmesan Oregano','Honey Oat']

  return (
    <>
      <div className='bread container'>
        <h3>Choose your Bread</h3>
        <ul>
          {breads.map(bread => {
            let active = sandwich.fBread === bread ? 'active' : '';
            return(
              <li onClick={()=> breadType(bread)}>
                <span className={active}>{bread}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {sandwich.fBread && (
        <div className='next'>
          <Link to="/cheese">
            <button>Next</button>
          </Link>
        </div>
      )}
    </>
  )
}

export default Bread;
