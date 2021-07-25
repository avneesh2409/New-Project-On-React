import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Register from '../components/register'
import Login from '../components/login'
import Home from '../components/home'
import DisplayUsers from '../components/displayUsers'
import DisplayTodos from '../components/DisplayTodos'

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <ul class="nav navbar-nav">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/register'>Register</Link></li>
                            <li><Link to='/showusers'>displayUsers</Link></li>
                            <li><Link to='/showtodos'>displayTodos</Link></li>
                            
                        </ul>
                    </div>
                </nav>
            </div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/showusers" component={DisplayUsers} />
                <Route exact path="/showtodos" component={DisplayTodos} />
            </Switch>
        </BrowserRouter>
    );
}
export default Router