import React, { Component } from 'react'
import "../assets/styles/Main.css";
import Button from './Button';
import {Link} from 'react-router-dom';

class GreethingSignIn extends Component {
    render() {
        
        return (
            <>
                <p className="greet-page">Hello, Friend!</p>
                <p className="greet-page-desc">Enter your personal details and start your journey with us</p>
                <Link to="/">
                    < Button content="Sign Up" variant="btn" />
                </Link>
            </>
        )
    }
}

export default GreethingSignIn;
