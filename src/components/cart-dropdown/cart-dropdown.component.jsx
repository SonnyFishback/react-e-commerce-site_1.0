import React from "react";
import  CustomButtom from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.syles.scss";
import {connect} from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({cartItems}) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?

                    cartItems.map(cartItem => {
                        return <CartItem key={cartItem.id} item={cartItem}/>
                    })
                    :
                    <span className="empty-message">Your cart is empty.</span>
                }
            </div>
            <CustomButtom>Go TO CHECKOUT</CustomButtom>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);