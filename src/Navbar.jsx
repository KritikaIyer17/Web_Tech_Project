import React from 'react'
import {NavLink} from 'react-router-dom';
import im2 from "../src/images/pes_logo.png";
function Navbar(){
    return(
        <div className ="container-fluid-nav_bg">
        <div className = 'row'>

        <div className = "col-13 mx auto">

<nav className="navbar navbar-expand-lg navbar-light ">
    <div className = "logo"> 
        <img src={im2} className = "img-fluid animated" alt="Logo" width="300px"/>
    </div>

    
  <div className="container-fluid">
    <div className="navbar-brand">Shop</div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <NavLink activeClassName='menu_active' className="nav-link active" aria-current="page" to="./Home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link" to = "./FoodCourt">Food Court</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link" to="./Parking">Parking</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link" to="./Contact">Contact</NavLink>
        </li>        
      </ul>
    
    </div>
  </div>
</nav>
        </div>
        </div>
        </div>

    )

}

export default Navbar;