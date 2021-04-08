import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import './cart-dropdown.styles.scss'
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({cartItems, history, dispatch}) => (
    cartItems.length ?
        (<div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                }
            </div>
            <CustomButton onClick={
                () => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }
            }>CHECKOUT</CustomButton>
        </div>)
        :
        (<div className='cart-dropdown'>
            <div className='empty-message'>
                Nothing in the basket
            </div>
        </div>)
)

const mapStateToProps = createStructuredSelector({cartItems: selectCartItems})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});


export default withRouter(connect(mapStateToProps)(CartDropdown));
