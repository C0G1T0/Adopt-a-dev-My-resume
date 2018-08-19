import { ADD_BASKET, DELETE_BASKET } from "./types";

// Add to basket
export const addBasket = id => dispatch => {
  dispatch({
    type: ADD_BASKET,
    payload: id
  });
};

// Delete from basket
export const deleteBasket = id => dispatch => {
  dispatch({
    type: DELETE_BASKET,
    payload: id
  });
};
