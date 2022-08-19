import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  return (
    <div className='home container'>
      <h2 className='header'>WELCOME TO YOUR NEIGHBOURHOOD SUBWAY JOINT</h2>
      <Link to="/bread">
        <button className='btn'>Create your Sandwich</button>
      </Link>
    </div>
  );
}

export default Home;
