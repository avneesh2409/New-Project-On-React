import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:'',
            email:'',
            contact:'',
            role:''
        }
    }
    changeHandler = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler = () =>{
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
			        
            
                    <div className="form-item">
                        <input type="email" name="email" placeholder="Email" onChange={this.changeHandler} />
                    </div>
            
                    <div className="form-item">
                        <input type="text" name="contact" placeholder="Contact" onChange={this.changeHandler} />
                    </div>
            
                    <div className="form-item">
                        <select name="role" onChange={this.changeHandler} >
                            <options value="Admin" >Admin</option>
                            <option value="Advertiser" >Advertiser</option>
                            <option value="Publisher" >Publisher</option>
                        </select>
                    </div>
                    <div className="button-panel">
                        <input type="submit" className="button" title="Sign Up" onClick={this.submitHandler} />
                    </div>
                </div>
                <div className="reminder">
                    <p>already has account? <a href="/login">Login here</a></p>
                </div>
            </div>
        )
    }
}
