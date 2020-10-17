import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Error from './Error';
import Navbar from './Navbar';
import Service from './Service';
import User from './User';
import Search from './Search';
const App =() => {
  const Name=()=>{
    return  <h1 className='text-center'>I am Name Page</h1>;
  };
  return (
    <>
   
    <Navbar />
    <Switch>
      <Route exact path='/' component={()=><About name='About'/>}/>
      <Route exact path='/contact' component={()=><Contact name='Contact'/>} />
      <Route exact path='/service' component={()=><Service name='Service'/>}/>
      <Route exact path='/search' component={()=><Search name='Search'/>}/>
      <Route path='/contact/Name' component={Name}/>
      <Route path='/user/:fname/:lname' component={User}/>
      <Route component={Error} />
    </Switch>
    
    </>
  );
}

export default App;
