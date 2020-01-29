import React, { Component } from 'react'
import '../login.module.css'
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmitHandler = () => {
        console.log(this.state)
    }
    render() {
        return (
            <div className="form-wrapper">
                <div>
                    <h3>Login here</h3>
                    <div className="form-item">
                        <input type="text" name="username" placeholder="Username" onChange={this.changeHandler} />
                    </div>
                    <div className="form-item">
                        <input type="password" name="password" placeholder="Password" onChange={this.changeHandler} />
                    </div>
                    <div className="button-panel">
                        <input type="submit" className="button" title="Log In" name="login" value="Login" />
                    </div>
                </div>
                <div className="reminder">
                    <p>Not a member? <a href="/register">Sign up now</a></p>
                    <p><a href="/">Forgot password?</a></p>
                </div>

            </div>
        )
    }
}