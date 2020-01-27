import React from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import Register from '../components/register'
import Login from '../components/login'
import Home from '../components/home'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    );
}
export default Router