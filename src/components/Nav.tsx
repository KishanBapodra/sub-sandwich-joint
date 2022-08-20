import React from 'react';
import './Nav.css'
import SvgSandwich from '../assets/sandwich';

const Nav = () => {
  return (
    <nav className='navbar'>
        <div className='svg-container'><SvgSandwich /></div>
        <div className='header-container'>
          <h1 className='title'>Subway Joint</h1>
        </div>
    </nav>
  );
}

export default Nav