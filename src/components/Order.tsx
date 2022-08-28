import React from 'react';
import { Link } from 'react-router-dom';
import { Sandwich } from '../App';
import styles from './Container.module.css'
import { motion } from 'framer-motion';

const Order = ({sandwich}: {sandwich: Sandwich}) => {

  const parentVariant = {
    hidden: {
      x: '100vw'
    },
    visible: {
      x: 0,
      transtion: {
        delay: 2,
        duration: 5,
        stiffness: 25,
        type: 'spring',
        when: "beforeChildren",
      }
    }
  }

  const childVariant = {
    hidden: (custom: number) => ({
      opacity: 0,
    }),
    visible: {
      opacity: 1,
      y: '1em',
      x: 0,
      transition: {
        duration: 0.75,
        delay: 0.5,
        when: "beforeChildren"
      }
    }
  }

  const btnVariant = {
    hidden: {
      y: 2,
    },
    visible: {
      y: 10
    },
    hover: {
      scale: 1.2,
      boxShadow: "0 0 10px #FF4996",
      textShadow: "0 0 2px #FFF"
    }
  }

  return (
    <div className={styles.order}>
        <motion.div style={{textAlign: 'center', fontSize: '2.5em', marginTop: '0.67em', marginBottom: '0.67em', marginLeft: '0', marginRight: '0', fontWeight: 'bold'}}
                    variants={parentVariant}
                    initial="hidden"
                    animate="visible"
        >
          Thank you for your order &#128523;

          <motion.div custom={0} variants={childVariant} initial="hidden" animate="visible" style={{marginTop: '2.2em', textAlign: 'center', fontSize: '1rem', fontWeight: 'normal'}}>
            <h3>You have ordered a Sandwich with: </h3>
            <p>{sandwich.fBread} bread and {sandwich.fCheese}</p>
            {/* <div style={{display: 'flex', width: '40vw', margin: '0', justifyContent: 'space-around'}}> */}

              <motion.div custom={'40vw'} variants={childVariant} style={{textAlign: 'center'}}>
                <h4> containing the following veggies: </h4>
                <p>{sandwich.fVeggies.map(veg => <>{veg} &ensp;</>)}</p>
              </motion.div>
              <motion.div custom={'-40vw'} variants={childVariant} style={{textAlign: 'center'}}>
                <h4>and the following condiments: </h4>
                <p>{sandwich.fCondiments.map(condiment => <>{condiment} &ensp;</>)}</p>
              </motion.div>

            {/* </div> */}
          </motion.div>
        </motion.div>
        <Link className={styles.orderBtn} to='/'>
          <motion.button
            variants={btnVariant}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className={styles.next}
          >
            Order another
          </motion.button>
        </Link>
    </div>
  );
}

export default Order;