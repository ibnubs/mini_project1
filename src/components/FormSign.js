import React, { Component } from 'react'
import "../assets/styles/Main.css";
import Button from './Button';

class FormSign extends Component {
    
    
    render() {
        return (
            <>
                <p className="form-sign-title">Created Account</p>
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
                <p className="desc-info-email-use">or use your email for registration</p>
                <div className="wrap-from">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" /> 
                    <input type="password" placeholder="Password" />
                    < Button content="Sign Up" variant="btn btn-in-formSign" />
                </div>
                
            </>
        )
    }
}

export default FormSign;
