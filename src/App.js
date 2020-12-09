import './App.css';
import React from "react";
import Home from "./Home";
import Login from "./login";
import SignUp from "./register";
import Contact from "./Contact";
import FoodCourt from "./FoodCourt";
//import food from "./food.html"
import Parking from "./Parking";
import Default from "./Default";
import { Switch,Route } from 'react-router-dom';
import Navbar from "./Navbar";
 



function App() {
  return (
    <div>
      
      <Navbar/>

      <Switch>
        <Route exact path = "/" component = {Default}/>
        <Route exact path = "/Home" component = {Home}/>
        <Route exact path = "/Contact" component = {Contact}/>
        <Route exact path = "/Parking" component = {Parking}/>
        <Route exact path = "/FoodCourt" component = {FoodCourt}/>
        <Route exact path = "/Login" component = {Login}/>
        <Route exact path = "/Register" component = {SignUp}/>
      </Switch>
    </div>
      
    
  );
}

export default App;

