import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../Components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import StripeCheckoutButton from '../../Components/stripe-button/stripe-button.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header'>
                <span>Product</span>
            </div>
            <div className='header'>
                <span>Description</span>
            </div>
            <div className='header'>
                <span>Quantity</span>
            </div>
            <div className='header'>
                <span>Price</span>
            </div>
            <div className='header'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />    
        ))}
        
        <div className='total'>
            <span>TOTAL: ${total} </span>
        </div>
        <div className='test-warning'>
            *Please use the following Credit card number for payment* 
            <br />
            4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);