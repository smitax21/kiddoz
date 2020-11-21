import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item : {imageUrl, price, name, quantity}}) => (
    <div className='cart-item'>
        <img src={ imageUrl } alt='item' />
        <div className='cart-details'>
            <span className='name'>{ name }</span><br/>
            <span className='price'>
                { quantity } x  ${ price }
            </span>
        </div>
    </div>
);

export default CartItem;