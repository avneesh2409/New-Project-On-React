import React from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import Register from '../components/register'
import Login from '../components/login'
import Home from '../components/home'
import DisplayUsers from '../components/displayUsers'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/showusers" component={DisplayUsers} />
            </Switch>
        </BrowserRouter>
    );
}
export default Router