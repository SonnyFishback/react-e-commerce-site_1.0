import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";


export const Header = ({ currentUser }) => {
    return(
        <header className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link to="/shop" className="options">
                    SHOP
                </Link>
                <Link to="/contact" className="options">
                    CONTACT
                </Link>
                    {
                        currentUser ?
                         <div className="option" onClick={() => auth.signOut()}>Sign Out</div> 
                         : 
                         <Link className="option" to="/signin">Sign In</Link>
                    }
            </div>
        </header>
    )
}

