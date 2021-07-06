import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

// reducers
import { cartReducer } from './reducers/cartReducers';
import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducers';

const reducer = combineReducers({
    cart:cartReducer,
    allProducts:getProductsReducer,
    product:getProductDetailsReducer
})
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store 