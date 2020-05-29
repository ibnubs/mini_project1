import React, { Component } from 'react'
import "../assets/styles/Main.css"



class Button extends Component {
    render() {
        const {
            variant, 
            content
        } = this.props;
            return (
                <div className="wrap-btn">
                    <a  className={variant} href="#"> {content}  </a>
                </div>
            )
        
    }
}

export default Button;

