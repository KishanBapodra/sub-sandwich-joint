import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'
import { motion } from 'framer-motion';

const Home = ({resetState}: {resetState: () => void}) => {

  resetState();

  return (
    <motion.div initial={{opacity: 0.1}} animate={{opacity: 1}} transition={{duration: 0.75}} className={styles.home}>
      <h2 className={styles.header}>
        WELCOME TO SUBWAY JOINT
      </h2>
      <Link to="/bread">
        <button className={styles.btn}>Create your Sandwich</button>
      </Link>
    </motion.div>
  );
}

export default Home;
