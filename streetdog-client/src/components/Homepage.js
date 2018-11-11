import React from 'react';
import { Link }from 'react-router-dom';
import ShopProfile from './ShopProfile';

const Homepage = ({ currentUser }) =>  {
  if (!currentUser.isAuthenticated) {
    return(
      <div className="home-hero">
        <h1>What's Happening</h1>
        <h4>New to Streetdog?</h4>
        <Link to='/signup' className='btn btn-primary'>
          Sign up here
        </Link>
      </div>
    )
  }
  return (
    <div>
      <ShopProfile />
    </div>
  )
};

export default Homepage;