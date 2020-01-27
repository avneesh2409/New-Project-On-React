import React, { Component } from 'react'
import style from '../login.module.css'

export default class Login extends Component {
    render() {
        return (
            <div className="form-wrapper">
                <form action="" method="post">
                    <h3>Login here</h3>
                    <div className="form-item">
                        <input type="text" name="username" placeholder="Username" autofocus required></input>
                    </div>
                    <div className="form-item">
                        <input type="password" name="password" placeholder="Password" required></input>
                    </div>
                    <div className="button-panel">
                        <input type="submit" className="button" title="Log In" name="login" value="Login"></input>
                    </div>
                </form>
                <div className="reminder">
                    <p>Not a member? <a href="/register">Sign up now</a></p>
                    <p><a href="/">Forgot password?</a></p>
                </div>

            </div>
        )
    }
}