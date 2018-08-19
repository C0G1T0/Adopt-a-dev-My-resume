import axios from "axios";

import { GET_CATEGORIES } from "./types";

// Get Posts
export const getCategories = () => dispatch => {
  axios
    .get("/categories")
    .then(res =>
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CATEGORIES,
        payload: null
      })
    );
};
