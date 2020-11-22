import { createSelector } from 'reselect';

const SelectCart = state => state.cart;

export const selectCartItems = createSelector(
    [SelectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [SelectCart],
    (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity , 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price 
        , 0)
);