import React, { Component } from "react";
import axios from 'axios';
import { Button} from 'react-bootstrap';



export default class Login extends Component {
    render() {
        return (
            <form onSubmit = {(e) => login(e)}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label for = "inputemail">Email address</label>
                    <input type="email" id = "inputemail" className="form-control" placeholder="Enter email"/>
                </div>

                <div className="form-group">
                    <label for = "inputpassword">Password</label>
                    <input type="password" id = "inputpassword" className="form-control" placeholder="Enter password"/>
                </div>

                <Button href="./Home" type = "submit" value = "submit">Submit</Button> 
            </form>
        );
    }
}

    function login(e){
        e.preventDefault();
        let request = {
            email: document.getElementById("inputemail").value,
            password: document.getElementById("inputpassword").value
        }

        axios.post('http://localhost:8000/login', request)
        .then(resp =>{
            alert(resp.data.message);
        })
        .catch(err =>{
            console.log(err);
        })
    }

