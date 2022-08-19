import React from 'react';
import { Sandwich } from '../App';

type BreadProps = {
  breadType: (bread: String) => void,
  sandwich: Sandwich,
}

const Bread = ({breadType, sandwich}: BreadProps) => {
  return (
    <div>
      BREAD
    </div>
  );
}

export default Bread;
