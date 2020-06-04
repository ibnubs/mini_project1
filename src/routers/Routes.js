import React, { Fragment } from "react";
import {
    Switch,
    Route,
} from "react-router-dom";


import Login from "../components/Login/Login";
import UserAdd from "../components/User/UserRegister";
import Homepage from "../components/Todo/Homepage";

const Routes = () => {
    return (
        <Fragment>
            <Switch>
                <Route path="/homepage" exact component={Homepage} />
                <Route path="/" exact component={Login} />
                <Route parh="/signup" exact component={UserAdd} />
            </Switch>
        </Fragment>
    );
}

export default Routes;