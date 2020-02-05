import CartActionsTypes from './cart.types';


export const toggleCartHidden= () =>({
    type: CartActionsTypes.CART_HIDDEN,
    
})


export const addItem= item =>({
    type: CartActionsTypes.ADD_ITEM,
    payload: item
})

export const deleteItem= item =>({
    type: CartActionsTypes.DELETE_ITEM,
    payload: item
})

export const increaseQte = item =>({
    type:CartActionsTypes.INCREASE_QTE,
    payload: item
})

export const decreaseQte = item =>({
    type:CartActionsTypes.DECREASE_QTE,
    payload: item
})