import React from 'react';
import styles from './Nav.module.css'
import SvgSandwich from '../assets/sandwich';
import { motion  } from 'framer-motion';

const Nav = () => {
  return (
    <motion.nav initial={{opacity:0}} animate={{opacity:1}} className={styles.navbar}>
        <div><SvgSandwich /></div>
        <motion.div initial={{y: -100}} animate={{y: 0}} transition={{duration: 0.62, type: 'spring', stiffness: 75}} className={styles.headerContainer}>
          <h1 className={styles.title}>Subway Joint</h1>
        </motion.div>
    </motion.nav>
  );
}

export default Nav