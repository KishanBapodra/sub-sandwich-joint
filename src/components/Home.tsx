import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'

const Home = ({resetState}: {resetState: () => void}) => {

  resetState();

  return (
    <div className={styles.home}>
      <h2 className={styles.header}>WELCOME TO SUBWAY JOINT</h2>
      <Link to="/bread">
        <button className={styles.btn}>Create your Sandwich</button>
      </Link>
    </div>
  );
}

export default Home;
