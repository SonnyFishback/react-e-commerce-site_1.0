import React, { Component } from 'react';

import "./sign-in.styles.scss";

class SignIn extends Component {
    constructor(props){
        super();

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = (event) => {
        event.target.preventDefault();
        this.setState({email: "", password: ""})
    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({[name]: value});;
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="email" name="email" value={this.state.email} required/>
                    <label htmlFor="email">Email</label>
                    <input onChange={this.handleChange} type="password" name="password" value={this.state.email} required/>
                    <label htmlFor="email">Password</label>

                    <input type="submit" value="submit form"/>
                </form>
            </div>
        )
    }
}

export default SignIn;
