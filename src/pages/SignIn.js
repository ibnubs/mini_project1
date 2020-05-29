import React, { Fragment } from "react";
import "../assets/styles/Main.css";
import Logo from "../components/Logo";
import GreethingSignIn from "../components/GreethingSignIn";
import FormSignIn from "../components/FormSignIn";


class Signup extends React.Component{
    render(){
        return(
            <Fragment>
                <div className="Outer-body">
                    <div className="left">
                        <Logo />
                        <GreethingSignIn />
                    </div>
                    <div className="right">
                        <FormSignIn />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Signup;