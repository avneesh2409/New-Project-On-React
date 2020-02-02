import React, {
    Component
} from 'react'
import '../login.module.css'
import {
    notify
} from '../helper/notify'
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
        let url = "http://localhost:2002/api/login"
        let options = {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                email: this.state.username,
                password: this.state.password
            })
        }
        fetch(url,options).then(token=>{
            console.log(token)
            notify("successfully submitted the form", 'warning')
        })
        .catch(err=>{console.log(err)})
        
        
    
    }
    render() {
        return (<
            div className="form-wrapper" >
            <
            div >
                <
            h3 > LOGIN HERE < /h3> <
            div className="form-item" >
                        <
                            input type="text"
                            name="username"
                            placeholder="Username"
                            onChange={
                                this.changeHandler
                            }
                        /> < /
            div > <
            div className="form-item" >
                            <
                                input type="password"
                                name="password"
                                placeholder="Password"
                                onChange={
                                    this.changeHandler
                                }
                            /> < /
            div > <
            div className="button-panel" >
                                <
            button className="button"
                                    onClick={
                                        this.onSubmitHandler
                                    } >
                                    Sign In <
            /button> < /
            div > <
            /div> <
            div className="reminder" >
                                        <
            p > Not a member ? < a href="/register" > Sign up now < /a></p >
                                            <
            p > < a href="/" > Forgot password ? < /a></p >
                                                <
            /div>
                                    
            <
            /div>
                                            )
                                        }
}