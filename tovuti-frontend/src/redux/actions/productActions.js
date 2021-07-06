import * as actionTypes from "../constants/productConstant";
import axios from "axios";

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_ALL_PRODUCTS_REQUEST,
    });
    const { data } = await axios.get("http://localhost:5000/jerseys/list");
    dispatch({
      type: actionTypes.GET_ALL_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
      dispatch({
          type:actionTypes.GET_ALL_PRODUCTS_FAIL,
          payload:error.response && error.response.data.message ? error.response.data.message :error
      })
  }
};

export const getProductDetails = (id) => async(dispatch) =>{
    try {
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_REQUEST,
            
        })
        const {data} = await axios.get(`http://localhost:5000/jerseys/items/${id}`)
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:actionTypes.GET_PRODUCT_DETAILS_FAIL,
            payload:error
        })
    }
}

