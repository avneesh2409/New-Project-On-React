import React, { Component } from 'react'

class DisplayUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        let url = "http://localhost:2002/users/get"
        let options = {
            method: 'GET'
        }
        this.getUsers(url, options)
    }
    getUsers = async (url, options) => {
        const response = await fetch(url, options).then(res => { return res.json() }).catch(err => { console.log(err) })
        console.log(response.data)
        if (response) {
            let data = response.data.map((el, i) => {
                return (
                    <tr key={i}>
                        <td>{el.name}</td>
                        <td>{el.password}</td>
                        <td>{el.email}</td>
                        <td>{el.contact}</td>
                        <td>{el.createdAt}</td>
                        <td>{el.updatedAt}</td>
                    </tr>

                )
            })

            if (data) {
                this.setState({
                    data
                })
            }

        }
    }
    render() {
        return (
            <div className='jumbotron'>
                <table className='table table-hovered'>
                    <tr>
                        <th>Username</th><th>password</th><th>email</th>
                        <th>contact</th><th>createdAt</th><th>updatedAt</th>
                    </tr>
                    {this.state.data}
                </table>
            </div>

        )
    }

}
export default DisplayUsers