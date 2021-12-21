import axios from "axios";
import {
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";

// Get All Products
export const getProduct = () => async (dispatch) => {
  try {
    // dispatch Action
    dispatch({
      type: ALL_PRODUCT_REQUEST,
    });

    // get data from backend
    const { data } = await axios.get("/api/v1/products");

    // after getting data
    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data, // getting data from backend
    });
  } catch (error) {
    // if error occurred then reducer Fail condition is mentioned
    dispatch({
      type: ALL_PRODUCT_FAIL,
      paylaod: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS, // will return state and errors will be null
  });
};

// Get Single Product Details
export const getProductDetails = (id) => async (dispatch) => {
  try {
    // dispatch action
    dispatch({
      type: PRODUCT_DETAILS_REQUEST,
    });
    // get data
    const { data } = await axios.get(`/api/v1/product/${id}`);

    // send received data - reducer will receive it
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
