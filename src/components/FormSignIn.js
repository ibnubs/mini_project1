import React, { Component } from 'react'
import "../assets/styles/Main.css"
import "../assets/styles/Main.css";
import Button from './Button';

class FormSignIn extends Component {
    
    
    render() {
        return (
            <>
                <p className="form-sign-title">Sign in to Task Manager</p>
                <ul className="list-social-media">
                    <li className="social-media-logo">
                        <a href="#" >f</a>
                    </li>
                    <li className="social-media-logo">
                        <a href="#">G+</a>
                    </li>
                    <li className="social-media-logo">
                        <a href="#">in</a>
                    </li>
                </ul>
                <p className="desc-info-email-use">or use your email account</p>

                <div className="wrap-from">
                    <input type="email" placeholder="Email" /> 
                    <input type="password" placeholder="Password" />
                    < Button content="Sign In" variant="btn btn-in-formSign" />
                </div>
                
            </>
        )
    }
}

export default FormSignIn;
