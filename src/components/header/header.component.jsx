import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";


const Header = () => {
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
            </div>
        </header>
    )
}

export default Header;