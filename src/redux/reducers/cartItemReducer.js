import { ADD_TO_CART, CLEAR_CART, REOMVE_FROM_CART } from "../actions/ActionsTypes";

const initialState = {
    cartItems: []
};
const cartItemReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems,action.payload],
            };
        case REOMVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem !== action.payload),
            };
        case CLEAR_CART:
            return {
                ...state,
                cartItems: [],
            }
        default:
            return state;
    }
};

export default cartItemReducer;