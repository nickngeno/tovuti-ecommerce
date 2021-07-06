import * as actionTypes from '../constants/cartConstants'

export const cartReducer = (state = {cartProducts: []}, action) => {
   
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const item = action.payload
            const existingItem = state.cartProducts.find((x)=> x.product_id === item.product_id)
            if(existingItem){
                return{
                    ...state,
                    cartProducts: [...state.cartProducts.map(x => x.product_id === item.product_id ? item : x)]
                    
                }
            }else{
                return {
                    ...state,
                    cartProducts:[...state.cartProducts,item]
                }
            }

        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state,
                cartProducts: state.cartProducts.filter(x => x.product_id !== action.payload)
            }

        default:
            return state
    }
    
} 