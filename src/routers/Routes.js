import React, { Fragment } from "react";
import {
    BrowserRouter as 
    Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



import Dashboard from "../pages/Dashboard";
import Login from "../components/Login/Login";
import UserAdd from "../components/User/UserRegister"

const Routes = () => {
    return (
        <Fragment>
            <Switch>
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/" exact component={Login} />
                <Route parh="/signup" exact component={UserAdd} />
            </Switch>
        </Fragment>
    );
}

export default Routes;