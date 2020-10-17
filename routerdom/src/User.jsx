import React from 'react';
import {useHistory, useLocation, useParams} from 'react-router-dom';
// const User =({match}) => {
//   return (
//     <>
//     <h1>I am User {match.params.name} Page</h1>
//     </>
//   );
// }
const User =() => {
    const {fname,lname}=useParams();
    const location =useLocation();
    const history=useHistory();
    return (
      <>
      <h1>I am  {fname} {lname} Page </h1>
      <p>The path of my page is :{location.pathname}</p>
      {location.pathname ===`/user/rizwan/malik` ?(
      <button onClick={()=>history.goBack()}>Go Back </button> ):null
      }
      </>
    );
  }

export default User;