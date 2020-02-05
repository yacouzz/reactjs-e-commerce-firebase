import CartActionsTypes from './cart.types'
import {addItemToCart, increaseQuantity, decreaseQuantity, deleteItemFromCart} from './cart.utils';

const INITIAL_STATE={
    hidden: true,
    cartItems: []
}

const cartReducer=(state= INITIAL_STATE, action)=>{
    switch(action.type){
        case CartActionsTypes.CART_HIDDEN:
            return{
            ...state,
            hidden:!state.hidden
        };
        case CartActionsTypes.ADD_ITEM:
                return{
                ...state,
                cartItems:addItemToCart(state.cartItems, action.payload)
            }
        case CartActionsTypes.DELETE_ITEM:
            return{
             ...state,
             cartItems:deleteItemFromCart(state.cartItems,action.payload)
            }
        
        case CartActionsTypes.INCREASE_QTE:
            return{
                ...state,
                cartItems:increaseQuantity(state.cartItems, action.payload)
            }
        case CartActionsTypes.DECREASE_QTE:
            return{
                ...state,
                cartItems: decreaseQuantity(state.cartItems, action.payload)
            }
        default : return state;
    }
}

export default cartReducer;