import React from 'react';
import { NavLink } from 'react-router-dom';

const Error =() => {
  return (
    <>
    <div className='error'>
    <h1>Page not Found 404</h1>
    <p>Sorry,Page doesnot exist</p>
    <NavLink to='/'>Go Back</NavLink>
    </div>
    </>
  );
}

export default Error;