import React from "react";
import  CustomButtom from "../custom-button/custom-button.component";
import "./cart-dropdown.syles.scss";


export const CartDropdown = () => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items"/>
            <CustomButtom>Go TO CHECKOUT</CustomButtom>
        </div>
    )
}