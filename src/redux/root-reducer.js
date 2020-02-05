import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import sectionReducer from './section/section.reducer';

const persistConfig={
    key:'root',
    storage,
    whitelist:['cart']
}

//anciennement export default combineReducers
const rootReducer= combineReducers({
    user: userReducer,
    cart: cartReducer,
    section: sectionReducer
})

export default persistReducer(persistConfig, rootReducer);