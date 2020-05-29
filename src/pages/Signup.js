import React, { Fragment } from "react";
import "../assets/styles/Main.css";
import Logo from "../components/Logo";
import Greething from "../components/Greething";
import FormSign from "../components/FormSign";

class Signup extends React.Component{
    render(){
        return(
            <Fragment>
                <div className="Outer-body">
                    <div className="left">
                        <Logo />
                        <Greething />
                    </div>
                    <div className="right">
                        <FormSign />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Signup;