import React, { Component } from 'react'

class Login extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            error: ''
        }
    }

    render() {
        return(
            <div className = "Login">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
        )
    }
}

export default Login