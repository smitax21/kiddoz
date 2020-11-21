import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItems = item => ({
    type: CartActionTypes.ADD_ITEMS,
    payload: item
})