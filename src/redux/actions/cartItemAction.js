import { ADD_TO_CART, CLEAR_CART, REOMVE_FROM_CART } from "./ActionsTypes"

export const addToCart = (payload) =>
{
    return {
        type: ADD_TO_CART,
        payload,
    };
}
export const removeFromCart = (payload) =>
{
    return {
        type: REOMVE_FROM_CART,
        payload,
    };
}

export const clearCart = () =>
{
    return {
        type: CLEAR_CART,
    };
}