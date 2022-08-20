import React from 'react';
import styles from './Nav.module.css'
import SvgSandwich from '../assets/sandwich';

const Nav = () => {
  return (
    <nav className={styles.navbar}>
        <div><SvgSandwich /></div>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>Subway Joint</h1>
        </div>
    </nav>
  );
}

export default Nav