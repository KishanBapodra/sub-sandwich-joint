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

  const containerVariant = {
    hidden: {
      x: '60vw'
    },
    visible: {
      x:0,
      transition: {
        duration: 0.25
      }
    }
  }

  const btnVariant = {
    hidden: {
      x: '-70vw',
      opacity: 0
    },
    visible: {
      x: 40,
      opacity: 1,
      transiton: {
        delay: 2,
        duration: 3,
        type: 'spring',
        stiffness: 75,
      }
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 0 4px #FF4996",
      textShadow: "0 0 2px #FFF",
    }
  }

  return (
    <>
      <motion.div className={styles.container} variants={containerVariant} initial="hidden" animate="visible">
        
        <List mapItem={breads} type="Bread" sandwich={sandwich} func={breadType} />

        {/* {sandwich.fBread &&  */}
        <div className={styles.btn}>
          <Link to="/cheese">
          <motion.button
                variants={btnVariant}
                whileHover="hover"
                className={sandwich.fBread.length !== 0 ? styles.next : styles.hid}
              >
                Next
              </motion.button>
          </Link>
        </div>
         {/* } */}

      </motion.div>
    </>
  )
}

export default Bread;
