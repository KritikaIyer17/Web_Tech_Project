import React from "react";

import logo from "../src/images/Background-logo.png";

function Home() {
    return (
      <div className="App">
         
        <section id="header" className="">
            <div className="container-fluid nav_bg">
                <div classNamee = "row">
                    <div className = "col-10 mx-auto">
                        <div className = "txt1">
                            <h1>
                                <br></br>
                                Welcome to <strong>PESU Shop</strong>
                            </h1>
                            <h2 className="my-3">
                                Your one stop destination for all your campus shopping needs

                            </h2>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={logo} className = "img-fluid animated" alt="Backgroundimage"/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
  
  export default Home;