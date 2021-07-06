import * as actionTypes from  '../constants/cartConstants'
import axios from 'axios'

export const addToCart = (id,qty) => async (dispatch,getState) =>{

    const  {data} = await axios(`http://localhost:5000/jerseys/items/${id}`)
    
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product_id :data._id,
            name: data.name,
            imageUrl: data.imageUrl,
            description: data.description,
            year: data.year,
            type:data.type,
            countInStock : 10,
            qty
        }
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartProducts))

}

export const removeFromCart = (id) => (dispatch, getState)=>{
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartProducts))

}