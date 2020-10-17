import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar =() => {
  return (
    <>
     <div className="navbar_style">
    <NavLink exact activeClassName="active_class" to='/'> 
        AboutUs 
      </NavLink>
      <NavLink exact activeClassName="active_class" to='/service'> 
        Service 
      </NavLink>
      <NavLink exact activeClassName="active_class" to='/search'> 
        Search
      </NavLink>
      <NavLink exact activeClassName="active_class" to='/user'> 
        USer 
      </NavLink>
    <NavLink exact activeClassName="active_class" to='/contact'> 
       ContactUs 
      </NavLink>
    
    </div>
    </>
  );
}

export default Navbar;