import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/'>Home</NavLink>
      <br></br> 
      <NavLink to='/directors'>Directors</NavLink>
      <br></br> 
      <NavLink to='/actors'>Actors</NavLink>
      <br></br> 
      <NavLink to='/movies'>Movies</NavLink>
    </div>
  );
};

export default NavBar;
