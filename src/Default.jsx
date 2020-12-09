import React from "react"
import {NavLink} from 'react-router-dom';

function Default() {
    return (
      <div className="App">
        <NavLink className="btn" to ="./Home">Explore &#8594;</NavLink>
        <NavLink className="btn2" to ="./login">Login &#8594;</NavLink>
        <NavLink className="btn2" to ="./register">Register &#8594;</NavLink>
      </div>
    );
  }
  
  export default Default;