import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home container'>
      <h2>WELCOME TO YOUR NEIGHBOURHOOD SUBWAY JOINT</h2>
      <Link to="/bread">
        <button>Create your Sandwich</button>
      </Link>
    </div>
  );
}

export default Home;
