import React from 'react';
import { Sandwich } from '../App';
import { Link } from 'react-router-dom'
import List from './List'
import styles from './Container.module.css'
import  { motion } from 'framer-motion'

type BreadProps = {
  breadType: (bread: String) => void,
  sandwich: Sandwich,
}

const Bread = ({breadType, sandwich}: BreadProps) => {

  const breads: String[] = ['Italian','Wheat','Parmesan Oregano','Honey Oat']

  return (
    <>
      <motion.div initial={{x:'60vw'}} animate={{x:0}} transition={{duration: 0.25}} className={styles.container}>
        
        <List mapItem={breads} type="Bread" sandwich={sandwich} func={breadType} />

        {sandwich.fBread && <div className={styles.btn}>
          <Link to="/cheese">
          <motion.button 
                initial={{x:'-70vw'}}
                animate={{x:0}}
                transition={{type: 'spring', stiffness: 75}}
                whileHover={{scale: 1.1, boxShadow: "0 0 4px #FF4996", textShadow: "0 0 2px #FFF" }}
                className={sandwich.fBread.length !== 0 ? styles.next : styles.hid}
              >
                Next
              </motion.button>
          </Link>
        </div>}

      </motion.div>
    </>
  )
}

export default Bread;
