
//ADDING ITEM TO CART
export const addItemToCart = (cartItems, cartItemToAdd)=>{
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    if(existingCartItem){
        return cartItems.map(cartItem=>
            cartItem.id===cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity+1}:cartItem
            )
    }

    return [...cartItems, {...cartItemToAdd, quantity:1}];
}

//INCREASE QUANTITY AT CHECKOUT
export const increaseQuantity = (cartItems, cartItemToIncrease)=>{
    return cartItems.map(cartItem=>
        cartItem.id===cartItemToIncrease.id ? {...cartItem, quantity: cartItem.quantity+1}:cartItem
        ) 
}

//DECREASE QUANTITY AT CHECKOUT
export const decreaseQuantity = (cartItems, cartItemToDecrease)=>{
    return cartItems.map(cartItem=>
        cartItem.id===cartItemToDecrease.id ? {...cartItem, quantity: cartItem.quantity-1}:cartItem
        ) 
}

export const deleteItemFromCart= (cartItems, cartItemToDelete)=>{
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToDelete.id
    );

    if(existingCartItem){
        return cartItems.filter(cartItem => cartItem.id !==cartItemToDelete.id)
    }

    return [...cartItems]
}