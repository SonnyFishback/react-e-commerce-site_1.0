import React, { Component } from 'react';

import "./sign-in.styles.scss";
import {FormInput} from "../form-input/form-input.component";
import CustomButtom from "../custom-button/custom-button.component";

import {signInWithGoogle} from "../../firebase/firebase.utils";
import {auth} from "../../firebase/firebase.utils"


class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async (event) => {
        event.target.preventDefault();

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({email: "", password: ""})
        }catch(error){
            console.log(error)
        }
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
                    
                    <FormInput handleChange={this.handleChange} type="email" name="email" value={this.state.email} label="email" required/>

                    <FormInput handleChange={this.handleChange} type="password" name="password" value={this.state.password} label="password" required/>

                  <div className="buttons">
                  <CustomButtom type="submit">SIGN IN</CustomButtom>
                    <CustomButtom onClick={signInWithGoogle} type="button" isGoogleSignIn>
                        SIGN IN WITH GOOGLE
                    </CustomButtom>
                  </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
