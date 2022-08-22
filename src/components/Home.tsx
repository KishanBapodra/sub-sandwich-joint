import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'
import { motion } from 'framer-motion';

const Home = ({resetState}: {resetState: () => void}) => {

  resetState();

  return (
    <motion.div initial={{opacity: 0.1}} animate={{opacity: 1}} transition={{duration: 0.80}} className={styles.home}>
      <h2 className={styles.header}>
        WELCOME TO SUBWAY JOINT
      </h2>
      <Link to="/bread">
        <motion.button whileHover={{scale: 1.05, boxShadow: "0 0 8px #FF4996", textShadow: "0 0 2px #FFF" }} className={styles.btn}>Create your Sandwich</motion.button>
      </Link>
    </motion.div>
  );
}

export default Home;
