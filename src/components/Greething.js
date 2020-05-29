import React, { Component } from 'react'
import "../assets/styles/Main.css";
import Button from './Button';
import {Link} from 'react-router-dom';

class Greething extends Component {
    render() {
        
        return (
            <>
                <p className="greet-page">Welcome Back!</p>
                <p className="greet-page-desc">To keep contact with us please login with your personal info</p>
                <Link to="/signin">
                    < Button content="Sign In" variant="btn" />
                </Link>
            </>
        )
    }
}

export default Greething;
