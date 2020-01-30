import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: '',
            contact: '',
            role: ''
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = () => {
        console.log(this.state)
        let url = "http://localhost:2002/users/post"
        let data = {
            "name": this.state.username,
            "password": this.state.password,
            "email": this.state.email,
            "contact": this.state.email,
            "createdBy": "Admin",
            "role": this.state.role,
            "modifiedBy": "Admin"
        }
        let options = {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        this.postUser(url, options)

    }
    postUser = async (url, options) => {
        const response = await fetch(url, options).then(res => { return res.json() }).catch(err => console.log(err))
        console.log(response)
    }
    render() {
        return (
            <div className="form-wrapper">
                <div>
                    <h3>REGISTER HERE</h3>
                    <div className="form-item">
                        <input type="text" name="username" placeholder="Username" onChange={this.changeHandler} />
                    </div>
                    <div className="form-item">
                        <input type="password" name="password" placeholder="Password" onChange={this.changeHandler} />
                    </div>


                    <div className="form-item">
                        <input type="email" name="email" placeholder="Email" onChange={this.changeHandler} />
                    </div>

                    <div className="form-item">
                        <input type="text" name="contact" placeholder="Contact" onChange={this.changeHandler} />
                    </div>

                    <div className="form-item"><span>Role</span>
                        <select name="role" size='1' onChange={this.changeHandler} className="pull-right" >
                            <option value="Admin">Admin</option>
                            <option value="Advertiser" >Advertiser</option>
                            <option value="publisher" >Publisher</option>
                        </select>
                    </div>
                    <div className="button-panel">
                        <button className="button" onClick={this.submitHandler} >
                            Sign Up
                            </button>
                    </div>
                </div>
                <div className="reminder">
                    <p>already has account? <a href="/login">Login here</a></p>
                </div>
            </div>
        )
    }
}
