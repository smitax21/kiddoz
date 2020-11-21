import { createSelector } from 'reselect';

const SelectCart = state => state.cart;

export const selectCartItems = createSelector(
    [SelectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity , 0)
);