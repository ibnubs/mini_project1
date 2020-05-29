import React, { Fragment } from "react";
import {Route} from "react-router-dom";

import Signup from "../pages/Signup";
import SignIn from "../pages/SignIn";

const Routes = () => {
    return (
        <Fragment>
            <Route path="/" exact component={Signup} />
            <Route path="/signin" exact component={SignIn} />
        </Fragment>
    );
}

export default Routes;